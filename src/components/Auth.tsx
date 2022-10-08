import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import {
  SmsIcon,
  EyeIcon,
  EyeSlashIcon,
  LockIcon,
  TickSquare,
} from "../components/Svgs";
import * as Yup from "yup";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { LoadingBlur } from "./Loading";
import { auth } from "../../firebase";
import { updateProfile } from "firebase/auth";
import logo from "../assets/RadicallX-Black-Logo 1.png";

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

  if (!error && loading) return <LoadingBlur />;

  return (
    <Flex justify='end' h='100vh' bgColor='#793EF5' fontSize='156px'>
      <Stack
        bgColor='#FFFFFF'
        align='center'
        w={["full", "full", "50%"]}
        h='full'
        px={2}
        py={10}>
        <Image src={logo} />

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}>
          {({ dirty, getFieldProps, touched, errors }) => (
            <Stack as={Form} flex='1' justify='center' spacing={2} w='360px'>
              <Text fontSize='24px' lineHeight='24px'>
                Login
              </Text>

              <InputGroup>
                <InputLeftElement h='full'>
                  <SmsIcon boxSize={5} />
                </InputLeftElement>
                <Input
                  placeholder='Email'
                  type='email'
                  size='md'
                  bgColor='#F5F5F7'
                  border='1px solid #CECECE'
                  rounded='2xl'
                  {...getFieldProps("email")}
                />
              </InputGroup>
              {touched.email && errors.email && (
                <Text
                  color='#793EF5'
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
                  _placeholder={{ fontSize: "16px", fontWeight: "400" }}
                  size='md'
                  bgColor='#F5F5F7'
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
                  color='#793EF5'
                  textAlign='center'
                  fontStyle='oblique'
                  fontSize={15}>
                  {errors.password}
                </Text>
              )}

              <Flex justify='space-between'>
                <HStack>
                  <IconButton
                    aria-label='forgot-password'
                    size='xs'
                    variant='unstyled'>
                    <TickSquare />
                  </IconButton>
                  <Text fontSize='16px'>Remember me</Text>
                </HStack>
                <Button variant='link' fontSize='16px' color='#793EF5'>
                  Forgot Password?
                </Button>
              </Flex>

              <Button
                type='submit'
                color='white'
                rounded='16px'
                height='48px'
                fontWeight={600}
                bgColor='#793EF5'>
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
