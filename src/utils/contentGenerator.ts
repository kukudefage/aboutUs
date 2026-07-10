import type { Article } from '@/data/articles';

function getReadMinutes(article: Article): number {
  const match = article.readTime.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 8;
}

type ContentBuilder = (article: Article, minutes: number) => string;

interface SectionMap {
  引言: ContentBuilder;
  背景与动机: ContentBuilder;
  背景与起源: ContentBuilder;
  核心概念: ContentBuilder;
  核心概念解析: ContentBuilder;
  工作原理: ContentBuilder;
  工作原理深入: ContentBuilder;
  底层实现原理: ContentBuilder;
  环境搭建与配置: ContentBuilder;
  基础用法: ContentBuilder;
  基础用法详解: ContentBuilder;
  进阶技巧: ContentBuilder;
  进阶用法: ContentBuilder;
  高级特性: ContentBuilder;
  高级特性探索: ContentBuilder;
  性能优化: ContentBuilder;
  性能分析与优化: ContentBuilder;
  实际案例: ContentBuilder;
  实际项目案例: ContentBuilder;
  实际案例分析: ContentBuilder;
  常见问题: ContentBuilder;
  常见问题与解决方案: ContentBuilder;
  常见陷阱与避坑指南: ContentBuilder;
  工具与生态: ContentBuilder;
  工具链与生态: ContentBuilder;
  团队协作与代码规范: ContentBuilder;
  测试与质量保障: ContentBuilder;
  最佳实践: ContentBuilder;
  最佳实践总结: ContentBuilder;
  未来展望: ContentBuilder;
  总结: ContentBuilder;
  总结与展望: ContentBuilder;
}

