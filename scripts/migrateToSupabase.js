const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const SUPABASE_URL = 'https://mseghurrlexstnvcfulg.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_KEY;

if (!SUPABASE_KEY) {
  console.error('Error: SUPABASE_SERVICE_KEY or SUPABASE_KEY environment variable not set');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function main() {
  console.log('=== Starting data migration ===');
  
  const articles = require('../src/data/articles').articles;
  const categories = require('../src/data/articles').categories;

  console.log(`Found ${categories.length} categories`);
  console.log(`Found ${articles.length} articles`);

  for (const category of categories) {
    const { data, error } = await supabase
      .from('article_categories')
      .upsert({
        id: category.id,
        name: category.name,
        slug: category.slug,
        description: category.description || null,
        sort_order: category.sort_order || 0,
        icon: category.icon || null,
        is_active: category.is_active || 1,
      });
    
    if (error) {
      console.error(`Failed to upsert category ${category.name}:`, error.message);
    } else {
      console.log(`Upserted category: ${category.name}`);
    }
  }

  let successCount = 0;
  let failCount = 0;

  for (const article of articles) {
    const { data, error } = await supabase
      .from('articles')
      .upsert({
        id: article.id,
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt,
        content: article.content || '',
        category_id: article.category_id,
        author: article.author || '智发',
        cover_image: article.cover_image || null,
        read_time: article.read_time || 5,
        views: article.views || 0,
        likes: article.likes || 0,
        status: article.status || 1,
        is_top: article.is_top || 0,
        published_at: article.published_at || new Date().toISOString(),
      });
    
    if (error) {
      console.error(`Failed to upsert article ${article.title}:`, error.message);
      failCount++;
    } else {
      successCount++;
    }

    if (successCount % 20 === 0) {
      console.log(`Progress: ${successCount}/${articles.length}`);
    }
  }

  console.log(`\n=== Migration complete ===`);
  console.log(`Success: ${successCount}`);
  console.log(`Failed: ${failCount}`);
}

main().catch(console.error);
