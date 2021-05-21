import Layout from "../components/Layout";
import { Box, Flex, Heading, Image, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import { ITraktTvStats } from "../interfaces";
import { BookData } from "../types";

const StatBox = (props: { heading: string; data?: string, imageUrl?: string }) => {
    const { colorMode } = useColorMode();
    const borderColor = {
        light: "gray.200",
        dark: "gray.700"
    };
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            padding={4}
            margin={2}
            border="1px"
            borderColor={borderColor[colorMode]}
            borderRadius={8}
            w={{ base: "100%", md: "45%" }}
        >
            <Text fontSize="lg" fontWeight='bold'>{props.heading}</Text>
            {props.data && <Text fontSize="2xl" fontWeight={"bold"}>
                {props.data}
            </Text>}
            {props.imageUrl && <Image
                src={props.imageUrl}
                alt={props.heading}
            />}
        </Box>
    );
};

const DashboardPage = () => {
    const { data: traktData }: { data?: ITraktTvStats } = useSWR("/api/trakt-stats", fetcher);
    const { data: nowReadingData }: { data?: Array<BookData> } = useSWR("/api/now-reading", fetcher);
    return (
        <Layout relativeCanonicalURL="/dashboard" title="Dashboard" description="Self quantification dashboard">
            <Heading>
                <Text size={"2xl"}>Dashboard</Text>
            </Heading>


            <Heading>
                <Text size={"2xl"}>Movies and TV</Text>
            </Heading>

            <Flex wrap={"wrap"} justify={"start"} alignItems={"baseline"}>
                <StatBox heading={"Movies watched"} data={traktData?.movies?.watched?.toString(10)} />
                <StatBox heading={"Minutes in watched movies"} data={traktData?.movies?.minutes?.toString(10)} />

                <StatBox heading={"Shows watched"} data={traktData?.shows?.watched?.toString(10)} />

                <StatBox heading={"Episodes in shows watched"} data={traktData?.episodes?.watched?.toString(10)} />
                <StatBox heading={"Episodes watched in minutes"} data={traktData?.episodes?.minutes?.toString(10)} />
            </Flex>


            <Heading>
                <Text size={"2xl"}>Currently reading</Text>
            </Heading>

            <Flex wrap={"wrap"}>
                {nowReadingData?.map((bookData) => {
                    return (<StatBox heading={bookData.title} imageUrl={bookData.coverUrl} />);
                })}
            </Flex>

            <Heading>
                <Text size={'2xl'}>Travel</Text>
            </Heading>

            <Flex>
                <iframe
                    src="https://www.google.com/maps/d/u/0/embed?mid=1Ae6HyxxxWSlG43TvQ5HW0FgZRK97ZcW0"
                    width="100%"
                    height="300"
                />
            </Flex>

        </Layout>
    );
};

export default DashboardPage;
