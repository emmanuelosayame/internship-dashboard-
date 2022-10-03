import {
  Box,
  chakra,
  Flex,
  HStack,
  Text,
  TextProps,
  useCheckbox,
  UseCheckboxProps,
} from "@chakra-ui/react";
import { TickSquare, UntickIcon } from "../assets/Svgs";

export const CheckBox = (props: UseCheckboxProps) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <chakra.label
      alignItems='center'
      px={3}
      py={1}
      cursor='pointer'
      {...htmlProps}>
      <input {...getInputProps()} hidden />
      <Flex {...getCheckboxProps()}>
        {state.isChecked ? <TickSquare boxSize={6} /> : <UntickIcon />}
      </Flex>
    </chakra.label>
  );
};

interface UseCheckboxWithTextProps extends UseCheckboxProps {
  text: string;
  textStyle?: TextProps;
}

export const CheckBoxWithText = (props: UseCheckboxWithTextProps) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <chakra.label
      alignItems='center'
      w='full'
      px={3}
      py={1}
      cursor='pointer'
      {...htmlProps}>
      <input {...getInputProps()} hidden />

      <HStack {...getCheckboxProps()} >
        {state.isChecked ? <TickSquare boxSize={6} /> : <UntickIcon />}
        <Text {...props.textStyle}>{props.text}</Text>
      </HStack>
    </chakra.label>
  );
};
