import Layout from '../components/Layout';
import React from 'react';
import { ITraktTvStats } from '../interfaces';
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/constants';
import { InferGetStaticPropsType } from 'next';
import { CustomLink } from '../components/CustomLink';
import { H1Styles } from '../constants/style-constants';

export async function getStaticProps() {
	const traktDataResponse: AxiosResponse<ITraktTvStats> = await axios.get(`${BASE_URL}/api/trakt-stats`);
	const traktData = traktDataResponse.data || null;

	return {
		props: {
			traktData,
		},
		revalidate: 21600, // in seconds
	};
}

const StatBox = (props: {
	heading?: string;
	data?: string;
	imageUrl?: string;
	imageLink?: string;
	isLoading?: boolean;
	customWidth?: string | Record<any, any>;
}) => {
	return (
		<div className={'flex flex-col items-start p-2 m-3 border rounded-lg w-52'}>
			<div className={'flex-col justify-around'}>
				{props.heading && <div>{props.heading}</div>}
				<div className={'text-4xl font-bold h-20'}>{props.data}</div>
			</div>
			{props.imageUrl && (
				<a href={props.imageLink} target={'_blank'} rel={'noreferrer'}>
					<img src={props.imageUrl} alt={props.heading} />
				</a>
			)}
		</div>
	);
};

const DashboardPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { traktData } = props;
	const isTraktDataLoading: boolean = traktData === undefined;

	return (
		<Layout relativeCanonicalURL="/dashboard" title="Dashboard" description="Self quantification dashboard">
			<div className={H1Styles}>Dashboard</div>

			<div className={'text-2xl font-bold'}>Movies and TV</div>

			<div>
				All the movies and series I watch are recorded in{' '}
				<CustomLink href="https://trakt.tv/users/bharatkalluri">Trakt</CustomLink>
			</div>

			<div className={'flex flex-wrap justify-start align-baseline'}>
				<StatBox
					heading={'Movies watched'}
					data={traktData?.movies?.watched?.toString(10)}
					isLoading={isTraktDataLoading}
				/>
				<StatBox
					heading={'Minutes in watched movies'}
					data={traktData?.movies?.minutes?.toString(10)}
					isLoading={isTraktDataLoading}
				/>

				<StatBox
					heading={'Shows watched'}
					data={traktData?.shows?.watched?.toString(10)}
					isLoading={isTraktDataLoading}
				/>

				<StatBox
					heading={'Episodes in shows watched'}
					data={traktData?.episodes?.watched?.toString(10)}
					isLoading={isTraktDataLoading}
				/>
				<StatBox
					heading={'Episodes watched in minutes'}
					data={traktData?.episodes?.minutes?.toString(10)}
					isLoading={isTraktDataLoading}
				/>
			</div>
		</Layout>
	);
};

export default DashboardPage;
