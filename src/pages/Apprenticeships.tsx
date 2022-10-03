import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import {
  EditIcon,
  AddSquareIcon,
  Square2StackIcon,
  TrashIcon,
} from "../assets/Svgs";
import logo from "../../public/RadicallX-Black-Logo 1.png";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc, query, where } from "firebase/firestore";
import { auth, db } from "../assets/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ApprType } from "../assets/Types";
import { useStore } from "../assets/store/Store";

const Apprenticeships = () => {
  const navigate = useNavigate();
  // const params = useParams();
  const [user] = useAuthState(auth);
  const editAppr = useStore((state) => state.editAppr);

  const [data] = useCollection<any>(
    query(
      collection(db, "apprenticeships"),
      where("creatorId", "==", `${user?.uid}`)
    )
  );

  const deleteAppr = async (id: string) => {
    await deleteDoc(doc(db, "apprenticeships", id));
  };

  const apprList = data?.docs.map((data) => ({ ...data.data(), id: data.id }));

  // console.log(apprList);

  return (
    <>
      <Box px={6} py={4} w='full'>
        <Flex justify='space-between'>
          <Text fontSize='32' fontWeight='600' textAlign={["center", "start"]}>
            Apprenticeship
          </Text>
          <Button
            fontSize={13}
            py={5}
            // h='44px'
            // w='254px'
            rounded='12px'
            fontWeight={500}
            leftIcon={<AddSquareIcon />}
            bgColor='#793EF5'
            color='white'
            onClick={() => navigate("/apprenticeships/new")}>
            Create New Apprenticeship
          </Button>
        </Flex>
        <Grid
          py={3}
          gridTemplateColumns='repeat(6,1fr)'
          gridColumnGap={4}
          gridRowGap={4}>
          {apprList?.map((data) => (
            <GridItem
              key={data.id}
              as={Stack}
              colSpan={[6, 3, 2]}
              bgColor='white'
              rounded='20px'
              border='1px solid #CFD3D9'
              p={4}>
              <Flex align='center' color='gray'>
                <Text fontSize='18px' fontWeight={500} flex='1' color='#1E1E1E'>
                  {data?.apprenticeshipTitle}
                </Text>
                <IconButton
                  aria-label='edit'
                  size='xs'
                  onClick={() => {
                    editAppr(data.id);
                    navigate(data.id);
                  }}>
                  <EditIcon boxSize={5} />
                </IconButton>
                <IconButton aria-label='edit' size='xs'>
                  <Square2StackIcon transform='rotate(90deg)' boxSize={5} />
                </IconButton>
                <IconButton
                  aria-label='edit'
                  size='xs'
                  onClick={() => deleteAppr(data?.id)}>
                  <TrashIcon boxSize={5} />
                </IconButton>
              </Flex>
              <Text fontSize='14px' fontWeight='400'>
                {data?.apprenticeshipDescription}
              </Text>
              <Flex flexWrap='wrap'>
                {data?.teamRoles?.map((role: any) => (
                  <Box
                    fontSize='12px'
                    m={1}
                    bgColor='#EDEAFF'
                    border='0.12rem solid #793EF5'
                    rounded='8px'
                    px={1}
                    color='#793EF5'>
                    {role.title}
                  </Box>
                ))}
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Apprenticeships;
