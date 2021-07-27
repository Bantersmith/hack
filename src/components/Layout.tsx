import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import NavBar from "./NavBar";
import { Wrapper } from "./Wrapper";
import theme from "../theme";

interface LayoutProps {
  variant?: any;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
        }}
      >
        <NavBar />
        <Wrapper variant={variant}>{children}</Wrapper>
      </ColorModeProvider>
    </ChakraProvider>
  );
};
