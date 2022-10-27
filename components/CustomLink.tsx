import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link as ChakraLink, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface ICustomLinkProps {
	href: string;
	children: string;
	fontSize?: number;
}

export const CustomLink = (props: ICustomLinkProps) => {
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
