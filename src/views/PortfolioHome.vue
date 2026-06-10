<template>
  <div class="min-h-[100dvh] overflow-x-hidden bg-[#070a0d] text-slate-100 selection:bg-cyan-300 selection:text-[#061014]">
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(77,214,232,0.16),transparent_27%),radial-gradient(circle_at_84%_14%,rgba(124,246,178,0.12),transparent_24%),linear-gradient(135deg,#070a0d_0%,#0d1417_48%,#050607_100%)]"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-45"></div>
      <div class="noise-layer absolute inset-0 opacity-[0.07]"></div>
    </div>

    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cyan-200 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#071012]">
      跳到主要内容
    </a>

    <nav class="portfolio-nav fixed top-4 z-50 rounded-full border border-white/10 bg-[#081015]/78 px-3 py-2 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      <div class="flex items-center justify-between gap-3">
        <a href="#overview" class="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-slate-100 transition hover:text-cyan-100">
          <span class="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(77,214,232,0.85)]"></span>
          Wei Liu
        </a>

        <div class="hidden items-center gap-1 md:flex">
          <a v-for="item in navItems" :key="item.href" :href="item.href" class="rounded-full px-3.5 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/8 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-200/50">
            {{ item.label }}
          </a>
        </div>

        <router-link to="/echo" class="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3.5 py-2 text-sm font-bold text-cyan-100 transition hover:border-cyan-100/70 hover:bg-cyan-200/16 active:translate-y-px focus:outline-none focus:ring-2 focus:ring-cyan-200/50">
          <FolderKanban class="h-4 w-4" />
          <span class="hidden sm:inline">ECHO</span>
        </router-link>
      </div>
    </nav>

    <main id="main" class="relative z-10">
      <section id="overview" class="mx-auto grid min-h-[100dvh] w-full max-w-7xl items-center gap-10 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <div class="reveal space-y-7">
          <div class="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-200/8 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur-xl">
            <Sparkles class="h-4 w-4 shrink-0" />
            <span class="truncate">AI researcher / full-stack developer / data systems builder</span>
          </div>

          <div class="space-y-5">
            <p class="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-100/75">Wei Liu</p>
            <h1 class="max-w-4xl text-pretty text-5xl font-black leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-8xl">
              Building empathetic AI through multimodal intelligence.
            </h1>
            <p class="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              我关注多模态情绪识别、共情对话智能体、人本 AI 系统，以及把研究原型做成可部署、可维护的全栈产品。
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <a href="#research" class="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-200 px-6 py-3 text-sm font-bold text-[#071012] transition hover:bg-white hover:shadow-[0_0_36px_rgba(77,214,232,0.34)] active:translate-y-px focus:outline-none focus:ring-2 focus:ring-cyan-200/70">
              查看研究方向
              <ArrowRight class="h-4 w-4" />
            </a>
            <router-link to="/echo" class="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/7 px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:border-cyan-200/50 hover:bg-cyan-200/10 active:translate-y-px focus:outline-none focus:ring-2 focus:ring-cyan-200/50">
              进入 ECHO 工作台
              <FolderKanban class="h-4 w-4" />
            </router-link>
          </div>
        </div>

        <div class="reveal-delay">
          <div class="console-shell rounded-[2rem] border border-white/10 bg-white/[0.055] p-3 shadow-[0_32px_110px_rgba(0,0,0,0.48)] backdrop-blur-2xl">
            <div class="overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#060b0d]">
              <div class="flex items-center justify-between border-b border-white/10 bg-white/[0.045] px-5 py-4">
                <div>
                  <p class="font-mono text-xs uppercase tracking-[0.24em] text-slate-500">research console</p>
                  <h2 class="mt-1 text-xl font-black text-white">Human-centred AI portfolio</h2>
                </div>
                <span class="rounded-full border border-emerald-200/25 bg-emerald-200/10 px-3 py-1 text-xs font-bold text-emerald-100">开放合作</span>
              </div>

              <div class="grid gap-4 p-4 md:grid-cols-[1.15fr_0.85fr] md:p-6">
                <div class="rounded-[1.25rem] border border-white/10 bg-[#0b1316]/90 p-5">
                  <div class="mb-6 flex items-center justify-between">
                    <div>
                      <p class="text-sm font-semibold text-slate-300">Multimodal signal stack</p>
                      <p class="mt-1 text-xs text-slate-500">text / audio / vision / context</p>
                    </div>
                    <Activity class="h-5 w-5 text-cyan-200" />
                  </div>

                  <div class="space-y-4">
                    <div v-for="metric in signalMetrics" :key="metric.label">
                      <div class="mb-2 flex items-center justify-between font-mono text-xs text-slate-400">
                        <span>{{ metric.label }}</span>
                        <span>{{ metric.value }}%</span>
                      </div>
                      <div class="h-2 overflow-hidden rounded-full bg-white/8">
                        <div class="h-full rounded-full bg-gradient-to-r from-cyan-200 to-emerald-200" :style="{ width: `${metric.value}%` }"></div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-7 grid grid-cols-3 gap-3">
                    <div v-for="node in aiNodes" :key="node" class="rounded-2xl border border-white/10 bg-white/[0.045] p-3 text-center">
                      <p class="font-mono text-[11px] text-cyan-100">{{ node }}</p>
                    </div>
                  </div>
                </div>

                <div class="grid gap-4">
                  <div class="rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-5">
                    <GraduationCap class="mb-7 h-7 w-7 text-cyan-200" />
                    <p class="font-mono text-4xl font-black text-white">2</p>
                    <p class="mt-2 text-sm leading-6 text-slate-400">海外计算机教育背景：Monash MIT 与 University of Ottawa CS。</p>
                  </div>

                  <router-link to="/echo" class="group rounded-[1.25rem] border border-cyan-200/20 bg-cyan-200/10 p-5 transition hover:-translate-y-1 hover:border-cyan-100/70 hover:bg-cyan-200/15">
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="text-sm font-bold text-cyan-100">ECHO research workspace</p>
                        <p class="mt-2 text-sm leading-6 text-slate-400">项目管理、文献笔记、进度追踪和研究资料入口。</p>
                      </div>
                      <ArrowRight class="mt-1 h-5 w-5 text-cyan-100 transition group-hover:translate-x-1" />
                    </div>
                  </router-link>
                </div>
              </div>

              <div class="grid gap-3 border-t border-white/10 bg-[#040809] p-4 font-mono text-xs text-slate-400 md:grid-cols-3">
                <p><span class="text-cyan-200">title:</span> Personal Research Portfolio</p>
                <p><span class="text-emerald-200">category:</span> AI / Human-Centred Computing</p>
                <p><span class="text-cyan-200">status:</span> Available for collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="research" class="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="section-heading">
          <p class="section-kicker">研究方向</p>
          <h2>从情绪理解，到可部署的智能系统。</h2>
          <p>研究兴趣覆盖大数据可视化、深度学习、LLMs、实时数据处理、DevOps、软件质量、微服务与云计算架构。</p>
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          <article v-for="focus in researchFocus" :key="focus.title" class="surface-card rounded-[1.5rem] p-6">
            <component :is="focus.icon" class="mb-10 h-7 w-7 text-cyan-200" />
            <h3 class="text-xl font-bold text-white">{{ focus.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-400">{{ focus.description }}</p>
          </article>
        </div>
      </section>

      <section id="projects" class="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div class="section-heading mb-0">
            <p class="section-kicker">精选项目</p>
            <h2>把研究、产品和工程放在同一个工作流里。</h2>
          </div>
          <router-link to="/echo" class="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:border-cyan-100/70 hover:bg-cyan-200/15 active:translate-y-px">
            打开 ECHO
            <ExternalLink class="h-4 w-4" />
          </router-link>
        </div>

        <div class="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <router-link to="/echo" class="group relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-cyan-200/20 bg-[#0b1517] p-7 transition hover:-translate-y-1 hover:border-cyan-100/65">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(77,214,232,0.2),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_52%)]"></div>
            <div class="relative flex h-full flex-col justify-between">
              <div class="flex items-start justify-between">
                <div class="rounded-2xl border border-white/10 bg-white/8 p-3">
                  <FolderKanban class="h-7 w-7 text-cyan-200" />
                </div>
                <ArrowRight class="h-6 w-6 text-cyan-100 transition group-hover:translate-x-1" />
              </div>
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/70">Project management portal</p>
                <h3 class="mt-4 text-4xl font-black text-white">ECHO 研究工作区</h3>
                <p class="mt-4 max-w-xl text-sm leading-7 text-slate-300">原有项目管理页面，保留为主页里的核心入口，用于管理会议记录、文献笔记、研究日志、每周进展和 Firebase 支持的研究数据。</p>
              </div>
            </div>
          </router-link>

          <div class="grid gap-5">
            <router-link to="/pureflow" class="surface-card rounded-[2rem] p-6">
              <ExternalLink class="mb-8 h-7 w-7 text-cyan-200" />
              <p class="text-xs font-bold uppercase tracking-[0.22em] text-cyan-100/70">Interactive hero demo</p>
              <h3 class="mt-3 text-2xl font-bold text-white">PureFlow 聚光交互页面</h3>
              <p class="mt-3 text-sm leading-7 text-slate-400">保留原提示词实现的单页 Hero，包含鼠标跟随网格、canvas 径向 mask、双背景图切换和响应式菜单。</p>
            </router-link>

            <article v-for="project in featuredProjects" :key="project.title" class="surface-card rounded-[2rem] p-6">
              <component :is="project.icon" class="mb-8 h-7 w-7 text-emerald-200" />
              <p class="text-xs font-bold uppercase tracking-[0.22em] text-cyan-100/70">{{ project.period }}</p>
              <h3 class="mt-3 text-2xl font-bold text-white">{{ project.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-slate-400">{{ project.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="experience" class="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="section-heading">
          <p class="section-kicker">经历时间线</p>
          <h2>AI 视觉、机器人、网络工程与 AGV 中间件。</h2>
        </div>

        <div class="space-y-4">
          <article v-for="item in workExperiences" :key="item.title" class="timeline-card grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 md:grid-cols-[14rem_1fr]">
            <div>
              <p class="font-mono text-sm font-bold text-cyan-100">{{ item.period }}</p>
              <p class="mt-2 text-sm text-slate-500">{{ item.company }}</p>
            </div>
            <div>
              <h3 class="text-xl font-black text-white">{{ item.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-slate-300">{{ item.description }}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="skills" class="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="rounded-[2rem] border border-white/10 bg-[#0b1114]/78 p-6 backdrop-blur-xl md:p-8">
          <div class="section-heading">
            <p class="section-kicker">技术能力</p>
            <h2>编程、云平台、数据科学与项目管理。</h2>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <div v-for="group in skillGroups" :key="group.title" class="rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-5">
              <h3 class="mb-4 text-lg font-bold text-slate-200">{{ group.title }}</h3>
              <div class="flex flex-wrap gap-3">
                <span v-for="skill in group.items" :key="skill" class="skill-pill">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" class="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="section-heading">
          <p class="section-kicker">教育背景</p>
          <h2>计算机与信息技术的双阶段训练。</h2>
        </div>

        <div class="grid gap-5 md:grid-cols-2">
          <article v-for="item in education" :key="item.school" class="surface-card rounded-[1.5rem] p-6">
            <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <h3 class="text-2xl font-black text-white">{{ item.school }}</h3>
                <p class="mt-2 text-sm text-slate-400">{{ item.location }}</p>
              </div>
              <span class="w-fit rounded-full border border-cyan-200/25 bg-cyan-200/10 px-3 py-1 text-xs font-bold text-cyan-100">{{ item.period }}</span>
            </div>
            <p class="mt-5 text-lg font-semibold text-cyan-100">{{ item.degree }}</p>
            <p class="mt-2 text-sm leading-7 text-slate-400">{{ item.detail }}</p>
          </article>
        </div>
      </section>

      <section id="contact" class="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="grid gap-5 rounded-[2rem] border border-cyan-200/20 bg-cyan-200/8 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p class="section-kicker">联系</p>
            <h2 class="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">研究合作、全栈项目和 AI 产品原型。</h2>
            <p class="mt-4 max-w-2xl text-sm leading-7 text-slate-300">如果你想了解我的研究方向、项目管理工作台，或需要一个更完整的个人网站部署方案，可以从邮件开始。</p>
          </div>
          <a href="mailto:18136652206@163.com" class="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-200 px-6 py-3 text-sm font-bold text-[#071012] transition hover:bg-white active:translate-y-px">
            <Mail class="h-4 w-4" />
            18136652206@163.com
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  FolderKanban,
  GraduationCap,
  Mail,
  MessageCircle,
  Microscope,
  Network,
  ShieldCheck,
  Sparkles,
} from 'lucide-vue-next';

const navItems = [
  { label: '概览', href: '#overview' },
  { label: '研究', href: '#research' },
  { label: '项目', href: '#projects' },
  { label: '经历', href: '#experience' },
  { label: '技能', href: '#skills' },
  { label: '联系', href: '#contact' },
];

const signalMetrics = [
  { label: 'emotion model', value: 88 },
  { label: 'agent context', value: 76 },
  { label: 'system delivery', value: 92 },
];

const aiNodes = ['TEXT', 'AUDIO', 'VISION', 'LLM', 'CLOUD', 'ECHO'];

const education = [
  {
    school: 'Monash University',
    location: 'Melbourne, Australia',
    period: '2024 - 2026',
    degree: 'Master of Information Technology',
    detail: '研究方向聚焦大数据可视化、深度学习、LLMs、实时数据处理、DevOps、软件质量、微服务与云计算架构。',
  },
  {
    school: 'University of Ottawa',
    location: 'Ottawa, Canada',
    period: '2020 - 2023',
    degree: 'Bachelor of Science in Computer Science',
    detail: '系统学习计算机科学基础、软件工程、数据结构、算法、数据库与工程实践。',
  },
];

const researchFocus = [
  {
    title: '多模态情绪识别',
    description: '结合语言、行为、人格与上下文信号，构建更准确理解人类情绪状态的模型。',
    icon: Network,
  },
  {
    title: '共情对话智能体',
    description: '探索让对话系统适应用户情绪、意图和历史语境，同时保留以人为中心的安全边界。',
    icon: MessageCircle,
  },
  {
    title: 'AI 系统工程化',
    description: '从数据处理、模型验证到云端部署和 CI/CD，把研究原型推进为可维护系统。',
    icon: ShieldCheck,
  },
];

const workExperiences = [
  {
    title: 'AI 视觉相机开发与运维实习',
    company: 'Aiforia (Hangzhou) Intelligent Technology Co., Ltd',
    period: '06.2024 - 08.2024',
    description: '参与 AI 视觉相机系统架构设计、功能开发与算法优化，负责图像数据处理、目标识别、实时数据流管理、设备调试、在线监控和 CI/CD 流程建设。',
  },
  {
    title: '智能机器人与 AI 系统集成开发实习',
    company: 'Nanjing Zhaotong Intelligent Technology Co., Ltd',
    period: '03.2023 - 08.2023',
    description: '参与智能机器人与 AI 应用项目，协助设计控制算法和数据处理模块，提升复杂环境中的感知准确率、响应速度和系统稳定性。',
  },
  {
    title: '网络工程系统集成与智能工程设计实习',
    company: 'Nanjing Zhaotong Network Engineering Co., Ltd',
    period: '09.2022 - 02.2023',
    description: '参与网络系统集成、安全监控系统设计与建筑智能化项目，通过数据流分析和智能控制方案提升网络性能，并在能源管理场景降低约 15% 能耗。',
  },
  {
    title: 'AGV 中间件开发与运维实习',
    company: 'Nanjing Zhaotong Intelligent Technology Co., Ltd',
    period: '04.2022 - 07.2022',
    description: '负责 AGV 项目中间件开发、测试与运维支持，设计任务调度和多车协同控制模块，并优化路径规划与调度算法。',
  },
];

const featuredProjects = [
  {
    title: '智能灌溉预测系统',
    period: '05.2025 - 06.2025',
    description: '基于澳大利亚气象局数据和逻辑回归模型预测次日灌溉需求，结合数据清洗、特征工程、季节与地区变量，准确率达到 97.97%。',
    icon: Microscope,
  },
  {
    title: 'Serverless 数据处理与分析系统',
    period: '06.2024 - 07.2024',
    description: '基于 AWS Lambda、DynamoDB、Python 和 Pandas 构建低成本数据分析框架，提升大规模数据处理效率。',
    icon: Cloud,
  },
  {
    title: '自动驾驶强化学习应用',
    period: '07.2023 - 09.2023',
    description: '使用 Python、TensorFlow 与 Q-learning 训练自动驾驶路径规划和避障策略，验证强化学习在动态环境中的决策能力。',
    icon: BrainCircuit,
  },
  {
    title: 'LocalSteps.me 多语言导航平台',
    period: '03.2025 - 06.2025',
    description: '五人团队构建服务墨尔本老年移民的多语言 Web 应用，负责 Vue.js、Mapbox、路线规划、PDF 导出、短信辅助和无障碍体验。',
    icon: Code2,
  },
  {
    title: '开源社区贡献与技术支持',
    period: '09.2022 - 12.2023',
    description: '参与数据分析工具和机器学习库维护，提交优化代码和技术文档，提升项目性能与用户体验。',
    icon: Database,
  },
];

const skillGroups = [
  {
    title: '编程语言',
    items: ['Python', 'Java', 'C++', 'R', 'MATLAB', 'SQL', 'Markdown', 'LaTeX'],
  },
  {
    title: '数据科学与 AI',
    items: ['TensorFlow', 'PyTorch', 'Regression', 'Cluster Analysis', 'Reinforcement Learning', 'Deep Learning', 'Tableau', 'Power BI'],
  },
  {
    title: '云平台与 DevOps',
    items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Git', 'GitHub', 'Bitbucket', 'CI/CD'],
  },
  {
    title: '产品与项目管理',
    items: ['Agile', 'Scrum', 'Waterfall', 'Jira', 'Trello', 'Asana', 'Microsoft Project', 'Software Testing'],
  },
];
</script>

<style scoped>
.portfolio-nav {
  left: 0.75rem;
  width: calc(100% - 1.5rem);
}

.noise-layer {
  background-image:
    radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.5) 1px, transparent 0);
  background-size: 16px 16px;
}

.reveal {
  animation: reveal-up 0.75s ease-out both;
}

.reveal-delay {
  animation: reveal-up 0.75s ease-out 0.1s both;
}

.console-shell,
.surface-card,
.timeline-card {
  transition: transform 0.28s ease, border-color 0.28s ease, background-color 0.28s ease, box-shadow 0.28s ease;
}

.surface-card {
  border: 1px solid rgb(255 255 255 / 0.1);
  background: rgb(255 255 255 / 0.05);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.surface-card:hover,
.timeline-card:hover {
  transform: translateY(-4px);
  border-color: rgb(103 232 249 / 0.45);
  background: rgb(255 255 255 / 0.075);
  box-shadow: 0 18px 70px rgb(0 0 0 / 0.24);
}

.section-heading {
  margin-bottom: 2.5rem;
  max-width: 52rem;
}

.section-heading h2 {
  margin-top: 1rem;
  text-wrap: balance;
  font-size: clamp(2.15rem, 5vw, 3.75rem);
  font-weight: 900;
  line-height: 1.05;
  color: white;
}

.section-heading p:not(.section-kicker) {
  margin-top: 1.25rem;
  max-width: 45rem;
  color: rgb(203 213 225);
  line-height: 1.85;
}

.section-kicker {
  border-left: 4px solid #67e8f9;
  padding-left: 1rem;
  font-size: 0.875rem;
  font-weight: 800;
  letter-spacing: 0.22em;
  color: rgb(165 243 252 / 0.88);
}

.skill-pill {
  cursor: default;
  border-radius: 999px;
  border: 1px solid rgb(103 232 249 / 0.28);
  background: rgb(15 23 42 / 0.55);
  padding: 0.45rem 0.8rem;
  font-size: 0.875rem;
  color: rgb(207 250 254);
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.skill-pill:hover {
  border-color: rgb(167 243 208 / 0.45);
  background: rgb(103 232 249 / 0.11);
}

@media (min-width: 768px) {
  .portfolio-nav {
    left: 50%;
    max-width: 64rem;
    transform: translateX(-50%);
  }
}

@keyframes reveal-up {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal,
  .reveal-delay {
    animation: none;
  }

  .console-shell,
  .surface-card,
  .timeline-card,
  .skill-pill {
    transition: none;
  }
}
</style>
