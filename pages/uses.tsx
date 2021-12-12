import { ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import Layout from '../components/Layout';

const UsesPage = () => {
	// TODO: Add an image of the setup here

	const computerSetup = [
		'16" Macbook pro (from office)',
		'Lenovo thinkpad T480 (personal laptop)',
		'Logitech G300s Mouse',
		'Corsair mechanical keyboard',
		'Assembled system with Ryzen 5 3400g and RX580 (8GB)',
		'AKG K52 over the ear headphones',
		'QCY QS2 wireless earbuds',
	];

	const softwareAndServices = [
		'Firefox',
		'Fedora',
		'GNOME and corresponding default apps',
		'VS Code for quick text editing',
		'Jetbrain IDEs (WebStorm, PyCharm and GoLand)',
		'Slack Desktop for office comms',
		'Spotify Desktop for music (scrobbles to last.fm)',
		'LibreOffice',
		'Bitwarden password manager',
		'Raindrop for bookmark management',
		'Github',
		'Todoist for task tracking',
		'Telegram and Whatsapp for messaging',
	];

	return (
		<Layout title="Uses" relativeCanonicalURL="/uses">
			<Stack direction="column" spacing={5} fontSize="lg">
				<Text fontSize="6xl" fontWeight="extrabold">
					Uses
				</Text>

				<Text>Here is the tech and software I use to code, write and get work done in general.</Text>

				<Text fontSize="2xl" fontWeight="extrabold">
					Computer / Laptop / Hardware setup
				</Text>
				<UnorderedList spacing={3}>
					{computerSetup.map((el) => (
						<ListItem key={el}>{el}</ListItem>
					))}
				</UnorderedList>

				<Text fontSize="2xl" fontWeight="extrabold">
					Software and Services
				</Text>
				<UnorderedList spacing={3}>
					{softwareAndServices.map((el) => (
						<ListItem key={el}>{el}</ListItem>
					))}
				</UnorderedList>
			</Stack>
		</Layout>
	);
};

export default UsesPage;