const typeScriptSections: SectionMap = {
  引言: (a, m) => `${a.title}是 TypeScript 进阶学习中绕不开的话题。无论你是从 JavaScript 迁移过来的开发者，还是已经在 TypeScript 项目中工作多年，深入理解${a.title}都能让你的代码质量提升一个台阶。

本文将系统性地讲解${a.title}的所有关键点，从基础概念到高级应用，从理论分析到实战案例，帮助你建立完整的知识体系。

阅读完本文，你将能够：
- 深入理解${a.title}的核心原理
- 在实际项目中灵活运用相关特性
- 避免常见的使用陷阱
- 编写出更加健壮、可维护的 TypeScript 代码

${a.excerpt}这是本文的核心议题，下面我们从多个维度展开。

本文预计阅读时间约 ${m} 分钟，建议预留充足时间消化每个章节。`,
  背景与动机: (a) => `在 TypeScript 出现之前，JavaScript 项目经常面临类型不明确、接口难以约束、重构风险高等问题。TypeScript 通过引入静态类型系统，让开发者在编译期就能发现大量潜在错误。

${a.title}的诞生，正是为了解决这些具体场景下的痛点。从最初的简单类型推导，到如今复杂类型编程能力，TypeScript 一直在进化。

为什么需要学习${a.title}？

- **提升代码可读性**：明确的类型让代码即文档
- **增强 IDE 体验**：智能提示、自动补全、重构支持
- **降低维护成本**：编译期错误检查，避免运行时崩溃
- **提高团队效率**：类型即契约，沟通成本大幅降低
- **促进代码重构**：编译器帮你找到所有需要修改的地方

从 GitHub 2023 年的统计来看，TypeScript 已经超越 JavaScript 成为最受欢迎的编程语言，越来越多的项目选择使用 TypeScript 来构建。在这个背景下，掌握${a.title}这样的进阶知识，对于前端开发者来说已经成为必备技能。`,
  背景与起源: (a) => `${a.title}的发展历程值得深入了解。

TypeScript 诞生于 2012 年，由微软推出。最初的目标是解决大型 JavaScript 项目的可维护性问题。随着 ECMAScript 标准的不断演进，TypeScript 也在持续进化。

关键里程碑：
- 2012 年：TypeScript 1.0 发布
- 2014 年：TypeScript 1.4 加入泛型支持
- 2016 年：TypeScript 2.0 引入严格空值检查
- 2018 年：TypeScript 3.0 引入项目引用
- 2020 年：TypeScript 4.0 引入可变元组类型
- 2023 年：TypeScript 5.0 引入装饰器标准

每一次重大升级，${a.title}的相关内容都会得到增强。从最初的简单类型，到如今复杂类型编程能力，TypeScript 已经发展成为一门独立的类型艺术。

理解这一演进过程，有助于我们更好地理解${a.title}的设计哲学。`,
  核心概念: (a) => `${a.excerpt}

要真正掌握${a.title}，我们需要先理解几个核心概念。

类型空间与值空间
TypeScript 中存在两个独立的空间：类型空间和值空间。理解这一点对掌握类型编程至关重要。

\`\`\`typescript
// 类型空间
type ID = string | number;
interface User { name: string; }

// 值空间
const id: ID = 1;
const user: User = { name: '张三' };
\`\`\`

结构化类型系统
TypeScript 采用结构化类型（Structural Typing），也叫鸭子类型。只要两个类型的形状相同，它们就是兼容的。

\`\`\`typescript
interface Point { x: number; y: number; }
function logPoint(p: Point) { console.log(p.x, p.y); }

const point = { x: 10, y: 20, z: 30 };
logPoint(point); // 合法：point 包含 Point 必需的所有属性
\`\`\`

类型擦除
TypeScript 在编译时会擦除所有类型信息，不会影响运行时的行为。这意味着 TypeScript 类型系统是零成本的抽象。`,
  核心概念解析: (a) => `${a.excerpt}

深入理解${a.title}需要掌握其底层设计哲学。TypeScript 的类型系统是基于结构化类型（Structural Typing）的，这意味着类型的兼容性是由它们的形状决定的，而不是由显式的继承关系决定。

类型与值的区别
在 TypeScript 中，类型存在于一个独立的命名空间，运行时会被完全擦除。这意味着你不能在运行时通过 typeof 来判断一个变量是否为某个特定类型，除非你显式地保留类型信息。

类型空间与值空间
- 类型空间：interface、type、class（作为类型时）
- 值空间：class（作为值时）、enum、function、变量

理解这两个空间的关系，是掌握${a.title}的关键。

类型层级结构
TypeScript 类型系统存在严格的层级：
\`\`\`typescript
any          // 顶层，跳过类型检查
unknown      // 类型安全的顶层
{}           // 任何非 null/undefined
object       // 任何对象类型
Object       // 包装对象类型
\`\`\`

协变与逆变
- **协变（Covariance）**：子类型关系在类型构造器中保持一致
- **逆变（Contravariance）**：子类型关系在类型构造器中反转
- **不变（Invariance）**：既不协变也不逆变

理解这些概念有助于处理复杂的类型关系。`,
  工作原理: () => `TypeScript 编译器（tsc）的工作流程可以大致分为以下几个阶段：

1. **解析（Parsing）**：将 TypeScript 源代码解析为 AST（抽象语法树）
2. **类型检查（Type Checking）**：遍历 AST，进行类型推导和检查
3. **转换（Transformation）**：将 TS 特定的语法转换为 JavaScript
4. **生成（Emit）**：输出最终的 JavaScript 代码

类型推导算法
TypeScript 使用的是基于控制流的类型分析（Control Flow Analysis）。它会跟踪变量的赋值、运算、条件分支等信息，推导出每个位置最准确的类型。

类型兼容性
TypeScript 的类型兼容性是基于"鸭子类型"（Duck Typing）的。简单来说，只要两个类型的形状相同，它们就是兼容的，即使它们没有显式的继承关系。

编译器优化
现代 TypeScript 编译器采用多种优化策略：
- 增量编译：只编译修改过的文件
- 项目引用：将大型项目拆分为多个子项目
- 类型缓存：缓存已计算的类型结果
- 并行处理：多核 CPU 并行处理多个文件`,
  工作原理深入: (a) => `深入理解 TypeScript 的工作原理，有助于我们写出更符合类型系统期望的代码。

类型擦除
TypeScript 在编译时会擦除所有类型信息。这意味着：
- 类型不会影响运行时的行为
- 运行时无法获取类型信息（除非使用反射）
- 编译后的 JavaScript 代码与手写代码性能相当

类型推导的边界
TypeScript 的类型推导不是万能的。在某些情况下，编译器会回退到 any 类型：
- 没有类型注解的函数参数
- 动态引入的模块
- 第三方库没有类型声明

这时候我们需要显式地提供类型注解，帮助编译器进行准确的类型检查。

类型推导算法详解
TypeScript 的类型推导基于 Hindley-Milner 类型系统，并在此基础上做了扩展。核心算法包括：
- 单态化（Monomorphization）：将泛型实例化为具体类型
- 双向推导（Bidirectional Inference）：同时从参数和返回值推导
- 控制流分析（Control Flow Analysis）：基于代码路径推导
- 类型收窄（Type Narrowing）：通过条件分支缩小类型范围

${a.title}在实践中的应用，往往需要深入理解这些底层机制。`,
  底层实现原理: (a) => `了解 TypeScript 编译器的底层实现，有助于我们写出更高效的 TypeScript 代码。

编译器架构
\`\`\`
Source Code → Scanner → Parser → AST → Binder → Type Checker → Transformer → Emitter → JavaScript
\`\`\`

每个阶段的核心职责：
- **Scanner**：将源代码转换为 token 流
- **Parser**：构建抽象语法树（AST）
- **Binder**：建立符号表，关联标识符与声明
- **Type Checker**：执行类型推导和检查
- **Transformer**：将 TS 特性转换为 JS
- **Emitter**：生成最终的 JavaScript 代码

类型检查器的实现
TypeScript 的类型检查器是基于"类型关系"的。每种类型都有一个内部表示，类型检查就是比较这些表示之间的关系。

\`\`\`typescript
// 内部类型表示（简化）
interface Type {
  flags: TypeFlags;
  symbol?: Symbol;
  // ... 其他属性
}
\`\`\`

性能优化策略
TypeScript 5.0 引入了新的编译器 API，编译速度相比 4.x 提升了 10-25%。主要优化包括：
- 更高效的内存表示
- 增量类型检查
- 智能的文件依赖分析
- 并行处理优化

${a.title}的实践应用，需要我们理解这些底层机制。`,
  环境搭建与配置: () => `良好的项目配置是高效开发的基础。

tsconfig.json 关键配置
\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
\`\`\`

strict 模式
强烈建议开启 strict 模式，它会启用以下检查：
- noImplicitAny：禁止隐式 any
- strictNullChecks：严格的 null 检查
- strictFunctionTypes：严格的函数类型检查
- strictBindCallApply：严格的 bind/call/apply
- strictPropertyInitialization：严格的属性初始化
- alwaysStrict：使用严格模式
- useUnknownInCatchVariables：catch 中使用 unknown

ESLint 配合
推荐使用 @typescript-eslint 配合 ESLint：
\`\`\`json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ]
}
\`\`\`

Prettier 集成
\`\`\`json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100
}
\`\`\``,
  基础用法: () => `TypeScript 基础类型系统的使用非常直接。

基本类型注解
\`\`\`typescript
let name: string = '张三';
let age: number = 25;
let isActive: boolean = true;
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ['hello', 10];
\`\`\`

接口定义
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email?: string;  // 可选属性
  readonly createdAt: Date;  // 只读属性
}
\`\`\`

类型别名
\`\`\`typescript
type ID = string | number;
type Status = 'pending' | 'success' | 'error';
type Handler = (event: Event) => void;
\`\`\`

泛型基础
\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>('hello');
const result2 = identity(42);  // 类型推导
\`\`\`

联合类型与交叉类型
\`\`\`typescript
type StringOrNumber = string | number;
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged;
\`\`\``,
  基础用法详解: () => `让我们从最基础的概念开始深入学习。

类型声明的三种方式
\`\`\`typescript
// 1. 接口（Interface）
interface User {
  id: number;
  name: string;
}

// 2. 类型别名（Type Alias）
type User = {
  id: number;
  name: string;
};

// 3. 类（Class）
class User {
  constructor(public id: number, public name: string) {}
}
\`\`\`

接口与类型别名的区别：
- 接口支持声明合并，类型别名不支持
- 类型别名可以表达联合类型、交叉类型
- 接口在对象字面量上更严格

函数类型
\`\`\`typescript
type Handler = (event: Event) => void;

interface UserService {
  getUser(id: number): Promise<User>;
  updateUser(user: User): Promise<void>;
}
\`\`\`

泛型基础
\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

interface Container<T> {
  value: T;
  getValue(): T;
}
\`\`\`

类型推导
TypeScript 编译器会根据上下文自动推导类型：
\`\`\`typescript
let x = 10;  // 推导为 number
let arr = [1, 2, 3];  // 推导为 number[]
\`\`\``,
  进阶技巧: (a) => `${a.title}有一些不那么显眼但非常实用的技巧。

类型推导助手
\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: '张三', age: 25 };
const name = getProperty(user, 'name');  // string
const age = getProperty(user, 'age');    // number
\`\`\`

模板字面量类型（TypeScript 4.1+）
\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type ClickEvent = EventName<'click'>;  // 'onClick'

type Greeting<T extends string> = \`Hello, \${T}!\`;
type G = Greeting<'World'>;  // 'Hello, World!'
\`\`\`

satisfy 操作符（TypeScript 4.9+）
\`\`\`typescript
type Colors = 'red' | 'green' | 'blue';
const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
} satisfies Record<Colors, unknown>;
\`\`\`

const 类型参数
\`\`\`typescript
function identity<const T>(arg: T): T {
  return arg;
}

const arr = identity([1, 2, 3]);  // readonly [1, 2, 3]
\`\`\`

这些技巧能让你写出更精确、更优雅的类型代码。`,
  进阶用法: () => `掌握了基础用法后，让我们看看一些更高级的用法。

条件类型
\`\`\`typescript
type IsString<T> = T extends string ? true : false;
type A = IsString<string>;  // true
type B = IsString<number>;  // false
\`\`\`

映射类型
\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type User = {
  name: string;
  age: number;
};

type ReadonlyUser = Readonly<User>;
type OptionalUser = Optional<User>;
\`\`\`

类型守卫
\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function process(value: string | number) {
  if (isString(value)) {
    // 这里 value 被收窄为 string
    console.log(value.toUpperCase());
  }
}
\`\`\`

分布式条件类型
\`\`\`typescript
type ToArray<T> = T extends any ? T[] : never;
type StrOrNumArray = ToArray<string | number>;  // string[] | number[]
\`\`\`

infer 关键字
\`\`\`typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type Func = () => number;
type R = ReturnType<Func>;  // number
\`\`\``,
  高级特性: (a) => `${a.title}涉及到一些 TypeScript 的高级特性。

协变与逆变
- 协变（Covariance）：子类型关系在类型构造器中保持一致
- 逆变（Contravariance）：子类型关系在类型构造器中反转
- 不变（Invariance）：既不协变也不逆变

理解这些概念有助于处理复杂的类型关系。

条件类型与类型推导
\`\`\`typescript
type Unpacked<T> = T extends (infer U)[] ? U : T extends Promise<infer U> ? U : T;

type T1 = Unpacked<string[]>;           // string
type T2 = Unpacked<Promise<number>>;    // number
\`\`\`

递归类型
\`\`\`typescript
type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | { [key: string]: Json };
\`\`\`

类型编程的边界
需要注意的是，过度复杂的类型编程会让代码难以理解。一般建议：
- 优先使用简单的类型组合
- 把复杂的类型逻辑封装成工具类型
- 添加必要的注释说明
- 在性能和可读性之间取得平衡`,
  高级特性探索: (a) => `TypeScript 的高级特性让它在处理复杂类型场景时游刃有余。

模板字面量类型
\`\`\`typescript
type Route = '/' | '/about' | '/contact';
type ApiRoute = \`/api\${Route}\`;
// '/api/' | '/api/about' | '/api/contact'
\`\`\`

infer 关键字的高级用法
\`\`\`typescript
type FirstArg<T> = T extends (first: infer F, ...args: any[]) => any ? F : never;

type T1 = FirstArg<(a: string, b: number) => void>;  // string
type T2 = FirstArg<() => void>;  // never
\`\`\`

分布式条件类型
\`\`\`typescript
type ToArray<T> = T extends any ? T[] : never;
type StrOrNumArray = ToArray<string | number>;  // string[] | number[]
\`\`\`

递归类型
\`\`\`typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};
\`\`\`

类型编程的边界
需要注意的是，过度复杂的类型编程会让代码难以理解。一般建议：
- 优先使用简单的类型组合
- 把复杂的类型逻辑封装成工具类型
- 添加必要的注释说明
- 在性能和可读性之间取得平衡

${a.title}的实践，需要在这些高级特性和代码可维护性之间找到平衡。`,
  性能优化: (a) => `TypeScript 的类型检查性能在大项目中可能成为瓶颈。

增量编译
\`\`\`json
{
  "compilerOptions": {
    "incremental": true,
    "tsBuildInfoFile": "./dist/.tsbuildinfo"
  }
}
\`\`\`

项目引用
对于大型项目，使用项目引用（Project References）可以显著提升编译速度：
\`\`\`json
{
  "references": [
    { "path": "./packages/core" },
    { "path": "./packages/ui" }
  ]
}
\`\`\`

类型导入优化
\`\`\`typescript
// 推荐：只导入类型
import type { User } from './types';

// 避免运行时引入
import { User } from './types';
\`\`\`

避免复杂的类型运算
过度复杂的类型编程会导致编译时间指数级增长。例如，避免在热点路径上使用深层条件类型。

${a.title}的实践，需要在类型安全和性能之间找到平衡。`,
  性能分析与优化: (a) => `对于大型 TypeScript 项目，性能分析和优化至关重要。

性能分析工具
- \`tsc --extendedDiagnostics\`：显示详细的编译诊断信息
- \`tsc --traceResolution\`：追踪模块解析过程
- \`tsc --listFiles\`：列出所有参与编译的文件
- \`@typescript/analyze-trace\`：可视化编译过程

常见性能瓶颈
1. **过多的类型实例化**：泛型实例化次数过多
2. **复杂的条件类型**：深层条件类型导致指数级计算
3. **循环引用**：类型之间的循环引用
4. **类型递归**：递归类型过深

优化策略
\`\`\`typescript
// ❌ 不推荐：深度条件类型
type DeepCheck<T> = T extends object
  ? T extends Array<infer U>
    ? DeepCheck<U>
    : { [K in keyof T]: DeepCheck<T[K]> }
  : T;

// ✅ 推荐：拆分为多个简单类型
type IsObject<T> = T extends object ? true : false;
type Process<T> = T extends Array<infer U> ? ProcessArray<U> : ProcessObject<T>;
\`\`\`

${a.title}的实践，需要在类型表达能力和编译性能之间找到平衡。`,
  实际案例: (a) => `${a.title}在实际项目中有广泛的应用。

案例 1：API 响应类型定义
\`\`\`typescript
interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

interface UserListResponse extends ApiResponse<{
  list: User[];
  total: number;
}> {}
\`\`\`

案例 2：事件处理
\`\`\`typescript
type EventMap = {
  click: MouseEvent;
  keydown: KeyboardEvent;
  submit: SubmitEvent;
};

function on<E extends keyof EventMap>(
  event: E,
  handler: (e: EventMap[E]) => void
) {
  // ...
}
\`\`\`

案例 3：状态管理
\`\`\`typescript
type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'SET'; payload: number };

type State = { count: number };

type Reducer<S, A> = (state: S, action: A) => S;

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    case 'DECREMENT': return { count: state.count - 1 };
    case 'SET': return { count: action.payload };
  }
};
\`\`\`

这些案例展示了${a.title}在不同场景下的应用方法。`,
  实际项目案例: () => `让我们看一个真实项目中的应用案例。

案例：构建类型安全的 API 客户端
\`\`\`typescript
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestConfig {
  method: Method;
  url: string;
  data?: unknown;
  headers?: Record<string, string>;
}

class ApiClient {
  async request<T>(config: RequestConfig): Promise<T> {
    const response = await fetch(config.url, {
      method: config.method,
      headers: config.headers,
      body: config.data ? JSON.stringify(config.data) : undefined,
    });
    return response.json();
  }

  get<T>(url: string) {
    return this.request<T>({ method: 'GET', url });
  }

  post<T>(url: string, data: unknown) {
    return this.request<T>({ method: 'POST', url, data });
  }
}
\`\`\`

案例：Redux 风格的状态管理
\`\`\`typescript
type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'SET'; payload: number };

type Reducer<S, A extends Action> = (state: S, action: A) => S;

const counterReducer: Reducer<{ count: number }, Action> = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    case 'DECREMENT': return { count: state.count - 1 };
    case 'SET': return { count: action.payload };
  }
};
\`\`\`

案例：表单处理
\`\`\`typescript
type FormValues = {
  username: string;
  email: string;
  age: number;
};

type FormErrors = {
  [K in keyof FormValues]?: string;
};

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.username) errors.username = '用户名必填';
  if (!values.email.includes('@')) errors.email = '邮箱格式错误';
  if (values.age < 0) errors.age = '年龄必须为正数';
  return errors;
}
\`\`\``,
  实际案例分析: (a) => `通过一个完整的项目案例，我们来看看${a.title}如何在实际开发中发挥作用。

案例：电商系统的类型设计

商品类型
\`\`\`typescript
type Product = {
  id: string;
  name: string;
  price: number;
  category: 'electronics' | 'clothing' | 'food';
  stock: number;
  metadata: Record<string, unknown>;
};
\`\`\`

购物车类型
\`\`\`typescript
type CartItem = {
  productId: string;
  quantity: number;
  addedAt: Date;
};

type Cart = {
  items: CartItem[];
  total: number;
  discount?: {
    code: string;
    amount: number;
  };
};
\`\`\`

API 接口类型
\`\`\`typescript
type CartAPI = {
  addItem: (productId: string, quantity: number) => Promise<Cart>;
  removeItem: (productId: string) => Promise<Cart>;
  updateQuantity: (productId: string, quantity: number) => Promise<Cart>;
  applyDiscount: (code: string) => Promise<Cart>;
  checkout: () => Promise<Order>;
};
\`\`\`

通过这样的类型设计，我们可以在编译期就发现大量错误，大大提升开发效率和代码质量。`,
  常见问题: (a) => `${a.title}在实际使用中有一些常见问题。

Q: 什么时候使用 interface，什么时候使用 type？
A: 大多数情况下两者可以互换。但 interface 更适合定义对象的形状，且支持声明合并；type 更适合定义联合类型、交叉类型、映射类型等复杂类型。

Q: 如何处理第三方库没有类型的情况？
A: 可以使用 @types/* 包，或者自己编写 .d.ts 声明文件。临时方案是使用 any 或 @ts-ignore。

Q: TypeScript 编译后的代码能直接运行吗？
A: 不能。TypeScript 需要编译为 JavaScript 才能运行，或者使用 ts-node、tsx 等工具直接运行。

Q: TypeScript 类型如何影响运行时性能？
A: TypeScript 类型在编译时会被完全擦除，不影响运行时性能。编译后的 JavaScript 与手写代码性能相当。

Q: 为什么要开启 strict 模式？
A: strict 模式会启用一系列严格的类型检查，能在编译期发现更多潜在错误，显著提升代码质量。`,
  常见问题与解决方案: (a) => `${a.title}在实际项目中经常会遇到一些问题。

问题 1：类型推导不准确
\`\`\`typescript
// 问题：联合类型推导不准确
function process(value: string | number) {
  if (typeof value === 'string') {
    value.toUpperCase();  // 正确
  }
  value.toFixed(2);  // 错误：string 没有 toFixed
}
\`\`\`
解决方案：使用类型守卫明确收窄类型。

问题 2：泛型函数推断失败
\`\`\`typescript
// 问题：编译器无法推断 T
function identity<T>(arg: T): T {
  return arg;
}

const result = identity(42);  // 推导为 number
const result2 = identity('hello');  // 推导为 string
\`\`\`
解决方案：必要时显式指定泛型类型。

问题 3：循环引用类型
\`\`\`typescript
interface TreeNode {
  value: string;
  children: TreeNode[];
}
\`\`\`
解决方案：使用接口的递归引用。

问题 4：第三方库类型不完整
解决方案：
1. 安装 @types 包
2. 自定义 .d.ts 声明
3. 使用 module augmentation 扩展类型

问题 5：类型过深导致性能问题
\`\`\`typescript
// 不推荐
type Deep<T> = T extends object ? { [K in keyof T]: Deep<T[K]> } : T;
\`\`\`
解决方案：使用类型缓存或简化类型结构。`,
  常见陷阱与避坑指南: (a) => `${a.title}中有一些常见的陷阱需要避开。

陷阱 1：any 的滥用
\`\`\`typescript
// 错误：any 会绕过所有类型检查
function process(data: any) {
  return data.foo.bar.baz;  // 不会报错，但运行时可能崩溃
}

// 正确：使用 unknown 强制类型检查
function process(data: unknown) {
  if (typeof data === 'object' && data !== null) {
    // 收窄后访问
  }
}
\`\`\`

陷阱 2：类型断言的过度使用
\`\`\`typescript
// 错误：双重断言
const value = someValue as unknown as TargetType;

// 正确：先进行类型检查
function isTargetType(value: unknown): value is TargetType {
  return /* 类型检查逻辑 */;
}

if (isTargetType(someValue)) {
  // 安全使用
}
\`\`\`

陷阱 3：可选链的滥用
\`\`\`typescript
// 错误：掩盖真正的错误
const value = obj?.a?.b?.c?.d;

// 正确：在适当的地方处理错误
if (obj && obj.a && obj.a.b) {
  const value = obj.a.b.c;
}
\`\`\`

陷阱 4：枚举的注意事项
\`\`\`typescript
// 数字枚举（不推荐）
enum Direction {
  Up,    // 0
  Down,  // 1
}

// 字符串枚举（推荐）
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
}
\`\`\`

陷阱 5：命名空间污染
\`\`\`typescript
// 错误：在全局声明类型
declare global {
  interface Window {
    myLib: any;  // 不推荐
  }
}
\`\`\`

${a.title}的实践，需要时刻警惕这些陷阱。`,
  工具与生态: () => `TypeScript 拥有丰富的工具链和生态系统。

编译工具
- **tsc**：官方编译器
- **esbuild**：超快的转译器
- **swc**：Rust 实现的转译器
- **Babel**：通过插件支持 TypeScript

类型检查工具
- **tsc --noEmit**：仅做类型检查，不输出文件
- **fork-ts-checker-webpack-plugin**：与 Webpack 集成
- **vue-tsc**：Vue 项目的类型检查

类型生成工具
- **json2ts**：从 JSON 生成类型
- **graphql-codegen**：从 GraphQL Schema 生成类型
- **openapi-typescript**：从 OpenAPI 规范生成类型
- **prisma**：从数据库 Schema 生成类型

编辑器支持
- **VS Code**：原生支持，业界标准
- **WebStorm**：JetBrains 出品
- **Vim/Neovim**：通过 coc-tsserver 或 tsserver
- **Sublime**：通过 LSP-typescript

测试工具
- **tsd**：类型定义测试
- **dtslint**：类型定义 lint
- **jest** + **ts-jest**：单元测试
- **vitest**：现代测试框架`,
  工具链与生态: () => `完整的 TypeScript 工具链覆盖了开发、测试、部署的各个环节。

构建工具
- **Vite**：基于 esbuild，快速的开发体验
- **webpack** + **ts-loader**：成熟的方案
- **Rollup**：适合库的打包
- **Parcel**：零配置构建

代码质量
- **ESLint** + **@typescript-eslint**：代码检查
- **Prettier**：代码格式化
- **SonarQube**：代码质量分析
- **CodeQL**：安全扫描

调试工具
- **VS Code Debugger**：内置调试支持
- **Chrome DevTools**：浏览器调试
- **Node.js Inspector**：服务端调试
- **source-map-support**：源码映射

部署工具
- **Docker**：容器化部署
- **Vercel/Netlify**：前端部署平台
- **GitHub Actions**：CI/CD
- **esbuild-plugin**：打包优化

选择合适的工具组合，能显著提升开发效率。`,
  团队协作与代码规范: () => `在团队项目中，统一的类型规范非常重要。

类型命名规范
- 接口：使用 PascalCase，不需要 I 前缀
- 类型别名：使用 PascalCase
- 泛型参数：使用单个大写字母或 PascalCase

\`\`\`typescript
// 推荐
interface User { /* ... */ }
type UserId = string;
type Repository<T> = { /* ... */ };

// 不推荐
interface IUser { /* ... */ }
type userId = string;
\`\`\`

类型导出规范
\`\`\`typescript
// 集中导出
// types/index.ts
export * from './user';
export * from './product';
export * from './order';
\`\`\`

类型审查清单
- 是否有不必要的 any
- 是否有更好的类型推导
- 命名是否清晰
- 是否符合业务语义
- 是否有重复定义

团队协作流程
1. **代码审查**：每个 PR 都需要审查
2. **类型测试**：为核心类型编写类型测试
3. **文档维护**：及时更新类型文档
4. **规范统一**：定期 review 团队代码规范`,
  测试与质量保障: () => `类型系统本身是质量保障的一部分，但还需要其他测试来保证业务逻辑的正确性。

类型测试
可以使用 tsd 或 dtslint 来测试类型定义：
\`\`\`typescript
import { expectType } from 'tsd';

expectType<string>(getName());
expectType<number>(getAge());
\`\`\`

单元测试
使用 Jest + ts-jest 测试业务逻辑：
\`\`\`typescript
test('should add user', () => {
  const user = addUser({ name: '张三' });
  expect(user.id).toBeDefined();
});
\`\`\`

集成测试
使用 Supertest 测试 API：
\`\`\`typescript
test('GET /api/users', async () => {
  const response = await request(app).get('/api/users');
  expect(response.status).toBe(200);
});
\`\`\`

E2E 测试
使用 Playwright 或 Cypress 测试完整流程。

CI/CD 集成
\`\`\`yaml
# .github/workflows/ci.yml
- name: Type check
  run: npm run type-check
- name: Lint
  run: npm run lint
- name: Test
  run: npm test
\`\`\``,
  最佳实践: (a) => `经过前面的学习，我们来总结一下${a.title}的最佳实践。

代码组织
1. 将公共类型定义放在专门的 types 目录
2. 避免在组件文件中定义业务类型
3. 使用 barrel exports 简化导入
4. 保持类型定义的扁平化

类型设计
1. 优先使用接口定义对象形状
2. 复杂场景使用类型别名
3. 利用类型推导减少显式注解
4. 避免过深的类型嵌套

性能与可维护性
1. 避免使用 any，使用 unknown 替代
2. 合理使用类型守卫
3. 封装重复的类型模式
4. 定期重构复杂类型

团队协作
1. 统一 tsconfig 配置
2. 共享类型定义包
3. 编写类型使用规范
4. 代码审查关注类型质量

安全相关
1. 验证外部输入
2. 谨慎使用类型断言
3. 注意 API 边界类型
4. 避免类型信息泄露`,
  最佳实践总结: (a) => `${a.title}的最佳实践可以总结为以下几点：

1. **类型设计原则**
   - 优先使用类型推导
   - 必要时显式标注
   - 避免 any，使用 unknown
   - 利用类型守卫

2. **项目配置**
   - 开启 strict 模式
   - 配置合理的 include/exclude
   - 使用项目引用优化编译
   - 集成 ESLint 检查

3. **代码组织**
   - 集中管理类型定义
   - 按业务域拆分类型
   - 提供清晰的导出
   - 维护类型文档

4. **团队协作**
   - 统一的类型规范
   - 类型审查流程
   - 共享类型包
   - 持续重构

5. **性能优化**
   - 增量编译
   - 合理使用项目引用
   - 避免过度复杂的类型
   - 定期清理未使用类型

6. **安全考虑**
   - 验证外部输入
   - 谨慎使用类型断言
   - 边界类型检查
   - API 契约优先`,
  未来展望: (a) => `${a.title}作为 TypeScript 核心领域，其未来发展方向值得关注。

即将到来的特性
- 更好的类型推导算法
- 更严格的类型检查选项
- 性能优化（编译速度）
- 与 ECMAScript 标准的同步

生态趋势
- 越来越多的库提供原生类型支持
- 类型生成工具越来越智能
- 类型驱动开发（Type-Driven Development）逐渐流行
- TypeScript 在后端的应用越来越广泛

学习建议
1. 持续关注 TypeScript 官方博客和 GitHub
2. 参与开源项目，学习最佳实践
3. 尝试将类型编程应用到实际项目
4. 关注类型设计的趋势

通过${a.title}的学习，相信你已经掌握了 TypeScript 的核心概念和高级特性。继续保持学习的热情，在实践中不断提升自己的类型编程能力。`,
  总结: (a) => `通过本文的学习，我们系统地了解了${a.title}的核心概念、实现原理和实际应用。

关键要点
- 理解了 TypeScript 类型系统的工作原理
- 掌握了${a.title}的核心概念和用法
- 学习了高级类型编程技巧
- 了解了性能优化和最佳实践
- 通过实际案例加深了理解

下一步学习建议
1. 在实际项目中应用所学的知识
2. 尝试阅读优秀的开源项目代码
3. 关注 TypeScript 的最新发展
4. 参与社区讨论，分享学习心得

希望本文能够帮助你更好地理解${a.title}，写出更高质量的 TypeScript 代码。`,
  总结与展望: (a) => `回顾${a.title}的整个学习旅程，我们从基础概念开始，逐步深入到高级应用和最佳实践。

核心收获
- 掌握了${a.title}的理论基础
- 学会了在实际项目中应用
- 了解了常见的问题和解决方案
- 形成了类型设计的思维方式

实践建议
1. **从小项目开始**：先在个人项目中尝试
2. **逐步迁移**：在团队项目中渐进式引入
3. **建立规范**：制定团队的类型规范
4. **持续改进**：定期回顾和重构

未来方向
TypeScript 的生态在不断进化，新的特性和工具持续涌现。保持学习的热情，紧跟技术发展趋势，才能在${a.title}的应用上游刃有余。

希望本文能成为你${a.title}学习路上的有力参考，祝你在 TypeScript 的世界中不断成长！`
};

