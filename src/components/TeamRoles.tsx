import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import {
  CautionIcon,
  AddSquareIcon,
  UserIcon,
  XmarkIcon,
  EditIcon,
  Square2StackIcon,
  TrashIcon,
} from "../assets/Svgs";
import { TeamRole } from "../assets/Types";
import { debounce } from "lodash";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../assets/firebase";
import SearchMenu from "./SearchMenu";
import SearchMenuCheckBox from "./SearchMenuCheckBox";
import { useStore } from "../assets/store/Store";
import shallow from "zustand/shallow";
import { useState } from "react";

const TeamRoles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const teamRoles = useStore((state) => state.apprenticeship.teamRoles);

  const {
    teamRole,
    addTeamRole,
    setTitle,
    setDescr,
    setReqSkills,
    removeOneReqSkill,
    setCompSkills,
    removeOneCompSkill,
    setMinHoursPW,
    setLocationPref,
    removeOneTeamRole,
    setInitialData,
    resetTeamRole,
  } = useStore(
    (state) => ({
      addTeamRole: state.addTeamRole,
      teamRole: state.teamRole,
      setTitle: state.setRoleTitle,
      setDescr: state.setRoleDescr,
      setReqSkills: state.setRoleReqSkills,
      removeOneReqSkill: state.removeOneReqSkill,
      setCompSkills: state.setRoleCompSkills,
      removeOneCompSkill: state.removeOneCompSkill,
      setMinHoursPW: state.setMinHoursPW,
      setLocationPref: state.setLocationPref,
      removeOneTeamRole: state.removeOneTeamRole,
      setInitialData: state.setInitialData,
      resetTeamRole: state.resetTeamRole,
    }),
    shallow
  );

  // console.log(teamRole);

  const [skillsData] = useCollectionData(collection(db, "skills"));
  const [locationsData] = useCollectionData(collection(db, "locations"));
  const [roleTitles] = useCollectionData(collection(db, "teamRoleTitles"));

  const selectRoleTitle = (title: string) =>
    teamRole.title !== title && setTitle(title);

  return (
    <>
      <Modal
        motionPreset='slideInBottom'
        isOpen={isOpen}
        onClose={onClose}
        onCloseComplete={() => resetTeamRole()}>
        <ModalOverlay />
        <ModalContent pos='fixed' rounded='2xl' border='1px solid #793EF5'>
          <ModalHeader display='flex' justifyContent='space-between' pb='2'>
            <Heading flex='1'>Add Role</Heading>
            <Button
              px='5'
              variant='solid'
              color='white'
              bgColor='#793EF5'
              onClick={() => {
                addTeamRole(teamRole);
                onClose();
              }}>
              Save
            </Button>
            <ModalCloseButton position='unset' ml={2} />
          </ModalHeader>
          <ModalBody as={Stack} spacing={1} pb='5'>
            <SearchMenu
              searchData={roleTitles}
              indexer='role'
              menuText={
                teamRole.title.length < 1 ? "Select Role" : teamRole.title
              }
              mutateFn={selectRoleTitle}>
              <UserIcon color='#793EF5' />
            </SearchMenu>
            {/* <Button onClick={() => addReqSkills(["hh"])}>clikkk</Button> */}
            <Heading size='xs'>Role Description</Heading>
            <Textarea
              resize='none'
              rounded='2xl'
              placeholder='Description'
              p='2'
              fontSize='16'
              rows={7}
              border='1px solid gainsboro'
              variant='flushed'
              _focus={{ border: "1px solid #793EF5" }}
              _active={{ border: "1px solid #793EF5" }}
              defaultValue={teamRole.description}
              onChange={debounce((e) => setDescr(e.target.value), 500)}
            />

            <Heading size='xs'>Required Skills</Heading>

            <SearchMenuCheckBox
              indexer='skill'
              value={teamRole.requiredSkills}
              menuText='Search Skill'
              maxSelection={3}
              searchData={skillsData?.filter(
                (data) => !teamRole.complementarySkills.includes(data?.skill)
              )}
              mutateFn={(value) => setReqSkills(value)}>
              <UserIcon />
            </SearchMenuCheckBox>

            <HStack>
              {teamRole.requiredSkills.map((skill) => (
                <HStack
                  key={skill}
                  bgColor='lavender'
                  w='fit-content'
                  px={2}
                  py={1}
                  rounded='xl'>
                  <Text color='#793EF5' fontSize='15px'>
                    {skill}
                  </Text>
                  <IconButton
                    aria-label=''
                    size='xs'
                    onClick={() => removeOneReqSkill(skill)}>
                    <XmarkIcon color='#793EF5' />
                  </IconButton>
                </HStack>
              ))}
            </HStack>

            <Heading size='xs'>{"Complimentary Skills {Select any 3}"}</Heading>

            <SearchMenuCheckBox
              menuText='Search Skill'
              indexer='skill'
              searchData={skillsData?.filter(
                (data) => !teamRole.requiredSkills.includes(data?.skill)
              )}
              maxSelection={3}
              value={teamRole.complementarySkills}
              mutateFn={(value) => setCompSkills(value)}>
              <UserIcon />
            </SearchMenuCheckBox>

            <HStack>
              {teamRole.complementarySkills.map((skill) => (
                <HStack
                  key={skill}
                  bgColor='lavender'
                  w='fit-content'
                  px={2}
                  py={1}
                  rounded='xl'>
                  <Text color='#793EF5' fontSize='15px'>
                    {skill}
                  </Text>
                  <IconButton
                    aria-label=''
                    size='xs'
                    onClick={() => removeOneCompSkill(skill)}>
                    <XmarkIcon color='#793EF5' />
                  </IconButton>
                </HStack>
              ))}
            </HStack>

            <Heading size='xs'>Minimun Hours Per Week</Heading>

            <Menu>
              <InputGroup>
                <InputLeftElement>
                  <AddSquareIcon />
                </InputLeftElement>
                <Input
                  placeholder='No. of hours'
                  type='number'
                  onChange={debounce((e) => setMinHoursPW(e.target.value), 500)}
                />
              </InputGroup>
            </Menu>

            <Heading size='xs'>Location Preferences</Heading>
            <SearchMenuCheckBox
              indexer='location'
              value={
                teamRole.locationPref.length > 0 ? [teamRole.locationPref] : []
              }
              menuText={
                teamRole.locationPref.length > 0
                  ? teamRole.locationPref
                  : "Select Location"
              }
              searchData={locationsData}
              maxSelection={1}
              mutateFn={(value) =>
                setLocationPref(value.length > 0 ? value[0] : "")
              }>
              <UserIcon />
            </SearchMenuCheckBox>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Stack
        bgColor='white'
        p={3}
        rounded='2xl'
        border='1px solid transparent'
        tabIndex={1}
        outline='none'
        _focusWithin={{ border: "1px solid #793EF5", boxShadow: "2xl" }}
        // _focus={{ border: "1px solid #793EF5" }}
      >
        <Flex justify='space-between' p={1}>
          <HStack>
            <Text fontWeight={600}>Team Roles</Text>
            <Button
              border='1px dashed #793EF5'
              leftIcon={<AddSquareIcon />}
              color='#793EF5'
              onClick={onOpen}>
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
            <GridItem
              key={member.id}
              colSpan={2}
              border='1px solid gainsboro'
              p={2}
              rounded='2xl'>
              <Flex justify='space-between'>
                <UserIcon />
                <Text fontSize='16px'>{member.title}</Text>
                <Flex>
                  <IconButton
                    aria-label='edit'
                    size='xs'
                    onClick={() => {
                      setInitialData(member);
                      onOpen();
                    }}>
                    <EditIcon boxSize={5} />
                  </IconButton>
                  <IconButton aria-label='edit' size='xs'>
                    <Square2StackIcon transform='rotate(90deg)' boxSize={5} />
                  </IconButton>
                  <IconButton
                    aria-label='edit'
                    size='xs'
                    onClick={() => removeOneTeamRole(member.id)}>
                    <TrashIcon boxSize={5} />
                  </IconButton>
                </Flex>
              </Flex>
              <Text>{member.description}</Text>
              <Flex flexWrap='wrap'>
                {member.requiredSkills.map((skill) => (
                  <Text
                    key={skill}
                    border='1px solid #793EF5'
                    m={1}
                    p={1}
                    rounded='12px'
                    bgColor='lavender'
                    color='#793EF5'>
                    {skill}
                  </Text>
                ))}
                {member.complementarySkills.map((skill) => (
                  <Text
                    key={skill}
                    border='1px solid blue'
                    m={1}
                    p={1}
                    rounded='12px'
                    bgColor='blue.200'
                    color='blue'>
                    {skill}
                  </Text>
                ))}
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </>
  );
};

export default TeamRoles;
