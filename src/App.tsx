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
import { auth, db } from "../firebase";
import { Loading, LoadingBlur } from "./components/Loading";
import Apprenticeship from "./components/Apprenticeship";
import NavBar from "./components/NavBar";
import Internships from "./pages/Interships";
import Settings from "./pages/Settings";
import { useStore } from "./components/store/Store";
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
import { ApprType, SearchEntity } from "./components/Types";
import { functions } from "lodash";

function App() {
  // TODO make navbar display none to avoid refetching logo
  // TODO add caching for images ==> edit apprr==>title
  // TODO limit and paginate appr data
  // TODO validation schema for text inputs
  // TODO remove indexer prop and replace with value ==>hard code indexer
  // TODO add search data to database
  // TODO index db field:creatorId
  // TODO error handling

  // Line 47 is a react hook. Hooks lets us abstract codes into a simple function. yes hooks are functions. They can contain other functions, variables, classes, components, libraries and even other hooks in the case of custom hooks Jooks in react start with the 'use' word.
  const [user, loading, error] = useAuthState(auth);

  // so the hook above takes auth from firebase as a parameter and returns an array of values including user: the current user or undefined if no user, loading: if the hook is checking wether or not a user exist(in thsi case i use it to show a loading component).

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
    // remember the return section where write our html codes and add children components. in this section. i have the navbar component which i reused multiple times so I could render/show it on specific pages. The route component does the job of rendering/showing.
    // You can read more on react router
    //The routes(parent) wraps the route(child) component. They all work together including the router from main.tsx.

    //The other part of the code is where I created another routes and route set to render the main contents of the specific pages.

    //Since we're working primarily on the apprenticeships part of the app. I,m importing   1.Apprenticeships  2.Apprenticeship and 3.Settings component

    //1 is the main page where all the apprenticeships display.
    //2 is the creat apprenticeship page. I'm also using this same component for edit apprenticeship. That's the idea of components: re-usablility, code-abstraction(so I dont have my code jampacked in a single file) and a lot more.

    <Flex p={3} w='full' h='100vh'>
      {/* TODO create responsive Navbar */}

      {/* navbar component */}
      <Routes>
        <Route index element={<NavBar />} />
        <Route path='apprenticeships' element={<NavBar />} />
        <Route path='internships' element={<NavBar />} />
        <Route path='jobs' element={<NavBar />} />
        <Route path='settings' element={<NavBar />} />
        {/* TODO create 404 page */}
        <Route path='*' element={<div />} />
      </Routes>
      {/* navbar component */}

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
            //path=":id" means that the page should be dynamic. eg.
            apprenticeships/new,apprenticeships/86tghuhyyujuy78u8u,apprenticeships/new,apprenticeships/f8ghuhyfvyujuyuuu8u
            //You just change the contents of the page not the structure and layout
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
