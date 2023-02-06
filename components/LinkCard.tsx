import Link from 'next/link';

interface ILinkCardProps {
	name: string;
	description?: string;
	link: string;
	tags?: Array<string>;
	isPinned?: boolean;
}

const LinkCard = ({ name, description, link }: ILinkCardProps) => {
	return (
		<Link href={link}>
			<figure className="rounded-xl p-0 border-2">
				<div className="p-8 text-center space-y-2">
					<h2 className={'text-xl font-black text-left'}>{name}</h2>
					{description && <p className="text-lg text-left font-medium text-slate-700">{description}</p>}
				</div>
			</figure>
		</Link>
	);
};

export default LinkCard;
