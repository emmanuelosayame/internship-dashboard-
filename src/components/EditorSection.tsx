import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { ReactElement, ReactNode, useState } from "react";
import {
  CalenderDaysIcon,
  CautionIcon,
  MobileAppIcon,
  MonitorIcon,
  PlusSquareIcon,
} from "../assets/Svgs";

const FocusableBox = ({
  text,
  children,
}: {
  text: string;
  children?: ReactNode;
}) => (
  <Box
    bgColor='white'
    p={3}
    rounded='2xl'
    border='1px solid transparent'
    tabIndex={1}
    outline='none'
    _focusWithin={{ border: "1px solid #5D3FD3", boxShadow: "2xl" }}
    // _focus={{ border: "1px solid #5D3FD3" }}
  >
    <Flex justify='space-between' p={1}>
      <Text fontWeight={600}>{text}</Text>
      <CautionIcon color='gray.400' boxSize={5} />
    </Flex>
    {children}
  </Box>
);

const EditorSection = () => {
  const [teamRoles, setTeamRoles] = useState<any[]>([]);
  const [teamAdmins, setTeamAdmins] = useState<any[]>([]);

  return (
    <Stack mx='auto' maxW='500px' w='full' pt='150px' pb='40px' spacing={3}>
      <FocusableBox text='Company Logo & Apprentiship Title'>
        <Flex w='full' justify='space-between' align='center'>
          <Box w='60px' h='50px' bgColor='gray.300' rounded='xl' mx={2} />
          <Input
            variant='unstyled'
            resize='none'
            fontSize='18'
            outline={0}
            _placeholder={{ color: "gray.400" }}
            placeholder='Enter Apprentiship Title'
          />
        </Flex>
      </FocusableBox>

      <FocusableBox text='Company Description'>
        <Input
          variant='unstyled'
          placeholder='Enter Description'
          _placeholder={{ color: "gray.400" }}
        />
      </FocusableBox>

      <FocusableBox text='Apprentiship Description'>
        <Input
          variant='unstyled'
          placeholder='Enter Description'
          _placeholder={{ color: "gray.400" }}
        />
      </FocusableBox>

      <FocusableBox text="Introduce yourself, your company, and what you're building.">
        <Button w='full' size='lg' border='1px dashed gray' variant='solid'>
          Drag n drop to upload your video
        </Button>
      </FocusableBox>

      <FocusableBox text='Team Type'>
        <Grid
          gridTemplateColumns='repeat(3,1fr)'
          gridColumnGap={3}
          gridRowGap={3}
          w='full'>
          <GridItem w='full' border='1px solid gainsboro' p={2} rounded='2xl'>
            <Flex w='full' justify='space-between'>
              <MonitorIcon color='#5D3FD3' />
              <Checkbox />
            </Flex>
            <Text>Web Platform</Text>
          </GridItem>

          <GridItem w='full' border='1px solid gainsboro' p={2} rounded='2xl'>
            <Flex w='full' justify='space-between'>
              <MobileAppIcon color='#5D3FD3' />
              <Checkbox />
            </Flex>
            <Text>Mobile App</Text>
          </GridItem>

          <GridItem w='full' border='1px solid gainsboro' p={2} rounded='2xl'>
            <Flex w='full' justify='space-between'>
              <MonitorIcon color='#5D3FD3' />
              <Checkbox />
            </Flex>
            <Text>Growth</Text>
          </GridItem>

          <GridItem w='full' border='1px solid gainsboro' p={2} rounded='2xl'>
            <Flex w='full' justify='space-between'>
              <MonitorIcon color='#5D3FD3' />
              <Checkbox />
            </Flex>
            <Text>Marketing Website</Text>
          </GridItem>

          <GridItem w='full' border='1px solid gainsboro' p={2} rounded='2xl'>
            <Flex w='full' justify='space-between'>
              <MonitorIcon color='#5D3FD3' />
              <Checkbox />
            </Flex>
            <Text>Prototyping</Text>
          </GridItem>

          <GridItem w='full' border='1px solid gainsboro' p={2} rounded='2xl'>
            <Flex w='full' justify='space-between'>
              <MonitorIcon color='#5D3FD3' />
              <Checkbox />
            </Flex>
            <Text>Data</Text>
          </GridItem>

          <GridItem w='full' border='1px solid gainsboro' p={2} rounded='2xl'>
            <Flex w='full' justify='space-between'>
              <MonitorIcon color='#5D3FD3' />
              <Checkbox />
            </Flex>
            <Text>Custom Team</Text>
          </GridItem>
        </Grid>
      </FocusableBox>

      <Box
        bgColor='white'
        p={3}
        rounded='2xl'
        border='1px solid transparent'
        tabIndex={1}
        outline='none'
        _focusWithin={{ border: "1px solid #5D3FD3", boxShadow: "2xl" }}
        // _focus={{ border: "1px solid #5D3FD3" }}
      >
        <Flex justify='space-between' p={1}>
          <HStack>
            <Text fontWeight={600}>Team Roles</Text>
            <Button
              border='1px dashed #5D3FD3'
              leftIcon={<PlusSquareIcon />}
              color='#5D3FD3'>
              Add Team Member
            </Button>
          </HStack>
          <CautionIcon color='gray.400' boxSize={5} />
        </Flex>
        <Grid
          gridTemplateColumns='repeat(4,1fr)'
          gridColumnGap={3}
          gridRowGap={3}
          w='full'>
          {teamRoles.map((member) => (
            <GridItem colSpan={2} border='1px solid gainsboro' p={2}>
              <Flex justify='space-between'>
                <Box w='50' h='40' bgColor='gainsboro' />
                <Text fontWeight={600}>{member.name}</Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>

      <Box
        bgColor='white'
        p={3}
        rounded='2xl'
        border='1px solid transparent'
        tabIndex={1}
        outline='none'
        _focusWithin={{ border: "1px solid #5D3FD3", boxShadow: "2xl" }}
        // _focus={{ border: "1px solid #5D3FD3" }}
      >
        <Flex justify='space-between' p={1}>
          <HStack>
            <Text fontWeight={600}>Team Admin</Text>
            <Button
              border='1px dashed #5D3FD3'
              leftIcon={<PlusSquareIcon />}
              color='#5D3FD3'>
              Add Team Member
            </Button>
          </HStack>
          <CautionIcon color='gray.400' boxSize={5} />
        </Flex>
        <Grid
          gridTemplateColumns='repeat(4,1fr)'
          gridColumnGap={3}
          gridRowGap={3}
          w='full'>
          {teamAdmins.map((member) => (
            <GridItem colSpan={2} border='1px solid gainsboro' p={2}>
              <Flex justify='space-between'>
                <Box w='50' h='40' bgColor='gainsboro' />
                <Text fontWeight={600}>{member.name}</Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>

      <FocusableBox text='Timeline'>
        <HStack>
          <InputGroup>
            <Input rounded='xl' placeholder='Start Date' />
            <InputRightElement>
              <CalenderDaysIcon color='#5D3FD3' />
            </InputRightElement>
          </InputGroup>

          <InputGroup>
            <Input rounded='xl' placeholder='Estimated End Date' />
            <InputRightElement>
              <CalenderDaysIcon color='#5D3FD3' />
            </InputRightElement>
          </InputGroup>
        </HStack>
      </FocusableBox>
    </Stack>
  );
};

export default EditorSection;
