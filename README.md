# 🚀 SEO Generator (TypeScript)

A simple, modular tool for generating one-page SEO-optimized HTML websites using OpenAI's GPT API.

---

## 📦 Features

- ✅ Generates SEO content based on keyword lists
- 🧠 Uses GPT (3.5 or 4 Turbo) to generate Title, Meta Description, H1, and long-form SEO text
- 🔧 Injects content into HTML templates automatically
- 📂 Outputs complete HTML websites with assets
- 📝 Supports templates with markers for easy content injection

---
## 📁 Project Structure
- seo-generator-ts/
  - keywords.txt – List of keywords (one per line)
  - output/ – Generated websites saved here
  - templates/
    - casino-template/ – Static HTML template
  - src/
    - index.ts – Main entry point
    - openai.ts – GPT API logic
    - utils.ts – Utility functions
  - .env – API key for OpenAI
  - package.json
  - tsconfig.json
---

## ⚙️ Requirements

- Node.js
- TypeScript
- OpenAI API Key

---

## 🚀 Installation

```npm install```

Create a .env file:
```OPENAI_API_KEY=your-api-key-here```

##🧠 Usage
1. Add your keywords to keywords.txt, one per line.

2. Run the generator:
```npx ts-node src/index.ts```

The generated website will be saved in the output/ folder with a unique timestamp.

##📝 Template Format

Your index.html should include the following placeholders:
```
<title>...</title>
<meta name="description" content="...">
<h1>...</h1>

<!-- SEO_CONTENT_START -->
...your SEO content here...
<!-- SEO_CONTENT_END -->
```
These markers are used by the script to inject AI-generated content into your HTML.

##📌 TODO / Roadmap
- CLI options (--template=, --keywords=, --output=)
- Multi-keyword batch generation
- Sitemap.xml and robots.txt auto-generation
- JSON-LD / FAQ schema injection