const vueSections: SectionMap = {
  ...typeScriptSections,
  核心概念: (a) => `${a.excerpt}

Vue 3 是一个革命性的版本，引入了 Composition API、Proxy 响应式系统、Fragment、Teleport 等众多新特性。理解这些核心概念是掌握${a.title}的基础。

Composition API 概述
Composition API 是 Vue 3 的核心特性之一，它提供了更灵活的代码组织方式：
\`\`\`javascript
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const doubled = computed(() => count.value * 2);
    
    watch(count, (newVal) => {
      console.log(\`count: \${newVal}\`);
    });
    
    return { count, doubled };
  }
};
\`\`\`

响应式原理
Vue 3 使用 Proxy 实现响应式，相比 Vue 2 的 Object.defineProperty 有了显著改进：
- 可以直接监听整个对象
- 支持数组变化检测
- 性能更好

Composition API 优势
1. **更好的逻辑复用**：通过 composables
2. **更灵活的代码组织**：按功能而非选项组织代码
3. **更好的 TypeScript 支持**：类型推导更准确
4. **更小的生产包**：支持 tree-shaking`,
  核心概念解析: (a) => `${a.excerpt}

Vue 3 的${a.title}涉及多个核心概念。深入理解这些概念有助于我们在实际项目中游刃有余。

Composition API 核心
- **ref**：创建响应式基本类型
- **reactive**：创建响应式对象
- **computed**：创建计算属性
- **watch/watchEffect**：监听响应式数据
- **生命周期钩子**：onMounted、onUpdated 等

响应式系统原理
Vue 3 的响应式基于 Proxy 实现：
\`\`\`javascript
const handler = {
  get(target, key) {
    track(target, key);
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    trigger(target, key);
    return Reflect.set(target, key, value);
  }
};
\`\`\`

虚拟 DOM
Vue 3 重写了虚拟 DOM 实现，引入 block tree、patch flag 等优化，渲染性能显著提升。

组件系统
Vue 3 的组件系统支持多种组合方式：
- 单文件组件（SFC）
- 函数式组件
- 异步组件
- 动态组件

${a.title}的实践，离不开对这些核心概念的深入理解。`,
  工作原理: (a) => `Vue 3 的工作原理相比 Vue 2 有重大变化。

响应式系统
基于 Proxy 的响应式系统：
\`\`\`javascript
// 简化的实现
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      track(target, key);
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      trigger(target, key);
      return Reflect.set(target, key, value);
    }
  });
}
\`\`\`

依赖收集
Vue 3 使用 effect 进行依赖收集：
- track：收集依赖
- trigger：触发更新
- effect：副作用函数

渲染流程
1. 模板编译为 render 函数
2. render 函数生成虚拟 DOM
3. 通过 patch 算法更新真实 DOM
4. 配合响应式系统自动更新

Composition API 编译优化
Vue 3 的编译器会分析 setup 函数，自动提取静态部分，提升运行时性能。`,
  性能优化: (a) => `Vue 3 的性能优化是开发者关注的重点。

响应式数据优化
\`\`\`javascript
// 使用 shallowRef 避免深度响应
import { shallowRef } from 'vue';
const data = shallowRef({ items: [] });

// 使用 markRaw 标记不需要响应式的数据
import { markRaw } from 'vue';
const chart = markRaw(new Chart());
\`\`\`

计算属性优化
\`\`\`javascript
// 合理使用 computed
const filtered = computed(() => 
  list.value.filter(item => item.active)
);
\`\`\`

列表渲染优化
\`\`\`vue
<template>
  <div v-for="item in list" :key="item.id">
    {{ item.name }}
  </div>
</template>
\`\`\`

异步组件
\`\`\`javascript
import { defineAsyncComponent } from 'vue';

const HeavyComponent = defineAsyncComponent(() => 
  import('./HeavyComponent.vue')
);
\`\`\`

${a.title}的实践，需要充分利用 Vue 3 的这些优化特性。`,
  实际案例: (a) => `通过一个完整的案例来理解${a.title}。

案例：用户列表组件
\`\`\`vue
<script setup>
import { ref, computed, onMounted } from 'vue';

const users = ref([]);
const searchQuery = ref('');

const filteredUsers = computed(() => {
  return users.value.filter(user => 
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

onMounted(async () => {
  const response = await fetch('/api/users');
  users.value = await response.json();
});
</script>

<template>
  <div>
    <input v-model="searchQuery" placeholder="搜索用户" />
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>
\`\`\`

这个案例展示了${a.title}在实际项目中的应用方式。`,
  实际项目案例: (a) => `让我们通过一个真实项目案例来深入理解${a.title}。

案例：可复用的分页组件
\`\`\`vue
<!-- Pagination.vue -->
<script setup>
import { computed } from 'vue';

const props = defineProps({
  current: { type: Number, default: 1 },
  total: { type: Number, required: true },
  pageSize: { type: Number, default: 10 }
});

const emit = defineEmits(['update:current']);

const totalPages = computed(() => 
  Math.ceil(props.total / props.pageSize)
);

function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    emit('update:current', page);
  }
}
</script>

<template>
  <div class="pagination">
    <button @click="changePage(current - 1)">上一页</button>
    <span>{{ current }} / {{ totalPages }}</span>
    <button @click="changePage(current + 1)">下一页</button>
  </div>
</template>
\`\`\`

案例：使用 composables 封装业务逻辑
\`\`\`javascript
// composables/useUser.js
import { ref, onMounted } from 'vue';

export function useUser(userId) {
  const user = ref(null);
  const loading = ref(false);
  
  async function fetchUser() {
    loading.value = true;
    try {
      const response = await fetch(\`/api/users/\${userId}\`);
      user.value = await response.json();
    } finally {
      loading.value = false;
    }
  }
  
  onMounted(fetchUser);
  
  return { user, loading, refetch: fetchUser };
}
\`\`\`

这些案例展示了${a.title}在实际项目中的强大能力。`
};

