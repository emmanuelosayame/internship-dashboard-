import {
  Button,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  useCheckboxGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { debounce } from "lodash";
import { CheckBoxWithText } from "./CheckBox";

const SearchMenuCheckBox = ({
  children,
  indexer,
  menuText,
  searchData,
  maxSelection,
  mutateFn,
  value,
}: {
  menuText: string;
  children: JSX.Element;
  searchData: DocumentData[] | undefined;
  maxSelection: number;
  mutateFn: (value: string[]) => void;
  indexer: string;
  value: string[];
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { getCheckboxProps } = useCheckboxGroup({
    onChange: (e) => {
      e.length > maxSelection - 1 && onClose();
      mutateFn(e.map((val) => val.toString()));
    },
    value: value,
    // defaultValue: ["2"],
  });

  const fuse = new Fuse(searchData || [], { keys: [indexer] });

  const [filtered, setFiltered] = useState<string[]>([]);

  useEffect(() => {
    searchData &&
      setFiltered(searchData?.slice(0, 7)?.map((data) => data[indexer]));
  }, [searchData]);

  return (
    <Menu offset={[20, -20]} isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
      <>
        <MenuButton
          as={Button}
          w='full'
          border='1px solid #793EF5'
          h='10'
          color='gray'
          textAlign='start'
          leftIcon={children}>
          {/* {role.title} */}
          {menuText}
        </MenuButton>
        <MenuList
          w='350px'
          display='block'
          bgColor='#FFFFF'
          boxShadow='md'
          rounded='12px'
          border='1px solid #CFD3D9'
          p={2}>
          <Input
            placeholder='search'
            size='sm'
            bgColor='gray.100'
            rounded='12px'
            onChange={debounce((e) => {
              if (e.target.value.length > 0) {
                setFiltered(
                  fuse
                    .search(e.target.value)
                    .map((filtered) => filtered.item[indexer])
                );
              } else
                setFiltered(
                  searchData?.slice(0, 7)?.map((data) => data[indexer]) || []
                );
            }, 500)}
          />

          <Stack spacing={1} pt={2}>
            {filtered.map((title) => (
              <HStack
                px={0}
                justifyContent='start'
                key={title}
                rounded='10px'
                _hover={{ bgColor: "gray.100" }}>
                <CheckBoxWithText
                  isDisabled={
                    !!(
                      !value.find((skill) => skill === title) &&
                      value.length > maxSelection - 1
                    )
                  }
                  text={title}
                  textStyle={{ fontSize: "16px" }}
                  {...getCheckboxProps({ value: title })}
                />
              </HStack>
            ))}
          </Stack>
        </MenuList>
      </>
    </Menu>
  );
};

export default SearchMenuCheckBox;
