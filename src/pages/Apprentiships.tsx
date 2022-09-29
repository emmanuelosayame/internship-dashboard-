import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  EditIcon,
  PlusSquareIcon,
  Square2StackIcon,
  TrashIcon,
} from "../assets/Svgs";

const Apprentiships = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box py={5} px={[5, 5, 10]} w='full'>
        <Flex justify='space-between'>
          <Heading size='lg' textAlign={["center", "start"]}>
            Apprentiship
          </Heading>
          <Button
            fontSize={13}
            py={5}
            fontWeight={500}
            leftIcon={<PlusSquareIcon />}
            bgColor='#5D3FD3'
            color='white'
            onClick={() => navigate("/apprentiships/new")}>
            Create New Apprentiship
          </Button>
        </Flex>
        <Grid
          py={3}
          gridTemplateColumns='repeat(6,1fr)'
          gridColumnGap={4}
          gridRowGap={4}>
          <GridItem
            as={Stack}
            colSpan={[6, 3, 2]}
            bgColor='white'
            rounded='2xl'
            p={4}>
            <Flex align='center' color='gray'>
              <Heading size='xs' flex='1' color='black'>
                Mobile App Design
              </Heading>
              <IconButton aria-label='edit' size='xs'>
                <EditIcon boxSize={5} />
              </IconButton>
              <IconButton aria-label='edit' size='xs'>
                <Square2StackIcon transform='rotate(90deg)' boxSize={5} />
              </IconButton>
              <IconButton aria-label='edit' size='xs'>
                <TrashIcon boxSize={5} />
              </IconButton>
            </Flex>
            <Text>
              Lorem ipsumf ffLorem ipsum Loreem ipsum e ipfum Lorefm ipsum Lorem
              ipsufffm Lorem
            </Text>
            <Flex flexWrap='wrap'>
              <Box
                m={1}
                bgColor='lavender'
                border='0.12rem solid #5D3FD3'
                rounded='lg'
                px={1}
                color='#5D3FD3'>
                Product Manager
              </Box>

              <Box
                m={1}
                bgColor='lavender'
                border='0.12rem solid #5D3FD3'
                rounded='lg'
                px={1}
                color='#5D3FD3'>
                Product Designer
              </Box>

              <Box
                m={1}
                bgColor='lavender'
                border='0.12rem solid #5D3FD3'
                rounded='lg'
                px={1}
                color='#5D3FD3'>
                Backend Developer
              </Box>

              <Box
                m={1}
                bgColor='lavender'
                border='0.12rem solid #5D3FD3'
                rounded='lg'
                px={1}
                color='#5D3FD3'>
                Frontend Developer
              </Box>
            </Flex>
          </GridItem>

          <GridItem
            as={Stack}
            colSpan={[6, 3, 2]}
            bgColor='white'
            rounded='2xl'
            p={4}>
            <Flex align='center' color='gray'>
              <Heading size='xs' flex='1' color='black'>
                Mobile App Design
              </Heading>
              <IconButton aria-label='edit' size='xs'>
                <EditIcon boxSize={5} />
              </IconButton>
              <IconButton aria-label='edit' size='xs'>
                <Square2StackIcon transform='rotate(90deg)' boxSize={5} />
              </IconButton>
              <IconButton aria-label='edit' size='xs'>
                <TrashIcon boxSize={5} />
              </IconButton>
            </Flex>
            <Text>
              Lorem ipsumf ffLorem ipsum Loreem ipsum e ipfum Lorefm ipsum Lorem
              ipsufffm Lorem
            </Text>
            <Flex flexWrap='wrap'>
              <Box
                m={1}
                bgColor='lavender'
                border='0.12rem solid #5D3FD3'
                rounded='lg'
                px={1}
                color='#5D3FD3'>
                Product Manager
              </Box>

              <Box
                m={1}
                bgColor='lavender'
                border='0.12rem solid #5D3FD3'
                rounded='lg'
                px={1}
                color='#5D3FD3'>
                Product Designer
              </Box>

              <Box
                m={1}
                bgColor='lavender'
                border='0.12rem solid #5D3FD3'
                rounded='lg'
                px={1}
                color='#5D3FD3'>
                Backend Developer
              </Box>

              <Box
                m={1}
                bgColor='lavender'
                border='0.12rem solid #5D3FD3'
                rounded='lg'
                px={1}
                color='#5D3FD3'>
                Frontend Developer
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Apprentiships;
