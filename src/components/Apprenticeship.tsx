import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth, db } from "../assets/firebase";
import {
  ArrowLeftIcon,
  CheckIcon,
  CircleIcon,
  PlusSquareIcon,
} from "../assets/Svgs";
import { ApprDataTypes } from "../assets/Types";
import EditorSection from "./EditorSection";

const Apprenticeship = () => {
  const [user] = useAuthState(auth);

  const tProg = 1;

  const [values, setValues] = useState<ApprDataTypes>({
    apprenticeshipTitle: "",
    companyDescription: "",
    apprenticeshipDescription: "",
    photo: null,
  });
  // console.log(values);

  const handleCreateNewAppr = async () => {
    const { photo, ...rest } = values;
    await addDoc(collection(db, "apprenticeships"), {
      ...rest,
      timeStamp: serverTimestamp(),
      creatorId: user?.uid,
    });
  };

  return (
    <>
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
            <Button leftIcon={<ArrowLeftIcon boxSize={5} color='#5D3FD3' />}>
              Back
            </Button>
          </Link>
          <Heading>Creating Apprenticeship</Heading>
          <Button
            leftIcon={<PlusSquareIcon />}
            variant='solid'
            bgColor='#5D3FD3'
            color='white'
            onClick={handleCreateNewAppr}
            // isDisabled={!!(tProg < 5)}
          >
            Publish Apprenticeship
          </Button>
        </Flex>

        <Flex
          justify='space-between'
          mt={4}
          p={3.5}
          border='1px solid gainsboro'
          rounded='2xl'>
          <HStack spacing={1}>
            <CheckIcon color='#5D3FD3' />
            <Text color='#5D3FD3'>Company Title and Desc.</Text>
          </HStack>

          <HStack spacing={1}>
            <CircleIcon color={tProg > 1 ? "#5D3FD3" : "gray"} />
            <Text color={tProg > 1 ? "#5D3FD3" : "gray"}>Team Type</Text>
          </HStack>

          <HStack spacing={1}>
            <CircleIcon color={tProg > 2 ? "#5D3FD3" : "gray"} />
            <Text color={tProg > 2 ? "#5D3FD3" : "gray"}>Team Roles</Text>
          </HStack>

          <HStack spacing={1}>
            <CircleIcon color={tProg > 3 ? "#5D3FD3" : "gray"} />
            <Text color={tProg > 3 ? "#5D3FD3" : "gray"}>Team Admin</Text>
          </HStack>

          <HStack spacing={1}>
            <CircleIcon color={tProg > 4 ? "#5D3FD3" : "gray"} />
            <Text color={tProg > 4 ? "#5D3FD3" : "gray"}>Timeline</Text>
          </HStack>
        </Flex>
      </Box>

      <EditorSection values={values} setValues={setValues} />
    </>
  );
};

export default Apprenticeship;
