import React from "react";
import useSWR from "swr";
import { Box, Icon, Image, Link, Skeleton, Stack, Text, useColorMode } from "@chakra-ui/react";
import { fetcher } from "../lib/fetcher";
import { ICurrentlyPlayingInfo } from "../interfaces";

const NowPlaying = () => {
    const { data }: { data?: ICurrentlyPlayingInfo } = useSWR("/api/now-playing", fetcher);
    const { colorMode } = useColorMode();
    const borderColor = {
        light: "gray.200",
        dark: "gray.700",
    };

    return (
        <Box
            mb={4}
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            border="1px solid"
            borderRadius={8}
            borderColor={borderColor[colorMode]}
            p={2}
            w="300px"
        >
            <Skeleton isLoaded={!!data}>
                <Image
                    alt="Spotify album cover"
                    height="60px"
                    width="60px"
                    borderRadius={8}
                    src={data?.collectionImageUrl || "/static/images/placeholder.jpg"}
                />
            </Skeleton>
            <Stack
                spacing={0}
                justifyContent="center"
                alignItems="flex-start"
                display="flex"
                flexDirection="column"
                ml={3}
            >
                <Link
                    fontWeight="medium"
                    maxWidth="190px"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    href={data?.collectionImageUrl}
                    isExternal
                >
                    <Text>{data && (data?.title || "Not Playing")}</Text>
                </Link>
                <Text
                    color="gray.500"
                    mb={4}
                    maxWidth="190px"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                >
                    {data && (data?.artist || "Spotify")}
                </Text>
            </Stack>
            <Icon name="spotify" ml="auto" mt={1} />
        </Box>
    );
};

export default NowPlaying;
