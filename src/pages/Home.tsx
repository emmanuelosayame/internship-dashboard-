import { Button, Center, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <div style={{ height: "100%" }}>
      <Link to='/apprenticeships'>
        <Text decoration='underline' color='#793EF5'>
          Go to apprenticeship page
        </Text>
      </Link>
      <Center h='full' fontSize='30px'>
        🥹
      </Center>
    </div>
  );
};

export default Home;
