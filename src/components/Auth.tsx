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
import { useState } from "react";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon, LockIcon } from "../assets/Svgs";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex justify='end' h='100vh' bgColor='#5D3FD3' fontSize='15px'>
      <Stack bgColor='white' align='center' w='50%' h='full' px={2} py={10}>
        <Heading size='lg'>Radical X</Heading>
        <Stack flex='1' justify='center' spacing={2}>
          <Heading w='full' size='sm'>
            Login
          </Heading>

          <InputGroup>
            <InputLeftElement h='full'>
              <EnvelopeIcon boxSize={5} />
            </InputLeftElement>
            <Input
              placeholder='Email'
              size='md'
              bgColor='whitesmoke'
              rounded='2xl'
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement h='full'>
              <LockIcon boxSize={5} />
            </InputLeftElement>
            <Input
              placeholder='Password'
              size='md'
              bgColor='whitesmoke'
              rounded='2xl'
            />
            <InputRightElement h='full'>
              <IconButton
                aria-label='show-hide-password'
                variant='unstyled'
                onClick={() =>
                  showPassword ? setShowPassword(false) : setShowPassword(true)
                }>
                {showPassword ? (
                  <EyeIcon boxSize={5} />
                ) : (
                  <EyeSlashIcon boxSize={5} />
                )}
              </IconButton>
            </InputRightElement>
          </InputGroup>

          <Flex justify='space-between'>
            <HStack>
              <Checkbox />
              <Text>Remember me</Text>
            </HStack>
            <Button variant='link' color='#5D3FD3'>
              Forgot Password?
            </Button>
          </Flex>
          <Button color='white' bgColor='#5D3FD3' >Login</Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Auth;
