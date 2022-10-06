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
import { updateProfile } from "firebase/auth";
import { collection, doc, query, setDoc, where } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  useCollection,
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { auth, db, storage } from "../assets/firebase";
import { useStore } from "../assets/store/Store";
import { EditIcon, TickSquare, XmarkIcon } from "../assets/Svgs";
import { ApprsData, ApprType, UserData } from "../assets/Types";
import { Loading } from "../components/Loading";

const Settings = ({
  userData,
  apprsData,
}: {
  userData: UserData;
  apprsData: ApprsData | undefined;
}) => {
  const updateUserData = useStore((state) => state.updateUserData);
  const user = auth.currentUser;

  const photoRef = useRef<HTMLInputElement | null>(null);
  const [editName, setEditName] = useState(false);
  const [name, setName] = useState(user?.displayName ?? "");
  const [photo, setPhoto] = useState<File | null>(null);

  const lastLogin = user?.metadata?.lastSignInTime
    ? new Date(user?.metadata?.lastSignInTime)
    : null;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const photoChange = (file: File | undefined) => {
    if (file && file?.size < 5000000) {
      setPhoto(file);
      onOpen();
    }
  };

  const handlePhotoChange = async () => {
    if (user && photo) {
      const uploadTask = await uploadBytes(ref(storage, "profiles"), photo);
      try {
        const photoURL = await getDownloadURL(uploadTask.ref);
        updateUserData({ photoURL });
        updateProfile(user, { photoURL });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const photoPreview = photo && URL.createObjectURL(photo);

  // if (loadingData) return <Loading />;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onCloseComplete={() =>
          photoPreview && URL.revokeObjectURL(photoPreview)
        }>
        <ModalOverlay />
        <ModalContent
          w='fit-content'
          h='300px'
          bgColor='transparent'
          boxShadow='none'>
          <HStack spacing={4}>
            <IconButton
              aria-label='photo'
              rounded='xl'
              w='fit-content'
              bgColor='lavender'
              variant='solid'
              onClick={() => {
                photoPreview && URL.revokeObjectURL(photoPreview);
                onClose();
                setPhoto(null);
              }}>
              <XmarkIcon color='#793EF5' boxSize='6' />
            </IconButton>
            {photoPreview && (
              <Image
                rounded='3xl'
                overflow='hidden'
                src={photoPreview}
                w='300px'
                h='300px'
              />
            )}
            <IconButton
              aria-label='photo'
              rounded='xl'
              w='fit-content'
              bgColor='lavender'
              variant='solid'
              onClick={() => {
                photoPreview && URL.revokeObjectURL(photoPreview);
                handlePhotoChange();
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
                {userData?.displayName || user?.displayName}
              </Text>
            )}
            <IconButton
              aria-label='edit-profile'
              size='xs'
              onClick={() => {
                if (editName && name === userData?.displayName) {
                  setEditName(false);
                  return;
                } else if (editName && name.length > 1 && auth.currentUser) {
                  //TODO update user
                  updateProfile(auth.currentUser, { displayName: name });
                  updateUserData({ displayName: name });
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
            onClick={() => {
              photo ? onOpen() : photoRef.current?.click();
            }}>
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
            <Heading size='md'>: {apprsData?.size}</Heading>
          </HStack>

          <HStack justify='space-between'>
            <Heading size='md'>Internships </Heading>
            <Heading size='md'>: 0</Heading>
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
