export function injectHtmlParts(template: string, generatedHtml: string) {
    const titleMatch = generatedHtml.match(/<title>(.*?)<\/title>/);
    const metaMatch = generatedHtml.match(/<meta name="description" content="(.*?)"/);
    const h1Match = generatedHtml.match(/<h1>(.*?)<\/h1>/);
    const seoTextMatch = generatedHtml.match(/<!-- SEO_CONTENT_START -->([\s\S]*?)<!-- SEO_CONTENT_END -->/);


    return template
        .replace(/<title>.*?<\/title>/, `<title>${titleMatch?.[1] || ''}</title>`)
        .replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${metaMatch?.[1] || ''}"`)
        .replace(/<h1>.*?<\/h1>/, `<h1>${h1Match?.[1] || ''}</h1>`)
        .replace(
            /<!-- SEO_CONTENT_START -->([\s\S]*?)<!-- SEO_CONTENT_END -->/,
            `<!-- SEO_CONTENT_START -->\n${seoTextMatch?.[1] || ''}\n<!-- SEO_CONTENT_END -->`
        );
}

export function getReadableDate(): string {
    const now = new Date();
    return now
        .toISOString()
        .replace(/[:.]/g, '-')
        .replace('T', '_')
        .slice(0, 19);
}
