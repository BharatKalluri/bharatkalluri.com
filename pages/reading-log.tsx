import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import useSWR, { SWRResponse } from "swr";
import { fetcher } from "../lib/fetcher";
import React from "react";
import LinkCard from "../components/LinkCard";
import { PocketArticleInfo } from "../types";

const ReadingLogPage = () => {
    const { data: readingLogData }: SWRResponse<PocketArticleInfo[], any> = useSWR("/api/reading-log", fetcher);

    return (
        <Layout title="Uses" relativeCanonicalURL="/uses">
            <Stack direction="column" spacing={5} fontSize="lg">
                <Text fontSize="6xl" fontWeight="extrabold">
                    Reading Log
                </Text>

                <Text>
                    These are some of my favorite articles and videos I have come across!
                </Text>

                {readingLogData &&
                    readingLogData.map((el: PocketArticleInfo) => {
                        return (
                            <LinkCard
                                name={el.resolved_title}
                                description={`${el.excerpt}..`}
                                link={el.resolved_url}
                                key={el.resolved_url}
                            />
                        );
                    })}
            </Stack>
        </Layout>
    );
};
export default ReadingLogPage;