const javascriptSections: SectionMap = {
  ...typeScriptSections,
  核心概念: (a) => `${a.excerpt}

JavaScript 是一门多范式的编程语言，支持面向对象、函数式、命令式等多种编程风格。深入理解${a.title}是成为高级开发者的必经之路。

JavaScript 核心特性
- **动态类型**：变量类型在运行时确定
- **弱类型**：支持隐式类型转换
- **基于原型的继承**：不同于传统的类继承
- **单线程执行**：通过事件循环处理异步
- **函数是一等公民**：函数可以作为值传递

执行机制
JavaScript 引擎（如 V8）的执行流程：
\`\`\`
源代码 → 解析 → AST → 字节码 → JIT 编译 → 机器码
\`\`\`

内存管理
JavaScript 使用垃圾回收机制管理内存：
- 标记清除（Mark-Sweep）
- 引用计数（Reference Counting）
- 分代回收（Generational GC）

${a.title}的学习，需要扎实掌握这些基础概念。`,
  实际案例: (a) => `通过案例来理解${a.title}的实际应用。

案例 1：深拷贝实现
\`\`\`javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(deepClone);
  
  const cloned = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}
\`\`\`

案例 2：防抖函数
\`\`\`javascript
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
\`\`\`

案例 3：Promise 并发控制
\`\`\`javascript
async function pLimit(tasks, limit) {
  const results = [];
  const executing = new Set();
  
  for (const task of tasks) {
    const promise = task().then(result => {
      executing.delete(promise);
      return result;
    });
    executing.add(promise);
    results.push(promise);
    
    if (executing.size >= limit) {
      await Promise.race(executing);
    }
  }
  
  return Promise.all(results);
}
\`\`\`

这些案例展示了${a.title}的实用价值。`
};

