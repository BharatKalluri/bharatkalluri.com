import Link from 'next/link';
import { H2Styles } from '../constants/style-constants';

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
				<div className="p-4 space-y-2">
					<h2 className={H2Styles}>{name}</h2>
					{description && <p>{description}</p>}
				</div>
			</figure>
		</Link>
	);
};

export default LinkCard;
