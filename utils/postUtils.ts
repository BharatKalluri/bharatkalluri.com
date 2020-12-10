import { BlogFrontMatter } from "../types";

export function searchInFrontMatter(
    frontMatter: BlogFrontMatter,
    searchQuery: string
): boolean {
    const isFound =
        searchQuery.length > 0
            ? frontMatter.title.toLowerCase().includes(searchQuery) ||
              frontMatter.description?.toLowerCase().includes(searchQuery) ||
              frontMatter.tags?.join(" ").includes(searchQuery)
            : true;
    return isFound === true;
}
