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
    let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    let match = frontmatterRegex.exec(fileContent);
    let frontMatterBlock = match![1];
    let content = fileContent.replace(frontmatterRegex, "").trim();
    let frontMatterLines = frontMatterBlock.trim().split("\n");
    let metadata: Partial<Metadata> = {};

    frontMatterLines.forEach((line) => {
        let [key, ...valueArr] = line.split(": ");
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
    let rawContent = fs.readFileSync(filePath, "utf-8");
    return parseFrontmatter(rawContent);
}

function getMDXData(dir): Post[] {
    let mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file) => {
        let { metadata, content } = readMDXFile(path.join(dir, file));
        let slug = path.basename(file, path.extname(file));
        let preview = content
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
    let currentDate = new Date();
    if (!date.includes("T")) {
        date = `${date}T00:00:00`;
    }
    let targetDate = new Date(date);

    let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
    let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
    let daysAgo = currentDate.getDate() - targetDate.getDate();

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

    let fullDate = targetDate.toLocaleString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    if (!includeRelative) {
        return fullDate;
    }

    return `${fullDate} (${formattedDate})`;
}