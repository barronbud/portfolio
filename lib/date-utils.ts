import { Post } from "@/app/mdx-utils";

/**
 * Sort posts by published date in descending order (newest first)
 */
export function sortPostsByDate(posts: Post[]): Post[] {
    return posts.sort(
        (a, b) =>
            new Date(b.metadata.publishedAt).getTime() -
            new Date(a.metadata.publishedAt).getTime()
    );
}

/**
 * Sort posts by published date in ascending order (oldest first)
 */
export function sortPostsByDateAsc(posts: Post[]): Post[] {
    return posts.sort(
        (a, b) =>
            new Date(a.metadata.publishedAt).getTime() -
            new Date(b.metadata.publishedAt).getTime()
    );
}

/**
 * Compare two dates for sorting (newest first)
 */
export function compareDatesDesc(a: string, b: string): number {
    return new Date(b).getTime() - new Date(a).getTime();
}

/**
 * Compare two dates for sorting (oldest first)
 */
export function compareDatesAsc(a: string, b: string): number {
    return new Date(a).getTime() - new Date(b).getTime();
}

/**
 * Format a date string for display
 */
export function formatDate(date: string, includeRelative = false): string {
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
