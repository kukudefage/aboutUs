export interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
}

export const skills: Skill[] = [
  { id: '1', name: 'UI 设计', level: 95, category: '设计' },
  { id: '2', name: '品牌设计', level: 88, category: '设计' },
  { id: '3', name: '排版设计', level: 92, category: '设计' },
  { id: '4', name: 'React', level: 85, category: '开发' },
  { id: '5', name: 'TypeScript', level: 80, category: '开发' },
  { id: '6', name: 'CSS / Tailwind', level: 90, category: '开发' },
  { id: '7', name: 'Figma', level: 96, category: '工具' },
  { id: '8', name: 'Framer Motion', level: 82, category: '工具' },
  { id: '9', name: 'Adobe Suite', level: 88, category: '工具' },
];
