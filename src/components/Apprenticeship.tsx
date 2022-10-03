import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import { auth, db, storage } from "../assets/firebase";
import { useStore } from "../assets/store/Store";
import {
  ArrowLeftIcon,
  CheckIcon,
  CircleIcon,
  AddSquareIcon,
} from "../assets/Svgs";
import { ApprType } from "../assets/Types";
import EditorSection from "./EditorSection";
import { Loading, LoadingBlur } from "./Loading";
import shallow from "zustand/shallow";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 } from "uuid";

const Apprenticeship = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const params = useParams();

  const { logo, videos, ...rest } = useStore((state) => state.apprenticeship);

  const { loadingEditApp, populateAppr } = useStore(
    (state) => ({
      loadingEditApp: state.loadingAppr,
      populateAppr: state.populateAppr,
    }),
    shallow
  );

  // console.log(rest);

  useEffect(() => {
    if (params.id && params.id !== "new") populateAppr(params.id);
  }, []);

  const resetStore = useStore((state) => state.resetAppr);

  const toast = useToast();

  const [loading, setLoading] = useState(false);

  const handleSaveAppr = async () => {
    setLoading(true);
    const id = v4();
    if (params.id === "new") {
      const uploadVideos = () => {
        const res = new Promise(
          async (
            resolve: (
              urls: { name: string; url: string; refId: string }[]
            ) => void,
            reject
          ) => {
            let urls: { name: string; url: string; refId: string }[] = [];
            for await (const video of videos) {
              await uploadBytes(
                ref(storage, `apprenticeship-videos/${id}${video.name}`),
                video
              )
                .then(async (result) => {
                  await getDownloadURL(result.ref)
                    .then((url) => {
                      urls.push({
                        url: url,
                        name: video.name,
                        refId: `${id}${video.name}`,
                      });
                    })
                    .catch((err) => reject(err));
                })
                .catch((error) => reject(error));
            }
            resolve(urls);
          }
        );
        return res;
      };

      await uploadVideos()
        .then(async (urls) => {
          if (logo) {
            uploadBytes(
              ref(storage, `apprenticeship-logos/${id}${logo.name}`),
              logo
            )
              .then((uploadTask) => {
                getDownloadURL(uploadTask.ref)
                  .then(async (url) => {
                    await addDoc(collection(db, "apprenticeships"), {
                      ...rest,
                      videosUrls: urls,
                      timeStamp: serverTimestamp(),
                      creatorId: user?.uid,
                      logoUrl: {
                        refId: `${id}${logo.name}`,
                        url,
                      },
                    })
                      .then(() => {
                        setLoading(false);
                        navigate("/apprenticeships");
                      })
                      .catch((err) => {
                        console.log(err);
                        setLoading(false);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                    setLoading(false);
                  });
              })
              .catch((err) => {
                console.log(err);
                setLoading(false);
              });
          } else
            await addDoc(collection(db, "apprenticeships"), {
              ...rest,
              videosUrls: urls,
              timeStamp: serverTimestamp(),
              creatorId: user?.uid,
            })
              .then(() => {
                setLoading(false);
                navigate("/apprenticeships");
              })
              .catch((err) => {
                console.log(err);
                setLoading(false);
              });
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
    // if not new i.e updating
    else {
      await updateDoc(doc(db, "apprenticeships", `${params.id}`), {
        ...rest,
      })
        .then(() => {
          setLoading(false);
          navigate("/apprenticeships");
          resetStore();
        })
        .catch(() => {
          setLoading(false);
          toast({
            position: "bottom",
            duration: 2000,
            render: () => (
              <Box
                borderRadius={20}
                bgColor='lavender'
                p='1'
                border='1px solid #793EF5'>
                <Text textAlign='center' color='#793EF5' fontWeight={600}>
                  Something went wrong
                </Text>
              </Box>
            ),
          });
        });
      if (logo) {
        await uploadBytes(ref(storage, `${id}${logo.name}`), logo)
          .then((uploadResult) => {
            getDownloadURL(uploadResult.ref)
              .then(async (url) => {
                await updateDoc(doc(db, "apprenticeships", `${params.id}`), {
                  logoUrl: { refId: `${id}${logo.name}`, url },
                });
              })
              .catch(() => setLoading(false));
          })
          .catch(() => setLoading(false));
      }
    }
  };

  return (
    <>
      {(loading || loadingEditApp) && <LoadingBlur />}
      <Box
        pos='fixed'
        bgColor='#F1F4F8'
        zIndex={100}
        right={0}
        left={0}
        p={2}
        top={0}>
        <Flex
          bgColor='white'
          rounded='3xl'
          justify='space-between'
          p={4}
          align='center'>
          <Link to='/apprenticeships'>
            <Button
              onClick={() => params.id !== "new" && resetStore()}
              leftIcon={
                <ArrowLeftIcon boxSize={5} fontSize='18px' color='#793EF5' />
              }>
              Back
            </Button>
          </Link>
          <Heading>
            {params.id === "new"
              ? "Creating Apprenticeship"
              : "Editing Apprenticeship"}
          </Heading>
          <Button
            leftIcon={<AddSquareIcon />}
            variant='solid'
            bgColor='#793EF5'
            color='white'
            onClick={handleSaveAppr}
            // isDisabled={
            //   !(
            //     rest.apprenticeshipDescription.length > 0 &&
            //     rest.companyDescription.length > 0 &&
            //     rest.apprenticeshipTitle.length > 0 &&
            //     rest.teamAdmins.length > 0 &&
            //     rest.teamRoles.length &&
            //     rest.timeline.startDate
            //   )
            // }
          >
            {params.id === "new"
              ? "Publish Apprenticeship"
              : "Re - Publish Apprenticeship"}
          </Button>
        </Flex>

        <Flex
          justify='space-between'
          mt={4}
          p={3.5}
          border='1px solid gainsboro'
          rounded='2xl'>
          <HStack spacing={1}>
            <CheckIcon color='#793EF5' />
            <Text color='#793EF5'>Company Title and Desc.</Text>
          </HStack>

          <HStack spacing={1}>
            <CircleIcon
              color={rest.teamTypes.length > 0 ? "#793EF5" : "gray"}
            />
            <Text color={rest.teamTypes.length > 0 ? "#793EF5" : "gray"}>
              Team Type
            </Text>
          </HStack>

          <HStack spacing={1}>
            <CircleIcon
              color={rest.teamRoles.length > 0 ? "#793EF5" : "gray"}
            />
            <Text color={rest.teamRoles.length > 0 ? "#793EF5" : "gray"}>
              Team Roles
            </Text>
          </HStack>

          <HStack spacing={1}>
            <CircleIcon
              color={rest.teamAdmins.length > 0 ? "#793EF5" : "gray"}
            />
            <Text color={rest.teamAdmins.length > 0 ? "#793EF5" : "gray"}>
              Team Admin
            </Text>
          </HStack>

          <HStack spacing={1}>
            <CircleIcon color={rest.timeline.startDate ? "#793EF5" : "gray"} />
            <Text color={rest.timeline.startDate ? "#793EF5" : "gray"}>
              Timeline
            </Text>
          </HStack>
        </Flex>
      </Box>

      <EditorSection />
    </>
  );
};

export default Apprenticeship;
