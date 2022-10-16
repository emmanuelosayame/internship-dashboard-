import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import {
  EditIcon,
  AddSquareIcon,
  Square2StackIcon,
  TrashIcon,
} from "../components/Svgs";
import logo from "../../public/RadicallX-Black-Logo 1.png";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import {
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { ApprsData, ApprType } from "../components/Types";
import { useRef, useState } from "react";


const Apprenticeships = ({
  apprsData,
}: {
  apprsData: ApprsData | undefined;
}) => {
  const cancelRef = useRef<HTMLButtonElement>(null); //hook
  const navigate = useNavigate(); //hook

  const deleteAppr = async (id: string) => {
    try {
      await deleteDoc(doc(db, "apprenticeships", id));
    } catch (err) {
      console.log(err);
    }
  };

  const [{ id, isOpen }, setDeleteConfrm] = useState<{
    isOpen: boolean;
    id: string | null;
  }>({ isOpen: false, id: null }); //hook

  return (
    <>
      <AlertDialog
        motionPreset='slideInBottom'
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() =>
          setDeleteConfrm((state) => ({ id: null, isOpen: false }))
        }
        // onCloseComplete={() =>
        //   id && setDeleteConfrm((state) => ({ ...state, id: null }))
        // }
      >
        <AlertDialogOverlay>
          <AlertDialogContent rounded='2xl' w='350px'>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Apprenticeship
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={() => setDeleteConfrm({ id: null, isOpen: false })}
                color='#793EF5'
                // border='1px solid #793EF5'
                _hover={{ bgColor: "lavender" }}>
                Cancel
              </Button>
              <Button
                colorScheme='red'
                onClick={() => {
                  id && deleteAppr(id);
                  setDeleteConfrm({ id: null, isOpen: false });
                }}
                ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

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
          {apprsData?.list?.map((data) => (
            <GridItem
              key={data.id}
              as={Stack}
              colSpan={[6, 3, 2]}
              h='200px'
              // w='365px'
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
                  onClick={() => navigate(data.id)}>
                  <EditIcon boxSize={5} />
                </IconButton>
                <IconButton aria-label='edit' size='xs'>
                  <Square2StackIcon transform='rotate(90deg)' boxSize={5} />
                </IconButton>
                <IconButton
                  aria-label='edit'
                  size='xs'
                  onClick={() =>
                    setDeleteConfrm({ id: data.id, isOpen: true })
                  }>
                  <TrashIcon boxSize={5} />
                </IconButton>
              </Flex>
              <Text fontSize='14px' fontWeight='400'>
                {data?.apprenticeshipDescription}
              </Text>
              <Flex flexWrap='wrap'>
                {data?.teamRoles?.map((role) => (
                  <Box
                    key={role.id}
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
