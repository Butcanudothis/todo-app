// app/providers.tsx
"use client";

import {
  ChakraBaseProvider,
  extendBaseTheme,
theme as chakraTheme
} from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const {   Heading,Container,
  Tabs } = chakraTheme.components


const customVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    fontFamily: "sans-serif",
    bg: `${c}.300`,
    fontWeight: "semibold",
    color: "mainAction.600",
    borderRadius: "lg",
    transition: "transform 0.15s ease-out, background 0.15s ease-out",
    _dark: {
      bg: `${c}.300`,
      color: "mainAction.600",
    },

    _hover: {
      transform: "scale(1.01, 1.01)",
      bg: `${c}.400`,
      color: "mainAction.300",

      _dark: {
        bg: `${c}.300`,
      },
    },

    _active: {
      bg: `${c}.700`,
      transform: "scale(1, 1)",

      _dark: {
        bg: `${c}.400`,
      },
    },
  };
});

export const buttonTheme = defineStyleConfig({
  variants: { customVariant },
  defaultProps: { colorScheme: "mainAction" },
});

const theme = extendBaseTheme({
  colors: {
    mainAction: {
      50: "#f2f9f9",
      100: "#e6f3f2",
      200: "#cce6e5",
      300: "#e6f7f8",
      400: "#b3e7e5",
      500: "#77c2bf",
      600: "#4dbab2",
      700: "#3d8e8b",
      800: "#005e5b",
      900: "#004e4c",
    },
    priorityHigh: {
      500: "#ca8680",
      300: "#f8e6e5",
    },
    priorityMedium: {
      500: "#d49f58",
      300: "#faf3ea",
    },
    priorityLow: {
      500: "#a2ce97",
      300: "#f3f9f2",
    },
  },
  components: {
    Button: buttonTheme,
    Heading,
    Tabs,
    Container,


  },
});


export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>;
}
