import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { articles } from '@/data/articles';
import { useNavigationHistory } from '@/hooks/useNavigationHistory';

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const { goBack, hasHistory, prevPath } = useNavigationHistory();
  const article = articles.find(a => a.id === id);

  const getBackButtonText = () => {
    if (!hasHistory) return '返回文章列表';
    if (prevPath === '/') return '返回首页';
    if (prevPath === '/works') return '返回文章列表';
    return '上一页';
  };

  if (!article) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">文章未找到</h1>
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-cyan/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回文章列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={goBack}
          className="inline-flex items-center gap-2 text-dark-900/50 dark:text-white/40 hover:text-neon-cyan transition-colors mb-8 group cursor-pointer bg-transparent border-none"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {getBackButtonText()}
        </button>

        <article>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono text-xs text-dark-900/40 dark:text-white/30 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="font-mono text-xs text-dark-900/40 dark:text-white/30 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}阅读
            </span>
            <span className="font-mono text-xs text-neon-cyan/80 bg-neon-cyan/10 px-2.5 py-0.5 rounded-full border border-neon-cyan/20 flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
          </div>

          <h1 className="article-title">
            {article.title}
          </h1>

          <p className="article-excerpt">
            {article.excerpt}
          </p>

          <div
            className="markdown-content prose-content"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(article.content) }}
          />
        </article>

        <div className="mt-12 pt-8 border-t border-dark-900/10 dark:border-white/10">
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-cyan/80 transition-colors group cursor-pointer bg-transparent border-none"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {getBackButtonText()}
          </button>
        </div>
      </div>
    </div>
  );
}

function parseMarkdown(markdown: string): string {
  const lines = markdown.split('\n');
  const htmlParts: string[] = [];
  let inCodeBlock = false;
  let codeBlockLang = '';
  let codeContent = '';
  let inList = false;
  let listType: 'ul' | 'ol' = 'ul';

  const flushList = () => {
    if (inList) {
      htmlParts.push(`</${listType}>`);
      inList = false;
    }
  };

  for (const line of lines) {
    if (line.startsWith('```')) {
      flushList();
      if (inCodeBlock) {
        htmlParts.push(`<div class="code-block"><pre><code>${codeContent}</code></pre></div>`);
        inCodeBlock = false;
        codeContent = '';
      } else {
        inCodeBlock = true;
        codeBlockLang = line.slice(3).trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent += line + '\n';
      continue;
    }

    const headingMatch = line.match(/^(#{2,4})\s+(.+)$/);
    if (headingMatch) {
      flushList();
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const classMap: Record<number, string> = {
        2: 'section-title',
        3: 'subsection-title',
        4: 'subsubsection-title',
      };
      htmlParts.push(`<h${level} class="${classMap[level]}">${text}</h${level}>`);
      continue;
    }

    const bulletMatch = line.match(/^-\s+(.+)$/);
    if (bulletMatch) {
      if (!inList || listType !== 'ul') {
        flushList();
        listType = 'ul';
        inList = true;
        htmlParts.push('<ul>');
      }
      htmlParts.push(`<li class="list-item bullet">${bulletMatch[1]}</li>`);
      continue;
    }

    const numberedMatch = line.match(/^(\d+)\.\s+(.+)$/);
    if (numberedMatch) {
      if (!inList || listType !== 'ol') {
        flushList();
        listType = 'ol';
        inList = true;
        htmlParts.push('<ol>');
      }
      htmlParts.push(`<li class="list-item numbered">${numberedMatch[2]}</li>`);
      continue;
    }

    flushList();

    const trimmed = line.trim();
    if (trimmed === '') {
      continue;
    }

    let processed = trimmed
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-bold">$1</strong>')
      .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

    htmlParts.push(`<p class="paragraph">${processed}</p>`);
  }

  flushList();

  if (inCodeBlock) {
    htmlParts.push(`<div class="code-block"><pre><code>${codeContent}</code></pre></div>`);
  }

  return htmlParts.join('\n');
}
