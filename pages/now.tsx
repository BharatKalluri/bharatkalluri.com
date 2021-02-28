import {
    Divider,
    Link,
    ListItem,
    Stack,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Layout from "../components/Layout";

const Now = () => {
    return (
        <Layout
            title="Now"
            description="Lists down what I am doing currently"
            relativeCanonicalURL="/now"
        >
            <Stack direction="column" spacing={5}>
                <Text fontSize="6xl" fontWeight="extrabold">
                    Now
                </Text>

                <UnorderedList>
                    <ListItem>
                        Working on revamping how people see and manage money at{" "}
                        <Link as="a" textDecoration="underline">
                            <NextLink href="https://refyne.co.in">
                                Refyne
                            </NextLink>
                        </Link>
                    </ListItem>
                    <ListItem>Listening to 1974 (audio book)</ListItem>
                    <ListItem>
                        Reading thinking fast and slow by daniel kahneman
                    </ListItem>
                    <ListItem>Trying to deeply understand Typescript</ListItem>
                    <ListItem>Trying to get into fitness</ListItem>
                    <ListItem>
                        Currently not working on any side projects, exploring
                        what I can do
                    </ListItem>
                    <ListItem>
                        Trying to meet and talk to people who are not in
                        technology, to get different perspectives
                    </ListItem>
                </UnorderedList>

                <Divider />

                <Text fontSize="sm">
                    I keep updating this page every weekend
                </Text>
            </Stack>
        </Layout>
    );
};

export default Now;
