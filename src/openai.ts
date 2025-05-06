import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generateSeoContent(keywords: string) {
    const prompt = `
prompt ${keywords}



<!-- SEO_CONTENT_START -->
...html content...
<!-- SEO_CONTENT_END -->

`;

    const chat = await openai.chat.completions.create({
        model: 'chatgpt-4o-latest',
        messages: [
            { role: 'system', content: 'You\'re a professional SEO copywriter' },
            { role: 'user', content: prompt },
        ],
        frequency_penalty: 0.4,
        presence_penalty: 0.3,
        temperature: 0.7,
        max_tokens: 16000,
    });

    const html = chat.choices[0].message?.content || '';

    return html;
}
