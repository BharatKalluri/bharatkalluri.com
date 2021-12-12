import { FormControl, FormLabel } from '@chakra-ui/form-control';
import React from 'react';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Heading, Stack } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';

const ContactForm = () => {
	return (
		<>
			<form action="https://formcarry.com/s/OE1SQSGGdn" method="POST">
				<Stack spacing={5}>
					<Heading size="xl">Contact me</Heading>

					<FormControl id="first-name" isRequired>
						<FormLabel>Name</FormLabel>
						<Input placeholder="Name" name="name" />
					</FormControl>

					<FormControl id="email" isRequired>
						<FormLabel>Email</FormLabel>
						<Input placeholder="Email" name="email" />
					</FormControl>

					<FormControl id="message" isRequired>
						<FormLabel>Write me a message</FormLabel>
						<Textarea placeholder="Message" name="message" />
					</FormControl>

					<Button rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="outline" type="submit">
						Message
					</Button>
				</Stack>
			</form>
		</>
	);
};

export default ContactForm;
