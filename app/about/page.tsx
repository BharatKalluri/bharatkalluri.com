import { H1Styles } from '../../constants/style-constants';
import { CustomLink } from '../../components/CustomLink';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About',
	description: 'Founding engineer at Refyne.',
};

const AboutPage = () => {
	return (
		<>
			<h1 className={H1Styles}>About</h1>

			<section className="text-lg space-y-5">
				<p>
					Hello! I&apos;m Bharat Kalluri, a Senior Software Engineer with a passion for building robust and
					scalable systems.
				</p>
				<p>
					For the past 7 years, I&apos;ve been immersed in the fintech world, most recently as a founding team
					member at <CustomLink href={"https://refyne.co.in"}>Refyne</CustomLink> - Asia&apos;s largest financial wellness platform for employers & world&apos;s second-largest
					distribution platform with a network of 500+ corporates and 8 million employees a company. I have helped
					grow Refyne from the ground up to a $1.5B valuation and now am on the lookout for my next adventure!
				</p>
				<p>
					This blog is a collection of what I have managed to learn during my experiments. My hobbies include
					reading books, Photography and Playing computer games. Most of my personal projects can be found on
					github.
				</p>
				<p>
					Also, feel free to
					<CustomLink href={'https://cal.com/bharatkalluri'}> schedule a call with me </CustomLink>
					if you want to talk about tech, programming, open source, movies, books, TV series, philosophy and
					everything in between :)
				</p>
			</section>
		</>
	);
};
export default AboutPage;
