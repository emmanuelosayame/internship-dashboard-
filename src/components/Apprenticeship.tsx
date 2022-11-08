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
import { auth, db, storage } from "../../firebase";
import { useStore } from "../components/store/Store";
import {
  ArrowLeftIcon,
  CheckIcon,
  CircleIcon,
  AddSquareIcon,
  ArrowLeft,
} from "../components/Svgs";
import { ApprType } from "../components/Types";
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
import { FirebaseError } from "firebase/app";
import useToastR from "./ToastR";

const Apprenticeship = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const params = useParams();

  const {
    logo,
    videos,
    videosUrls: prevVideoUrls,
    logoUrl: prevLogoUrl,
    ...rest
  } = useStore((state) => state.apprenticeship);

  const { loadingEditApp, populateAppr } = useStore(
    (state) => ({
      loadingEditApp: state.loadingAppr,
      populateAppr: state.populateAppr,
    }),
    shallow
  );

  console.log(rest);

  useEffect(() => {
    let sub = false;
    if (params.id && params.id !== "new") {
      sub = true;
      populateAppr(params.id);
    }
    return () => {
      sub = false;
    };
  }, []);

  const resetStore = useStore((state) => state.resetAppr);

  const toast = useToastR({ title: "oops !!", body: "looks like you offline" });

  const [loading, setLoading] = useState(false);

  const handleSaveAppr = async () => {
    //when the process of creating the apprenticeship in the storage or database starts, set the status to loading. On error or success,  the loading state would become false
    setLoading(true);
    //create unique id for logos and videos incase you have multiple files with the same ////name, they dont get overwritten
    const id = v4();
    //uploadVideos is function that returns a promise. In this function it uploads the videos in parallel and resolves the promises
    const uploadVideos = videos
      ? Promise.all(
          videos.map(async (video) => {
            const uploadTask = await uploadBytes(
              ref(storage, `apprenticeship-videos/${id}${video.name}`),
              video
            );
            return {
              name: video.name,
              url: await getDownloadURL(uploadTask.ref),
            };
          })
        )
      : [];
    //upload logo is a function that returns a promise. In this function, it uploads the logo if there be any. its also creates unique names for the logos by adding a unique id created during the save apprenticeship execution with the file name.
    const uploadLogo = async () => {
      if (logo) {
        const uploadTask = await uploadBytes(
          ref(storage, `apprenticeship-logos/${id}${logo.name}`),
          logo
        );
        return getDownloadURL(uploadTask.ref);
      } else return null;
    };
    if (params.id === "new") {
      if (logo) {
        try {
          const videosUrls = await uploadVideos;
          const logoUrl = await uploadLogo();
          await addDoc(collection(db, "apprenticeships"), {
            ...rest,
            videosUrls,
            timestamp: serverTimestamp(),
            creatorId: user?.uid,
            logoUrl,
          });
          setLoading(false);
          navigate("/apprenticeships");
          resetStore();
        } catch (err) {
          setLoading(false);
          console.log(err);
          toast();
        }
      }
      //if no logo in the new apprenticeship data
      else {
        try {
          const videosUrls = await uploadVideos;
          await addDoc(collection(db, "apprenticeships"), {
            ...rest,
            videosUrls,
            timestamp: serverTimestamp(),
            creatorId: user?.uid,
          });
          setLoading(false);
          navigate("/apprenticeships");
          resetStore();
        } catch (err) {
          setLoading(false);
          console.log(err);
          toast();
        }
      }
    }
    //if its not a new apprenticeship.i.e editing apprenticeship
    else
      try {
        const videosUrls =
          videos && videos.length > 0 ? await uploadVideos : [];
        const logoUrl = logo ? await uploadLogo() : null;
        await updateDoc(doc(db, "apprenticeships", `${params.id}`), {
          ...rest,
          logoUrl: logo ? logoUrl : prevLogoUrl || "",
          videosUrls: prevVideoUrls
            ? [...prevVideoUrls, ...videosUrls]
            : videosUrls,
          timestamp: serverTimestamp(),
        });
        setLoading(false);
        navigate("/apprenticeships");
        resetStore();
      } catch (err) {
        setLoading(false);
        console.log(err);
        toast();
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
        <Stack bgColor='white' rounded='3xl' p={[3, 3, 4]} w='full'>
          <Flex justify='space-between' align='center'>
            <Link to='/apprenticeships'>
              <Button
                onClick={() => params.id !== "new" && resetStore()}
                // Emmanuel changed this icon
                leftIcon={<ArrowLeft boxSize={7} />}
                iconSpacing='1'
                pl='1'>
                Back
                {/* <Text opacity={[0, 0, 1]}>Back</Text> */}
              </Button>
            </Link>
            <Heading textAlign='center' fontSize={["14px", "14px", "unset"]}>
              {params.id === "new"
                ? "Creating Apprenticeship"
                : "Editing Apprenticeship"}
            </Heading>
            <Button
              display={["flex", "flex", "none"]}
              leftIcon={<AddSquareIcon />}
              variant='solid'
              bgColor='#793EF5'
              px='4'
              color='white'
              onClick={handleSaveAppr}
              isDisabled={
                !(
                  rest.apprenticeshipDescription.length > 0 &&
                  rest.companyDescription.length > 0 &&
                  rest.apprenticeshipTitle.length > 0 &&
                  rest.teamAdmins.length > 0 &&
                  rest.teamRoles.length > 0 &&
                  rest.timeline.startDate &&
                  rest.teamTypes.length > 0
                )
              }>
              {params.id === "new" ? "Publish" : "Save"}
            </Button>
            <Button
              display={["none", "none", "flex"]}
              leftIcon={<AddSquareIcon />}
              variant='solid'
              bgColor='#793EF5'
              px='4'
              color='white'
              onClick={handleSaveAppr}
              isDisabled={
                !(
                  rest.apprenticeshipDescription.length > 0 &&
                  rest.companyDescription.length > 0 &&
                  rest.apprenticeshipTitle.length > 0 &&
                  rest.teamAdmins.length > 0 &&
                  rest.teamRoles.length > 0 &&
                  rest.timeline.startDate &&
                  rest.teamTypes.length > 0
                )
              }>
              {params.id === "new"
                ? "Publish Apprenticeship"
                : "Re - Publish Apprenticeship"}
            </Button>
          </Flex>
        </Stack>

        <Flex
          display={["none", "none", "flex"]}
          // flexWrap='wrap'
          justify='space-between'
          mt={[2, 2, 4]}
          p={3.5}
          border='1px solid gainsboro'
          rounded='2xl'>
          <HStack spacing={1}>
            <CheckIcon color='#793EF5' />
            <Text color='#793EF5'>Company Title and Desc.</Text>
          </HStack>

          <HStack spacing={1}>
            {rest.teamTypes.length > 0 ? (
              <CheckIcon color='#793EF5' />
            ) : (
              <CircleIcon color='gray' />
            )}
            <Text color={rest.teamTypes.length > 0 ? "#793EF5" : "gray"}>
              Team Type
            </Text>
          </HStack>

          <HStack spacing={1}>
            {rest.teamRoles.length > 0 ? (
              <CheckIcon color='#793EF5' />
            ) : (
              <CircleIcon color='gray' />
            )}
            <Text color={rest.teamRoles.length > 0 ? "#793EF5" : "gray"}>
              Team Roles
            </Text>
          </HStack>

          <HStack spacing={1}>
            {rest.teamAdmins.length > 0 ? (
              <CheckIcon color='#793EF5' />
            ) : (
              <CircleIcon color='gray' />
            )}
            <Text color={rest.teamAdmins.length > 0 ? "#793EF5" : "gray"}>
              Team Admin
            </Text>
          </HStack>

          <HStack spacing={1}>
            {rest.timeline.startDate ? (
              <CheckIcon color='#793EF5' />
            ) : (
              <CircleIcon color='gray' />
            )}
            <Text color={rest.timeline.startDate ? "#793EF5" : "gray"}>
              Timeline
            </Text>
          </HStack>
        </Flex>
      </Box>

      <EditorSection />

      <Box
        pos='fixed'
        bottom='0'
        left='0'
        right='0'
        display={["unset", "unset", "none"]}
        zIndex={1000}>
        <Flex
          w='full'
          bgColor='whiteAlpha.500'
          backdropFilter='auto'
          backdropBlur='md'
          flexWrap='wrap'
          justify='space-between'
          px={3}
          py='2'
          borderTop='1px solid gainsboro'>
          <HStack spacing={1} py='0.5'>
            <CheckIcon color='#793EF5' />
            <Text color='#793EF5'>Company Title and Desc.</Text>
          </HStack>

          <HStack spacing={1} py='0.5'>
            {rest.teamTypes.length > 0 ? (
              <CheckIcon color='#793EF5' />
            ) : (
              <CircleIcon color='gray' />
            )}
            <Text color={rest.teamTypes.length > 0 ? "#793EF5" : "gray"}>
              Team Type
            </Text>
          </HStack>

          <HStack spacing={1} py='0.5'>
            {rest.teamRoles.length > 0 ? (
              <CheckIcon color='#793EF5' />
            ) : (
              <CircleIcon color='gray' />
            )}
            <Text color={rest.teamRoles.length > 0 ? "#793EF5" : "gray"}>
              Team Roles
            </Text>
          </HStack>

          <HStack spacing={1} py='0.5'>
            {rest.teamAdmins.length > 0 ? (
              <CheckIcon color='#793EF5' />
            ) : (
              <CircleIcon color='gray' />
            )}
            <Text color={rest.teamAdmins.length > 0 ? "#793EF5" : "gray"}>
              Team Admin
            </Text>
          </HStack>

          <HStack spacing={1} py='0.5'>
            {rest.timeline.startDate ? (
              <CheckIcon color='#793EF5' />
            ) : (
              <CircleIcon color='gray' />
            )}
            <Text color={rest.timeline.startDate ? "#793EF5" : "gray"}>
              Timeline
            </Text>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Apprenticeship;
