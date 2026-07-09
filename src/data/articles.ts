export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: '1',
    title: '论设计中的留白艺术',
    excerpt: '留白不是空无，而是呼吸。在信息过载的时代，学会取舍是设计师最重要的修养之一。',
    date: '2024年12月15日',
    category: '设计思考',
    readTime: '8 分钟',
  },
  {
    id: '2',
    title: '从极简主义到本质主义',
    excerpt: '极简不仅仅是视觉上的减法，更是一种思维方式。探寻事物本质，才能抵达真正的简洁。',
    date: '2024年11月28日',
    category: '设计哲学',
    readTime: '12 分钟',
  },
  {
    id: '3',
    title: '字体选择的三个维度',
    excerpt: '一款好的字体，应当在易读性、个性表达和场景适配之间找到平衡。',
    date: '2024年11月10日',
    category: '排版设计',
    readTime: '6 分钟',
  },
  {
    id: '4',
    title: '色彩心理学的温度',
    excerpt: '色彩是情感的语言。暖色调与冷色调如何影响我们的感知和情绪？',
    date: '2024年10月22日',
    category: '视觉设计',
    readTime: '10 分钟',
  },
  {
    id: '5',
    title: '阅读体验的细节打磨',
    excerpt: '从行高到字距，从段落间距到首字下沉——那些影响阅读体验的微小细节。',
    date: '2024年10月05日',
    category: '排版设计',
    readTime: '7 分钟',
  },
];
