import { FormControl, FormLabel } from "@chakra-ui/form-control";
import React, { useState } from "react";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Heading, Stack } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";

const ContactForm = () => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [message, setMessage] = useState<string>();

    return (
        <>
            <Stack spacing={5}>
                <Heading size="xl">Contact me</Heading>

                <FormControl id="first-name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        placeholder="Name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </FormControl>

                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        placeholder="Email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </FormControl>

                <FormControl id="message" isRequired>
                    <FormLabel>Write me a message</FormLabel>
                    <Textarea
                        placeholder="Message"
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                </FormControl>

                <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme="teal"
                    variant="outline"
                    onClick={() => {
                        const formData = {
                            email,
                            name,
                            message,
                        };
                        console.log(formData);
                    }}
                >
                    Message
                </Button>
            </Stack>
        </>
    );
};

export default ContactForm;
