import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import Layout from '../../components/Layout';
import { MDXComponents } from '../../components/MDXComponents';
import { BlogFrontMatter, BlogFrontMatterValidator } from '../../types';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import decodeWith from '../../utils/ioTsUtils';
import { Stack, Text } from '@chakra-ui/react';
import React from 'react';


export default function PostPage(props: { source: any, frontMatter: BlogFrontMatter, postFileName: string }) {
    const frontMatter = decodeWith(BlogFrontMatterValidator)({
        ...props.frontMatter,
        __resourcePath: props.postFileName
    });
    const publishedAt = frontMatter.publishedAt;
    const postTitle = frontMatter.title;
    const postDescription = frontMatter.description;
    const postLink = `${frontMatter.__resourcePath.replace('.mdx', '')}`;

    return (
        <>
            <Layout title={postTitle} description={postDescription} relativeCanonicalURL={postLink}>
                <Stack
                    as='article'
                    spacing={8}
                    justifyContent='center'
                    alignItems='flex-start'
                    m='0 auto 4rem auto'
                    w='100%'
                >
                    <Text fontSize='6xl' fontWeight='extrabold'>
                        {frontMatter.title}
                    </Text>
                    <Text color='grey'>Bharat Kalluri / {publishedAt}</Text>
                    <MDXRemote {...props.source} components={MDXComponents} />
                    <script defer src='https://commento.cloud.bharatkalluri.com/js/commento.js' />
                    <div id='commento' />
                </Stack>
            </Layout>
        </>
    );
}

export const getStaticProps = async ({ params }: any) => {
    const postFileName = `${params.slug}.mdx`
    const postFilePath = path.join(POSTS_PATH, postFileName);
    const source = fs.readFileSync(postFilePath);

    const { content, data } = matter(source);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: []
        },
        scope: data
    });

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
            postFilePath: postFilePath,
            postFileName: postFileName
        }
    };
};

export const getStaticPaths = async () => {
    const paths = postFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false
    };
};