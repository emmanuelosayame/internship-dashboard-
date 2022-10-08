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

  // console.log(rest);

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
    setLoading(true);
    const id = v4();
    const uploadVideos = Promise.all(
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
    );
    const uploadLogo = async () => {
      if (logo) {
        const uploadTask = await uploadBytes(
          ref(storage, `apprenticeship-logos/${id}${logo.name}`),
          logo
        );
        return getDownloadURL(uploadTask.ref);
      }
    };
    if (params.id === "new") {
      try {
        const videosUrls = await uploadVideos;
        const logoUrl = await uploadLogo();
        await addDoc(collection(db, "apprenticeships"), {
          ...rest,
          videosUrls,
          timeStamp: serverTimestamp(),
          creatorId: user?.uid,
          logoUrl,
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
        toast();
      }
    } else
      try {
        const videosUrls = await uploadVideos;
        const logoUrl = await uploadLogo();
        await updateDoc(doc(db, "apprenticeships", `${params.id}`), {
          ...rest,
          logoUrl: logo ? logoUrl : prevLogoUrl || "",
          videosUrls: prevVideoUrls
            ? [...prevVideoUrls, ...videosUrls]
            : videosUrls,
        });
        setLoading(false);
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
            isDisabled={
              !(
                rest.apprenticeshipDescription.length > 0 &&
                rest.companyDescription.length > 0 &&
                rest.apprenticeshipTitle.length > 0 &&
                rest.teamAdmins.length > 0 &&
                rest.teamRoles.length &&
                rest.timeline.startDate
              )
            }>
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
