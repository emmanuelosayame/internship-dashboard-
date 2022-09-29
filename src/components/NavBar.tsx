import { Avatar, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { auth } from "../assets/firebase";
import { JobIcon, SettingsIcon, SquarePlusIcon } from "../assets/Svgs";

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);

  //   if (
  //     location.pathname === "/apprentiships" ||
  //     location.pathname === "/internships" ||
  //     location.pathname === "/jobs" ||
  //     location.pathname === "/settings" ||
  //     location.pathname === "/"
  //   )

  return (
    <Flex
      flexDirection='column'
      // display={showDashBoard() ? "unset" : "none"}
      bgColor='white'
      w='fit-content'
      h='full'
      px={2}
      py={6}
      rounded='2xl'>
      <Heading display={["none", "none", "unset"]} size='md' textAlign='center'>
        RADICAL X
      </Heading>
      <Stack spacing={4} py={7} flex='1' w='fit-content'>
        <NavLink to='/' end>
          {({ isActive }) => (
            <HStack
              align='center'
              py={1}
              px={2}
              rounded='xl'
              bgColor={isActive ? "lavender" : "unset"}
              color={isActive ? "#5D3FD3" : "unset"}
              border={`0.12rem solid ${isActive ? "#5D3FD3" : "transparent"}`}>
              <SquarePlusIcon color={isActive ? "#5D3FD3" : "unset"} />
              <Text
                display={["none", "none", "unset"]}
                color={isActive ? "#5D3FD3" : "unset"}>
                DashBoard
              </Text>
            </HStack>
          )}
        </NavLink>

        <NavLink to='/apprentiships'>
          {({ isActive }) => (
            <HStack
              align='center'
              py={1}
              px={2}
              rounded='xl'
              border={`0.12rem solid ${isActive ? "#5D3FD3" : "transparent"}`}
              bgColor={isActive ? "lavender" : "unset"}>
              <JobIcon color={isActive ? "#5D3FD3" : "unset"} />
              <Text
                display={["none", "none", "unset"]}
                color={isActive ? "#5D3FD3" : "unset"}>
                Apprentiships
              </Text>
            </HStack>
          )}
        </NavLink>

        <NavLink to='/internships'>
          {({ isActive }) => (
            <HStack
              align='center'
              py={1}
              px={2}
              rounded='xl'
              border={`0.12rem solid ${isActive ? "#5D3FD3" : "transparent"}`}
              bgColor={isActive ? "lavender" : "unset"}>
              <JobIcon color={isActive ? "#5D3FD3" : "unset"} />
              <Text
                display={["none", "none", "unset"]}
                color={isActive ? "#5D3FD3" : "unset"}>
                Internships
              </Text>
            </HStack>
          )}
        </NavLink>

        <NavLink to='/jobs'>
          {({ isActive }) => (
            <HStack
              align='center'
              py={1}
              px={2}
              rounded='xl'
              border={`0.12rem solid ${isActive ? "#5D3FD3" : "transparent"}`}
              bgColor={isActive ? "lavender" : "unset"}>
              <JobIcon color={isActive ? "#5D3FD3" : "unset"} />
              <Text
                display={["none", "none", "unset"]}
                color={isActive ? "#5D3FD3" : "unset"}>
                Jobs
              </Text>
            </HStack>
          )}
        </NavLink>

        <NavLink to='/settings'>
          {({ isActive }) => (
            <HStack
              align='center'
              py={1}
              px={2}
              rounded='xl'
              border={`0.12rem solid ${isActive ? "#5D3FD3" : "transparent"}`}
              bgColor={isActive ? "lavender" : "unset"}>
              <SettingsIcon color={isActive ? "#5D3FD3" : "unset"} />
              <Text
                display={["none", "none", "unset"]}
                color={isActive ? "#5D3FD3" : "unset"}>
                Settings
              </Text>
            </HStack>
          )}
        </NavLink>
      </Stack>

      <HStack cursor='pointer' onClick={() => auth.signOut()}>
        <Avatar size='sm' rounded='lg' />
        <Heading display={["none", "none", "unset"]} size='xs'>
          {user?.displayName}
        </Heading>
      </HStack>
    </Flex>
  );
};

export default NavBar;
