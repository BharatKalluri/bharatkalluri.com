import Layout from "../components/Layout";
import { Box, Flex, Heading, Image, Skeleton, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { ITraktTvStats } from "../interfaces";
import { BookData } from "../types";
import { CustomLink } from "../components/CustomLink";
import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../constants";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
	const traktDataResponse: AxiosResponse<ITraktTvStats> = await axios.get(`${BASE_URL}/api/trakt-stats`);
	const traktData = traktDataResponse.data || null;

	const readingLogDataResponse: AxiosResponse<Array<BookData>> = await axios.get(`${BASE_URL}/api/now-reading`);
	const nowReadingData: Array<BookData> = readingLogDataResponse.data || [];

	return {
		props: {
			traktData,
			nowReadingData,
		},
		revalidate: 21600, // in seconds
	};
}

const StatBox = (props: {
	heading?: string;
	data?: string;
	imageUrl?: string;
	imageLink?: string;
	isLoading?: boolean;
	customWidth?: string | Record<any, any>;
}) => {
	const { colorMode } = useColorMode();
	const borderColor = {
		light: "gray.200",
		dark: "gray.700",
	};
	const isLoadingFromProps = props.isLoading || false;
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
			shadow={"md"}
			width={props.customWidth || { base: "100%", sm: "45%", md: "30%", lg: "200px" }}
		>
			<Flex flexDirection={"column"} alignItems={"space-between"}>
				{props.heading && (
					<Text pb={2} minHeight={"60px"}>
						{props.heading}
					</Text>
				)}
				<Skeleton isLoaded={!isLoadingFromProps}>
					<Text fontSize="4xl" bottom={"10px"} fontWeight={"extrabold"}>
						{props.data}
					</Text>
				</Skeleton>
			</Flex>
			{props.imageUrl && (
				<Skeleton isLoaded={!isLoadingFromProps}>
					<a href={props.imageLink} target={"_blank"} rel={"noreferrer"}>
						<Image
							src={props.imageUrl}
							alt={props.heading}
							maxHeight={"300px"}
							shadow={"xl"}
							borderRadius={10}
						/>
					</a>
				</Skeleton>
			)}
		</Box>
	);
};

const DashboardPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { traktData, nowReadingData } = props;
	const isTraktDataLoading: boolean = traktData === undefined;

	return (
		<Layout relativeCanonicalURL="/dashboard" title="Dashboard" description="Self quantification dashboard">
			<Heading>
				<Text size={"2xl"}>Dashboard</Text>
			</Heading>

			<Heading>
				<Text size={"2xl"}>Movies and TV</Text>
			</Heading>

			<Text>
				All the movies and series I watch are recorded in{" "}
				<CustomLink href="https://trakt.tv/users/bharatkalluri">Trakt</CustomLink>
			</Text>

			<Flex wrap={"wrap"} justify={"start"} alignItems={"baseline"}>
				<StatBox
					heading={"Movies watched"}
					data={traktData?.movies?.watched?.toString(10)}
					isLoading={isTraktDataLoading}
				/>
				<StatBox
					heading={"Minutes in watched movies"}
					data={traktData?.movies?.minutes?.toString(10)}
					isLoading={isTraktDataLoading}
				/>

				<StatBox
					heading={"Shows watched"}
					data={traktData?.shows?.watched?.toString(10)}
					isLoading={isTraktDataLoading}
				/>

				<StatBox
					heading={"Episodes in shows watched"}
					data={traktData?.episodes?.watched?.toString(10)}
					isLoading={isTraktDataLoading}
				/>
				<StatBox
					heading={"Episodes watched in minutes"}
					data={traktData?.episodes?.minutes?.toString(10)}
					isLoading={isTraktDataLoading}
				/>
			</Flex>

			<Heading>
				<Text size={"2xl"}>Currently reading</Text>
			</Heading>

			<Text>
				All the books I read are recorded at{" "}
				<CustomLink href="https://openlibrary.org/people/bharatkalluri">Openlibrary</CustomLink>
			</Text>

			<Flex wrap={"wrap"}>
				{nowReadingData?.map((bookData: BookData) => {
					return (
						<StatBox
							imageUrl={bookData.coverUrl}
							key={bookData.title}
							customWidth={{ base: "45%", sm: "auto", md: "auto", lg: "auto" }}
							imageLink={bookData.url}
						/>
					);
				})}
			</Flex>

			<Heading>
				<Text size={"2xl"}>Travel</Text>
			</Heading>

			<Text>Places I&apos;ve been to!</Text>

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
