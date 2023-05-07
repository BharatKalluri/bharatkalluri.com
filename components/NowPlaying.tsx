import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../lib/fetcher';
import { ICurrentlyPlayingInfo } from '../interfaces';
import { FaSpotify } from 'react-icons/fa';
import Link from 'next/link';

const NowPlaying = () => {
	const { data }: { data?: ICurrentlyPlayingInfo } = useSWR('/api/now-playing', fetcher);

	return (
		<div className={'flex-row justify-between p-2 flex w-72 text-gray-800 border border-gray-300 rounded-2xl'}>
			<div className={'flex flex-row space-x-6'}>
				<img
					className={'rounded-xl'}
					alt="Spotify album cover"
					height="60px"
					width="60px"
					src={data?.collectionImageUrl || '/static/images/placeholder.jpg'}
				/>
				<div className={'flex flex-col justify-center ml-3'}>
					<Link href={data?.mediaURL ?? ''}>
						<div className={'text-md'}>{data && (data?.title || 'Not Playing')}</div>
					</Link>
					<div className={'text-gray-500 text-sm'}>{data && (data?.artist || 'Spotify')}</div>
				</div>
			</div>

			<div>
				<FaSpotify />
			</div>
		</div>
	);
};

export default NowPlaying;
