const articles = [
  {
    id: '1',
    title: 'TypeScript 高级类型入门',
    excerpt: '深入学习 TypeScript 高级类型，包括交叉类型、联合类型、类型别名、接口等。',
    date: '2023年1月1日',
    category: 'TypeScript',
    readTime: '13 分钟',
  },
  {
    id: '2',
    title: 'Vue 3 Composition API 详解',
    excerpt: '详解 Vue 3 Composition API，包括 setup、ref、reactive、computed、watch 等核心概念。',
    date: '2023年1月8日',
    category: 'Vue',
    readTime: '6 分钟',
  },
  {
    id: '3',
    title: 'JavaScript 原型链详解',
    excerpt: '深入理解 JavaScript 原型链机制，掌握原型继承的原理和实现方式。',
    date: '2023年1月15日',
    category: 'JavaScript',
    readTime: '12 分钟',
  },
  {
    id: '4',
    title: 'Vite 构建优化指南',
    excerpt: '优化 Vite 构建配置，包括插件配置、路径别名、环境变量、构建优化等。',
    date: '2023年1月22日',
    category: '工程化',
    readTime: '14 分钟',
  },
  {
    id: '5',
    title: 'Core Web Vitals 详解',
    excerpt: '详解 Core Web Vitals，包括 LCP、FID、CLS 的定义、测量方法和优化策略。',
    date: '2023年1月29日',
    category: '性能优化',
    readTime: '8 分钟',
  },
  {
    id: '6',
    title: '微前端架构选型',
    excerpt: '选型微前端架构，对比 qiankun、Module Federation、Web Components 等方案。',
    date: '2023年2月5日',
    category: '架构',
    readTime: '12 分钟',
  },
  {
    id: '7',
    title: 'Node.js 异步编程',
    excerpt: '掌握 Node.js 异步编程，包括回调函数、Promise、async/await 等。',
    date: '2023年2月12日',
    category: 'Node.js',
    readTime: '10 分钟',
  },
  {
    id: '8',
    title: 'Redis 缓存策略',
    excerpt: '掌握 Redis 缓存策略，包括缓存穿透、缓存击穿、缓存雪崩的解决方案。',
    date: '2023年2月19日',
    category: '数据库',
    readTime: '7 分钟',
  },
  {
    id: '9',
    title: 'XSS 攻击与防御',
    excerpt: '了解 XSS 攻击原理，掌握预防措施，包括输入过滤、输出转义、CSP 策略等。',
    date: '2023年2月26日',
    category: '安全',
    readTime: '13 分钟',
  },
  {
    id: '10',
    title: '单元测试入门',
    excerpt: '入门单元测试，学习测试框架、断言库、Mock 工具等。',
    date: '2023年3月5日',
    category: '测试',
    readTime: '15 分钟',
  },
  {
    id: '11',
    title: 'AI 辅助编程',
    excerpt: '探索 AI 辅助编程工具，包括 Copilot、Cursor、CodeLlama 等。',
    date: '2023年3月12日',
    category: '前端趋势',
    readTime: '13 分钟',
  },
  {
    id: '12',
    title: 'React Hooks 深入解析',
    excerpt: '深入理解 React Hooks 的工作原理，掌握 useState、useEffect、useContext 等常用 Hook 的最佳实践。',
    date: '2023年3月19日',
    category: 'React',
    readTime: '11 分钟',
  },
  {
    id: '13',
    title: 'TypeScript 泛型实战',
    excerpt: '掌握 TypeScript 泛型的使用，包括泛型函数、泛型类、泛型约束等高级用法。',
    date: '2023年3月26日',
    category: 'TypeScript',
    readTime: '13 分钟',
  },
  {
    id: '14',
    title: 'Vue 3 响应式原理',
    excerpt: '深入理解 Vue 3 响应式原理，包括 Proxy、依赖收集、触发更新等机制。',
    date: '2023年4月2日',
    category: 'Vue',
    readTime: '10 分钟',
  },
  {
    id: '15',
    title: 'JavaScript 闭包深入理解',
    excerpt: '全面解析 JavaScript 闭包，了解其形成原理和常见应用场景。',
    date: '2023年4月9日',
    category: 'JavaScript',
    readTime: '11 分钟',
  },
  {
    id: '16',
    title: 'Webpack 配置最佳实践',
    excerpt: '掌握 Webpack 配置最佳实践，包括入口配置、输出配置、模块规则、插件配置等。',
    date: '2023年4月16日',
    category: '工程化',
    readTime: '12 分钟',
  },
  {
    id: '17',
    title: 'LCP 优化策略',
    excerpt: '优化 LCP（最大内容绘制），包括图片优化、字体优化、资源预加载等。',
    date: '2023年4月23日',
    category: '性能优化',
    readTime: '12 分钟',
  },
  {
    id: '18',
    title: 'Module Federation 实战',
    excerpt: '实战 Module Federation，实现模块共享和远程加载，构建微前端应用。',
    date: '2023年4月30日',
    category: '架构',
    readTime: '8 分钟',
  },
  {
    id: '19',
    title: 'Node.js Event Loop 详解',
    excerpt: '深入理解 Node.js Event Loop，了解其阶段划分和任务执行顺序。',
    date: '2023年5月7日',
    category: 'Node.js',
    readTime: '14 分钟',
  },
  {
    id: '20',
    title: 'MySQL 性能优化',
    excerpt: '优化 MySQL 性能，包括索引优化、查询优化、配置优化、分库分表等。',
    date: '2023年5月14日',
    category: '数据库',
    readTime: '11 分钟',
  },
];

