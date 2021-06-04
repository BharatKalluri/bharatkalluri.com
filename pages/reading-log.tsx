import { Stack, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import useSWR from 'swr';
import { fetcher } from '../lib/fetcher';
import React from 'react';
import LinkCard from '../components/LinkCard';

const ReadingLogPage = () => {
        const { data: readingLogData } = useSWR('/api/reading-log', fetcher);

        return (
            <Layout title='Uses' relativeCanonicalURL='/uses'>
                <Stack direction='column' spacing={5} fontSize='lg'>
                    <Text fontSize='6xl' fontWeight='extrabold'>
                        Reading Log
                    </Text>
                    {readingLogData && readingLogData.map((el: any) => {
                        return <LinkCard
                            name={el.resolved_title}
                            description={el.excerpt}
                            link={el.resolved_url}
                            key={el.resolved_url}
                        />;
                    })}
                </Stack>
            </Layout>
        );
    }
;

export default ReadingLogPage;
