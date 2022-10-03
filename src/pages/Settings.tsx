import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { doc, setDoc } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { auth, db } from "../assets/firebase";
import { EditIcon, TickSquare } from "../assets/Svgs";
import Loading from "../components/Loading";

const Settings = ({
  userData,
  loadingData,
}: {
  userData: any;
  loadingData: boolean;
}) => {
  const [user] = useAuthState(auth);

  const photoRef = useRef<HTMLInputElement | null>(null);
  const [editName, setEditName] = useState(false);
  const [name, setName] = useState(userData?.name);
  const [photo, setPhoto] = useState<File | undefined>(undefined);

  const lastLogin = user?.metadata?.lastSignInTime
    ? new Date(user?.metadata?.lastSignInTime)
    : null;

  const { isOpen, onOpen, onClose } = useDisclosure();

  // console.log(userData);

  const photoChange = (file: File | undefined) => {
    if (file && file?.size < 5000000) {
      setPhoto(file);
      onOpen();
    }
  };

  const photoPreview = photo && URL.createObjectURL(photo);

  if (loadingData) return <Loading />;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          w='fit-content'
          h='300px'
          bgColor='transparent'
          boxShadow='none'>
          <HStack spacing={4}>
            <Image
              rounded='3xl'
              overflow='hidden'
              src={photoPreview}
              w='300px'
              h='300px'
            />
            <IconButton
              aria-label='photo'
              rounded='xl'
              w='fit-content'
              bgColor='lavender'
              variant='solid'
              onClick={() => {
                photoPreview && URL.revokeObjectURL(photoPreview);
                onClose();
              }}>
              <TickSquare boxSize='6' />
            </IconButton>
          </HStack>
        </ModalContent>
      </Modal>

      <Stack spacing={7} p={5}>
        <Flex justify='space-between'>
          <HStack w='fit-content' h='25px' my={4}>
            {editName ? (
              <Input
                maxW='280px'
                fontSize='35px'
                fontWeight={600}
                value={name}
                rounded='2xl'
                color='#793EF5'
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              <Text
                w='full'
                fontSize='35px'
                fontWeight={600}
                // textAlign='center'
                size='lg'>
                {/* <span style={{ color: "#793EF5" }}></span> */}
                {userData?.name || user?.displayName}
              </Text>
            )}
            <IconButton
              aria-label='edit-profile'
              size='xs'
              onClick={() => {
                if (editName && name === userData?.name) {
                  setEditName(false);
                } else if (editName && name.length > 1) {
                  setDoc(
                    doc(db, "users", `${user?.uid}`),
                    {
                      name: name,
                    },
                    { merge: true }
                  );
                  setEditName(false);
                } else setEditName(true);
              }}>
              {editName ? <TickSquare boxSize='5' /> : <EditIcon boxSize='5' />}
            </IconButton>
          </HStack>

          <Button
            size='lg'
            bgColor='#793EF5'
            color='white'
            rounded='15px'
            onClick={() => auth.signOut()}>
            Sign Out
          </Button>
        </Flex>

        <HStack>
          <Box w='120px' h='120px' rounded='15px' bgColor='gray.300' />
          <IconButton
            aria-label='edit-profile'
            size='xs'
            onClick={() => photoRef.current?.click()}>
            <EditIcon boxSize='5' />
          </IconButton>
          <input
            type='file'
            accept='image/*'
            hidden
            ref={photoRef}
            onChange={(e) => photoChange(e?.target?.files?.[0])}
          />
        </HStack>

        <Stack w='fit-content' spacing={4}>
          <HStack justify='space-between'>
            <Heading size='md'>Apprenticehips </Heading>
            <Heading size='md'>: 2</Heading>
          </HStack>

          <HStack justify='space-between'>
            <Heading size='md'>Internships </Heading>
            <Heading size='md'>: 2</Heading>
          </HStack>
        </Stack>

        <HStack pos='absolute' bottom='10' right='10'>
          <Text fontSize='13px' color='gray'>
            Last Login
          </Text>
          <Text fontSize='13px' color='gray'>
            -{" "}
            {lastLogin?.toLocaleString("en", {
              month: "short",
              day: "2-digit",
            })}{" "}
            @{" "}
            {lastLogin?.toLocaleTimeString("en", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </HStack>
      </Stack>
    </>
  );
};

export default Settings;