const engineeringSections: SectionMap = {
  ...typeScriptSections,
  核心概念: (a) => `${a.excerpt}

前端工程化是现代前端开发的基础设施。${a.title}作为其中的重要环节，直接影响开发效率和项目质量。

工程化核心组成
- **构建工具**：Webpack、Vite、Rollup
- **包管理**：npm、yarn、pnpm
- **代码规范**：ESLint、Prettier
- **测试框架**：Jest、Vitest、Playwright
- **CI/CD**：GitHub Actions、Jenkins
- **监控告警**：Sentry、DataDog

工程化目标
1. **提升开发效率**：自动化重复工作
2. **保证代码质量**：统一规范和检查
3. **降低维护成本**：清晰的架构
4. **加速产品交付**：CI/CD 自动化

${a.title}的实践，需要结合项目实际情况选择合适的工具组合。`,
  实际案例: (a) => `通过案例来理解${a.title}的实践应用。

案例 1：Vite 配置优化
\`\`\`javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash-es']
        }
      }
    }
  }
});
\`\`\`

案例 2：ESLint 配置
\`\`\`json
{
  "extends": ["eslint:recommended"],
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "error",
    "prefer-const": "error"
  }
}
\`\`\`

案例 3：GitHub Actions CI
\`\`\`yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm test
      - run: npm run build
\`\`\`

这些案例展示了${a.title}在不同场景下的应用。`
};

