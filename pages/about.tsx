import { Heading, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import { CustomLink } from "../components/CustomLink";

const AboutPage = () => (
    <Layout
        title="About"
        description="About Bharat Kalluri"
        relativeCanonicalURL="/about"
    >
        <Heading>About</Heading>
        <Text fontSize="lg">
            Hey and welcome! I’m a Software developer working in a fin-tech
            startup called Refyne in India. In my free time I make things in Python, Node js
            or Golang.
        </Text>
        <Text fontSize="lg">
            This blog is a collection of what I have managed to learn during my
            experiments. My hobbies include reading books, Photography and
            Playing computer games. Most of my personal projects can be found on
            github.
        </Text>
        <Text fontSize="lg">
            Also, feel free to <CustomLink href={`https://calendly.com/bharatkalluri`}>schedule a call with me</CustomLink>
            if you want to talk about tech, programming, open source, movies, books, TV series, philosophy and everything
            in between :)
        </Text>
        <Text fontSize="lg">
            PS: A list of topics I am interested to write about are on a{" "}
            <CustomLink href="https://trello.com/b/oAAGQHp9">
                trello board
            </CustomLink>
        </Text>

        <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1Ae6HyxxxWSlG43TvQ5HW0FgZRK97ZcW0"
            width="100%"
            height="300"
        />

        <ContactForm />
    </Layout>
);

export default AboutPage;
