<template>
  <div class="portfolio-root min-h-[100dvh] overflow-x-hidden bg-[#060810] text-slate-100 selection:bg-cyan-300/30 selection:text-cyan-100">

    <!-- ═══════════════════════════════════════════ BACKGROUND LAYERS ══ -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <!-- Deep space gradient -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(56,189,248,0.14),transparent),radial-gradient(ellipse_60%_50%_at_80%_60%,rgba(34,211,238,0.07),transparent),radial-gradient(ellipse_40%_40%_at_10%_80%,rgba(99,102,241,0.08),transparent),linear-gradient(180deg,#060810_0%,#080c14_50%,#050709_100%)]"></div>
      <!-- Mesh grid -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:5rem_5rem]"></div>
      <!-- Noise texture -->
      <div class="noise-overlay absolute inset-0 opacity-[0.035]"></div>
      <!-- Aurora top -->
      <div class="aurora-1 absolute -top-40 left-[10%] w-[70vw] h-[50vh] rounded-full blur-[120px] opacity-[0.18] bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600"></div>
      <!-- Aurora accent -->
      <div class="aurora-2 absolute top-[40%] right-[5%] w-[35vw] h-[30vh] rounded-full blur-[100px] opacity-[0.1] bg-gradient-to-br from-emerald-400 to-cyan-300"></div>
    </div>

    <!-- ═══════════════════════════════════════════════════ SKIP LINK ══ -->
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#060810]">
      跳到主要内容
    </a>

    <!-- ═══════════════════════════════════════════════════ NAV BAR ══ -->
    <nav
      class="portfolio-nav fixed top-4 z-50 transition-all duration-500"
      :class="scrolled ? 'nav-scrolled' : 'nav-transparent'"
    >
      <div class="flex items-center justify-between gap-2">
        <!-- Brand -->
        <a href="#overview" class="flex items-center gap-2.5 rounded-full px-3.5 py-2 text-sm font-black text-white transition hover:text-cyan-200">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-60"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]"></span>
          </span>
          Wei Liu
        </a>

        <!-- Desktop nav items -->
        <div class="hidden items-center gap-0.5 md:flex">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="nav-link group relative rounded-full px-3.5 py-2 text-sm font-semibold text-slate-400 transition-all duration-200 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
          >
            {{ item.label }}
            <span class="nav-underline absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-300 to-sky-400 transition-all duration-300 group-hover:w-4/5"></span>
          </a>
        </div>

        <!-- ECHO CTA -->
        <router-link
          to="/echo"
          class="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200 transition-all duration-300 hover:border-cyan-200/60 hover:bg-cyan-300/18 hover:shadow-[0_0_24px_rgba(103,232,249,0.2)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
        >
          <FolderKanban class="h-3.5 w-3.5" />
          <span class="hidden sm:inline">ECHO</span>
        </router-link>
      </div>
    </nav>

    <!-- ══════════════════════════════════════════════════════ MAIN ══ -->
    <main id="main" class="relative z-10">

      <!-- ─────────────────────────────────── HERO / OVERVIEW ──── -->
      <section
        id="overview"
        class="mx-auto grid min-h-[100dvh] w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:px-8"
      >
        <!-- Left: Text content -->
        <div class="hero-left space-y-8">
          <!-- Badge pill -->
          <div class="inline-flex max-w-full items-center gap-2.5 rounded-full border border-cyan-300/20 bg-gradient-to-r from-cyan-300/10 to-sky-400/8 px-4 py-2 text-xs font-semibold text-cyan-200 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <Sparkles class="h-3.5 w-3.5 shrink-0 text-cyan-300" />
            <span class="truncate">AI researcher · full-stack developer · data systems builder</span>
          </div>

          <!-- Name + Headline -->
          <div class="space-y-5">
            <p class="flex items-center gap-3 text-xs font-black uppercase tracking-[0.35em] text-cyan-300/70">
              <span class="h-px w-8 bg-gradient-to-r from-cyan-300/60 to-transparent"></span>
              Wei Liu
            </p>
            <h1 class="hero-headline text-pretty text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight text-white">
              Building <span class="gradient-text">empathetic AI</span> through multimodal intelligence.
            </h1>
            <p class="max-w-lg text-base leading-8 text-slate-400 sm:text-[17px]">
              我关注多模态情绪识别、共情对话智能体、人本 AI 系统，以及把研究原型做成可部署、可维护的全栈产品。
            </p>
          </div>

          <!-- CTA Row -->
          <div class="flex flex-col gap-3 sm:flex-row">
            <a
              href="#research"
              class="group inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-cyan-300 to-sky-400 px-7 py-3 text-sm font-bold text-[#060810] transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.45)] hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-cyan-300/60 relative"
            >
              <span class="btn-shine absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-[130%]"></span>
              查看研究方向
              <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <router-link
              to="/echo"
              class="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/12 bg-white/6 px-7 py-3 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:shadow-[0_0_24px_rgba(103,232,249,0.15)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
            >
              进入 ECHO 工作台
              <FolderKanban class="h-4 w-4" />
            </router-link>
          </div>

          <!-- Scroll indicator -->
          <div class="hidden lg:flex items-center gap-3 pt-4">
            <div class="scroll-mouse relative flex h-8 w-5 items-start justify-center rounded-full border border-slate-600/60 pt-1.5">
              <div class="scroll-dot h-1.5 w-1 rounded-full bg-cyan-300"></div>
            </div>
            <span class="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-600">Scroll</span>
          </div>
        </div>

        <!-- Right: Console terminal card -->
        <div class="hero-right">
          <div class="console-shell relative rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
            <!-- Glow behind card -->
            <div class="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-cyan-400/10 via-transparent to-sky-600/8 pointer-events-none"></div>

            <div class="overflow-hidden rounded-[1.55rem] border border-white/[0.07] bg-[#050810]">
              <!-- Terminal header bar -->
              <div class="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.03] px-5 py-4">
                <div class="flex items-center gap-2">
                  <div class="flex gap-1.5">
                    <span class="h-3 w-3 rounded-full bg-red-500/70"></span>
                    <span class="h-3 w-3 rounded-full bg-amber-500/70"></span>
                    <span class="h-3 w-3 rounded-full bg-emerald-500/70"></span>
                  </div>
                  <div class="ml-3">
                    <p class="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-600">research console</p>
                    <h2 class="mt-0.5 text-lg font-black text-white">Human-centred AI portfolio</h2>
                  </div>
                </div>
                <span class="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold text-emerald-300 flex items-center gap-1.5">
                  <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  开放合作
                </span>
              </div>

              <!-- Signal metrics + nodes -->
              <div class="grid gap-4 p-4 md:grid-cols-[1.15fr_0.85fr] md:p-6">
                <!-- Left metric panel -->
                <div class="rounded-[1.25rem] border border-white/[0.07] bg-[#0a0f1c]/80 p-5">
                  <div class="mb-5 flex items-center justify-between">
                    <div>
                      <p class="text-sm font-semibold text-slate-300">Multimodal signal stack</p>
                      <p class="mt-1 text-[11px] text-slate-600">text / audio / vision / context</p>
                    </div>
                    <Activity class="h-5 w-5 text-cyan-300" />
                  </div>

                  <div class="space-y-4">
                    <div v-for="(metric, i) in signalMetrics" :key="metric.label">
                      <div class="mb-2 flex items-center justify-between font-mono text-[11px] text-slate-500">
                        <span class="text-slate-400">{{ metric.label }}</span>
                        <span class="text-cyan-300 font-bold">{{ metric.value }}%</span>
                      </div>
                      <div class="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          class="metric-bar h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300"
                          :style="{ width: `${metric.value}%`, transitionDelay: `${i * 120}ms` }"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <!-- AI nodes grid -->
                  <div class="mt-6 grid grid-cols-3 gap-2">
                    <div
                      v-for="node in aiNodes"
                      :key="node"
                      class="node-chip rounded-xl border border-white/[0.07] bg-white/[0.04] p-2.5 text-center transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/8"
                    >
                      <p class="font-mono text-[10px] font-bold text-cyan-200/80">{{ node }}</p>
                    </div>
                  </div>
                </div>

                <!-- Right side cards -->
                <div class="grid gap-3">
                  <div class="rounded-[1.25rem] border border-white/[0.07] bg-white/[0.04] p-5">
                    <GraduationCap class="mb-5 h-6 w-6 text-cyan-300" />
                    <p class="font-mono text-4xl font-black text-white">2</p>
                    <p class="mt-2 text-xs leading-5 text-slate-500">海外计算机教育背景：Monash MIT 与 University of Ottawa CS。</p>
                  </div>

                  <router-link
                    to="/echo"
                    class="group rounded-[1.25rem] border border-cyan-300/15 bg-cyan-300/8 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-cyan-300/14 hover:shadow-[0_12px_40px_rgba(103,232,249,0.15)]"
                  >
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <p class="text-sm font-bold text-cyan-200">ECHO research workspace</p>
                        <p class="mt-2 text-xs leading-5 text-slate-500">项目管理、文献笔记、进度追踪和研究资料入口。</p>
                      </div>
                      <ArrowRight class="mt-0.5 h-4 w-4 shrink-0 text-cyan-300 transition-transform group-hover:translate-x-1" />
                    </div>
                  </router-link>
                </div>
              </div>

              <!-- Footer meta bar -->
              <div class="grid gap-3 border-t border-white/[0.06] bg-[#030509] p-4 font-mono text-[11px] text-slate-600 md:grid-cols-3">
                <p><span class="text-cyan-300">title:</span> Personal Research Portfolio</p>
                <p><span class="text-emerald-400">category:</span> AI / Human-Centred Computing</p>
                <p><span class="text-cyan-300">status:</span> Available for collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ────────────────────────────────── RESEARCH SECTION ──── -->
      <section id="research" class="section-wrapper">
        <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="section-heading reveal-section">
            <p class="section-kicker">研究方向</p>
            <h2 class="section-title">从情绪理解，到可部署的智能系统。</h2>
            <p class="section-subtitle">研究兴趣覆盖大数据可视化、深度学习、LLMs、实时数据处理、DevOps、软件质量、微服务与云计算架构。</p>
          </div>

          <div class="grid gap-5 md:grid-cols-3">
            <article
              v-for="(focus, i) in researchFocus"
              :key="focus.title"
              class="research-card reveal-section group relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/30 hover:shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
              :style="{ transitionDelay: `${i * 80}ms` }"
            >
              <!-- Card index -->
              <span class="absolute top-5 right-5 font-mono text-[11px] font-black text-slate-700">{{ String(i + 1).padStart(2, '0') }}</span>
              <!-- Shimmer sweep on hover -->
              <div class="card-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
              <!-- Inner glow -->
              <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent"></div>

              <component :is="focus.icon" class="mb-8 h-7 w-7 text-cyan-300" />
              <h3 class="text-xl font-bold text-white">{{ focus.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-slate-500">{{ focus.description }}</p>

              <!-- Bottom accent line -->
              <div class="mt-8 h-px w-12 rounded-full bg-gradient-to-r from-cyan-300/60 to-transparent transition-all duration-500 group-hover:w-24"></div>
            </article>
          </div>
        </div>
      </section>

      <!-- ─────────────────────────────────── PROJECTS SECTION ──── -->
      <section id="projects" class="section-wrapper">
        <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end reveal-section">
            <div class="section-heading mb-0">
              <p class="section-kicker">精选项目</p>
              <h2 class="section-title">把研究、产品和工程放在同一个工作流里。</h2>
            </div>
            <router-link
              to="/echo"
              class="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/8 px-5 py-2.5 text-sm font-bold text-cyan-200 transition-all duration-300 hover:border-cyan-200/60 hover:bg-cyan-300/14 hover:shadow-[0_0_24px_rgba(103,232,249,0.18)] active:scale-[0.98]"
            >
              打开 ECHO
              <ExternalLink class="h-3.5 w-3.5" />
            </router-link>
          </div>

          <!-- Row 1: ECHO hero card + PureFlow side-by-side -->
          <div class="grid gap-5 lg:grid-cols-[1.08fr_0.92fr] items-start">
            <!-- ECHO hero project card -->
            <router-link
              to="/echo"
              class="group reveal-section relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-[#0a0f1c] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200/40 hover:shadow-[0_32px_100px_rgba(0,0,0,0.5)]"
            >
              <!-- Background glow -->
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(56,189,248,0.18),transparent_50%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_55%)]"></div>
              <!-- Shimmer -->
              <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>
              <!-- Top border glow -->
              <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"></div>

              <div class="relative flex h-full flex-col justify-between">
                <div class="flex items-start justify-between">
                  <div class="rounded-2xl border border-white/[0.08] bg-white/[0.06] p-3">
                    <FolderKanban class="h-7 w-7 text-cyan-300" />
                  </div>
                  <ArrowRight class="h-5 w-5 text-cyan-200 transition-transform group-hover:translate-x-1.5" />
                </div>
                <div>
                  <p class="text-xs font-black uppercase tracking-[0.26em] text-cyan-300/60">Project management portal</p>
                  <h3 class="mt-4 text-4xl font-black text-white">ECHO 研究工作区</h3>
                  <p class="mt-4 max-w-xl text-sm leading-7 text-slate-400">原有项目管理页面，保留为主页里的核心入口，用于管理会议记录、文献笔记、研究日志、每周进展和 Firebase 支持的研究数据。</p>
                </div>
              </div>
            </router-link>

            <!-- Right column: PureFlow only -->
            <router-link
              to="/pureflow"
              class="reveal-section surface-card group rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1"
            >
              <ExternalLink class="mb-8 h-6 w-6 text-cyan-300" />
              <p class="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-200/60">Interactive hero demo</p>
              <h3 class="mt-3 text-2xl font-bold text-white">PureFlow 聚光交互页面</h3>
              <p class="mt-4 text-sm leading-7 text-slate-500">保留原提示词实现的单页 Hero，包含鼠标跟随网格、canvas 径向 mask、双背景图切换和响应式菜单。</p>
            </router-link>
          </div>

          <!-- Row 2: remaining projects in 3-col grid -->
          <div class="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="(project, i) in featuredProjects"
              :key="project.title"
              class="reveal-section surface-card rounded-[2rem] p-6 transition-all duration-500 hover:-translate-y-1"
              :style="{ transitionDelay: `${i * 55}ms` }"
            >
              <component :is="project.icon" class="mb-6 h-6 w-6 text-emerald-400" />
              <p class="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200/55">{{ project.period }}</p>
              <h3 class="mt-2.5 text-lg font-bold text-white leading-snug">{{ project.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-slate-500">{{ project.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- ──────────────────────────────── EXPERIENCE SECTION ──── -->
      <section id="experience" class="section-wrapper">
        <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="section-heading reveal-section">
            <p class="section-kicker">经历时间线</p>
            <h2 class="section-title">AI 视觉、机器人、网络工程<br/>与 AGV 中间件。</h2>
          </div>

          <!-- Timeline -->
          <div class="relative pl-6 md:pl-0">
            <!-- Vertical line (desktop) -->
            <div class="timeline-track hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-300/30 via-slate-700/50 to-transparent"></div>

            <div class="space-y-5">
              <article
                v-for="(item, i) in workExperiences"
                :key="item.title"
                class="reveal-section group grid gap-6 rounded-[1.5rem] border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-500 hover:border-cyan-300/25 hover:bg-white/[0.055] hover:shadow-[0_16px_60px_rgba(0,0,0,0.3)] md:grid-cols-[8rem_1fr] backdrop-blur-sm"
                :style="{ transitionDelay: `${i * 60}ms` }"
              >
                <!-- Date column -->
                <div class="relative">
                  <!-- Timeline dot (desktop) -->
                  <div class="timeline-dot hidden md:block absolute -right-[1.85rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-cyan-300/50 bg-[#060810] transition-all duration-300 group-hover:border-cyan-300 group-hover:shadow-[0_0_12px_rgba(103,232,249,0.5)]"></div>
                  <p class="font-mono text-xs font-bold text-cyan-200/80">{{ item.period }}</p>
                  <p class="mt-2 text-[11px] text-slate-600 leading-5">{{ item.company }}</p>
                </div>
                <!-- Content column -->
                <div>
                  <h3 class="text-lg font-black text-white group-hover:text-cyan-100 transition-colors">{{ item.title }}</h3>
                  <p class="mt-3 text-sm leading-7 text-slate-500">{{ item.description }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- ────────────────────────────────────── SKILLS SECTION ──── -->
      <section id="skills" class="section-wrapper">
        <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="relative overflow-hidden rounded-[2.5rem] border border-white/[0.07] bg-[#080c18]/80 p-7 backdrop-blur-xl md:p-10 reveal-section">
            <!-- Inner glow effects -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent"></div>
            <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-[40%] h-40 rounded-full blur-3xl bg-cyan-400/8 pointer-events-none"></div>

            <div class="section-heading">
              <p class="section-kicker">技术能力</p>
              <h2 class="section-title">编程、云平台、数据科学与项目管理。</h2>
            </div>

            <div class="grid gap-5 md:grid-cols-2">
              <div
                v-for="(group, i) in skillGroups"
                :key="group.title"
                class="reveal-section skill-group rounded-[1.5rem] border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-300 hover:border-cyan-300/20"
                :style="{ transitionDelay: `${i * 60}ms` }"
              >
                <h3 class="mb-5 text-sm font-black uppercase tracking-[0.18em] text-slate-300">{{ group.title }}</h3>
                <div class="flex flex-wrap gap-2.5">
                  <span
                    v-for="skill in group.items"
                    :key="skill"
                    class="skill-pill"
                  >{{ skill }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─────────────────────────────────── EDUCATION SECTION ──── -->
      <section id="education" class="section-wrapper">
        <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="section-heading reveal-section">
            <p class="section-kicker">教育背景</p>
            <h2 class="section-title">计算机与信息技术的<br/>双阶段训练。</h2>
          </div>

          <div class="grid gap-5 md:grid-cols-2">
            <article
              v-for="(item, i) in education"
              :key="item.school"
              class="reveal-section surface-card group relative overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1"
              :style="{ transitionDelay: `${i * 100}ms` }"
            >
              <!-- Shimmer -->
              <div class="card-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
              <!-- Corner geo decoration -->
              <div class="absolute -top-10 -right-10 h-32 w-32 rounded-full border border-cyan-300/8 opacity-50"></div>
              <div class="absolute -top-6 -right-6 h-20 w-20 rounded-full border border-cyan-300/12 opacity-50"></div>

              <div class="relative flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <h3 class="text-2xl font-black text-white">{{ item.school }}</h3>
                  <p class="mt-1.5 text-sm text-slate-600">{{ item.location }}</p>
                </div>
                <span class="w-fit rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1.5 text-[11px] font-bold text-cyan-200 whitespace-nowrap">{{ item.period }}</span>
              </div>
              <p class="relative mt-6 text-lg font-bold text-cyan-200">{{ item.degree }}</p>
              <p class="relative mt-2 text-sm leading-7 text-slate-500">{{ item.detail }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- ──────────────────────────────────── CONTACT SECTION ──── -->
      <section id="contact" class="section-wrapper pb-28">
        <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="reveal-section relative overflow-hidden rounded-[2.5rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/8 via-sky-400/5 to-indigo-500/8 p-8 md:p-12">
            <!-- Background blob -->
            <div class="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-sky-500/8 blur-2xl pointer-events-none"></div>
            <!-- Top glow line -->
            <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"></div>

            <div class="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p class="section-kicker">联系</p>
                <h2 class="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">
                  研究合作、全栈项目<br/>和 AI 产品原型。
                </h2>
                <p class="mt-5 max-w-xl text-sm leading-8 text-slate-400">如果你想了解我的研究方向、项目管理工作台，或需要一个更完整的个人网站部署方案，可以从邮件开始。</p>
              </div>
              <a
                href="mailto:18136652206@163.com"
                class="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 to-sky-400 px-7 py-4 text-sm font-bold text-[#060810] transition-all duration-300 hover:shadow-[0_0_48px_rgba(56,189,248,0.5)] hover:scale-[1.04] active:scale-[0.98] relative overflow-hidden"
              >
                <span class="btn-shine absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/25 transition-transform duration-700 group-hover:translate-x-[130%]"></span>
                <Mail class="h-4 w-4 relative z-10" />
                <span class="relative z-10">18136652206@163.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
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

// ─── Scroll state ───────────────────────────────────────────────────────────
const scrolled = ref(false);
const handleScroll = () => { scrolled.value = window.scrollY > 40; };

// ─── Intersection observer for reveal animations ────────────────────────────
let observer = null;

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal-section').forEach((el) => observer.observe(el));

  // Metric bar animation
  setTimeout(() => {
    document.querySelectorAll('.metric-bar').forEach((el) => {
      el.style.transition = 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  }, 300);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (observer) observer.disconnect();
});

// ─── Data ────────────────────────────────────────────────────────────────────
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
/* ═══════════════════════════════════════ FONTS ══ */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap');

.portfolio-root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.hero-headline {
  font-family: 'Syne', 'Inter', system-ui, sans-serif;
}

/* ═══════════════════════════════════════ BACKGROUND ══ */
.noise-overlay {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
}

.aurora-1 {
  animation: aurora-drift 18s ease-in-out infinite alternate;
}
.aurora-2 {
  animation: aurora-drift 24s ease-in-out 3s infinite alternate-reverse;
}
@keyframes aurora-drift {
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(3%, 2%) scale(1.08); }
  100% { transform: translate(-2%, -3%) scale(0.95); }
}

/* ═══════════════════════════════════════ NAV ══ */
.portfolio-nav {
  left: 0.75rem;
  width: calc(100% - 1.5rem);
  border-radius: 999px;
  padding: 0.4rem 0.5rem;
}

.nav-transparent {
  background: rgba(6, 8, 16, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: none;
}

.nav-scrolled {
  background: rgba(6, 8, 16, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(103, 232, 249, 0.05);
}

@media (min-width: 768px) {
  .portfolio-nav {
    left: 50%;
    max-width: 62rem;
    transform: translateX(-50%);
  }
}

/* ═══════════════════════════════════════ GRADIENT TEXT ══ */
.gradient-text {
  background: linear-gradient(135deg, #67e8f9 0%, #38bdf8 40%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ═══════════════════════════════════════ HERO ANIMATIONS ══ */
.hero-left {
  animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.hero-right {
  animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
}

@keyframes reveal-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Button shine sweep */
.btn-shine {
  pointer-events: none;
}

/* ═══════════════════════════════════════ SCROLL MOUSE ══ */
.scroll-dot {
  animation: scroll-bounce 2s ease-in-out infinite;
}
@keyframes scroll-bounce {
  0%, 100% { transform: translateY(0); opacity: 1; }
  60%       { transform: translateY(6px); opacity: 0; }
}

/* ═══════════════════════════════════════ CONSOLE SHELL ══ */
.console-shell {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.console-shell:hover {
  transform: translateY(-4px) rotateX(1deg);
  box-shadow: 0 60px 140px rgba(0, 0, 0, 0.7), 0 0 80px rgba(56, 189, 248, 0.08);
}

/* ═══════════════════════════════════════ SECTION LAYOUT ══ */
.section-wrapper {
  padding-top: 6rem;
  padding-bottom: 2rem;
}

.section-heading {
  margin-bottom: 3rem;
  max-width: 54rem;
}

.section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.3em;
  color: rgba(103, 232, 249, 0.75);
  text-transform: uppercase;
}
.section-kicker::before {
  content: '';
  display: block;
  width: 2rem;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, #67e8f9, transparent);
}

.section-title {
  margin-top: 1rem;
  font-family: 'Syne', 'Inter', system-ui, sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 900;
  line-height: 1.06;
  color: white;
  text-wrap: balance;
}

.section-subtitle {
  margin-top: 1.25rem;
  max-width: 42rem;
  font-size: 0.9rem;
  line-height: 1.9;
  color: rgb(100, 116, 139);
}

/* ═══════════════════════════════════════ SURFACE CARD ══ */
.surface-card {
  border: 1px solid rgba(255, 255, 255, 0.065);
  background: rgba(255, 255, 255, 0.038);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  position: relative;
  overflow: hidden;
}

.surface-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(103, 232, 249, 0.18), transparent);
}

.surface-card:hover {
  border-color: rgba(103, 232, 249, 0.22);
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.32);
}

/* ═══════════════════════════════════════ SKILL PILL ══ */
.skill-pill {
  cursor: default;
  border-radius: 999px;
  border: 1px solid rgba(103, 232, 249, 0.18);
  background: rgba(15, 23, 42, 0.6);
  padding: 0.38rem 0.85rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: rgb(186, 230, 253);
  transition: all 0.22s ease;
}

.skill-pill:hover {
  border-color: rgba(103, 232, 249, 0.5);
  background: rgba(103, 232, 249, 0.1);
  color: rgb(224, 242, 254);
  box-shadow: 0 0 16px rgba(103, 232, 249, 0.12);
  transform: translateY(-1px);
}

/* ═══════════════════════════════════════ TIMELINE ══ */
.timeline-track {
  left: calc(8.5rem + 1.5rem + 24px);
}

/* ═══════════════════════════════════════ SCROLL REVEAL ══ */
.reveal-section {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ═══════════════════════════════════════ METRIC BAR ══ */
.metric-bar {
  width: 0%;
  transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

/* ═══════════════════════════════════════ REDUCED MOTION ══ */
@media (prefers-reduced-motion: reduce) {
  .hero-left,
  .hero-right,
  .aurora-1,
  .aurora-2,
  .scroll-dot,
  .reveal-section {
    animation: none;
    transition: none;
    opacity: 1;
    transform: none;
  }
}
</style>