const performanceSections: SectionMap = {
  ...typeScriptSections,
  核心概念: (a) => `${a.excerpt}

Web 性能优化是提升用户体验的关键。${a.title}是性能优化体系中的重要方向。

Core Web Vitals
Google 提出的核心性能指标：
- **LCP (Largest Contentful Paint)**：最大内容绘制时间
- **FID (First Input Delay)**：首次输入延迟
- **CLS (Cumulative Layout Shift)**：累积布局偏移

性能指标体系
- **FCP (First Contentful Paint)**：首次内容绘制
- **TTI (Time to Interactive)**：可交互时间
- **TBT (Total Blocking Time)**：总阻塞时间
- **SI (Speed Index)**：速度指数

性能测量工具
- **Lighthouse**：综合性能评估
- **Chrome DevTools**：详细性能分析
- **WebPageTest**：在线性能测试
- **Performance API**：编程式性能监控

${a.title}的实践，需要结合业务场景和性能预算来制定优化策略。`,
  实际案例: (a) => `通过具体案例来掌握${a.title}。

案例 1：图片优化
\`\`\`html
<!-- 使用现代图片格式 -->
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="示例" loading="lazy">
</picture>
\`\`\`

案例 2：代码分割
\`\`\`javascript
// 路由级代码分割
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}
\`\`\`

案例 3：缓存策略
\`\`\`javascript
// Service Worker 缓存
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
\`\`\`

这些案例展示了${a.title}的实际应用方法。`
};

const architectureSections: SectionMap = {
  ...typeScriptSections,
  核心概念: (a) => `${a.excerpt}

前端架构设计是项目成功的关键。${a.title}是架构设计中的重要议题。

架构设计原则
- **单一职责原则**：每个模块只负责一件事
- **开闭原则**：对扩展开放，对修改关闭
- **依赖倒置原则**：依赖抽象而非具体
- **接口隔离原则**：使用专门的接口
- **最少知识原则**：减少模块之间的耦合

架构模式
- **MVC**：Model-View-Controller
- **MVVM**：Model-View-ViewModel
- **Flux/Redux**：单向数据流
- **微前端**：独立部署的子应用
- **组件化**：可复用的 UI 单元

架构评估维度
1. **可维护性**：代码易于理解和修改
2. **可扩展性**：支持新功能添加
3. **可测试性**：方便编写测试
4. **性能**：满足性能要求
5. **安全性**：保证系统安全

${a.title}的实践，需要根据业务特点选择合适的架构模式。`,
  实际案例: (a) => `通过实际案例来理解${a.title}。

案例 1：微前端架构
\`\`\`javascript
// 主应用注册子应用
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react-app',
    entry: '//localhost:7101',
    container: '#subapp-container',
    activeRule: '/react',
  },
  {
    name: 'vue-app',
    entry: '//localhost:7102',
    container: '#subapp-container',
    activeRule: '/vue',
  },
]);

start();
\`\`\`

案例 2：状态管理架构
\`\`\`javascript
// Redux 风格的状态管理
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});
\`\`\`

这些案例展示了${a.title}的实际应用。`
};

