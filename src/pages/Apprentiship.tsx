import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CopyIcon, EditIcon, TrashIcon } from "../assets/Svgs";

const Apprentiship = () => {
  return (
    <Box py={5} px={10} w='full'>
      <Heading size='lg'>Apprentiship</Heading>
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
          <Flex align='center'>
            <Heading size='xs' flex='1'>
              Mobile App Design
            </Heading>
            <IconButton aria-label='edit' size='xs'>
              <EditIcon boxSize={5} />
            </IconButton>
            <IconButton aria-label='edit' size='xs'>
              <CopyIcon boxSize={5} />
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
          <Flex align='center'>
            <Heading size='xs' flex='1'>
              Mobile App Design
            </Heading>
            <IconButton aria-label='edit' size='xs'>
              <EditIcon boxSize={5} />
            </IconButton>
            <IconButton aria-label='edit' size='xs'>
              <CopyIcon boxSize={5} />
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
  );
};

export default Apprentiship;
