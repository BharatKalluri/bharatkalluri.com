import { Heading, Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";

const IndexPage = () => (
    <Layout title="Home">
        <Stack direction="column" spacing={5}>
            <Heading>Hey, I'm Bharat Kalluri 👋</Heading>
            <Text>
                Welcome to my corner of the internet. I make an effort to write
                everything I know here!
            </Text>
            <Text>I work for a fintech startup in Bangalore, India.</Text>
        </Stack>
    </Layout>
);

export default IndexPage;