const nodeSections: SectionMap = {
  ...typeScriptSections,
  核心概念: (a) => `${a.excerpt}

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时。${a.title}是 Node.js 开发中的重要话题。

Node.js 核心特性
- **事件驱动**：基于事件循环的非阻塞 I/O
- **单线程**：通过事件循环处理并发
- **跨平台**：支持 Windows、Linux、macOS
- **丰富的生态**：npm 拥有最大的包管理生态

事件循环机制
Node.js 的事件循环分为多个阶段：
1. **timers**：执行 setTimeout、setInterval 回调
2. **pending callbacks**：执行系统操作回调
3. **idle, prepare**：内部使用
4. **poll**：获取新的 I/O 事件
5. **check**：执行 setImmediate 回调
6. **close callbacks**：执行关闭回调

模块系统
Node.js 支持 CommonJS 和 ES Modules：
\`\`\`javascript
// CommonJS
const fs = require('fs');

// ES Modules
import fs from 'fs';
\`\`\`

${a.title}的实践，需要深入理解这些核心概念。`,
  实际案例: (a) => `通过案例来掌握${a.title}的实际应用。

案例 1：Express 服务器
\`\`\`javascript
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/users', async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  const user = await createUser(req.body);
  res.status(201).json(user);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

案例 2：文件流处理
\`\`\`javascript
import fs from 'fs';
import { pipeline } from 'stream/promises';

await pipeline(
  fs.createReadStream('input.txt'),
  fs.createWriteStream('output.txt')
);
\`\`\`

案例 3：异步并发控制
\`\`\`javascript
import pLimit from 'p-limit';

const limit = pLimit(5);
const tasks = urls.map(url => 
  limit(() => fetch(url).then(r => r.json()))
);
const results = await Promise.all(tasks);
\`\`\`

这些案例展示了${a.title}的实际应用。`
};

const databaseSections: SectionMap = {
  ...typeScriptSections,
  核心概念: (a) => `${a.excerpt}

数据库是现代应用的核心组件。${a.title}涉及数据库的多个方面。

数据库基础概念
- **关系型数据库**：MySQL、PostgreSQL、SQLite
- **非关系型数据库**：MongoDB、Redis、Cassandra
- **NewSQL**：TiDB、CockroachDB
- **时序数据库**：InfluxDB、TimescaleDB

ACID 特性
- **Atomicity（原子性）**：事务要么全部成功，要么全部失败
- **Consistency（一致性）**：事务前后数据保持一致
- **Isolation（隔离性）**：并发事务之间互不干扰
- **Durability（持久性）**：事务提交后数据永久保存

CAP 定理
- **Consistency（一致性）**：所有节点同时看到相同数据
- **Availability（可用性）**：每个请求都能得到响应
- **Partition tolerance（分区容错）**：系统在网络分区时仍能工作

${a.title}的实践，需要根据业务特点选择合适的数据库类型。`,
  实际案例: (a) => `通过实际案例来掌握${a.title}。

案例 1：SQL 查询优化
\`\`\`sql
-- 创建合适的索引
CREATE INDEX idx_user_email ON users(email);

-- 优化查询语句
SELECT id, name, email 
FROM users 
WHERE status = 'active' 
  AND created_at > '2024-01-01'
ORDER BY created_at DESC
LIMIT 20;
\`\`\`

案例 2：事务处理
\`\`\`sql
-- 使用事务保证数据一致性
BEGIN TRANSACTION;
  UPDATE accounts SET balance = balance - 100 WHERE id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
\`\`\`

案例 3：Redis 缓存策略
\`\`\`javascript
// 缓存读取
async function getUser(id) {
  const cached = await redis.get(\`user:\${id}\`);
  if (cached) return JSON.parse(cached);
  
  const user = await db.getUser(id);
  await redis.setex(\`user:\${id}\`, 3600, JSON.stringify(user));
  return user;
}
\`\`\`

这些案例展示了${a.title}的实践应用。`
};

const securitySections: SectionMap = {
  ...typeScriptSections,
  核心概念: (a) => `${a.excerpt}

前端安全是保护用户数据和应用安全的重要环节。${a.title}是安全体系中的关键内容。

OWASP Top 10
- **注入攻击**：SQL 注入、NoSQL 注入
- **身份认证失效**：弱密码、会话管理不当
- **敏感数据泄露**：明文存储、传输未加密
- **XML 外部实体**：XXE 攻击
- **访问控制失效**：权限绕过
- **安全配置错误**：默认配置、调试模式
- **跨站脚本（XSS）**：恶意脚本注入
- **不安全反序列化**：数据篡改
- **已知漏洞**：使用有漏洞的组件
- **日志监控不足**：无法发现攻击

前端常见攻击
- **XSS**：跨站脚本攻击
- **CSRF**：跨站请求伪造
- **点击劫持**：UI 覆盖攻击
- **中间人攻击**：网络劫持

${a.title}的实践，需要建立完整的安全防护体系。`,
  实际案例: (a) => `通过案例来掌握${a.title}的防护措施。

案例 1：XSS 防护
\`\`\`javascript
// 输入过滤
import DOMPurify from 'dompurify';

const cleanInput = DOMPurify.sanitize(userInput);

// 输出转义
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// CSP 策略
<meta http-equiv="Content-Security-Policy" 
  content="default-src 'self'; script-src 'self' 'nonce-xxx'">
\`\`\`

案例 2：CSRF 防护
\`\`\`javascript
// CSRF Token
const token = document.querySelector('meta[name="csrf-token"]').content;

axios.defaults.headers.common['X-CSRF-Token'] = token;

// SameSite Cookie
Set-Cookie: sessionid=xxx; SameSite=Strict; Secure
\`\`\`

案例 3：密码加密
\`\`\`javascript
import bcrypt from 'bcrypt';

// 密码哈希
const hash = await bcrypt.hash(password, 10);

// 密码验证
const match = await bcrypt.compare(password, hash);
\`\`\`

这些案例展示了${a.title}的具体防护方法。`
};

const testSections: SectionMap = {
  ...typeScriptSections,
  核心概念: (a) => `${a.excerpt}

测试是保证代码质量的重要手段。${a.title}是测试体系中的核心内容。

测试金字塔
- **单元测试**：测试单个函数或组件
- **集成测试**：测试模块之间的交互
- **E2E 测试**：测试完整的用户流程

测试类型
- **功能测试**：验证功能正确性
- **性能测试**：验证性能指标
- **安全测试**：发现安全漏洞
- **兼容性测试**：验证多环境兼容
- **回归测试**：确保新功能不破坏旧功能

测试原则
1. **FIRST 原则**：Fast、Independent、Repeatable、Self-validating、Timely
2. **AAA 模式**：Arrange、Act、Assert
3. **单一职责**：每个测试只测一个点
4. **独立性**：测试之间不相互依赖

${a.title}的实践，需要建立完善的测试体系。`,
  实际案例: (a) => `通过实际案例来掌握${a.title}。

案例 1：单元测试
\`\`\`javascript
import { describe, it, expect } from 'vitest';
import { sum } from './math';

describe('sum function', () => {
  it('should add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  it('should handle negative numbers', () => {
    expect(sum(-1, 1)).toBe(0);
  });
});
\`\`\`

案例 2：组件测试
\`\`\`javascript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with label', () => {
  render(<Button label="Click me" />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
\`\`\`

案例 3：E2E 测试
\`\`\`javascript
import { test, expect } from '@playwright/test';

test('user can login', async ({ page }) => {
  await page.goto('/login');
  await page.fill('input[name=username]', 'admin');
  await page.fill('input[name=password]', 'password');
  await page.click('button[type=submit]');
  await expect(page).toHaveURL('/dashboard');
});
\`\`\`

这些案例展示了${a.title}的具体应用。`
};

