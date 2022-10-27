import React, { ReactNode } from 'react';
import NextLink from 'next/link';
import Head from 'next/head';
import { Box, Flex, Stack } from '@chakra-ui/layout';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Footer from './Footer';
import { NextSeo } from 'next-seo';
import { BASE_URL } from '../constants';
import { Button } from '@chakra-ui/button';
import Script from 'next/script';

type LayoutProps = {
	children?: ReactNode;
	title: string;
	description?: string;
	relativeCanonicalURL: string;
	keywords?: string[];
	heroImage?: string;
};

interface INavBarButtonProps {
	text: string;
	href: string;
}

const navBarItems: Array<{ href: string; text: string }> = [
	{
		href: '/',
		text: 'Home',
	},
	{
		href: '/blog',
		text: 'Blog',
	},
	{
		href: '/notes',
		text: 'Notes',
	},
	{
		href: '/dashboard',
		text: 'Dashboard',
	},
	{
		href: '/about',
		text: 'About',
	},
];

const NavBarButton = (props: INavBarButtonProps) => {
	return (
		<NextLink href={props.href} passHref>
			<Button variant="ghost" fontWeight="400">
				{props.text}
			</Button>
		</NextLink>
	);
};

const DesktopLeftNavBar = () => {
	return (
		<Box flexDirection="row">
			{navBarItems.map((item) => (
				<NavBarButton text={item.text} href={item.href} key={item.href} />
			))}
		</Box>
	);
};

const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Stack
			flexDirection="row"
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			as="nav"
			p={3}
			mx="auto"
			maxW="1200px"
			wrap="wrap"
		>
			<DesktopLeftNavBar />

			<Box flexDirection="row" mb={'0.2rem'}>
				<IconButton
					aria-label="Toggle dark mode"
					variant="ghost"
					onClick={toggleColorMode}
					icon={colorMode == 'dark' ? <SunIcon /> : <MoonIcon />}
				/>
			</Box>
		</Stack>
	);
};

const Layout = ({ children, title, description, relativeCanonicalURL, keywords, heroImage }: LayoutProps) => {
	const canonicalURL = `${BASE_URL}${relativeCanonicalURL}`;
	const heroImageData = heroImage ? { images: [{ url: heroImage }] } : {};
	return (
		<>
			<NextSeo
				title={title}
				description={description}
				canonical={canonicalURL}
				openGraph={{
					url: canonicalURL,
					title: title,
					description: description,
					...heroImageData,
				}}
			/>
			<div>
				<Head>
					<title>{`${title} | Bharat Kalluri`}</title>
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					{keywords !== undefined && (
						<meta name="keywords" content={keywords.map((el) => el.replace('-', ' ')).join(', ')} />
					)}

					<link rel="icon" type="image/png" href={'/static/logo.png'} />
					<meta httpEquiv="content-language" content="en-gb" />
					<html lang={'en'} />
				</Head>
				<Script
					id={'microsoft-clarity'}
					type="text/javascript"
					dangerouslySetInnerHTML={{
						__html: `
                                (function(c,l,a,r,i,t,y){
                                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                                })(window, document, "clarity", "script", "4g3tskl7lj");
                            `,
					}}
				/>
				<header>
					<NavBar />
				</header>
				<Flex as="main" justifyContent="center" flexDirection="column" px={4} mx="auto" mt={8} maxW="1000px">
					<Stack spacing={7}>{children}</Stack>
				</Flex>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
