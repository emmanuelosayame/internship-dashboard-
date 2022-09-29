import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  CheckIcon,
  CircleIcon,
  PlusSquareIcon,
} from "../assets/Svgs";
import EditorSection from "./EditorSection";

const Apprentiship = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <Box pos='fixed' bgColor='whitesmoke' zIndex={100} right={0} left={0} p={2} top={0} >
        <Flex
          bgColor='white'
          rounded='3xl'
          justify='space-between'
          p={3}
          align='center'>
          <Link to='/apprentiships'>
            <Button leftIcon={<ArrowLeftIcon boxSize={5} color='#5D3FD3' />}>
              Back
            </Button>
          </Link>
          <Heading>Creating Apprentiship</Heading>
          <Button
            leftIcon={<PlusSquareIcon />}
            variant='solid'
            isDisabled={!!(page < 5)}>
            Publish Apprentiship
          </Button>
        </Flex>

        <Flex
          justify='space-between'
          mt={4}
          p={2.5}
          border='1px solid gainsboro'
          rounded='2xl'>
          <HStack spacing={1}>
            <CheckIcon color='#5D3FD3' />
            <Text color='#5D3FD3'>Company Title and Desc.</Text>
          </HStack>

          <HStack spacing={1}>
            <CircleIcon color={page > 1 ? "#5D3FD3" : "gray"} />
            <Text color={page > 1 ? "#5D3FD3" : "gray"}>Team Type</Text>
          </HStack>

          <HStack spacing={1}>
            <CircleIcon color={page > 2 ? "#5D3FD3" : "gray"} />
            <Text color={page > 2 ? "#5D3FD3" : "gray"}>Team Roles</Text>
          </HStack>

          <HStack spacing={1}>
            <CircleIcon color={page > 3 ? "#5D3FD3" : "gray"} />
            <Text color={page > 3 ? "#5D3FD3" : "gray"}>Team Admin</Text>
          </HStack>

          <HStack spacing={1}>
            <CircleIcon color={page > 4 ? "#5D3FD3" : "gray"} />
            <Text color={page > 4 ? "#5D3FD3" : "gray"}>Timeline</Text>
          </HStack>
        </Flex>
      </Box>

      <EditorSection />
    </>
  );
};

export default Apprentiship;
