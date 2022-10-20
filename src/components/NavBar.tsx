import {
  Avatar,
  Box,
  Collapse,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Show,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { auth, db } from "../../firebase";
import {
  Bars3CL,
  BookIcon,
  BriefCaseIcon,
  DashboardIcon,
  JobIcon,
  MedalSilver,
  SettingsIcon,
  SquarePlusIcon,
} from "../components/Svgs";
import logo from "../assets/RadicallX-Black-Logo 1.png";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { useStore } from "../components/store/Store";

const NavBar = ({}: {}) => {
  const userData = useStore((state) => state.userData);
  const user = auth.currentUser;

  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Show below='md'>
        <Box
          position='fixed'
          left='2'
          right='2'
          top='2'
          bgColor='white'
          rounded='20px'
          zIndex={1000}>
          <Flex p='1.5' align='center'>
            <IconButton aria-label='' onClick={onToggle}>
              <Bars3CL />
            </IconButton>
            <Image
              src={logo}
              w='160px'
              // my={["auto", "auto", "unset"]}
              mx='auto'
            />
            {!userData?.photoURL || !user?.photoURL ? (
              <Box
                boxSize='40px'
                rounded={["18px", "18px", "15px"]}
                bgColor='gray.300'
              />
            ) : (
              <Image
                src={userData.photoURL || user?.photoURL}
                boxSize='40px'
                rounded={["18px", "18px", "15px"]}
              />
            )}
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            <Divider w='90%' mx='auto' />
            <Stack p='1'>
              <NavLink to='/' end>
                {({ isActive }) => (
                  <HStack
                    align='center'
                    py='4px'
                    px='16px'
                    // h='48px'
                    color={isActive ? "#793EF5" : "unset"}>
                    <Text
                      textAlign='center'
                      w='full'
                      color={isActive ? "#793EF5" : "unset"}>
                      DashBoard
                    </Text>
                    <DashboardIcon stroke={isActive ? "#793EF5" : "unset"} />
                  </HStack>
                )}
              </NavLink>
              <NavLink to='/apprenticeships'>
                {({ isActive }) => (
                  <HStack
                    align='center'
                    py='4px'
                    px='16px'
                    // h='48px'
                    color={isActive ? "#793EF5" : "unset"}>
                    <Text
                      textAlign='center'
                      w='full'
                      color={isActive ? "#793EF5" : "unset"}>
                      Apprenticeships
                    </Text>
                    <MedalSilver stroke={isActive ? "#793EF5" : "unset"} />
                  </HStack>
                )}
              </NavLink>
              <NavLink to='/internships'>
                {({ isActive }) => (
                  <HStack
                    align='center'
                    py='4px'
                    px='16px'
                    // h='48px'
                    color={isActive ? "#793EF5" : "unset"}>
                    <Text
                      textAlign='center'
                      w='full'
                      color={isActive ? "#793EF5" : "unset"}>
                      Internships
                    </Text>
                    <BookIcon stroke={isActive ? "#793EF5" : "unset"} />
                  </HStack>
                )}
              </NavLink>
              <NavLink to='/jobs'>
                {({ isActive }) => (
                  <HStack
                    align='center'
                    py='4px'
                    px='16px'
                    // h='48px'
                    color={isActive ? "#793EF5" : "unset"}>
                    <Text
                      textAlign='center'
                      w='full'
                      color={isActive ? "#793EF5" : "unset"}>
                      Jobs
                    </Text>
                    <BriefCaseIcon stroke={isActive ? "#793EF5" : "unset"} />
                  </HStack>
                )}
              </NavLink>
              <NavLink to='/settings'>
                {({ isActive }) => (
                  <HStack
                    align='center'
                    py='4px'
                    px='16px'
                    // h='48px'
                    color={isActive ? "#793EF5" : "unset"}>
                    <Text
                      textAlign='center'
                      w='full'
                      color={isActive ? "#793EF5" : "unset"}>
                      Settings
                    </Text>
                    <SettingsIcon stroke={isActive ? "#793EF5" : "black"} />
                  </HStack>
                )}
              </NavLink>
            </Stack>
          </Collapse>
        </Box>
      </Show>
      <Show above='md'>
        <Flex
          flexDirection='column'
          bgColor='white'
          align='center'
          w='237px'
          h='full'
          px={2}
          rounded='24px'
          boxShadow='lg'
          py={6}>
          <Image src={logo} w='160px' mx='auto' />

          <Stack spacing={4} py={7} flex='1' w='197px'>
            <NavLink to='/' end>
              {({ isActive }) => (
                <HStack
                  align='center'
                  py='12px'
                  px='16px'
                  h='48px'
                  rounded='16px'
                  bgColor={isActive ? "rgba(102, 95, 239, 0.16)" : "unset"}
                  color={isActive ? "#793EF5" : "unset"}
                  border={`0.12rem solid ${
                    isActive ? "#793EF5" : "transparent"
                  }`}>
                  <DashboardIcon stroke={isActive ? "#793EF5" : "unset"} />
                  <Text
                    // display={["none", "none", "unset"]}
                    color={isActive ? "#793EF5" : "unset"}>
                    DashBoard
                  </Text>
                </HStack>
              )}
            </NavLink>

            <NavLink to='/apprenticeships'>
              {({ isActive }) => (
                <HStack
                  align='center'
                  py='12px'
                  px='16px'
                  h='48px'
                  rounded='16px'
                  border={`0.12rem solid ${
                    isActive ? "#793EF5" : "transparent"
                  }`}
                  bgColor={isActive ? "rgba(102, 95, 239, 0.16)" : "unset"}>
                  <MedalSilver color={isActive ? "#793EF5" : "unset"} />
                  <Text
                    // display={["none", "none", "unset"]}
                    color={isActive ? "#793EF5" : "unset"}>
                    Apprenticeships
                  </Text>
                </HStack>
              )}
            </NavLink>

            <NavLink to='/internships'>
              {({ isActive }) => (
                <HStack
                  align='center'
                  py='12px'
                  px='16px'
                  h='48px'
                  rounded='16px'
                  border={`0.12rem solid ${
                    isActive ? "#793EF5" : "transparent"
                  }`}
                  bgColor={isActive ? "rgba(102, 95, 239, 0.16)" : "unset"}>
                  <BookIcon color={isActive ? "#793EF5" : "unset"} />
                  <Text
                    // display={["none", "none", "unset"]}
                    color={isActive ? "#793EF5" : "unset"}>
                    Internships
                  </Text>
                </HStack>
              )}
            </NavLink>

            <NavLink to='/jobs'>
              {({ isActive }) => (
                <HStack
                  align='center'
                  py='12px'
                  px='16px'
                  h='48px'
                  rounded='16px'
                  border={`0.12rem solid ${
                    isActive ? "#793EF5" : "transparent"
                  }`}
                  bgColor={isActive ? "rgba(102, 95, 239, 0.16)" : "unset"}>
                  <BriefCaseIcon color={isActive ? "#793EF5" : "unset"} />
                  <Text
                    // display={["none", "none", "unset"]}
                    color={isActive ? "#793EF5" : "unset"}>
                    Jobs
                  </Text>
                </HStack>
              )}
            </NavLink>

            <NavLink to='/settings'>
              {({ isActive }) => (
                <HStack
                  align='center'
                  py='12px'
                  px='16px'
                  h='48px'
                  rounded='16px'
                  border={`0.12rem solid ${
                    isActive ? "#793EF5" : "transparent"
                  }`}
                  bgColor={isActive ? "rgba(102, 95, 239, 0.16)" : "unset"}>
                  <SettingsIcon color={isActive ? "#793EF5" : "unset"} />
                  <Text
                    // display={["none", "none", "unset"]}
                    color={isActive ? "#793EF5" : "unset"}>
                    Settings
                  </Text>
                </HStack>
              )}
            </NavLink>
          </Stack>

          <HStack cursor='pointer'>
            {!userData?.photoURL || !user?.photoURL ? (
              <Box boxSize='40px' rounded='15px' bgColor='gray.300' />
            ) : (
              <Image
                src={userData.photoURL || user?.photoURL}
                boxSize='40px'
                rounded='15px'
              />
            )}
            <Text
              fontSize='14px'
              display={["none", "unset", "unset"]}
              size='xs'>
              {userData?.displayName || user?.displayName}
            </Text>
          </HStack>
        </Flex>
      </Show>
    </>
  );
};

export default NavBar;
