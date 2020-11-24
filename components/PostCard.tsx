import React from "react";
import LinkCard from "./LinkCard";

interface IPostCardProps {
    frontMatter: any;
    folderPrefix: string;
}

export const PostCard = ({ frontMatter, folderPrefix }: IPostCardProps) => {
    const slug = frontMatter.__resourcePath
        .replace(folderPrefix, "")
        .replace(".mdx", "");
    return (
        <LinkCard
            name={frontMatter.title}
            description={frontMatter.description}
            link={`${folderPrefix}${slug}`}
        />
    );
};
