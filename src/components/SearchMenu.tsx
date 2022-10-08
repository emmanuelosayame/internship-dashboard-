import {
  Button,
  Input,
  Menu,
  MenuButton,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { collection, DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Fuse from "fuse.js";
import debounce from "lodash/debounce";
import { SearchEntity } from "./Types";

const SearchMenu = ({
  menuText,
  searchData,
  mutateFn,
  indexer,
  children,
}: {
  menuText: string;
  searchData: SearchEntity[];
  mutateFn: (value: string) => void;
  indexer: string;
  children: JSX.Element;
}) => {
  const fuse = new Fuse(searchData, { keys: [indexer] });

  const [filtered, setFiltered] = useState<string[]>([]);

  useEffect(() => {
    searchData &&
      setFiltered(searchData?.slice(0, 7)?.map((data) => data[indexer]));

    // return () => {};
  }, [searchData]);

  return (
    <Menu offset={[20, -20]}>
      {({ onClose }) => (
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
            <Stack pt={2}>
              {filtered.map((title) => (
                <Button
                  justifyContent='start'
                  key={title}
                  rounded='10px'
                  onClick={() => {
                    mutateFn(title);
                    // setRole({ ...role, title: title });
                    onClose();
                  }}>
                  {title}
                </Button>
              ))}
            </Stack>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default SearchMenu;
