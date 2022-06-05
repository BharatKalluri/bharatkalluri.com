import { HStack, Input, Text, VStack } from '@chakra-ui/react';
import { CustomLink } from './CustomLink';

export const Subscribe = () => {
	return (
		<div id="revue-embed">
			<form
				action="https://www.getrevue.co/profile/bharatkalluri/add_subscriber"
				method="post"
				id="revue-form"
				name="revue-form"
				target="_blank"
			>
				<VStack spacing={2} align={'start'}>
					<Text fontSize={'lg'} fontWeight={'bold'}>
						Subscribe to the newsletter
					</Text>
					<HStack>
						<div className="revue-form-group">
							<Input
								className="revue-form-field"
								placeholder="Your email address..."
								type="email"
								name="member[email]"
								id="member_email"
							/>
						</div>
						<div className="revue-form-actions">
							<Input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" />
						</div>
					</HStack>
					<Text fontSize={10} className="revue-form-footer">
						By subscribing, you agree with Revue’s{' '}
						<a target="_blank" href="https://www.getrevue.co/terms" rel="noreferrer">
							Terms of Service
						</a>{' '}
						and{' '}
						<a target="_blank" href="https://www.getrevue.co/privacy" rel="noreferrer">
							Privacy Policy
						</a>
						.{' '}
						<CustomLink href={'https://www.getrevue.co/profile/bharatkalluri'}>View past issues</CustomLink>
					</Text>
				</VStack>
			</form>
		</div>
	);
};
