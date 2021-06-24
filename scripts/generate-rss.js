const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");
const remark = require("remark");
const html = require("remark-html");

const BASE_URL = "https://bharatkalluri.com";
const POSTS_PATH = path.join(process.cwd(), "posts");

async function generateRSS() {
    const feed = new RSS({
        title: "Bharat Kalluri",
        site_url: BASE_URL,
        feed_url: `${BASE_URL}/feed.xml`,
    });
    const notes = await fs.readdir(POSTS_PATH);

    const addToFeed = async (content, name, classification) => {
        const front_matter = matter(content);
        const descriptionHtml = await remark().use(html).process(front_matter.content);
        feed.item({
            title: front_matter.data.title,
            url: `${BASE_URL}/${classification}/` + name.replace(/\.mdx?/, ""),
            date: front_matter.data.publishedAt,
            description: descriptionHtml,
        });
    };

    await Promise.all(
        notes.map(async (name) => {
            const content = await fs.readFile(path.join(POSTS_PATH, name));
            await addToFeed(content, name, "posts");
        })
    );

    await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generateRSS();
