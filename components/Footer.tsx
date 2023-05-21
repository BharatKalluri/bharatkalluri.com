import React from 'react';
import { FaGithub, FaLinkedin, FaMailBulk, FaTelegramPlane, FaTwitter, FaRss } from 'react-icons/fa';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, TELEGRAM_URL, TWITTER_URL, RSS_URL } from '../constants/constants';
import Link from 'next/link';

const IconButton = (props: { href: string; iconComponent: any }) => {
	const { href, iconComponent } = props;
	return (
		<Link href={href} title="Twitter" target={'_blank'}>
			{iconComponent}
		</Link>
	);
};

const Footer = () => (
	<div className={'flex items-center flex-col py-12 space-y-6'}>
		<div className={'flex flex-row space-x-4 text-gray-600'}>
			<IconButton href={TWITTER_URL} iconComponent={<FaTwitter />} />
			<IconButton href={GITHUB_URL} iconComponent={<FaGithub />} />
			<IconButton href={LINKEDIN_URL} iconComponent={<FaLinkedin />} />
			<IconButton href={TELEGRAM_URL} iconComponent={<FaTelegramPlane />} />
			<IconButton href={`mailto:${EMAIL}`} iconComponent={<FaMailBulk />} />
			<IconButton href={RSS_URL} iconComponent={<FaRss />} />
		</div>
	</div>
);

export default Footer;
