export interface Experience {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'education';
}

export const experiences: Experience[] = [
  {
    id: '1',
    year: '2023 — 至今',
    title: '独立设计师 / 开发者',
    organization: '自由职业',
    description: '专注于极简风格的数字产品设计与开发，与多家品牌和初创公司合作，探索设计与技术的边界。',
    type: 'work',
  },
  {
    id: '2',
    year: '2020 — 2023',
    title: '高级产品设计师',
    organization: '某互联网公司',
    description: '负责核心产品的设计系统搭建和用户体验优化，带领设计团队完成多个重要项目。',
    type: 'work',
  },
  {
    id: '3',
    year: '2017 — 2020',
    title: 'UI/UX 设计师',
    organization: '某设计工作室',
    description: '参与多个品牌和产品的视觉设计与交互设计，从 0 到 1 打造用户喜爱的产品。',
    type: 'work',
  },
  {
    id: '4',
    year: '2013 — 2017',
    title: '视觉传达设计 学士',
    organization: '某美术学院',
    description: '系统学习平面设计、字体设计、品牌设计等专业知识，毕业设计获学院优秀作品奖。',
    type: 'education',
  },
];
