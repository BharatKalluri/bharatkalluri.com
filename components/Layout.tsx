import React, { ReactNode } from 'react';
import Head from 'next/head';

import Footer from './Footer';
import { NextSeo } from 'next-seo';
import { BASE_URL } from '../constants/constants';
import Link from 'next/link';

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
	{
		href: '/now',
		text: 'Now',
	},
	{
		href: '/reading-log',
		text: 'Reading',
	},
];

const DesktopLeftNavBar = () => {
	return (
		<section className={'pb-8'}>
			<div className={'flex flex-row overflow-auto pb-4 justify-left'}>
				{navBarItems.map((el) => {
					return (
						<Link
							href={el.href}
							key={el.href}
							className="rounded-md font-medium text-md hover:bg-gray-300 px-3 md:px-4 py-2"
						>
							{el.text}
						</Link>
					);
				})}
			</div>
		</section>
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
			<div className={'mx-auto px-4 sm:px-6 lg:px-8 w-7/12 pt-10'}>
				<div className={'flex flex-col px-4 justify-center'}>
					<header>
						<DesktopLeftNavBar />
					</header>
					<div className={'flex flex-col space-y-6'}>{children}</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
