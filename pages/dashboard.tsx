import Layout from "../components/Layout";
import { Box, Heading, Text, useColorMode, Flex } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import { ITraktTvStats } from "../interfaces";

const StatBox = (props: { heading: string; data: string | undefined }) => {
    const { colorMode } = useColorMode();
    const borderColor = {
        light: "gray.200",
        dark: "gray.700",
    };
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            padding={2}
            border="1px"
            borderColor={borderColor[colorMode]}
            borderRadius={8}
            margin={2}
            w={"45% "}
        >
            <Text fontSize="lg">{props.heading}</Text>
            <Text fontSize="2xl" fontWeight={"bold"}>
                {props.data}
            </Text>
        </Box>
    );
};

const DashboardPage = () => {
    const { data }: { data?: ITraktTvStats } = useSWR("/api/trakt-stats", fetcher);
    return (
        <Layout relativeCanonicalURL="/dashboard" title="Dashboard" description="Bharats self quantification dashboard">
            <Heading>
                <Text size={"2xl"}>Dashboard</Text>
            </Heading>
            <Flex direction={"row"} marginInline={0} w={"100%"} wrap={"wrap"} justifyItems={"center"}>
                <StatBox heading={"Movies watched"} data={data?.movies?.watched?.toString(10)} />
                <StatBox heading={"Minutes in watched movies"} data={data?.movies?.minutes?.toString(10)} />

                <StatBox heading={"Shows watched"} data={data?.shows?.watched?.toString(10)} />

                <StatBox heading={"Episodes in shows watched"} data={data?.episodes?.watched?.toString(10)} />
                <StatBox heading={"Episodes watched in minutes"} data={data?.episodes?.minutes?.toString(10)} />
            </Flex>
        </Layout>
    );
};

export default DashboardPage;
