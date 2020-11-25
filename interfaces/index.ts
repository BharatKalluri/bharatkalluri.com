export interface IProjectCardProps {
    name: string;
    description: string;
    link: string;
}

export interface IBlogFrontMatter {
    author: string
    title: string
    description: string
    publishedAt: string
    tag: Array<string>
    draft: string
}
