import type { ApiConfig } from "./shared";

export const API_CONFIG: ApiConfig = {
  name: "markdown-renderer",
  slug: "markdown-renderer",
  description: "Render Markdown to styled HTML with CSS themes -- light, dark, GitHub. Ready-to-embed HTML documents.",
  version: "1.0.0",
  routes: [
    {
      method: "POST",
      path: "/api/render",
      price: "$0.002",
      description: "Render markdown to styled HTML",
      toolName: "text_render_markdown",
      toolDescription: `Use this when you need to convert Markdown to a fully styled HTML document with embedded CSS. Returns a complete, display-ready HTML page in JSON.

Returns: 1. html (complete HTML document with embedded CSS) 2. theme applied (light/dark/github) 3. inputLength 4. outputLength.

Example output: {"html":"<!DOCTYPE html><html><head><style>body{font-family:system-ui;max-width:800px;margin:auto}...</style></head><body><h1>Title</h1><p>Content</p></body></html>","theme":"github","inputLength":25,"outputLength":1240}

Use this FOR generating styled documentation pages, creating email-ready HTML from markdown, building preview renders, and producing embeddable content blocks.

Do NOT use for raw HTML conversion (no CSS) -- use text_convert_markdown_to_html instead. Do NOT use for HTML-to-markdown conversion -- use text_convert_html_to_markdown instead. Do NOT use for PDF generation -- use document_generate_pdf instead.`,
      inputSchema: {
        type: "object",
        properties: {
          markdown: { type: "string", description: "Markdown text to render" },
          theme: { type: "string", description: "CSS theme: 'light', 'dark', or 'github' (default: github)" },
        },
        required: ["markdown"],
      },
    },
  ],
};
