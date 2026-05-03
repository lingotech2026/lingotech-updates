function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function applyInlineFormatting(text: string): string {
  let html = escapeHtml(text);

  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  return html;
}

/**
 * Converts a markdown-like string into safe HTML for blog articles.
 * Supports headings, paragraphs, lists, blockquotes, and fenced code blocks.
 */
export function renderMarkdownToHtml(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const htmlParts: string[] = [];

  let inCodeBlock = false;
  let codeLines: string[] = [];
  let inUnorderedList = false;
  let inOrderedList = false;

  const closeLists = () => {
    if (inUnorderedList) {
      htmlParts.push('</ul>');
      inUnorderedList = false;
    }

    if (inOrderedList) {
      htmlParts.push('</ol>');
      inOrderedList = false;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line.startsWith('```')) {
      closeLists();

      if (inCodeBlock) {
        htmlParts.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
        inCodeBlock = false;
        codeLines = [];
      } else {
        inCodeBlock = true;
      }

      continue;
    }

    if (inCodeBlock) {
      codeLines.push(rawLine);
      continue;
    }

    if (!line) {
      closeLists();
      continue;
    }

    if (line.startsWith('# ')) {
      closeLists();
      htmlParts.push(`<h1>${applyInlineFormatting(line.slice(2))}</h1>`);
      continue;
    }

    if (line.startsWith('## ')) {
      closeLists();
      htmlParts.push(`<h2>${applyInlineFormatting(line.slice(3))}</h2>`);
      continue;
    }

    if (line.startsWith('### ')) {
      closeLists();
      htmlParts.push(`<h3>${applyInlineFormatting(line.slice(4))}</h3>`);
      continue;
    }

    if (line.startsWith('> ')) {
      closeLists();
      htmlParts.push(`<blockquote><p>${applyInlineFormatting(line.slice(2))}</p></blockquote>`);
      continue;
    }

    if (line.match(/^[-*]\s+/)) {
      if (!inUnorderedList) {
        closeLists();
        htmlParts.push('<ul>');
        inUnorderedList = true;
      }

      htmlParts.push(`<li>${applyInlineFormatting(line.replace(/^[-*]\s+/, ''))}</li>`);
      continue;
    }

    if (line.match(/^\d+\.\s+/)) {
      if (!inOrderedList) {
        closeLists();
        htmlParts.push('<ol>');
        inOrderedList = true;
      }

      htmlParts.push(`<li>${applyInlineFormatting(line.replace(/^\d+\.\s+/, ''))}</li>`);
      continue;
    }

    closeLists();
    htmlParts.push(`<p>${applyInlineFormatting(line)}</p>`);
  }

  closeLists();

  if (inCodeBlock && codeLines.length > 0) {
    htmlParts.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
  }

  return htmlParts.join('');
}