const contentTemplates: Record<string, string> = {
  TypeScript: `## 什么是${'{{title}}'}

在现代前端开发中，TypeScript 已经成为不可或缺的工具。本文将深入探讨${'{{title}}'}的核心概念和实际应用。

## 核心概念

### 基本定义
${'{{excerpt}}'}

### 工作原理
TypeScript 类型系统在编译时进行类型检查，帮助开发者在开发阶段发现潜在的类型错误。

## 实际应用

### 示例代码

\`\`\`typescript
// 示例代码
interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): User {
  return { id, name: '张三', email: 'test@example.com' };
}
\`\`\`

### 使用场景
- 大型项目的类型安全
- 团队协作开发
- IDE 智能提示增强

## 最佳实践

1. 使用明确的类型注解
2. 避免使用 any 类型
3. 合理使用类型推断
4. 编写类型声明文件

## 总结

通过学习${'{{title}}'}，我们可以更好地利用 TypeScript 的类型系统，提升代码质量和开发效率。`,
  
  Vue: `## Vue 3 ${'{{title}}'}

Vue 3 引入了许多新特性，${'{{title}}'}是其中最重要的一部分。

## 核心概念

### Composition API
${'{{excerpt}}'}

### 响应式系统
Vue 3 使用 Proxy 实现响应式，相比 Vue 2 的 Object.defineProperty 有了显著改进。

## 实际应用

### 示例代码

\`\`\`vue
<script setup lang="ts">
import { ref, computed } from 'vue';

const count = ref(0);
const doubled = computed(() => count.value * 2);

function increment() {
  count.value++;
}
</script>

<template>
  <button @click="increment">
    Count: {{ count }} - Doubled: {{ doubled }}
  </button>
</template>
\`\`\`

### 使用场景
- 组件逻辑复用
- 复杂状态管理
- 性能优化

## 最佳实践

1. 使用 Composition API 组织代码
2. 合理使用 ref 和 reactive
3. 利用 computed 缓存计算结果
4. 使用 watch 和 watchEffect 处理副作用

## 总结

${'{{title}}'}为 Vue 3 带来了更灵活的代码组织方式，适合中大型项目的开发。`,
  
  JavaScript: `## ${'{{title}}'}

JavaScript 是前端开发的核心语言，${'{{title}}'}是其重要特性之一。

## 核心概念

### 基本定义
${'{{excerpt}}'}

### 工作原理
理解 JavaScript 的核心机制，有助于编写更高效的代码。

## 实际应用

### 示例代码

\`\`\`javascript
// 示例代码
function example() {
  const data = { key: 'value' };
  return data;
}

async function fetchData() {
  const response = await fetch('/api/data');
  return response.json();
}
\`\`\`

### 使用场景
- 日常开发
- 性能优化
- 代码重构

## 最佳实践

1. 遵循 ES6+ 语法规范
2. 使用模块化开发
3. 处理异步操作时使用 async/await
4. 避免全局变量污染

## 总结

深入理解${'{{title}}'}，可以帮助我们写出更优雅、更高效的 JavaScript 代码。`,
  
  工程化: `## ${'{{title}}'}

前端工程化是现代前端开发的基础，${'{{title}}'}是其中的重要环节。

## 核心概念

### 基本定义
${'{{excerpt}}'}

### 工作原理
工程化工具帮助我们自动化构建、测试和部署流程。

## 实际应用

### 示例配置

\`\`\`javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
\`\`\`

### 使用场景
- 项目构建
- 代码压缩
- 开发服务器
- 热更新

## 最佳实践

1. 合理配置构建工具
2. 使用 ES modules
3. 配置路径别名
4. 设置环境变量

## 总结

良好的工程化配置可以显著提升开发效率和项目质量。`,
  
  性能优化: `## ${'{{title}}'}

性能优化是提升用户体验的关键，${'{{title}}'}是重要的优化方向。

## 核心概念

### 基本定义
${'{{excerpt}}'}

### 测量方法
使用 Chrome DevTools 等工具测量和分析性能指标。

## 实际应用

### 优化策略

\`\`\`javascript
// 代码优化示例
const memoizedValue = useMemo(() => {
  return expensiveComputation(input);
}, [input]);

// 图片优化
<img loading="lazy" src="image.webp" alt="优化图片" />
\`\`\`

### 使用场景
- 首屏加载优化
- 运行时性能优化
- 交互响应优化

## 最佳实践

1. 优化资源加载
2. 使用代码分割
3. 减少重排重绘
4. 使用 Web Worker

## 总结

持续关注性能优化，可以为用户提供更好的使用体验。`,
  
  架构: `## ${'{{title}}'}

前端架构设计直接影响项目的可维护性和扩展性。

## 核心概念

### 基本定义
${'{{excerpt}}'}

### 设计原则
遵循单一职责、开闭原则等设计原则。

## 实际应用

### 架构示例

\`\`\`javascript
// 微前端配置示例
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react-app',
    entry: '//localhost:7101',
    container: '#subapp-container',
    activeRule: '/react',
  },
]);

start();
\`\`\`

### 使用场景
- 大型项目拆分
- 团队协作开发
- 技术栈统一

## 最佳实践

1. 合理划分模块
2. 使用状态管理
3. 设计可扩展的 API
4. 考虑性能和安全

## 总结

良好的架构设计是项目成功的基础。`,
  
  'Node.js': `## ${'{{title}}'}

Node.js 是构建高性能服务端应用的重要平台。

## 核心概念

### 基本定义
${'{{excerpt}}'}

### 异步特性
Node.js 的异步非阻塞特性使其适合高并发场景。

## 实际应用

### 示例代码

\`\`\`javascript
// Express 示例
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

### 使用场景
- API 服务
- 实时通信
- 数据处理

## 最佳实践

1. 合理处理异步操作
2. 使用中间件
3. 处理错误
4. 监控性能

## 总结

Node.js 为前端开发者提供了全栈开发的能力。`,
  
  数据库: `## ${'{{title}}'}

数据库是应用的核心组件，${'{{title}}'}是重要的优化方向。

## 核心概念

### 基本定义
${'{{excerpt}}'}

### ACID 特性
理解数据库事务的 ACID 特性。

## 实际应用

### 示例代码

\`\`\`sql
-- 索引优化示例
CREATE INDEX idx_user_email ON users(email);

-- 查询优化
SELECT * FROM users 
WHERE status = 'active' 
ORDER BY created_at DESC 
LIMIT 10;
\`\`\`

### 使用场景
- 数据存储
- 数据查询
- 数据分析

## 最佳实践

1. 合理设计索引
2. 优化查询语句
3. 使用连接池
4. 定期备份

## 总结

良好的数据库设计和优化可以显著提升应用性能。`,
  
  安全: `## ${'{{title}}'}

前端安全是保护用户数据和应用安全的重要环节。

## 核心概念

### 基本定义
${'{{excerpt}}'}

### 常见威胁
了解常见的安全威胁和攻击方式。

## 实际应用

### 防护措施

\`\`\`javascript
// XSS 防护
const sanitizedInput = DOMPurify.sanitize(userInput);

// CSRF 防护
axios.defaults.headers.common['X-CSRF-Token'] = getCSRFToken();
\`\`\`

### 使用场景
- 用户输入处理
- 数据传输
- 身份验证

## 最佳实践

1. 输入验证和过滤
2. 使用 HTTPS
3. 设置安全的 Cookie
4. 定期更新依赖

## 总结

安全意识应该贯穿整个开发过程。`,
  
  测试: `## ${'{{title}}'}

测试是保证代码质量的重要手段。

## 核心概念

### 基本定义
${'{{excerpt}}'}

### 测试类型
了解单元测试、集成测试、E2E 测试等不同类型。

## 实际应用

### 测试示例

\`\`\`javascript
// Jest 测试示例
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('fetches data correctly', async () => {
  const data = await fetchData();
  expect(data).toHaveProperty('id');
});
\`\`\`

### 使用场景
- 功能验证
- 回归测试
- 性能测试

## 最佳实践

1. 编写可测试的代码
2. 覆盖关键路径
3. 使用 Mock
4. 持续集成

## 总结

测试可以帮助我们快速发现问题，提升代码质量。`,
  
  '前端趋势': `## ${'{{title}}'}

前端技术日新月异，了解${'{{title}}'}有助于保持竞争力。

## 核心概念

### 基本定义
${'{{excerpt}}'}

### 发展方向
分析前端技术的发展趋势和未来方向。

## 实际应用

### 示例代码

\`\`\`javascript
// AI 辅助编程示例
// 使用 AI 生成代码
const code = await ai.generateCode({
  prompt: '创建一个 React 组件',
  language: 'typescript',
});

// 生成式 UI
const ui = ai.generateUI({
  data: userData,
  template: 'profile',
});
\`\`\`

### 使用场景
- 提高开发效率
- 创新交互体验
- 智能化应用

## 最佳实践

1. 持续学习新技术
2. 关注社区动态
3. 尝试新工具
4. 分享学习心得

## 总结

保持学习态度，跟上前端技术的发展步伐。`,
  
  React: `## ${'{{title}}'}

React 是目前最流行的前端框架之一。

## 核心概念

### 基本定义
${'{{excerpt}}'}

### 工作原理
理解 React 的核心机制，包括虚拟 DOM、Diff 算法等。

## 实际应用

### 示例代码

\`\`\`tsx
// React 组件示例
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

### 使用场景
- 单页应用
- 组件库开发
- 服务端渲染

## 最佳实践

1. 使用 Hooks 组织逻辑
2. 合理使用状态管理
3. 优化渲染性能
4. 编写可复用组件

## 总结

React 的生态系统非常丰富，适合各种规模的项目开发。`,
};

function generateContent(article: typeof articles[0]): string {
  const template = contentTemplates[article.category] || contentTemplates['JavaScript'];
  return template
    .replace(/\{\{title\}\}/g, article.title)
    .replace(/\{\{excerpt\}\}/g, article.excerpt);
}

const articlesWithContent = articles.map(article => ({
  ...article,
  content: generateContent(article),
}));

console.log(JSON.stringify(articlesWithContent, null, 2));
