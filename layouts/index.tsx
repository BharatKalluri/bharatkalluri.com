import { Heading, Stack, Text, useColorMode } from "@chakra-ui/react";
import Layout from "../components/Layout";
import React from "react";
import decodeWith from "../utils/ioTsUtils";
import { BlogFrontMatter, BlogFrontMatterValidator } from "../types";


export const UtterancesComments: React.FC = () => {
    const { colorMode } = useColorMode();
    // TODO: This duplicates like there is no tomorrow. Need to fix the ref piece.
    return (
        <section
            ref={elem => {
                if (!elem) {
                    return;
                }
                const scriptElem = document.createElement("script");
                scriptElem.src = "https://utteranc.es/client.js";
                scriptElem.async = true;
                scriptElem.crossOrigin = "anonymous";
                scriptElem.setAttribute("repo", "bharatkalluri/comments");
                scriptElem.setAttribute("issue-term", "url");
                scriptElem.setAttribute("theme", colorMode === 'light' ? 'github-light' : 'github-dark');
                elem.appendChild(scriptElem);
            }}
        />
    )
};


interface IPostLayoutProps {
    frontMatter: BlogFrontMatter;
    children: JSX.Element | Array<JSX.Element>;
}

const PostLayout = (props: IPostLayoutProps) => {
    const frontMatter = decodeWith(BlogFrontMatterValidator)(props.frontMatter);
    const publishedAt = frontMatter.publishedAt;
    const postTitle = frontMatter.title;
    const postDescription = frontMatter.description;
    const postLink = `${frontMatter.__resourcePath.replace(
        ".mdx",
        ""
    )}`;

    return (
        <>
            <Layout title={postTitle} description={postDescription} relativeCanonicalURL={postLink}>
                <Stack
                    as="article"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    w="100%"
                >
                    <Heading as="h1" fontWeight="600" size="2xl" mt={10}>
                        {frontMatter.title}
                    </Heading>
                    <Text color="grey">Bharat Kalluri / {publishedAt}</Text>
                    {props.children}
                </Stack>
            </Layout>
        </>
    );
};

export default PostLayout;
