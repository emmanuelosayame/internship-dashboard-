import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useStore } from "../components/store/Store";
import {
  CautionIcon,
  AddSquareIcon,
  UserIcon,
  PhotoIcon,
  SmsIcon,
} from "../components/Svgs";
import shallow from "zustand/shallow";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TeamAdmin } from "../components/Types";
import { useParams } from "react-router-dom";

const TeamAdmins = () => {
  const params = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const photoRef = useRef<HTMLInputElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const initialState = {
    name: "",
    email: "",
    photoUrl: "",
    linkedInUrl: "",
  };
  const [teamAdmin, setTeamAdmin] = useState<TeamAdmin>(initialState);
  const [photo, setPhoto] = useState<File | null>(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(40, "Thats a little too long")
      .required("enter name"),
    email: Yup.string().email("enter a valid email").required("enter email"),
    linkedInUrl: Yup.string().max(40, "limit 500"),
  });

  const { teamAdmins, addTeamAdmin } = useStore(
    (state) => ({
      teamAdmins: state.apprenticeship.teamAdmins,
      addTeamAdmin: state.addTeamAdmin,
      // addPhoto: state.setAdminPhoto,
      // reset: state.resetTeamAdmin,
      // populateState: state.populateTeamAdmin,
    }),
    shallow
  );

  // console.log(teamAdmins)

  const photoSrc = photo && URL.createObjectURL(photo);

  return (
    <>
      <Modal
        motionPreset='slideInBottom'
        isOpen={isOpen}
        onClose={onClose}
        onCloseComplete={() => {
          setTeamAdmin(initialState);
          photoSrc && URL.revokeObjectURL(photoSrc);
        }}>
        <ModalOverlay />
        <ModalContent pos='fixed' rounded='2xl' border='1px solid #793EF5'>
          <ModalHeader display='flex' justifyContent='space-between' pb='2'>
            <Heading flex='1'>Add Team Admin</Heading>
            <Button
              px='5'
              variant='solid'
              color='white'
              bgColor='#793EF5'
              onClick={() => btnRef.current?.click()}>
              {params.id === "new" ? "Save" : "Edit"}
            </Button>
            <ModalCloseButton position='unset' ml={2} />
          </ModalHeader>

          <ModalBody as={Stack} spacing={3} pb='5'>
            <Box position='relative' mx={2} w='fit-content' py={2}>
              {photoSrc ? (
                <Image w='70px' h='60px' rounded='xl' src={photoSrc} />
              ) : (
                <Box w='70px' h='60px' bgColor='gray.300' rounded='xl' />
              )}
              <IconButton
                position='absolute'
                right={0}
                bottom={0}
                variant='solid'
                bgColor='blue.500'
                color='white'
                rounded='lg'
                aria-label='add-photo'
                size='xs'
                onClick={() => photoRef.current?.click()}>
                <PhotoIcon />
              </IconButton>
              <input
                type='file'
                accept='image/*'
                onChange={(e) => {
                  photoSrc && URL.revokeObjectURL(photoSrc);
                  if (e?.target?.files && e?.target?.files[0]?.size < 5000000) {
                    setPhoto(e.target.files[0]);
                  }
                }}
                ref={photoRef}
                hidden
              />
            </Box>

            <Formik
              enableReinitialize
              validationSchema={validationSchema}
              initialValues={{
                name: teamAdmin.name,
                email: teamAdmin.email,
                linkedInUrl: teamAdmin.linkedInUrl,
              }}
              onSubmit={({ email, linkedInUrl, name }) => {
                if (params.id === "new") {
                  addTeamAdmin({ email, linkedInUrl, name, photo });
                  onClose();
                } else {
                  //remove old image and upload new
                  onClose();
                }
              }}>
              {({ dirty, errors, getFieldProps }) => (
                <Stack as={Form} spacing='3'>
                  <InputGroup>
                    <Input
                      placeholder='name'
                      type='text'
                      rounded='xl'
                      {...getFieldProps("name")}
                    />
                    <InputLeftElement>
                      <UserIcon />
                    </InputLeftElement>
                  </InputGroup>
                  <InputGroup>
                    <Input
                      placeholder='email'
                      type='text'
                      rounded='xl'
                      {...getFieldProps("email")}
                    />
                    <InputLeftElement>
                      <UserIcon />
                    </InputLeftElement>
                  </InputGroup>
                  <InputGroup>
                    <Input
                      placeholder='linkedin URL (optional) '
                      type='text'
                      rounded='xl'
                      {...getFieldProps("linkedInUrl")}
                    />
                    <InputLeftElement>
                      <SmsIcon boxSize={5} />
                    </InputLeftElement>
                  </InputGroup>
                  <button ref={btnRef} hidden />
                </Stack>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Box
        bgColor='white'
        p={3}
        rounded='2xl'
        border='1px solid transparent'
        tabIndex={1}
        outline='none'
        _focusWithin={{ border: "1px solid #793EF5", boxShadow: "2xl" }}
        // _focus={{ border: "1px solid #793EF5" }}
      >
        <Flex justify='space-between' p={1}>
          <HStack>
            <Text fontWeight={600}>Team Admins</Text>
            <Button
              border='1px dashed #793EF5'
              leftIcon={<AddSquareIcon />}
              color='#793EF5'
              onClick={onOpen}>
              Add Team Member
            </Button>
          </HStack>
          <CautionIcon color='gray.400' boxSize={5} />
        </Flex>
        <Grid
          gridTemplateColumns='repeat(4,1fr)'
          gridColumnGap={3}
          gridRowGap={3}
          p={1}
          w='full'>
          {teamAdmins.map((admin) => {
            // const src = admin.photo ? URL.createObjectURL(admin.photo) : null;
            const src = null;
            return (
              <GridItem
                key={admin.email}
                cursor='pointer'
                as={HStack}
                colSpan={2}
                border='1px solid gainsboro'
                rounded='xl'
                p={2}
                onClick={() => {
                  setTeamAdmin(admin);
                  onOpen();
                }}>
                {src ? (
                  <Image src={src} w='40px' rounded='lg' h='40px' />
                ) : (
                  <Box w='40px' rounded='lg' h='40px' bgColor='gray.200' />
                )}
                <Text fontSize='13px' flex='1'>
                  {admin.name}
                </Text>
                {/* <LinkedIn /> */}
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default TeamAdmins;
