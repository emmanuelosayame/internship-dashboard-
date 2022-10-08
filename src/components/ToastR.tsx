import { Box, Text, ToastProps, useToast } from "@chakra-ui/react";

export interface ToastRProps {
  title: string;
  body?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

const useToastR = ({ title, body }: ToastRProps) =>
  useToast({
    duration: 3500,
    render: () => (
      <Box
        borderRadius='15px'
        bgColor='white'
        border='1px solid #793EF5'
        mx='auto'
        w='fit-content'
        maxW='300px'
        py='1'
        px='4'>
        <Text textAlign='center' color='#793EF5' fontWeight={600}>
          {title}
        </Text>
        <Text textAlign='center' color='#793EF5' fontSize='15'>
          {body}
        </Text>
      </Box>
    ),
  });

export default useToastR;
