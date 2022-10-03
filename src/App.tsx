import {
  Avatar,
  Box,
  Center,
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
import { auth, db } from "./assets/firebase";
import Loading from "./components/Loading";
import { updateProfile } from "firebase/auth";
import Apprenticeship from "./components/Apprenticeship";
import NavBar from "./components/NavBar";
import Internships from "./pages/Interships";
import Settings from "./pages/Settings";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";

function App() {
  const [user, loading, error] = useAuthState(auth);

  const [userData, loadingData] = useDocumentData(
    doc(db, "users", `${user?.uid}`)
  );

  if (loading) return <Loading />;

  if (!user) return <Auth />;

  return (
    <Flex p={3} w='full' h='100vh'>
      <Routes>
        <Route index element={<NavBar userData={userData} />} />
        <Route
          path='apprenticeships'
          element={<NavBar userData={userData} />}
        />
        <Route path='internships' element={<NavBar userData={userData} />} />
        <Route path='jobs' element={<NavBar userData={userData} />} />
        <Route path='settings' element={<NavBar userData={userData} />} />
        <Route path='*' element={<div />} />
      </Routes>
      <Box w='full' h='full' p={5}>
        <Routes>
          <Route
            index
            element={
              <Center h='full' fontSize='30px'>
                🥹
              </Center>
            }
          />
          <Route path='/apprenticeships'>
            <Route index element={<Apprenticeships />} />
            <Route path=':id' element={<Apprenticeship />} />
          </Route>
          <Route
            path='/internships'
            element={
              <Center h='full' fontSize='30px'>
                👀
              </Center>
            }
          />
          <Route
            path='/jobs'
            element={
              <Center h='full' fontSize='30px'>
                🥸
              </Center>
            }
          />
          <Route
            path='/settings'
            element={<Settings userData={userData} loadingData={loadingData} />}
          />
        </Routes>
      </Box>
    </Flex>
  );
}

export default App;
