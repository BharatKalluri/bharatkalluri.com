import React from 'react';
import { FaBluesky, FaGithub, FaLinkedin, FaTelegram, FaX, FaRss } from 'react-icons/fa6';
import {
	EMAIL,
	GITHUB_URL,
	LINKEDIN_URL,
	TELEGRAM_URL,
	TWITTER_URL,
	RSS_URL,
	BASE_URL,
	BLUESKY_URL,
} from '../constants/constants';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';

import { CustomLink } from './CustomLink';

const IconButton = (props: { href: string; iconComponent: any; title: string }) => {
	const { href, iconComponent, title } = props;
	return (
		<Link href={href} title={title} target={'_blank'}>
			{iconComponent}
		</Link>
	);
};

const Footer = () => (
	<div className={'flex items-center flex-col py-12 space-y-6'}>
		<div className={'flex flex-row space-x-4 text-gray-600'}>
			<IconButton href={`mailto:${EMAIL}`} iconComponent={<MdEmail />} title={'Email'} />
			<IconButton href={TWITTER_URL} iconComponent={<FaX />} title={'Twitter'} />
			<IconButton href={BLUESKY_URL} iconComponent={<FaBluesky />} title={'Bluesky'} />
			<IconButton href={GITHUB_URL} iconComponent={<FaGithub />} title={'Github'} />
			<IconButton href={LINKEDIN_URL} iconComponent={<FaLinkedin />} title={'Linkedin'} />
			<IconButton href={TELEGRAM_URL} iconComponent={<FaTelegram />} title={'Telegram'} />
			<IconButton href={RSS_URL} iconComponent={<FaRss />} title={'RSS'} />
		</div>
		<div className="text-gray-600">
			Hand crafted by <CustomLink href={BASE_URL}>Bharat Kalluri</CustomLink>
		</div>
	</div>
);

export default Footer;
