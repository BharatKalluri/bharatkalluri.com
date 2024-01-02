import React from 'react';
import Link from 'next/link';
import './globals.css';
import Script from 'next/script';
import Footer from '../components/Footer';
import { Metadata } from 'next';
import { DEFAULT_SEO_CONFIG } from '../constants/constants';
import { ButtonStyles } from '../constants/style-constants';

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
		href: '/about',
		text: 'About',
	},
	{
		href: '/reading-log',
		text: 'Reading',
	},
];

const DesktopLeftNavBar = () => {
	return (
		<section className={'pb-2'}>
			<div className={'flex flex-row overflow-auto pb-4 justify-left'}>
				{navBarItems.map((el) => {
					return (
						<Link href={el.href} key={el.href} className={ButtonStyles}>
							{el.text}
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export const metadata: Metadata = DEFAULT_SEO_CONFIG;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={'mx-auto sm:px-6 lg:px-8 lg:w-7/12 pt-6'}>
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

				<div className={'flex flex-col px-4 justify-center'}>
					<header>
						<DesktopLeftNavBar />
					</header>
					<div className={'flex flex-col space-y-4'}>{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
