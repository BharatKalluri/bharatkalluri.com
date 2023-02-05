import { Heading, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { CustomLink } from '../components/Mdx';

const AboutPage = () => (
	<Layout title="About" description="About Bharat Kalluri" relativeCanonicalURL="/about">
		<Heading>About</Heading>
		<Text fontSize="lg">
			Hey and welcome! I’m a Software developer working in a fin-tech startup called Refyne in India. In my free
			time I make things in Python, Node js or Golang.
		</Text>
		<Text fontSize="lg">
			This blog is a collection of what I have managed to learn during my experiments. My hobbies include reading
			books, Photography and Playing computer games. Most of my personal projects can be found on github.
		</Text>
		<Text fontSize="lg">
			Also, feel free to <CustomLink href={`https://cal.com/bharatkalluri`}>schedule a call with me</CustomLink>
			if you want to talk about tech, programming, open source, movies, books, TV series, philosophy and
			everything in between :)
		</Text>
		<Text fontSize="lg">
			PS: A list of topics I am interested to write about are on this{' '}
			<CustomLink href="https://bharatkalluri.notion.site/25c2619e180b41619b121ff3095188f7?v=b8cb72d3f8634461ae7a3f95c3330d9a">
				board
			</CustomLink>
		</Text>

		<ContactForm />
	</Layout>
);

export default AboutPage;
