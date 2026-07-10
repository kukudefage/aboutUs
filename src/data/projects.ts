export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  category: string;
  techStack: string[];
  year: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: '静谧书屋',
    description: '一个专注于沉浸式阅读体验的数字书店，以极简设计衬托内容本身。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20bookstore%20website%20design%20warm%20beige%20tones%20elegant%20typography%20serif%20font&image_size=landscape_4_3',
    category: 'Web 设计',
    techStack: ['React', 'TypeScript', 'TailwindCSS'],
    year: '2024',
  },
  {
    id: '2',
    title: '时光手账',
    description: '一款优雅的个人日记应用，用文字和图像记录生活中的美好瞬间。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20diary%20journal%20app%20design%20warm%20cream%20color%20minimal%20interface%20soft%20shadows&image_size=landscape_4_3',
    category: '移动应用',
    techStack: ['React Native', 'Expo', 'Zustand'],
    year: '2024',
  },
  {
    id: '3',
    title: '器物志',
    description: '展示日本民艺作品的线上画廊，以留白之美呈现手工器物的温度。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=japanese%20crafts%20gallery%20website%20minimal%20zen%20aesthetic%20warm%20wood%20tones%20simple%20layout&image_size=landscape_4_3',
    category: '品牌网站',
    techStack: ['Next.js', 'Framer Motion', 'Sanity'],
    year: '2023',
  },
  {
    id: '4',
    title: '茶与时间',
    description: '一个关于茶文化的深度内容平台，讲述每一片茶叶背后的故事。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tea%20culture%20blog%20website%20earthy%20warm%20tones%20elegant%20editorial%20layout%20serene&image_size=landscape_4_3',
    category: '内容平台',
    techStack: ['Vue.js', 'Nuxt', 'GSAP'],
    year: '2023',
  },
  {
    id: '5',
    title: '慢食光',
    description: '主打有机食材的美食品牌视觉系统，从 logo 到包装的全案设计。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=organic%20food%20brand%20identity%20natural%20warm%20colors%20hand%20drawn%20elements%20rustic%20elegant&image_size=landscape_4_3',
    category: '品牌设计',
    techStack: ['Figma', 'Illustrator', 'Photoshop'],
    year: '2023',
  },
  {
    id: '6',
    title: '山间民宿',
    description: '山中隐居风格的精品民宿网站，营造远离喧嚣的宁静氛围。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mountain%20retreat%20boutique%20hotel%20website%20serene%20nature%20minimal%20warm%20earthy%20tones&image_size=landscape_4_3',
    category: 'Web 设计',
    techStack: ['React', 'Three.js', 'Lenis'],
    year: '2022',
  },
];
