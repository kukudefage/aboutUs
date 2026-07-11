import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

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
          supabase
            .from('articles')
            .select(`
              *,
              category:article_categories(id, name, slug)
            `)
            .eq('status', 1)
            .is('deleted_at', null)
            .order('published_at', { ascending: false }),
          supabase
            .from('article_categories')
            .select('*')
            .eq('is_active', 1)
            .order('sort_order', { ascending: true }),
        ]);

        if (articlesRes.error) throw articlesRes.error;
        if (categoriesRes.error) throw categoriesRes.error;

        let filteredArticles = articlesRes.data as ArticleFromDB[];

        if (filter !== '全部') {
          filteredArticles = filteredArticles.filter(
            article => article.category?.name === filter
          );
        }

        setArticles(filteredArticles);
        setCategories(categoriesRes.data as CategoryFromDB[]);
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
        if (isNaN(parsedId)) {
          const slugRes = await supabase
            .from('articles')
            .select(`
              *,
              category:article_categories(id, name, slug)
            `)
            .eq('slug', id)
            .eq('status', 1)
            .is('deleted_at', null)
            .single();

          if (slugRes.error && slugRes.error.code !== 'PGRST116') {
            throw slugRes.error;
          }

          if (slugRes.data) {
            setArticle(slugRes.data as ArticleFromDB);
            await incrementViews(slugRes.data.id);
          } else {
            throw new Error('Article not found');
          }
        } else {
          const res = await supabase
            .from('articles')
            .select(`
              *,
              category:article_categories(id, name, slug)
            `)
            .eq('id', parsedId)
            .eq('status', 1)
            .is('deleted_at', null)
            .single();

          if (res.error) throw res.error;

          setArticle(res.data as ArticleFromDB);
          await incrementViews(res.data.id);
        }
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

async function incrementViews(articleId: number) {
  await supabase
    .from('articles')
    .update({ views: supabase.rpc('increment', { value: 1 }) })
    .eq('id', articleId);
}
