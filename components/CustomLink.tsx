import Link from "next/link";
import * as React from "react";

export const CustomLink = (props: any) => {
	const href = props.href;

	if (href.startsWith('/')) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		);
	}

	if (href.startsWith('#')) {
		return <a {...props} />;
	}

	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
			{...props}
		/>
	);
};