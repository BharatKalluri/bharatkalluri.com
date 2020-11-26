import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

interface ILinkCardProps {
    name: string;
    description?: string;
    link: string;
}

const LinkCard = ({ name, description, link }: ILinkCardProps) => {
    return (
        <NextLink href={link} passHref>
            <Link
                w="100%"
                _hover={{ textDecoration: "none" }}
                borderWidth="1px"
                borderRadius="lg"
                padding="1.5rem"
            >
                <Box display="block" width="100%">
                    <Flex
                        width="100%"
                        align="flex-start"
                        justifyContent="space-between"
                        flexDirection="column"
                    >
                        <Heading size="md" as="h3" letterSpacing="tight">
                            {name}
                        </Heading>
                        {description && <Text mt="1rem" fontSize="md">{description}</Text>}
                    </Flex>
                </Box>
            </Link>
        </NextLink>
    );
};

export default LinkCard;