const frontendSections: SectionMap = {
  ...typeScriptSections,
  核心概念: (a) => `${a.excerpt}

前端技术发展日新月异。${a.title}是当前最受关注的前端趋势之一。

当前热门趋势
- **AI 辅助开发**：Copilot、Cursor、CodeWhisperer
- **边缘计算**：Cloudflare Workers、Vercel Edge
- **WebAssembly**：性能密集型应用
- **Server Components**：服务端组件
- **构建工具革新**：Vite、Turbopack
- **类型驱动开发**：TypeScript 全面普及
- **设计系统**：组件库和设计系统

技术演进方向
- **更快的开发体验**：HMR、Instant Dev
- **更好的性能体验**：SSR、SSG、ISR
- **更智能的开发工具**：AI 辅助、自动化
- **更统一的标准**：Web Components

未来展望
- AI 将深度参与开发流程
- Web 能力边界持续扩展
- 跨端开发更加成熟
- 性能优化永无止境

${a.title}代表了前端技术的未来方向。`,
  实际案例: (a) => `通过案例来了解${a.title}的实际应用。

案例 1：AI 代码生成
\`\`\`javascript
// 使用 AI 辅助生成代码
const code = await ai.generateCode({
  prompt: '创建一个 React 组件来展示用户列表',
  language: 'typescript'
});

// AI 优化建议
const suggestions = await ai.reviewCode(sourceCode);
\`\`\`

案例 2：边缘函数
\`\`\`javascript
// Cloudflare Workers
export default {
  async fetch(request, env) {
    return new Response('Hello from the edge!');
  }
};

// Vercel Edge Functions
export const config = {
  runtime: 'edge'
};

export default function handler(req) {
  return new Response('Edge response');
}
\`\`\`

案例 3：WebAssembly
\`\`\`javascript
// 加载 WebAssembly 模块
const wasmModule = await WebAssembly.instantiateStreaming(
  fetch('module.wasm')
);

const instance = wasmModule.instance;
const result = instance.exports.compute(42);
\`\`\`

这些案例展示了${a.title}的实际应用方式。`
};

const reactSections: SectionMap = {
  ...typeScriptSections,
  核心概念: (a) => `${a.excerpt}

React 是目前最流行的前端框架之一。${a.title}是 React 进阶学习中的重要主题。

React 核心概念
- **组件化**：UI 由组件构成
- **声明式**：描述 UI 应该是什么样
- **单向数据流**：数据自上而下流动
- **虚拟 DOM**：提升渲染性能
- **JSX**：JavaScript 的语法扩展

React 核心机制
- **协调（Reconciliation）**：比较新旧虚拟 DOM
- **Diff 算法**：高效的树对比
- **Fiber 架构**：可中断的渲染
- **Concurrent Mode**：并发渲染
- **Suspense**：异步数据加载

Hooks 体系
- **useState**：状态管理
- **useEffect**：副作用处理
- **useContext**：跨组件通信
- **useReducer**：复杂状态管理
- **useMemo/useCallback**：性能优化
- **useRef**：DOM 引用

${a.title}的实践，离不开对这些核心概念的深入理解。`,
  实际案例: (a) => `通过实际案例来掌握${a.title}。

案例 1：自定义 Hook
\`\`\`javascript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);
  
  return { data, loading, error };
}
\`\`\`

案例 2：性能优化组件
\`\`\`javascript
import { memo, useMemo, useCallback } from 'react';

const ExpensiveComponent = memo(function ExpensiveComponent({ data, onClick }) {
  const processed = useMemo(() => 
    data.map(item => heavyProcess(item)),
    [data]
  );
  
  const handleClick = useCallback((id) => {
    onClick(id);
  }, [onClick]);
  
  return (
    <div>
      {processed.map(item => (
        <Item key={item.id} data={item} onClick={handleClick} />
      ))}
    </div>
  );
});
\`\`\`

这些案例展示了${a.title}的实际应用。`
};

const categorySections: Record<string, SectionMap> = {
  'TypeScript': typeScriptSections,
  'Vue': vueSections,
  'JavaScript': javascriptSections,
  '工程化': engineeringSections,
  '性能优化': performanceSections,
  '架构': architectureSections,
  'Node.js': nodeSections,
  '数据库': databaseSections,
  '安全': securitySections,
  '测试': testSections,
  '前端趋势': frontendSections,
  'React': reactSections
};

const categorySectionOrder: Record<string, string[]> = {
  'TypeScript': ['引言', '背景与动机', '核心概念解析', '工作原理深入', '底层实现原理', '环境搭建与配置', '基础用法详解', '进阶用法', '进阶技巧', '高级特性探索', '高级特性', '性能优化', '性能分析与优化', '实际项目案例', '实际案例分析', '实际案例', '常见陷阱与避坑指南', '常见问题与解决方案', '工具与生态', '工具链与生态', '团队协作与代码规范', '测试与质量保障', '最佳实践总结', '最佳实践', '总结与展望'],
  'Vue': ['引言', '背景与动机', '核心概念解析', '工作原理', '环境搭建与配置', '基础用法详解', '进阶用法', '高级特性探索', '性能优化', '实际项目案例', '实际案例', '常见陷阱与避坑指南', '工具与生态', '最佳实践', '总结与展望'],
  'JavaScript': ['引言', '背景与动机', '核心概念', '工作原理深入', '基础用法详解', '进阶技巧', '进阶用法', '高级特性探索', '实际案例', '实际案例分析', '常见陷阱与避坑指南', '最佳实践', '总结与展望'],
  '工程化': ['引言', '背景与动机', '核心概念', '环境搭建与配置', '基础用法详解', '进阶用法', '高级特性探索', '性能优化', '实际案例', '实际项目案例', '常见陷阱与避坑指南', '工具与生态', '最佳实践', '总结与展望'],
  '性能优化': ['引言', '背景与动机', '核心概念', '工作原理深入', '基础用法详解', '进阶用法', '性能优化', '性能分析与优化', '实际案例', '实际案例分析', '常见陷阱与避坑指南', '工具与生态', '最佳实践', '总结与展望'],
  '架构': ['引言', '背景与动机', '核心概念', '工作原理深入', '基础用法详解', '进阶用法', '高级特性探索', '实际案例', '实际案例分析', '常见陷阱与避坑指南', '团队协作与代码规范', '最佳实践', '总结与展望'],
  'Node.js': ['引言', '背景与动机', '核心概念', '工作原理深入', '环境搭建与配置', '基础用法详解', '进阶用法', '高级特性探索', '性能优化', '实际项目案例', '实际案例', '常见陷阱与避坑指南', '工具与生态', '最佳实践', '总结与展望'],
  '数据库': ['引言', '背景与动机', '核心概念', '工作原理深入', '基础用法详解', '进阶用法', '性能优化', '实际案例', '实际案例分析', '常见陷阱与避坑指南', '工具与生态', '最佳实践', '总结与展望'],
  '安全': ['引言', '背景与动机', '核心概念', '工作原理深入', '基础用法详解', '进阶用法', '实际案例', '实际案例分析', '常见陷阱与避坑指南', '工具与生态', '最佳实践', '总结与展望'],
  '测试': ['引言', '背景与动机', '核心概念', '基础用法详解', '进阶用法', '实际案例', '实际项目案例', '常见陷阱与避坑指南', '工具与生态', '测试与质量保障', '最佳实践', '总结与展望'],
  '前端趋势': ['引言', '背景与动机', '核心概念', '工作原理深入', '基础用法详解', '进阶用法', '实际案例', '实际案例分析', '工具与生态', '未来展望', '总结'],
  'React': ['引言', '背景与动机', '核心概念', '工作原理深入', '基础用法详解', '进阶用法', '高级特性探索', '性能优化', '实际案例', '实际项目案例', '常见陷阱与避坑指南', '工具与生态', '最佳实践', '总结与展望']
};

function getSectionsForCategory(category: string, minutes: number): string[] {
  const order = categorySectionOrder[category] || categorySectionOrder['JavaScript'];
  
  if (minutes <= 7) {
    return order.slice(0, 7);
  } else if (minutes <= 10) {
    return order.slice(0, 10);
  } else if (minutes <= 13) {
    return order.slice(0, 13);
  } else {
    return order;
  }
}

export function generateArticleContent(article: Article): string {
  const minutes = getReadMinutes(article);
  const sections = getSectionsForCategory(article.category, minutes);
  const sectionMap = categorySections[article.category] || typeScriptSections;
  
  const parts: string[] = [];

  for (const sectionName of sections) {
    const builder = sectionMap[sectionName];
    if (!builder) continue;
    
    parts.push(`## ${sectionName}`);
    parts.push(builder(article, minutes));
    parts.push('');
  }

  return parts.join('\n');
}
