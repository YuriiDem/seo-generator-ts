import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import fse from 'fs-extra';
import { generateSeoContent } from './openai';
import { injectHtmlParts, getReadableDate } from './utils';

dotenv.config();

async function main() {
    const rawKeywords = fs.readFileSync('keywords.txt', 'utf-8');
    const keywords = rawKeywords.split('\n').map(k => k.trim()).filter(Boolean);
    const keywordString = keywords.join(', ');

    console.log(`🔄 Generate SEO HTML by keys:\n${keywordString}\n`);

    const generatedHtml = await generateSeoContent(keywordString);

    const templateDir = path.join(__dirname, '..', 'templates', 'main-template');
    const outputSlug = `seo-site-${getReadableDate()}`;
    const outputDir = path.join(__dirname, '..', 'output', outputSlug);

    fse.copySync(templateDir, outputDir);

    const indexPath = path.join(outputDir, 'index.htm');
    let templateHtml = fs.readFileSync(indexPath, 'utf-8');

    const finalHtml = injectHtmlParts(templateHtml, generatedHtml);

    fs.writeFileSync(indexPath, finalHtml, 'utf-8');

    console.log(`✅ Site generated: ${outputDir}`);
}

main();
