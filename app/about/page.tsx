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
					Hey and welcome! I’m a Software developer working in a fin-tech startup called Refyne in India. In
					my free time I make things in Python, Node js or Golang.
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
