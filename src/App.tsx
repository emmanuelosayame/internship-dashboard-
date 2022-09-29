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
import { NavLink, Route, Routes } from "react-router-dom";
import { JobIcon, SettingsIcon } from "./assets/Svgs";
import Auth from "./components/Auth";
import Apprenticeships from "./pages/Apprenticeships";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./assets/firebase";
import Loading from "./components/Loading";
import { updateProfile } from "firebase/auth";
import Apprenticeship from "./components/Apprenticeship";
import NavBar from "./components/NavBar";
import Internships from "./pages/Interships";

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <Loading />;

  if (!user) return <Auth />;

  return (
    <Flex p={3} w='full' h='100vh'>
      <Routes>
        <Route index element={<NavBar />} />
        <Route path='apprenticeships' element={<NavBar />} />
        <Route path='internships' element={<NavBar />} />
        <Route path='jobs' element={<NavBar />} />
        <Route path='settings' element={<NavBar />} />
        <Route path='*' element={<div />} />
      </Routes>
      <Box
        w='full'
        h='full'
        // overflowX='auto'
        // sx={{
        //   "&::-webkit-scrollbar": {
        //     width: "6px",
        //     backgroundColor: "white",
        //     borderRadius: "30px",
        //   },
        //   "&::-webkit-scrollbar-thumb": {
        //     width: "6px",
        //     backgroundColor: "gray",
        //     borderRadius: "30px",
        //   },
        // }}
      >
        <Routes>
          <Route index element={<Box>dashboard home</Box>} />
          <Route path='/apprenticeships'>
            <Route index element={<Apprenticeships />} />
            <Route path=':id' element={<Apprenticeship />} />
          </Route>
          <Route path='/internships' element={<Internships />} />
          <Route path='/jobs' element={<Box>Jobs</Box>} />
          <Route path='/settings' element={<Box>Settings</Box>} />
        </Routes>
      </Box>
    </Flex>
  );
}

export default App;
