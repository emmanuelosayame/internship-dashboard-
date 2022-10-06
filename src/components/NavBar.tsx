import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { auth, db } from "../assets/firebase";
import {
  BookIcon,
  BriefCaseIcon,
  DashboardIcon,
  JobIcon,
  MedalSilver,
  SettingsIcon,
  SquarePlusIcon,
} from "../assets/Svgs";
import logo from "../../public/RadicallX-Black-Logo 1.png";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { useStore } from "../assets/store/Store";

const NavBar = ({}: {}) => {
  const userData = useStore((state) => state.userData);
  const user = auth.currentUser;

  return (
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
              border={`0.12rem solid ${isActive ? "#793EF5" : "transparent"}`}>
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
              border={`0.12rem solid ${isActive ? "#793EF5" : "transparent"}`}
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
              border={`0.12rem solid ${isActive ? "#793EF5" : "transparent"}`}
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
              border={`0.12rem solid ${isActive ? "#793EF5" : "transparent"}`}
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

        <NavLink to='/settings'>
          {({ isActive }) => (
            <HStack
              align='center'
              py='12px'
              px='16px'
              h='48px'
              rounded='16px'
              border={`0.12rem solid ${isActive ? "#793EF5" : "transparent"}`}
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
        {!userData?.photoURL || !user?.photoURL ? (
          <Box boxSize='40px' rounded='15px' bgColor='gray.300' />
        ) : (
          <Image
            src={userData.photoURL || user?.photoURL}
            boxSize='40px'
            rounded='15px'
          />
        )}
        <Text fontSize='14px' display={["none", "unset", "unset"]} size='xs'>
          {userData?.displayName || user?.displayName}
        </Text>
      </HStack>
    </Flex>
  );
};

export default NavBar;
