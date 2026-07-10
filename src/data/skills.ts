export interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
}

export const skills: Skill[] = [
  { id: '1', name: 'React / Next.js', level: 95, category: '前端框架' },
  { id: '2', name: 'Vue.js / Nuxt', level: 85, category: '前端框架' },
  { id: '3', name: 'TypeScript', level: 92, category: '编程语言' },
  { id: '4', name: 'JavaScript', level: 96, category: '编程语言' },
  { id: '5', name: 'HTML5 / CSS3', level: 93, category: '基础技术' },
  { id: '6', name: 'TailwindCSS', level: 90, category: '基础技术' },
  { id: '7', name: 'Node.js', level: 82, category: '服务端' },
  { id: '8', name: 'Vite / Webpack', level: 88, category: '工程化' },
  { id: '9', name: '性能优化', level: 85, category: '工程化' },
  { id: '10', name: 'Git / CI/CD', level: 87, category: '工具' },
  { id: '11', name: 'Jest / Vitest', level: 80, category: '测试' },
  { id: '12', name: 'MySQL / Redis', level: 78, category: '数据库' },
];
