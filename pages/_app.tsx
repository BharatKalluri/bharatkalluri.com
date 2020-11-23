import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, Heading, Code, Box, Text, useColorMode, Link } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import "../styles/main.css";
import CustomCodeBlock from "../components/CustomCodeBlock";
import NextLink from "next/link";

const CustomLink = (props: any) => {
    const { colorMode } = useColorMode();
    const color = {
      light: 'hsl(208, 99%, 44%)',
      dark: 'hsl(208, 95%, 68%)'
    };
  
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  
    if (isInternalLink) {
      return (
        <NextLink href={href} passHref>
          <Link color={color[colorMode]} {...props} />
        </NextLink>
      );
    }
  
    return <Link color={color[colorMode]} isExternal {...props} />;
  };

const MDXComponents = {
    h1: (props: any) => <Heading as="h1" size="2xl" my={4} {...props} />,
    h3: (props: any) => <Heading as="h1" size="xl" my={4} {...props} />,
    inlineCode: (props: any) => <Code colorScheme="blue" {...props} />,
    code: CustomCodeBlock,
    p: (props: any) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
    ul: (props: any) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
    ol: (props: any) => <Box as="ol" pt={2} pl={4} {...props} />,
    li: (props: any) => <Box as="li" pb={1} {...props} />,
    a: CustomLink,
};

function App({ Component, pageProps }: AppProps): React.ReactNode {
    return (
        <ChakraProvider>
            <MDXProvider components={MDXComponents}>
                <Component {...pageProps} />
            </MDXProvider>
        </ChakraProvider>
    );
}

export default App;
