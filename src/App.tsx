import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useUser } from "./assets/Hooks";
import { JobIcon, SettingsIcon } from "./assets/Svgs";
import Auth from "./components/Auth";
import Apprentiship from "./pages/Apprentiship";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./assets/firebase";
import Loading from "./components/Loading";
import { updateProfile } from "firebase/auth";

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <Loading />;

  if (!user) return <Auth />;

  return (
    <Flex p={3} w='100vw' h='100vh' position='fixed'>
      <Flex
        flexDirection='column'
        bgColor='white'
        w='fit-content'
        h='full'
        px={2}
        py={6}
        rounded='2xl'>
        {/* <Box display={["none", "none", "unset"]}> */}
        <Heading
          display={["none", "none", "unset"]}
          size='md'
          textAlign='center'>
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
                border={`0.12rem solid ${
                  isActive ? "#5D3FD3" : "transparent"
                }`}>
                <JobIcon color={isActive ? "#5D3FD3" : "unset"} />
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
        {/* </Box> */}
      </Flex>

      <Box
        w='full'
        overflowX='auto'
        sx={{
          "&::-webkit-scrollbar": {
            width: "6px",
            backgroundColor: "white",
            borderRadius: "30px",
          },
          "&::-webkit-scrollbar-thumb": {
            width: "6px",
            backgroundColor: "gray",
            borderRadius: "30px",
          },
        }}>
        <Routes>
          <Route index element={<Box>dashboard home</Box>} />
          <Route path='/apprentiships' element={<Apprentiship />} />
          <Route path='/internships' element={<Box>Interships</Box>} />
          <Route path='/jobs' element={<Box>Jobs</Box>} />
          <Route path='/settings' element={<Box>Settings</Box>} />
        </Routes>
      </Box>
    </Flex>
  );
}

export default App;
