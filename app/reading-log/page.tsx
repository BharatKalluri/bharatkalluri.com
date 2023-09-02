import React from 'react';
import { PocketArticleInfo } from '../../types';
import { H1Styles } from '../../constants/style-constants';
import LinkCard from '../../components/LinkCard';
import { Metadata } from 'next';
import { getReadingLog } from '../../lib/pocket';

export const metadata: Metadata = {
	title: 'Reading log',
	description: 'Recommended reading.',
};

export const revalidate = 3600;

const Header = () => {
	return <h1 className={H1Styles}>Reading Log</h1>;
};

const Description: () => JSX.Element = () => (
	<p>These are some of my favorite articles and videos I have come across!</p>
);

function ReadingLogCards(props: { readingLogFromApi: PocketArticleInfo[] }): JSX.Element {
	const { readingLogFromApi } = props;
	return (
		<section>
			{readingLogFromApi
				.sort((a, b) => Number(a.time_added) - Number(b.time_added))
				.reverse()
				.map((el) => (
					<div className={'py-2'} key={el.resolved_url}>
						<LinkCard name={el.resolved_title} link={el.resolved_url} key={el.resolved_url} />
					</div>
				))}
		</section>
	);
}

const ReadingLogPage = async () => {
	const readingLogRecord: Record<string, PocketArticleInfo> = await getReadingLog();
	const readingLogList: PocketArticleInfo[] = Object.values(readingLogRecord);
	return (
		<section className={'space-y-4'}>
			<Header />
			<Description />
			<ReadingLogCards readingLogFromApi={readingLogList} />
		</section>
	);
};
export default ReadingLogPage;
