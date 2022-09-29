import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon, LockIcon } from "../assets/Svgs";
import * as Yup from "yup";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "./Loading";
import { auth } from "../assets/firebase";
import { updateProfile } from "firebase/auth";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [signIn, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("enter a valid email").required("enter email"),
    password: Yup.string()
      .min(8, "cannot be less than 8")
      .max(30, "")
      .required("enter password"),
  });

  const handleLogin = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    signIn(email, password);
  };

  if (!error && loading) return <Loading />;

  return (
    <Flex justify='end' h='100vh' bgColor='#5D3FD3' fontSize='15px'>
      <Stack
        bgColor='white'
        align='center'
        w={["full", "full", "50%"]}
        h='full'
        px={2}
        py={10}>
        <Heading size='lg'>Radical X</Heading>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}>
          {({ dirty, getFieldProps, touched, errors }) => (
            <Stack as={Form} flex='1' justify='center' spacing={2}>
              <Heading w='full' size='sm'>
                Login
              </Heading>

              <InputGroup>
                <InputLeftElement h='full'>
                  <EnvelopeIcon boxSize={5} />
                </InputLeftElement>
                <Input
                  placeholder='Email'
                  type='email'
                  size='md'
                  bgColor='whitesmoke'
                  rounded='2xl'
                  {...getFieldProps("email")}
                />
              </InputGroup>
              {touched.email && errors.email && (
                <Text
                  color='#5D3FD3'
                  textAlign='center'
                  fontStyle='oblique'
                  fontSize={15}>
                  {errors.email}
                </Text>
              )}

              <InputGroup>
                <InputLeftElement h='full'>
                  <LockIcon boxSize={5} />
                </InputLeftElement>
                <Input
                  placeholder='Password'
                  size='md'
                  bgColor='whitesmoke'
                  rounded='2xl'
                  type={showPassword ? "text" : "password"}
                  {...getFieldProps("password")}
                />
                <InputRightElement h='full'>
                  <IconButton
                    aria-label='show-hide-password'
                    variant='unstyled'
                    onClick={() =>
                      showPassword
                        ? setShowPassword(false)
                        : setShowPassword(true)
                    }>
                    {showPassword ? (
                      <EyeIcon boxSize={5} />
                    ) : (
                      <EyeSlashIcon boxSize={5} />
                    )}
                  </IconButton>
                </InputRightElement>
              </InputGroup>

              {touched.password && errors.password && (
                <Text
                  color='#5D3FD3'
                  textAlign='center'
                  fontStyle='oblique'
                  fontSize={15}>
                  {errors.password}
                </Text>
              )}

              <Flex justify='space-between'>
                <HStack>
                  <Checkbox />
                  <Text>Remember me</Text>
                </HStack>
                <Button variant='link' color='#5D3FD3'>
                  Forgot Password?
                </Button>
              </Flex>
              <Button
                type='submit'
                // isDisabled={!dirty}
                color='white'
                bgColor='#5D3FD3'>
                Login
              </Button>
              <Box h='5'>
                {error && (
                  <Text
                    color='gray'
                    textAlign='center'
                    fontStyle='oblique'
                    fontSize={15}>
                    {error.code === "auth/network-request-failed"
                      ? "oops offline"
                      : error.code}
                  </Text>
                )}
              </Box>
            </Stack>
          )}
        </Formik>
      </Stack>
    </Flex>
  );
};

export default Auth;
