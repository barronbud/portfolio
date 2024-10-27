import fs from "fs";
import path from "path";

type Metadata = {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    type: string;
};

export interface Post {
    metadata: Metadata;
    slug: string;
    content: string;
    preview: string;
}

function parseFrontmatter(fileContent: string) {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    const match = frontmatterRegex.exec(fileContent);
    const frontMatterBlock = match![1];
    const content = fileContent.replace(frontmatterRegex, "").trim();
    const frontMatterLines = frontMatterBlock.trim().split("\n");
    const metadata: Partial<Metadata> = {};

    frontMatterLines.forEach((line) => {
        const [key, ...valueArr] = line.split(": ");
        let value = valueArr.join(": ").trim();
        value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
        metadata[key.trim() as keyof Metadata] = value;
    });

    return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    return parseFrontmatter(rawContent);
}

function getMDXData(dir): Post[] {
    const mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file) => {
        const { metadata, content } = readMDXFile(path.join(dir, file));
        const slug = path.basename(file, path.extname(file));
        const preview = content
            .replace(/^#.*$/gm, "") // Remove header lines
            .replace(/^\s*[\r\n]/gm, "") // Remove empty lines
            .replace(/<[^>]*>?/g, "") // Remove HTML tags
            .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1") // Remove markdown links
            .split("\n")
            .slice(0, 1)
            .join(".")
            .trim();

        return {
            metadata,
            slug,
            content,
            preview,
        };
    });
}

export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), "app", "articles", "posts"));
}

export function getProjectPosts() {
    return getMDXData(path.join(process.cwd(), "app", "projects", "posts"));
}

export function formatDate(date: string, includeRelative = false) {
    const currentDate = new Date();
    if (!date.includes("T")) {
        date = `${date}T00:00:00`;
    }
    const targetDate = new Date(date);

    const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
    const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
    const daysAgo = currentDate.getDate() - targetDate.getDate();

    let formattedDate = "";

    if (yearsAgo > 0) {
        formattedDate = `${yearsAgo}y ago`;
    } else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}mo ago`;
    } else if (daysAgo > 0) {
        formattedDate = `${daysAgo}d ago`;
    } else {
        formattedDate = "Today";
    }

    const fullDate = targetDate.toLocaleString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    if (!includeRelative) {
        return fullDate;
    }

    return `${fullDate} (${formattedDate})`;
}
