import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Apprenticeships from "./pages/Apprenticeships";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./assets/firebase";
import { Loading, LoadingBlur } from "./components/Loading";
import Apprenticeship from "./components/Apprenticeship";
import NavBar from "./components/NavBar";
import Internships from "./pages/Interships";
import Settings from "./pages/Settings";
import { useStore } from "./assets/store/Store";
import shallow from "zustand/shallow";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  collection,
  CollectionReference,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { ApprType, SearchEntity } from "./assets/Types";

function App() {
  // TODO make navbar display none to avoid refetching logo
  // TODO add caching for images ==> edit apprr==>title
  // TODO limit and paginate appr data
  // TODO validation schema for text inputs
  // TODO remove indexer prop and replace with value ==>hard code indexer
  // TODO add search data to database
  // TODO index db field:creatorId
  const [user, loading, error] = useAuthState(auth);
  const { userData, updateUserData, setSearchData } = useStore(
    (state) => ({
      userData: state.userData,
      updateUserData: state.updateUserData,
      setSearchData: state.setSearchData,
    }),
    shallow
  );

  useEffect(() => {
    if (user) {
      updateUserData({
        displayName: user?.displayName,
        photoURL: user?.photoURL,
      });
      const unsub = onSnapshot(
        collection(db, "searchData") as CollectionReference<SearchEntity>,
        (snapshot) => {
          const data = snapshot.docs.map((doc) => doc.data());
          setSearchData(data);
        }
      );
      return () => {
        unsub;
      };
    }
  }, [user]);

  const [apprs] = useCollection(
    query(
      collection(db, "apprenticeships"),
      where("creatorId", "==", `${user?.uid}`)
    ) as CollectionReference<ApprType>
  );

  const apprsData = apprs && {
    list: apprs?.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })),
    size: apprs?.size,
    empty: apprs?.empty,
  };

  if (loading) return <Loading />;

  if (!user) return <Auth />;

  return (
    <Flex p={3} w='full' h='100vh'>
      {/* TODO create responsive Navbar */}
      <Routes>
        <Route index element={<NavBar />} />
        <Route path='apprenticeships' element={<NavBar />} />
        <Route path='internships' element={<NavBar />} />
        <Route path='jobs' element={<NavBar />} />
        <Route path='settings' element={<NavBar />} />
        {/* TODO create 404 page */}
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
            <Route index element={<Apprenticeships apprsData={apprsData} />} />
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
            element={<Settings userData={userData} apprsData={apprsData} />}
          />
        </Routes>
      </Box>
    </Flex>
  );
}

export default App;
