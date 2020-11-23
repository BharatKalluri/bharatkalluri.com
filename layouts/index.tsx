import { Heading, Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import React from "react";
import { format } from 'date-fns';

const PostLayout = ({ children, frontMatter }: any) => {
    const publishedAt = Date.parse(frontMatter.publishedAt)
    return (
        <Layout title={`${frontMatter.title} | Bharat Kalluri`}>
            <Stack
                as="article"
                spacing={8}
                justifyContent="center"
                alignItems="flex-start"
                m="0 auto 4rem auto"
                w="100%"
            >
                <Heading as="h1" fontWeight='600' size="2xl" mt={10}>
                    {frontMatter.title}
                </Heading>
                <Text color='grey'>
                    Bharat Kalluri / {format(publishedAt, 'dd-mm-yyyy')}
                </Text>
                {children}
            </Stack>
        </Layout>
    );
};

export default PostLayout;
