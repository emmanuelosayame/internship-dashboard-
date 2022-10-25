import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./components/theme";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "@fontsource/space-grotesk";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* Router is a library/dependency for page routing. I'ts also a component because it can be used as an element thus written in the return section of any parant component

    e.g
     const MyApp = () => {
      const variable1 = "Jane"
      return (
        <Router>
        <div>
        I am Jane
        </div>
        </Router>
      )
    }

    In this case MyApp is a function. MyApp is a react component. MyApp returns other components and elements. MyApp is a parent component. Router and div are children components and elements respectively.
    
    Note: React components(Functional components cause there are also class components) are functions. They return children components or elements.

     variable1 is a simply a variable of type string and value Jane
     variables and other javascript codes are written in between the cokmponent itself and the return section of a component.

    */}
    <Router>
      <ChakraProvider theme={theme}>
        {/* This App component is the main component where we start to write our code */}
        {/* components titles begin with Uppercase. A component also has to be imported frpm it source,in this case from the file which the component was created and exported */}
        <App />
        {/* <Newcomp /> */}
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
