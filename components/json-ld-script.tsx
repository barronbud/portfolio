import { getJsonLdScriptContent, PostMetadataOptions } from "@/lib/metadata-utils";

export function JsonLdScript({ post, type }: PostMetadataOptions) {
    const schemaContent = getJsonLdScriptContent({ post, type });
    
    return (
        <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
                __html: schemaContent,
            }}
        />
    );
}
