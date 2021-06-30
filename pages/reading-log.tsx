import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import useSWR, { SWRResponse } from "swr";
import { fetcher } from "../lib/fetcher";
import React from "react";
import LinkCard from "../components/LinkCard";
import { PocketArticleInfo } from "../types";

const ReadingLogLoadingState = () => {
    // TODO: passing numbers here is a hack
    return (
        <>
            {[1, 2, 3].map((num) => {
                return (
                    <LinkCard
                        name={num.toString()}
                        link={num.toString()}
                        description={num.toString()}
                        isLoading={true}
                    />
                );
            })}
        </>
    );
};

const Header = () => {
    return (
        <Text fontSize="6xl" fontWeight="extrabold">
            Reading Log
        </Text>
    );
};

const Description: () => JSX.Element = () => (
    <Text>These are some of my favorite articles and videos I have come across!</Text>
);

function ReadingLogCards(props: { readingLogFromApi?: PocketArticleInfo[]; error?: Error }): JSX.Element {
    const { readingLogFromApi, error } = props;
    if (error !== undefined) {
        return <Text>Sorry, something went wrong!</Text>;
    }
    if (readingLogFromApi === undefined) {
        return <ReadingLogLoadingState />;
    } else {
        return (
            <>
                {readingLogFromApi.map((el) => (
                    <LinkCard
                        name={el.resolved_title}
                        description={`${el.excerpt}..`}
                        link={el.resolved_url}
                        key={el.resolved_url}
                    />
                ))}
            </>
        );
    }
}

const ReadingLogPage = () => {
    const { data: readingLogData, error }: SWRResponse<PocketArticleInfo[], any> = useSWR("/api/reading-log", fetcher);

    return (
        <Layout title="Uses" relativeCanonicalURL="/uses">
            <Stack direction="column" spacing={5} fontSize="lg">
                <Header />
                <Description />
                <ReadingLogCards readingLogFromApi={readingLogData} error={error} />
            </Stack>
        </Layout>
    );
};
export default ReadingLogPage;
