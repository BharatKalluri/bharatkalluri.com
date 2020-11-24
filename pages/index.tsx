import { Heading, Stack, Text, Link, Flex } from "@chakra-ui/react";
import Layout from "../components/Layout";

// TODO: Move this to constants as well
const PROJECT_LIST: Array<IProjectCardProps> = [
    {
        name: "Harmony",
        description:
            "I usually work on a desktop or a laptop, both of them run linux. Harmony was made so that I can sync my shell histories across multiple computers.",
        link: "https://github.com/BharatKalluri/harmony",
    },
    {
        name: "Mail Sanatizer",
        description:
            "A command line tool written in python to clear up your Email!",
        link: "https://github.com/BharatKalluri/mail-sanitizer",
    },
    {
        name: "Spotifydl",
        description:
            "Download music from Spotify with complete album art and metadata. Uses Spotify as a metadata source and Youtube as a video source.",
        link: "https://gitlab.gnome.org/Bharatkalluri/splash",
    },
    {
        name: "GTK Developer Handbook",
        description:
            "GNOME desktop apps are great, this was my effort to write a short book explaining how to develop native GTK apps for linux",
        link: "https://bharatkalluri.gitbook.io/gnome-developer-handbook/",
    },
    {
        name: "Short Circuit",
        description:
            "A developer scratchpad inspired by Boop(on mac). Now retired as boop has a native linux desktop client.",
        link: "https://flathub.org/apps/details/in.bharatkalluri.shortcircuit",
    },
    {
        name: "Splash",
        description:
            "A native GNOME high res desktop wallpaper changer application, uses unsplash as a source for wallpapers.",
        link: "https://gitlab.gnome.org/Bharatkalluri/splash",
    },
    {
        name: "Albert Extensions",
        description:
            "Albert is a quick launcher made for linux (similar to spotlight on mac). Albert did not seem to have a centralized repository of extensions, So I made it for myself!",
        link: "https://alberthub.netlify.app/",
    },
];

interface IProjectCardProps {
    name: string;
    description: string;
    link: string;
}

const ProjectCard = ({ name, description, link }: IProjectCardProps) => {
    return (
        <Link
            mb={4}
            href={link}
            title={name}
            isExternal
            _hover={{
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                textDecoration: "none",
            }}
        >
            <Flex
                align="center"
                border="2px solid"
                borderColor="gray.200"
                borderRadius={4}
                p={4}
            >
                <Stack>
                    <Heading as="h4" size="md" mb={4} letterSpacing="tight">
                        {name}
                    </Heading>
                    <Text lineHeight="1.3">{description}</Text>
                </Stack>
            </Flex>
        </Link>
    );
};

const ProjectListComponent = () => (
    <Stack direction="column" spacing={0}>
        {PROJECT_LIST.map((project) => (
            <ProjectCard
                name={project.name}
                description={project.description}
                link={project.link}
            />
        ))}
    </Stack>
);

const IndexPage = () => (
    <Layout title="Home">
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
