import * as React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXComponents } from 'mdx/types';
import {
	Alert,
	Box,
	Center,
	Code,
	Divider,
	Heading,
	Image,
	Link as ChakraLink,
	Text,
	useColorMode,
} from '@chakra-ui/react';
import { YoutubeEmbed } from './YoutubeEmbed';
import AudioVisualizer from './AudioVisualizer';
import Link from 'next/link';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';

function CustomCodeBlock(props: any) {
	const children = props.children.props.children;
	const className = props.children.className;
	const language: unknown = className ? className.replace(/language-/, '') : '';
	if (language === 'language-') {
		return <Code {...children} />;
	}
	return (
		<Highlight
			{...defaultProps}
			theme={theme}
			code={children}
			// TODO: Learn how to cast a string into a narrowed string type
			language={language as Language}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={className}
					style={{
						...style,
						padding: 10,
						overflowX: 'auto',
					}}
				>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
}

interface MdxProps {
	code: string;
}

export const CustomLink = (props: any) => {
	const { colorMode } = useColorMode();
	const color = {
		light: 'hsl(208, 99%, 44%)',
		dark: 'hsl(208, 95%, 68%)',
	};

	const href = props.href;
	const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

	return (
		<ChakraLink {...props} as={Link} color={color[colorMode]} isExternal={!isInternalLink}>
			{props.children}
			{!isInternalLink && <ExternalLinkIcon mx="2px" />}
		</ChakraLink>
	);
};

// TODO: I have no clue how to type this stuff
export const ComponentMap: MDXComponents = {
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
		return <Box as="li" pb={1} {...props} fontSize={'lg'} />;
	},
	blockquote: function AlertFn(props: any) {
		return <Alert w="100%" variant="left-accent" status="info" {...props} />;
	},
	hr: function DividerFn() {
		return <Divider />;
	},
	// code: CustomCodeBlock,
	pre: CustomCodeBlock,
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

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);
	return <Component components={ComponentMap} />;
}
