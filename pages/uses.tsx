import Layout from "../components/Layout";
import { Stack, Text } from "@chakra-ui/react";

const UsesPage = () => {
    return (
        <Layout title="Uses" relativeCanonicalURL="/uses">
            <Stack direction="column" spacing={5}>
                <Text fontSize="6xl" fontWeight="extrabold">
                    Uses
                </Text>

                <Text fontSize="3xl">Hardware</Text>
                <Text>
                    My work laptop is a company provided MacBook Pro 2015. And my personal laptop is a Lenovo Think Pad
                    480.
                </Text>
            </Stack>
        </Layout>
    );
};

export default UsesPage;
