import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  AddDocIcon,
  CalenderDaysIcon,
  CautionIcon,
  MobileAppIcon,
  MonitorIcon,
  PhotoIcon,
  PlusSquareIcon,
  XmarkIcon,
} from "../assets/Svgs";
import TextareaAutosize from "react-textarea-autosize";
import * as Yup from "yup";
import { debounce } from "lodash";
import { doc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { auth, db } from "../assets/firebase";
import { useDropzone } from "react-dropzone";
import {
  ApprDataTypes,
  ApprErrorTypes,
  validationSchemaA,
} from "../assets/Types";

const FocusableBox = ({
  text,
  children,
  focusShow,
  focused,
}: {
  text: string;
  children?: ReactNode;
  focusShow?: boolean;
  focused?: boolean;
}) => (
  <Box
    bgColor='white'
    py={4}
    px={5}
    rounded='2xl'
    tabIndex={1}
    outline='none'
    border={focused ? "1px solid #5D3FD3" : "1px solid transparent"}
    boxShadow={focused ? "lg" : "unset"}
    _focusWithin={
      focusShow ? { border: "1px solid #5D3FD3", boxShadow: "2xl" } : {}
    }
    // _focus={{ border: "1px solid #5D3FD3" }}
  >
    <Flex justify='space-between' py={2}>
      <Text fontWeight={600}>{text}</Text>
      <CautionIcon color='gray.400' boxSize={5} />
    </Flex>
    {children}
  </Box>
);

const EditorSection = ({
  values,
  setValues,
}: {
  values: ApprDataTypes;
  setValues: Dispatch<SetStateAction<ApprDataTypes>>;
}) => {
  const photoRef = useRef<HTMLInputElement | null>(null);
  const photoSrc = values.photo && URL.createObjectURL(values.photo);
  const { getInputProps, getRootProps, acceptedFiles, isDragActive } =
    useDropzone();
  const [teamRoles, setTeamRoles] = useState<any[]>([]);
  const [teamAdmins, setTeamAdmins] = useState<any[]>([]);

  const [tDP, setTDP] = useState(0);

  useEffect(() => {
    if (values.apprenticeshipTitle.length > 0) {
      setTDP(1);
    } else {
      setTDP(0);
      return;
    }
    if (
      values.apprenticeshipDescription.length > 0 &&
      values.companyDescription.length > 0 &&
      values.apprenticeshipTitle.length > 0
    ) {
      setTDP(3);
    } else if (
      values.companyDescription.length > 0 &&
      values.apprenticeshipTitle.length > 0
    ) {
      setTDP(2);
    }
  }, [values]);

  const [user] = useAuthState(auth);

  const [filteredFiles, setFilteredFiles] = useState<File[]>([]);

  const removeOneFile = (filename: string) => {
    setFilteredFiles(filteredFiles.filter((file) => filename !== file.name));
  };

  useEffect(() => {
    if (acceptedFiles && acceptedFiles.length > 0)
      setFilteredFiles(
        acceptedFiles.filter((file) => file.size < 100000).slice(0, 4)
      );
  }, [acceptedFiles]);

  const [errors, setErrors] = useState<ApprErrorTypes>({
    apprenticeshipTitle: null,
    companyDescription: null,
    apprenticeshipDescription: null,
  });

  const handleTextChange = debounce(
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      // console.log(e.target.name, e.target.value);
      const value = { [e.target.name]: e.target.value };

      validationSchemaA
        .validate(value)
        .then(() => {
          setValues({ ...values, ...value });
          // if (errors[e.target.name]) {
          //   setErrors({ ...errors, [e.target.name]: null });
          // }
        })
        .catch((error) =>
          setErrors({ ...errors, [e.target.name]: error.message })
        );
    },
    500
  );

  return (
    <Stack mx='auto' maxW='650px' w='full' pt='150px' pb='40px' spacing={3}>
      <Stack spacing={3}>
        <FocusableBox
          focusShow={true}
          focused={!!(tDP === 0)}
          text='Company Logo & Apprenticeship Title'>
          <Flex w='full' justify='space-between' align='center'>
            <Box position='relative' mx={2}>
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
                    setValues({ ...values, photo: e.target.files[0] });
                  }
                }}
                ref={photoRef}
                hidden
              />
            </Box>
            <Input
              variant='unstyled'
              resize='none'
              fontSize='21'
              outline={0}
              _placeholder={{ color: "gray.400" }}
              placeholder='Enter Apprenticeship Title'
              name='apprenticeshipTitle'
              onChange={handleTextChange}
            />
          </Flex>
          {errors.apprenticeshipTitle && (
            <Text
              color='#5D3FD3'
              textAlign='center'
              fontStyle='oblique'
              fontSize={15}>
              {errors.apprenticeshipTitle}
            </Text>
          )}
        </FocusableBox>

        <FocusableBox
          focusShow={!!(tDP > 0)}
          // focused={!!(tDP === 1)}
          text='Company Description'>
          <Textarea
            as={TextareaAutosize}
            rows={1}
            minRows={1}
            maxRows={7}
            fontSize='17'
            placeholder='Enter Description'
            style={{ width: "100%", outline: "none", resize: "none" }}
            name='companyDescription'
            variant='unstyled'
            disabled={!!(tDP < 1)}
            sx={{
              "&::-webkit-scrollbar": {
                width: "1px",
                backgroundColor: "transparent",
                borderRadius: "30px",
              },
              "&::-webkit-scrollbar-thumb": {
                width: "1px",
                backgroundColor: "transparent",
                borderRadius: "30px",
              },
            }}
            onChange={handleTextChange}
          />
          {errors.companyDescription && (
            <Text
              color='#5D3FD3'
              textAlign='center'
              fontStyle='oblique'
              fontSize={15}>
              {errors.companyDescription}
            </Text>
          )}
        </FocusableBox>

        <FocusableBox focusShow={!!(tDP > 1)} text='Apprenticeship Description'>
          <Textarea
            as={TextareaAutosize}
            placeholder='Enter Description'
            style={{ width: "100%", outline: "none", resize: "none" }}
            rows={1}
            minRows={1}
            maxRows={7}
            fontSize='17'
            variant='unstyled'
            name='apprenticeshipDescription'
            onChange={handleTextChange}
            disabled={!(tDP > 1)}
            sx={{
              "&::-webkit-scrollbar": {
                width: "1px",
                backgroundColor: "transparent",
                borderRadius: "30px",
              },
              "&::-webkit-scrollbar-thumb": {
                width: "1px",
                backgroundColor: "transparent",
                borderRadius: "30px",
              },
            }}
          />
          {errors.apprenticeshipDescription && (
            <Text
              color='#5D3FD3'
              textAlign='center'
              fontStyle='oblique'
              fontSize={15}>
              {errors.apprenticeshipDescription}
            </Text>
          )}
        </FocusableBox>
        {/* <button style={{ display: "none" }} ref={form1Ref} /> */}
      </Stack>

      <FocusableBox
        focusShow={true}
        text="Introduce yourself, your company, and what you're building.">
        <Button
          // zIndex={200}
          {...getRootProps()}
          w='full'
          size='lg'
          border='1px dashed gray'
          variant='solid'
          fontSize='15'
          rightIcon={<AddDocIcon fill='gray' color='gray.400' />}>
          {isDragActive
            ? "Release to Drop"
            : "Drag n drop to upload your video"}
        </Button>
        <input {...getInputProps()} type='file' hidden />
        <HStack pt={3}>
          {filteredFiles.map((file) => {
            return (
              <Flex
                bgColor='lavender'
                border='1px solid #5D3FD3'
                rounded='lg'
                align='center'
                px={2}
                py={0.5}
                fontSize='15'
                color='#5D3FD3'>
                <Text>
                  {`${file.name.slice(0, 17)}${
                    file.name.length > 17 ? "..." : ""
                  }`}
                </Text>
                <IconButton
                  size='xs'
                  aria-label='cancel video'
                  onClick={() => removeOneFile(file.name)}>
                  <XmarkIcon />
                </IconButton>
              </Flex>
            );
          })}
        </HStack>
      </FocusableBox>

      <FocusableBox text='Team Type'>
        <Grid
          gridTemplateColumns='repeat(3,1fr)'
          gridColumnGap={3}
          gridRowGap={3}
          w='full'>
          <GridItem w='full' border='1px solid gainsboro' p={2} rounded='2xl'>
            <Flex w='full' justify='space-between'>
              <MonitorIcon color='#5D3FD3' />
              <Checkbox />
            </Flex>
            <Text>Web Platform</Text>
          </GridItem>

          <GridItem w='full' border='1px solid gainsboro' p={2} rounded='2xl'>
            <Flex w='full' justify='space-between'>
              <MobileAppIcon color='#5D3FD3' />
              <Checkbox />
            </Flex>
            <Text>Mobile App</Text>
          </GridItem>

          <GridItem w='full' border='1px solid gainsboro' p={2} rounded='2xl'>
            <Flex w='full' justify='space-between'>
              <MonitorIcon color='#5D3FD3' />
              <Checkbox />
            </Flex>
            <Text>Growth</Text>
          </GridItem>

          <GridItem w='full' border='1px solid gainsboro' p={2} rounded='2xl'>
            <Flex w='full' justify='space-between'>
              <MonitorIcon color='#5D3FD3' />
              <Checkbox />
            </Flex>
            <Text>Marketing Website</Text>
          </GridItem>

          <GridItem w='full' border='1px solid gainsboro' p={2} rounded='2xl'>
            <Flex w='full' justify='space-between'>
              <MonitorIcon color='#5D3FD3' />
              <Checkbox />
            </Flex>
            <Text>Prototyping</Text>
          </GridItem>

          <GridItem w='full' border='1px solid gainsboro' p={2} rounded='2xl'>
            <Flex w='full' justify='space-between'>
              <MonitorIcon color='#5D3FD3' />
              <Checkbox />
            </Flex>
            <Text>Data</Text>
          </GridItem>

          <GridItem w='full' border='1px solid gainsboro' p={2} rounded='2xl'>
            <Flex w='full' justify='space-between'>
              <MonitorIcon color='#5D3FD3' />
              <Checkbox />
            </Flex>
            <Text>Custom Team</Text>
          </GridItem>
        </Grid>
      </FocusableBox>

      <Box
        bgColor='white'
        p={3}
        rounded='2xl'
        border='1px solid transparent'
        tabIndex={1}
        outline='none'
        _focusWithin={{ border: "1px solid #5D3FD3", boxShadow: "2xl" }}
        // _focus={{ border: "1px solid #5D3FD3" }}
      >
        <Flex justify='space-between' p={1}>
          <HStack>
            <Text fontWeight={600}>Team Roles</Text>
            <Button
              border='1px dashed #5D3FD3'
              leftIcon={<PlusSquareIcon />}
              color='#5D3FD3'>
              Add Team Member
            </Button>
          </HStack>
          <CautionIcon color='gray.400' boxSize={5} />
        </Flex>
        <Grid
          gridTemplateColumns='repeat(4,1fr)'
          gridColumnGap={3}
          gridRowGap={3}
          w='full'>
          {teamRoles.map((member) => (
            <GridItem colSpan={2} border='1px solid gainsboro' p={2}>
              <Flex justify='space-between'>
                <Box w='50' h='40' bgColor='gainsboro' />
                <Text fontWeight={600}>{member.name}</Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>

      <Box
        bgColor='white'
        p={3}
        rounded='2xl'
        border='1px solid transparent'
        tabIndex={1}
        outline='none'
        _focusWithin={{ border: "1px solid #5D3FD3", boxShadow: "2xl" }}
        // _focus={{ border: "1px solid #5D3FD3" }}
      >
        <Flex justify='space-between' p={1}>
          <HStack>
            <Text fontWeight={600}>Team Admin</Text>
            <Button
              border='1px dashed #5D3FD3'
              leftIcon={<PlusSquareIcon />}
              color='#5D3FD3'>
              Add Team Member
            </Button>
          </HStack>
          <CautionIcon color='gray.400' boxSize={5} />
        </Flex>
        <Grid
          gridTemplateColumns='repeat(4,1fr)'
          gridColumnGap={3}
          gridRowGap={3}
          w='full'>
          {teamAdmins.map((member) => (
            <GridItem colSpan={2} border='1px solid gainsboro' p={2}>
              <Flex justify='space-between'>
                <Box w='50' h='40' bgColor='gainsboro' />
                <Text fontWeight={600}>{member.name}</Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>

      <FocusableBox text='Timeline'>
        <HStack>
          <InputGroup>
            <Input rounded='xl' placeholder='Start Date' />
            <InputRightElement>
              <CalenderDaysIcon color='#5D3FD3' />
            </InputRightElement>
          </InputGroup>

          <InputGroup>
            <Input rounded='xl' placeholder='Estimated End Date' />
            <InputRightElement>
              <CalenderDaysIcon color='#5D3FD3' />
            </InputRightElement>
          </InputGroup>
        </HStack>
      </FocusableBox>
    </Stack>
  );
};

export default EditorSection;
