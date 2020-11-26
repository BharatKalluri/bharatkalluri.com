import { Heading, Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import LinkCard from "../components/LinkCard";
import { PROJECT_LIST } from "../constants";


const ProjectListComponent = () => (
    <Stack direction="column" spacing={5}>
        {PROJECT_LIST.map((project) => (
            <LinkCard
                key={project.name}
                name={project.name}
                description={project.description}
                link={project.link}
            />
        ))}
    </Stack>
);

const IndexPage = () => (
    <Layout title="Home" description="Welcome to Bharat's corner of the internet" relativeCanonicalURL="">
        <Stack direction="column" spacing={5}>
            <Heading>Hey, I'm Bharat Kalluri 👋</Heading>
            <Text>
                Welcome to my corner of the internet. I make an effort to write
                everything I know here!
            </Text>
            <Stack py={5} spacing={5}>
                <Heading>Projects</Heading>
                <ProjectListComponent />
            </Stack>
        </Stack>
    </Layout>
);

export default IndexPage;
