import { Divider, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { CustomLink } from '../components/Mdx';

const Now = () => {
	return (
		<Layout title="Now" description="Lists down what I am doing currently" relativeCanonicalURL="/now">
			<Stack direction="column" spacing={5}>
				<Text fontSize="6xl" fontWeight="extrabold">
					Now
				</Text>

				<Text>
					This is where I document what I am up to now. Inspired by{' '}
					<CustomLink href="https://sive.rs/now">Derek siver&apos;s now page</CustomLink>
				</Text>

				<UnorderedList>
					<ListItem>
						Working on revamping how people see and manage money at{' '}
						<CustomLink href="https://refyne.co.in">Refyne</CustomLink>
					</ListItem>
					<ListItem>Trying to deeply understand Typescript</ListItem>
					<ListItem>
						Thinking about working on small, short, fun projects. (like{' '}
						<CustomLink href="https://lifecounter.vercel.app/">Life counter</CustomLink>)
					</ListItem>
					<ListItem>
						Trying to meet and talk to people who are not in technology, to get different perspectives
					</ListItem>
				</UnorderedList>

				<Divider />

				<Text fontSize="sm">I keep updating this page every weekend</Text>
			</Stack>
		</Layout>
	);
};

export default Now;
