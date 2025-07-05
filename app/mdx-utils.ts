import fs from "fs";
import path from "path";
import { sortPostsByDate } from "@/lib/date-utils";

type Metadata = {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    type: string;
    promoted?: string;
    useImage: string;
    category?: string;
    seriesOrder?: string;
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

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

/**
 * Generate a clean preview from MDX content
 */
function generatePreview(content: string, maxLength: number = 150): string {
    // Chain of transformations to clean the content
    const cleanContent = content
        // Remove frontmatter if present
        .replace(/^---[\s\S]*?---\n?/m, "")
        // Remove headers (# ## ### etc.)
        .replace(/^#{1,6}\s+.*$/gm, "")
        // Remove HTML/JSX tags
        .replace(/<[^>]*>/g, "")
        // Convert markdown links to plain text
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
        // Remove markdown formatting
        .replace(/[*_`]/g, "")
        // Remove empty lines and normalize whitespace
        .replace(/^\s*[\r\n]/gm, "")
        .replace(/\s+/g, " ")
        .trim();

    // Get the first meaningful sentence or paragraph
    const sentences = cleanContent
        .split(/[.!?]+/)
        .filter((s) => s.trim().length > 0);
    const firstSentence = sentences[0]?.trim() || "";

    // Truncate if too long
    if (firstSentence.length > maxLength) {
        return firstSentence.substring(0, maxLength).trim() + "...";
    }

    return firstSentence;
}

function readMDXFile(filePath: string) {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    return parseFrontmatter(rawContent);
}

function getMDXData(dir: string): Post[] {
    const mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file) => {
        const { metadata, content } = readMDXFile(path.join(dir, file));
        const slug = path.basename(file, path.extname(file));
        const preview = generatePreview(content);

        return {
            metadata,
            slug,
            content,
            preview,
        };
    });
}

export function getBlogPosts() {
    return sortPostsByDate(
        getMDXData(path.join(process.cwd(), "app", "articles", "posts"))
    );
}

export function getProjectPosts() {
    return sortPostsByDate(
        getMDXData(path.join(process.cwd(), "app", "projects", "posts"))
    );
}

// Re-export formatDate from date-utils for backward compatibility
export { formatDate } from "@/lib/date-utils";
