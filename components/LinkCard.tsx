import { Box, Flex, Heading, Link, Skeleton, Stack, Text } from '@chakra-ui/react';
import { AiTwotonePushpin } from 'react-icons/ai';

interface ILinkCardProps {
	name: string;
	description?: string;
	link: string;
	tags?: Array<string>;
	isPinned?: boolean;
	isLoading?: boolean;
}

const LinkCard = ({ name, description, link, isPinned, isLoading }: ILinkCardProps) => {
	const isLoadingFromProps = isLoading || false;
	return (
		<Link
			w="100%"
			_hover={{ textDecoration: 'none' }}
			borderWidth="1px"
			borderRadius="lg"
			padding="1.5rem"
			href={link}
			target={'_self'}
		>
			<Skeleton isLoaded={!isLoadingFromProps}>
				<Box display="block" width="100%">
					<Flex width="100%" align="flex-start" justifyContent="space-between" flexDirection="column">
						<Stack direction="row" align="center" style={{ width: '100%' }} justify="space-between">
							<Heading size="md" as="h3" letterSpacing="tight">
								{name}
							</Heading>
							{isPinned === true && <AiTwotonePushpin size="20" />}
						</Stack>
						{description && (
							<Text mt="1rem" fontSize="md" variant="solid" colorScheme="teal">
								{description}
							</Text>
						)}
					</Flex>
				</Box>
			</Skeleton>
		</Link>
	);
};

export default LinkCard;
