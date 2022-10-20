import {
  Avatar,
  Box,
  Collapse,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
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

  

  return (
    <Box
      position={["fixed", "fixed", "unset"]}
      w='full'
      top='1'
      right='0'
      left='0'
      px='1.5'
      zIndex={1000}>
      <Box
        w={["full", "full", "fit-content"]}
        h='full'
        bgColor='white'
        rounded={["20px", "20px", "24px"]}
        boxShadow='lg'
        overflow='hidden'>
        <Flex
          flexDirection={["row", "row", "column"]}
          // bgColor='white'
          align='center'
          w={["full", "full", "237px"]}
          // h={["50px", "unset", "full"]}
          h='full'
          px={2}
          py={[1, 1, 6]}>
         

          <Stack
            display={["none", "none", "unset"]}
            spacing={4}
            py={7}
            flex='1'
            w='197px'>
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
                    display={["none", "none", "unset"]}
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
                    display={["none", "none", "unset"]}
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
                    display={["none", "none", "unset"]}
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
                    display={["none", "none", "unset"]}
                    color={isActive ? "#793EF5" : "unset"}>
                    Jobs
                  </Text>
                </HStack>
              )}
            </NavLink>

            <NavLink >
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
                    display={["none", "none", "unset"]}
                    color={isActive ? "#793EF5" : "unset"}>
                    Settings
                  </Text>
                </HStack>
              )}
            </NavLink>
          </Stack>

          <HStack cursor='pointer'>
            
            <Text display={["none", "none", "block"]} fontSize='14px' size='xs'>
              {userData?.displayName || user?.displayName}
            </Text>
          </HStack>
        </Flex>
      
      </Box>
    </Box>
  );
};

export default NavBar;
