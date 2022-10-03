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
import { auth, db } from "../assets/firebase";
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

const Apprenticeship = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const params = useParams();

  const appr = useStore((state) => state.apprenticeship);
  const { loadingEditApp, populateAppr } = useStore(
    (state) => ({
      loadingEditApp: state.loadingAppr,
      populateAppr: state.populateAppr,
    }),
    shallow
  );

  // console.log(params?.id);

  useEffect(() => {
    if (params.id && params.id !== "new") populateAppr(params.id);
  }, []);

  const resetStore = useStore((state) => state.resetAppr);

  const toast = useToast();

  const [loading, setLoading] = useState(false);

  const handleSaveAppr = async () => {
    setLoading(true);
    if (params.id === "new") {
      await addDoc(collection(db, "apprenticeships"), {
        ...appr,
        timeStamp: serverTimestamp(),
        creatorId: user?.uid,
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
    } else {
      await updateDoc(doc(db, "apprenticeships", `${params.id}`), {
        ...appr,
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
    }
  };

  // if (loading) return <Loading />;

  return (
    <>
      {(loading || loadingEditApp) && <LoadingBlur />}
      <Box
        pos='fixed'
        bgColor='gray.100'
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
          <Heading>Creating Apprenticeship</Heading>
          <Button
            leftIcon={<AddSquareIcon />}
            variant='solid'
            bgColor='#793EF5'
            color='white'
            onClick={handleSaveAppr}
            isDisabled={
              !(
                appr.apprenticeshipDescription.length > 0 &&
                appr.companyDescription.length > 0 &&
                appr.apprenticeshipTitle.length > 0 &&
                appr.teamAdmins.length > 0 &&
                appr.teamRoles.length &&
                appr.timeline.startDate
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
              color={appr.teamTypes.length > 0 ? "#793EF5" : "gray"}
            />
            <Text color={appr.teamTypes.length > 0 ? "#793EF5" : "gray"}>
              Team Type
            </Text>
          </HStack>

          <HStack spacing={1}>
            <CircleIcon
              color={appr.teamRoles.length > 0 ? "#793EF5" : "gray"}
            />
            <Text color={appr.teamRoles.length > 0 ? "#793EF5" : "gray"}>
              Team Roles
            </Text>
          </HStack>

          <HStack spacing={1}>
            <CircleIcon
              color={appr.teamAdmins.length > 0 ? "#793EF5" : "gray"}
            />
            <Text color={appr.teamAdmins.length > 0 ? "#793EF5" : "gray"}>
              Team Admin
            </Text>
          </HStack>

          <HStack spacing={1}>
            <CircleIcon color={appr.timeline.startDate ? "#793EF5" : "gray"} />
            <Text color={appr.timeline.startDate ? "#793EF5" : "gray"}>
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
