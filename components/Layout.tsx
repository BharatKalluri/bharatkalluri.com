import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Flex, Stack } from '@chakra-ui/layout';
import Footer from './Footer';
import { NextSeo } from 'next-seo';
import { BASE_URL } from '../constants';
import Script from 'next/script';

type LayoutProps = {
	children?: ReactNode;
	title: string;
	description?: string;
	relativeCanonicalURL: string;
	keywords?: string[];
	heroImage?: string;
};

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

const DesktopLeftNavBar = () => {
	return (
		<div className="flex items-center justify-between py-4">
			{navBarItems.map((el) => (
				<a href={el.href} className="text-md mr-8" key={el.href}>
					{el.text}
				</a>
			))}
		</div>
	);
};

const NavBar = () => {
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
			{/*TODO: uncomment once tailwind migration is complete*/}
			{/*<Box flexDirection="row" mb={'0.2rem'}>*/}
			{/*	<IconButton*/}
			{/*		aria-label="Toggle dark mode"*/}
			{/*		variant="ghost"*/}
			{/*		onClick={toggleColorMode}*/}
			{/*		icon={colorMode == 'dark' ? <SunIcon /> : <MoonIcon />}*/}
			{/*	/>*/}
			{/*</Box>*/}
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

			<Head>
				<title>{`${title} | Bharat Kalluri`}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				{keywords !== undefined && (
					<meta name="keywords" content={keywords.map((el) => el.replace('-', ' ')).join(', ')} />
				)}

				<link rel="icon" type="image/png" href={'/static/logo.png'} />
				<meta httpEquiv="content-language" content="en-gb" />
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

			<div className={'mx-auto px-4 sm:px-6 lg:px-8'}>
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
