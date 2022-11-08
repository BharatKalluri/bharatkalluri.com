import { Alert, Box, Code, Divider, Heading, Text, Image, Center } from '@chakra-ui/react';
import CustomCodeBlock from './CustomCodeBlock';
import { CustomLink } from './CustomLink';
import { YoutubeEmbed } from './YoutubeEmbed';
import React from 'react';
import AudioVisualizer from './AudioVisualizer';

// TODO: I have no clue how to type this stuff
export const MDXComponents = {
	h1: function HeadingFn(props: any) {
		return <Heading as="h1" size={'2xl'} {...props} />;
	},
	h2: function HeadingFn(props: any) {
		return <Heading as="h2" size={'xl'} {...props} />;
	},
	h3: function HeadingFn(props: any) {
		return <Heading as="h3" size={'lg'} {...props} />;
	},
	h4: function HeadingFn(props: any) {
		return <Heading as="h4" size={'md'} {...props} />;
	},
	inlineCode: function CodeFn(props: any) {
		return <Code colorScheme="blue" {...props} />;
	},
	code: CustomCodeBlock,
	p: function TextFn(props: any) {
		return <Text as="p" lineHeight="tall" {...props} w={'100%'} />;
	},
	ul: function BoxFn(props: any) {
		return <Box as="ul" pl={4} ml={2} {...props} />;
	},
	ol: function BoxFn(props: any) {
		return <Box as="ol" pl={4} {...props} />;
	},
	li: function BoxFn(props: any) {
		return <Box as="li" pb={1} {...props} />;
	},
	blockquote: function AlertFn(props: any) {
		return <Alert w="100%" variant="left-accent" status="info" {...props} />;
	},
	hr: function DividerFn() {
		return <Divider />;
	},
	img: function ImageFn(props: any) {
		return (
			<Center py={4} w={'100%'} flexDirection={'column'}>
				<Image {...props} alt={props.alt} borderRadius={'5px'} maxWidth={'700px'} />
				<Text fontSize={'xs'} color="gray.500" pt={2}>
					{props.alt}
				</Text>
			</Center>
		);
	},
	a: CustomLink,
	YoutubeEmbed: YoutubeEmbed,
	AudioVisualizer: AudioVisualizer,
};
