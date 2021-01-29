const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

const BASE_URL = "https://bharatkalluri.com";

async function generateRSS() {
    const feed = new RSS({
        title: "Bharat Kalluri",
        site_url: BASE_URL,
        feed_url: `${BASE_URL}/feed.xml`,
    });

    const blogPostsPath = path.join(__dirname, "..", "pages", "blog");
    const blogPosts = await fs.readdir(blogPostsPath);
    const notesPath = path.join(__dirname, "..", "pages", "note");
    const notes = await fs.readdir(notesPath);

    const addToFeed = (content, name, classification) => {
        const front_matter = matter(content);
        feed.item({
            title: front_matter.data.title,
            url: `${BASE_URL}/${classification}/` + name.replace(/\.mdx?/, ""),
            date: front_matter.data.publishedAt,
            description: front_matter.data.description,
        });
    };

    await Promise.all(
        blogPosts.map(async (name) => {
            const content = await fs.readFile(path.join(blogPostsPath, name));
            addToFeed(content, name, "blog");
        })
    );

    await Promise.all(
        notes.map(async (name) => {
            const content = await fs.readFile(path.join(notesPath, name));
            addToFeed(content, name, "note");
        })
    );

    await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generateRSS();
