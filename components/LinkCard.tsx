import Link from 'next/link';
import { H2Styles } from '../constants/style-constants';
import clsx from 'clsx';

interface ILinkCardProps {
	name: string;
	description?: string;
	link: string;
	tags?: Array<string>;
	isPinned?: boolean;
	publishedAt?: string;
    shouldOpenInNewTab?: boolean;
}

const formatDate = (publishedAt: string) =>
	new Date(publishedAt).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

const LinkCard = ({ name, description, link, publishedAt, tags, shouldOpenInNewTab }: ILinkCardProps) => {
	const isTagsPresent = tags?.length && tags.length > 0;
	return (
		<Link href={link} className="h-full" target={shouldOpenInNewTab === true ? '_blank' : '_self'}>
			<figure className="rounded-xl p-0 border-2 h-full">
				<div className="p-4 space-y-3 flex flex-col h-full">
					<h2 className={clsx(H2Styles)}>{name}</h2>
					{description && <p className={'text-gray-600 flex-grow'}>{description}</p>}
					<div className={'text-gray-500 text-xs flex'}>
						{publishedAt && <div className={'pr-1'}>{formatDate(publishedAt)}</div>}
						{isTagsPresent && (
							<div>
								·
								{tags.map((t, key) => {
									return (
										<span className="inline-block rounded-xl px-1" key={key}>
											{t}
										</span>
									);
								})}
							</div>
						)}
					</div>
				</div>
			</figure>
		</Link>
	);
};

export default LinkCard;
