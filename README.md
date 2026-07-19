# Markdown Renderer API

[![MCP Server](https://img.shields.io/badge/MCP-server-blue)](https://markdown-renderer.api.klymax402.com/mcp)
[![x402](https://img.shields.io/badge/payments-x402-6E56CF)](https://x402.org)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Render Markdown to styled HTML with CSS themes -- light, dark, GitHub. Ready-to-embed HTML documents. Pay-per-call via [x402](https://x402.org) (USDC on Base L2) -- no API key, no signup, no rate-limit wall.

Part of the [klymax402](https://klymax402.com) marketplace -- 100 x402 micropayment APIs for AI agents, one wallet, USDC on Base.

## Quickstart -- MCP

Add to your MCP client config (Claude Desktop, Cursor, ElizaOS, etc.):

```json
{
  "mcpServers": {
    "markdown-renderer": {
      "url": "https://markdown-renderer.api.klymax402.com/mcp"
    }
  }
}
```

## Quickstart -- HTTP (x402)

```bash
curl -X POST "https://markdown-renderer.api.klymax402.com/api/render" \
  -H "Content-Type: application/json" \
  -d '{"markdown":"..."}'
# -> 402 Payment Required, with an x402 payment challenge in the response body
```

Any x402-aware client ([`@x402/fetch`](https://www.npmjs.com/package/@x402/fetch), [`x402-agent-tools`](https://www.npmjs.com/package/x402-agent-tools), ATXP) handles the 402 -> sign -> retry cycle automatically.

## Tools

| Tool | Method | Path | Price | Description |
|---|---|---|---|---|
| `text_render_markdown` | POST | `/api/render` | $0.005 | Render markdown to styled HTML |

### `text_render_markdown`

Use this when you need to convert Markdown to a fully styled HTML document with embedded CSS. Returns a complete, display-ready HTML page in JSON.

**Parameters**

| Name | Type | Required | Description |
|---|---|---|---|
| `markdown` | string | yes | Markdown text to render |
| `theme` | string | no | CSS theme: 'light', 'dark', or 'github' (default: github) |

Example response:

```json
{"html":"<!DOCTYPE html><html><head><style>body{font-family:system-ui;max-width:800px;margin:auto}...</style></head><body><h1>Title</h1><p>Content</p></body></html>","theme":"github","inputLength":25,"outputLength":1240}
```

**When to use**: generating styled documentation pages, creating email-ready HTML from markdown, building preview renders, and producing embeddable content blocks.

**Not for**: raw HTML conversion (no CSS) (use `text_convert_markdown_to_html`), PDF generation (use `document_generate_pdf`).

## Example agent prompts

- "Convert Markdown to a fully styled HTML document with embedded CSS"

## Payment

- Protocol: [x402](https://x402.org) -- HTTP-native pay-per-call, no signup, no API key
- Network: Base L2 (`eip155:8453`)
- Asset: USDC
- Facilitator: Coinbase CDP (primary), PayAI (fallback)
- Also reachable via [ATXP](https://atxp.ai) (OAuth-wrapped x402, RFC 9728 protected-resource metadata)

## Part of klymax402

100 x402 micropayment APIs for AI agents -- one wallet, USDC on Base, zero signup.

- Catalog: https://klymax402.com/llms.txt
- Full API reference: https://klymax402.com/llms-full.txt
- Live stats: https://klymax402.com/stats

## License

MIT
