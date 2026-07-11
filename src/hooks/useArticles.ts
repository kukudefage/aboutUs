import { useState, useEffect } from 'react';
import { supabaseFetch } from '@/lib/supabase';

export interface ArticleFromDB {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category_id: number;
  author: string;
  cover_image: string | null;
  read_time: number;
  views: number;
  likes: number;
  status: number;
  is_top: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  category?: CategoryFromDB;
}

export interface CategoryFromDB {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  sort_order: number;
  icon: string | null;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export function useArticles(filter: string = '全部') {
  const [articles, setArticles] = useState<ArticleFromDB[]>([]);
  const [categories, setCategories] = useState<CategoryFromDB[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const [articlesRes, categoriesRes] = await Promise.all([
          supabaseFetch<ArticleFromDB[]>(
            '/articles?select=*&status=eq.1&deleted_at=is.null&order=published_at.desc'
          ),
          supabaseFetch<CategoryFromDB[]>(
            '/article_categories?select=*&is_active=eq.1&order=sort_order.asc'
          ),
        ]);

        if (articlesRes.error) throw new Error(articlesRes.error.message);
        if (categoriesRes.error) throw new Error(categoriesRes.error.message);

        const catData = categoriesRes.data || [];
        const categoryMap = new Map(catData.map(c => [c.id, c]));

        let filteredArticles = (articlesRes.data || []).map(article => ({
          ...article,
          category: categoryMap.get(article.category_id),
        }));

        if (filter !== '全部') {
          filteredArticles = filteredArticles.filter(
            article => article.category?.name === filter
          );
        }

        setArticles(filteredArticles);
        setCategories(catData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch articles'));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [filter]);

  return { articles, categories, loading, error };
}

export function useArticle(id: string | undefined) {
  const [article, setArticle] = useState<ArticleFromDB | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    async function fetchArticle() {
      setLoading(true);
      setError(null);

      try {
        const parsedId = parseInt(id, 10);
        let articleRes;

        if (isNaN(parsedId)) {
          articleRes = await supabaseFetch<ArticleFromDB>(
            `/articles?select=*&slug=eq.${encodeURIComponent(id)}&status=eq.1&deleted_at=is.null`
          );
          // slug query returns array
          const articles = articleRes.data as unknown as ArticleFromDB[];
          if (!articles || articles.length === 0) {
            throw new Error('Article not found');
          }
          articleRes = { data: articles[0], error: null };
        } else {
          articleRes = await supabaseFetch<ArticleFromDB>(
            `/articles?select=*&id=eq.${parsedId}&status=eq.1&deleted_at=is.null`
          );
          const articles = articleRes.data as unknown as ArticleFromDB[];
          if (!articles || articles.length === 0) {
            throw new Error('Article not found');
          }
          articleRes = { data: articles[0], error: null };
        }

        if (articleRes.error) throw new Error(articleRes.error.message);

        const articleData = articleRes.data as ArticleFromDB;

        const catRes = await supabaseFetch<CategoryFromDB>(
          `/article_categories?select=id,name,slug&id=eq.${articleData.category_id}`
        );
        const categories = catRes.data as unknown as CategoryFromDB[];
        const category = categories && categories.length > 0 ? categories[0] : undefined;

        setArticle({
          ...articleData,
          category,
        });
      } catch (err) {
        if (err instanceof Error && err.message !== 'Article not found') {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id]);

  return { article, loading, error };
}
