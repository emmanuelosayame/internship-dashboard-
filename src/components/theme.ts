import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  //   useSystemColorMode: false,
};

const theme = extendTheme({
  fonts: {
    heading: `'Space Grotesk', sans-serif`,
    body: `'Space Grotesk', sans-serif`,
  },
  config,
  components: {
    Text: {
      baseStyle: {
        fontSize: "18px",
        lineHeight: "18px",
        color: "#1E1E1E",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 10,
        fontSize: "13px",
        fontWeight: 500,
      },
      defaultProps: {
        size: "sm", // default is md
        variant: "ghost", // default is solid
        fontSize: "13px",
        fontWeight: 500,
        // colorScheme: 'green', // default is gray
      },
    },
    Heading: {
      defaultProps: {
        size: "md",
      },
    },
    Input: {
      defaultProps: {
        size: "md",
        bg: "whitesmoke",
        borderRadius: 20,
        // _invalid: { border: "1px solid red" },
      },
      baseStyle: {
        rounded: "md",
        borderRadius: 20,
        bg: "whitesmoke",
      },
    },
    Textarea: {
      defaultProps: {
        size: "sm",
      },
    },
    Checkbox: {
      baseStyle: {
        icon: {
          color: "#793EF5",
          // opacity: "1",
          // bg: "red",
        },
        control: {
          border: "1px",
          borderColor: "gray.300",
          borderRadius: "50%",
          _checked: {
            bg: "rgb(121, 62, 245,0.4)",
            // opacity: "0.4",
          },
          _disabled: {
            borderColor: "gray.300",
            bg: "gray.200",
          },
        },
        label: {
          fontWeight: "medium",
          color: "gray.900",
          bg: "red",
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        "fontSize": "15px",
        "&::-webkit-scrollbar": {
          width: "6px",
          backgroundColor: "transparent",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb": {
          width: "6px",
          backgroundColor: "gray",
          borderRadius: "10px",
        },
        "bg": "#F1F4F8",
      },
    },
  },
});

export default theme;
