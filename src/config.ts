import type { ApiConfig } from "./shared";

export const API_CONFIG: ApiConfig = {
  name: "markdown-renderer",
  slug: "markdown-renderer",
  description: "Render markdown to styled HTML with built-in CSS themes.",
  version: "1.0.0",
  routes: [
    {
      method: "POST",
      path: "/api/render",
      price: "$0.002",
      description: "Render markdown to styled HTML",
      toolName: "text_render_markdown",
      toolDescription: "Use this when you need to convert markdown text to styled HTML with CSS. Supports light and dark themes. Returns complete HTML document with embedded styles, ready for display or embedding. Do NOT use for HTML-to-markdown conversion — use text_convert_html_to_markdown instead. Do NOT use for PDF generation — use document_generate_pdf instead.",
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
