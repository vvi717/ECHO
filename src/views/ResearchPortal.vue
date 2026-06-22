<template>
  <div class="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E2E8F0] dark:from-[#000B1D] dark:to-[#021A3B] text-slate-800 dark:text-slate-300 relative overflow-hidden font-sans selection:bg-[#00F5FF]/30 pb-16 transition-colors duration-500">
    <!-- SVG Fluid Background representing Echo's sleek wings -->
    <svg class="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 800">
      <path fill="#00F5FF" d="M0,400 C320,600 640,-100 1440,300 L1440,0 L0,0 Z" opacity="0.15" />
      <path fill="#94A3B8" d="M0,800 C400,600 800,900 1440,200 L1440,800 L0,800 Z" opacity="0.15" />
    </svg>

    <!-- Header Section -->
    <header class="relative z-10 p-8 pt-16 md:px-16 md:pt-24 flex flex-col justify-start items-start" v-motion-fade-visible-once>
      <div class="flex items-center justify-between w-full">
        <div class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 lg:gap-8">
          <img src="/icon2.png" alt="ECHO Crest" class="w-24 md:w-40 lg:w-48 drop-shadow-[0_0_20px_rgba(0,245,255,0.4)] md:hover:scale-105 transition-transform duration-500" />
          <div>
            <h1 class="text-7xl md:text-9xl font-black tracking-tighter text-slate-800 dark:text-slate-100 leading-none relative group transition-colors">
              ECHO
              <span class="absolute top-0 left-0 w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#0088CC] opacity-0 group-hover:opacity-100 animate-pulse-glitch transition-opacity duration-500 select-none pointer-events-none">ECHO</span>
            </h1>
            <p class="mt-4 text-xl md:text-2xl font-medium text-slate-500 tracking-widest uppercase relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-[3px] after:bg-[#00F5FF]">
              Shared Workspace | Empathetic Conversational Human Operator
            </p>
          </div>
        </div>
        <!-- 
        <router-link to="/protocol-echo" class="hidden md:flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-[#00F5FF] transition-colors uppercase py-2 px-4 rounded border border-transparent hover:border-[#00F5FF]/30 mt-4 md:mt-0">
          <Terminal class="w-4 h-4" />
          Developer Login
        </router-link> 
        -->
      </div>
    </header>

    <!-- Main Content Array -->
    <main class="relative z-10 w-full max-w-7xl mx-auto p-4 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
      
      <!-- Core Modules Area (Left Col) -->
      <section class="lg:col-span-8 flex flex-col gap-6" v-motion-slide-visible-once-left>
        <div class="flex items-center gap-3 mb-2">
          <Activity class="w-6 h-6 text-[#00B8D9]" />
          <h2 class="text-2xl font-bold tracking-wide text-slate-700 dark:text-slate-200 uppercase transition-colors">Research Modules</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Mod 1: Meetings -->
          <router-link to="/module/02_meetings" class="glass-panel-glow p-8 flex flex-col justify-between group h-[200px] cursor-pointer hover:shadow-[0_15px_50px_rgba(0,245,255,0.15)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div class="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <CalendarDays class="w-32 h-32 text-[#00B8D9]" />
            </div>
            <div class="flex justify-between items-start mb-4 relative z-10">
              <div class="p-3 bg-[#00F5FF]/10 text-[#00B8D9] rounded-xl group-hover:bg-[#00F5FF]/20 group-hover:shadow-[0_0_15px_#00F5FF] transition-all duration-300">
                <CalendarDays class="w-6 h-6" />
              </div>
              <span class="text-xs font-mono font-bold text-[#00B8D9] bg-[#00F5FF]/10 px-2 py-1 rounded border border-[#00F5FF]/30">02</span>
            </div>
            <div class="relative z-10">
              <h3 class="text-xl font-black text-slate-800 dark:text-slate-100 mb-2 tracking-wide group-hover:text-[#00B8D9] transition-colors">Meetings & Logs</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">Supervisor updates, group meeting prep, and branch decisions.</p>
            </div>
          </router-link>

          <!-- Mod 2: Literature -->
          <router-link to="/module/03_literature" class="glass-panel-glow p-8 flex flex-col justify-between group h-[200px] cursor-pointer hover:shadow-[0_15px_50px_rgba(0,245,255,0.15)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div class="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <BookOpen class="w-32 h-32 text-[#00B8D9]" />
            </div>
            <div class="flex justify-between items-start mb-4 relative z-10">
               <div class="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl group-hover:bg-[#00F5FF]/10 group-hover:text-[#00B8D9] group-hover:shadow-[0_0_15px_#00F5FF] transition-all duration-300">
                <BookOpen class="w-6 h-6" />
              </div>
              <span class="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded border border-slate-300 dark:border-slate-700 transition-colors">03</span>
            </div>
            <div class="relative z-10">
              <h3 class="text-xl font-black text-slate-800 dark:text-slate-100 mb-2 tracking-wide group-hover:text-[#00B8D9] transition-colors">Literature Review</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">MAFRG, PerFRDiff, personality, EEG, and challenge framing.</p>
            </div>
          </router-link>

          <!-- Mod 3: Notes -->
          <router-link to="/module/04_research_notes" class="glass-panel-glow p-8 flex flex-col justify-between group h-[200px] cursor-pointer hover:shadow-[0_15px_50px_rgba(0,245,255,0.15)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div class="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <FileText class="w-32 h-32 text-[#00B8D9]" />
            </div>
            <div class="flex justify-between items-start mb-4 relative z-10">
               <div class="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl group-hover:bg-[#00F5FF]/10 group-hover:text-[#00B8D9] group-hover:shadow-[0_0_15px_#00F5FF] transition-all duration-300">
                <FileText class="w-6 h-6" />
              </div>
              <span class="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded border border-slate-300 dark:border-slate-700 transition-colors">04</span>
            </div>
            <div class="relative z-10">
              <h3 class="text-xl font-black text-slate-800 dark:text-slate-100 mb-2 tracking-wide group-hover:text-[#00B8D9] transition-colors">Research Notes</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">Data audits, model notes, adapter results, and risk registers.</p>
            </div>
          </router-link>

          <!-- Mod 4: Progress -->
          <router-link to="/module/05_weekly_progress" class="glass-panel-glow p-8 flex flex-col justify-between group h-[200px] cursor-pointer hover:shadow-[0_15px_50px_rgba(0,245,255,0.15)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div class="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <TrendingUp class="w-32 h-32 text-[#00B8D9]" />
            </div>
            <div class="flex justify-between items-start mb-4 relative z-10">
               <div class="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl group-hover:bg-[#00F5FF]/10 group-hover:text-[#00B8D9] group-hover:shadow-[0_0_15px_#00F5FF] transition-all duration-300">
                <TrendingUp class="w-6 h-6" />
              </div>
              <span class="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded border border-slate-300 dark:border-slate-700 transition-colors">05</span>
            </div>
            <div class="relative z-10">
              <h3 class="text-xl font-black text-slate-800 dark:text-slate-100 mb-2 tracking-wide group-hover:text-[#00B8D9] transition-colors">Weekly Progress</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">Weekly milestones from tiny validation to 5-seed controls.</p>
            </div>
          </router-link>
        </div>

        <!-- Presentation Dashboard Entry -->
        <router-link to="/react2026-progress-dashboard" class="glass-panel-glow group relative overflow-hidden p-6 rounded-xl border-l-4 border-[#00F5FF] hover:shadow-[0_16px_50px_rgba(0,245,255,0.18)] hover:-translate-y-1 transition-all duration-300">
          <div class="absolute -right-8 -top-10 opacity-5 group-hover:opacity-10 transition-opacity">
            <MonitorPlay class="w-44 h-44 text-[#00B8D9]" />
          </div>
          <div class="relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div class="flex items-start gap-4">
              <div class="p-3 bg-[#00F5FF]/10 text-[#00B8D9] rounded-xl group-hover:bg-[#00F5FF]/20 group-hover:shadow-[0_0_15px_#00F5FF] transition-all duration-300">
                <MonitorPlay class="w-6 h-6" />
              </div>
              <div>
                <div class="text-[10px] font-mono font-bold tracking-widest text-[#00B8D9] uppercase mb-2">Submission Entry</div>
                <h3 class="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-wide group-hover:text-[#00B8D9] transition-colors">REACT2026 Submission Readiness</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 font-medium mt-2 max-w-2xl">June 22 dashboard with Generic V0 safe bundle, 625-row test inference, clean-unzip smoke, and submission-format confirmation questions.</p>
              </div>
            </div>
            <div class="inline-flex w-fit items-center gap-2 rounded-full border border-[#00F5FF]/35 bg-[#00F5FF]/10 px-4 py-2 text-xs font-mono font-black uppercase tracking-widest text-[#00B8D9]">
              Open Dashboard
              <ArrowUpRight class="w-4 h-4" />
            </div>
          </div>
        </router-link>

        <!-- Current Research Snapshot -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div class="glass-panel-glow p-5 rounded-xl">
            <div class="text-[10px] font-mono font-bold tracking-widest text-[#00B8D9] uppercase mb-2">Safe Candidate</div>
            <div class="text-2xl font-black text-slate-800 dark:text-slate-100">Generic V0</div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">Training, 571-row validation export, and 625-row test inference are complete.</p>
          </div>
          <div class="glass-panel-glow p-5 rounded-xl">
            <div class="text-[10px] font-mono font-bold tracking-widest text-[#00B8D9] uppercase mb-2">Bundle Status</div>
            <div class="text-2xl font-black text-slate-800 dark:text-slate-100">9.21 MB Zip</div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">Safe bundle self-check and clean-unzip CPU smoke both passed.</p>
          </div>
          <div class="glass-panel-glow p-5 rounded-xl">
            <div class="text-[10px] font-mono font-bold tracking-widest text-[#00B8D9] uppercase mb-2">Next Gate</div>
            <div class="text-2xl font-black text-slate-800 dark:text-slate-100">Format Confirm</div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">Confirm code/checkpoint route, PRED-only fallback, EEG/video requirements, and deadline.</p>
          </div>
        </div>

        <!-- The Nexus / Demo Pane (Dark contrast area!) -->
        <div class="mt-8">
          <div class="flex items-center gap-3 mb-4">
            <Terminal class="w-6 h-6 text-slate-700 dark:text-slate-400 transition-colors" />
            <h2 class="text-2xl font-bold tracking-wide text-slate-700 dark:text-slate-200 uppercase transition-colors">Holographic Core</h2>
          </div>
          <div class="glass-panel-dark relative overflow-hidden h-72 md:h-80 flex items-center justify-center border-l-4 border-[#00F5FF]">
            <!-- Holographic scanning line effect -->
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#00F5FF]/10 to-transparent h-[200%] w-full animate-float opacity-50"></div>
            
            <div class="text-center z-10 flex flex-col items-center gap-6 mt-8 relative">
              <div class="relative w-24 h-24 border-2 border-[#00F5FF]/60 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,245,255,0.2)]">
                <!-- Holographic Face Overlay -->
                <!-- We perfectly align its HUD circle to our core via a precise translate-y -->
                <img src="/icon3.png" alt="Echo Hologram Mask" class="absolute top-1/2 left-1/2 w-[310px] md:w-[360px] max-w-none -translate-x-[49.5%] -translate-y-[56.5%] opacity-60 mix-blend-screen pointer-events-none drop-shadow-[0_0_15px_#00F5FF] z-[-1]" />
                
                <div class="w-20 h-20 border border-dashed border-[#00F5FF] rounded-full animate-spin-slow absolute"></div>
                <div class="w-15 h-20 bg-[#00F5FF]/20 rounded-full animate-ping absolute"></div>
                <div class="w-6 h-6 bg-[#00F5FF] rounded-full absolute" style="box-shadow: 0 0 25px #00F5FF, 0 0 50px #00F5FF;"></div>
              </div>
              <p class="font-mono text-sm font-bold tracking-widest text-[#00F5FF] uppercase animate-pulse drop-shadow-[0_0_8px_#00F5FF] mt-10 md:mt-14 relative z-10">
                Generic V0 Safe Bundle Active
              </p>
            </div>
            
            <!-- Tech decoration crosshairs -->
            <div class="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#00F5FF]/40"></div>
            <div class="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#00F5FF]/40"></div>
            <div class="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#00F5FF]/40"></div>
            <div class="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#00F5FF]/40"></div>
          </div>
        </div>
      </section>

      <!-- Research Timeline (Right Col) -->
      <aside class="lg:col-span-4 lg:mt-10" v-motion-slide-visible-once-right>
        <div class="glass-panel h-full p-8 pb-12 relative overflow-hidden flex flex-col rounded-2xl border-t-4 border-t-[#00B8D9] dark:border-t-[#00F5FF]">
          
          <!-- Fluid overlay inside timeline -->
          <div class="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#00F5FF]/5 to-transparent pointer-events-none skew-x-[-15deg] translate-x-12"></div>
          
          <div class="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800 transition-colors relative z-10">
            <div class="flex flex-col">
              <h2 class="text-xl font-bold tracking-widest text-[#1C3A4B] dark:text-slate-200 uppercase">Progress Timeline</h2>
              <span class="text-xs font-mono font-bold text-[#00B8D9] mt-1 tracking-widest uppercase">
                March - June 2026 &bull; Week {{ weekNumber }}
              </span>
            </div>
            <span class="text-[10px] font-mono font-black uppercase tracking-[0.18em] text-[#00B8D9] dark:text-[#00F5FF] bg-[#00F5FF]/10 border border-[#00F5FF]/20 rounded-full px-3 py-1">Updated</span>
          </div>

          <div class="relative flex-1 overflow-y-auto custom-scrollbar pr-2 min-h-[480px]">
             <ol class="relative z-10 flex flex-col gap-7">
               <li v-for="(item, index) in progressTimeline" :key="item.phase" class="relative grid grid-cols-[1.25rem_1fr] gap-4">
                 <div class="relative flex justify-center">
                   <div v-if="index !== progressTimeline.length - 1" class="absolute top-5 h-[calc(100%+1.75rem)] w-px bg-gradient-to-b from-[#00B8D9]/50 to-slate-200 dark:to-slate-800"></div>
                   <div class="relative z-10 mt-1 h-4 w-4 rounded-full border-2" :class="item.status === 'current' ? 'border-[#00F5FF] bg-[#00F5FF] shadow-[0_0_18px_rgba(0,245,255,0.75)]' : 'border-[#00B8D9]/60 bg-white dark:bg-slate-950'"></div>
                 </div>
                 <article class="rounded-xl border border-slate-200/80 bg-white/55 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/45">
                   <div class="mb-2 flex items-start justify-between gap-3">
                     <div>
                       <p class="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-[#00B8D9]">{{ item.phase }}</p>
                       <h3 class="mt-1 text-base font-black leading-tight text-slate-800 dark:text-slate-100">{{ item.title }}</h3>
                     </div>
                     <span class="shrink-0 rounded-full border px-2 py-1 font-mono text-[9px] font-black uppercase tracking-[0.12em]" :class="item.status === 'current' ? 'border-[#00F5FF]/40 bg-[#00F5FF]/10 text-[#00B8D9] dark:text-[#00F5FF]' : 'border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400'">
                       {{ item.badge }}
                     </span>
                   </div>
                   <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{{ item.summary }}</p>
                 </article>
               </li>
             </ol>
          </div>

        </div>
      </aside>
    </main>

    <!-- Footer -->
    <footer class="mt-20 text-center relative z-10 text-xs font-mono font-bold text-slate-400 tracking-widest uppercase">
      <router-link to="/protocol-echo" class="md:hidden block mb-4 text-[#00F5FF] hover:underline">Sys.Admin</router-link>
      <p>The ECHO AI Research Labs &bullet; Iteration 0.9</p>
    </footer>
  </div>
</template>

<script setup>
import { Activity, Terminal, CalendarDays, BookOpen, FileText, TrendingUp, MonitorPlay, ArrowUpRight } from 'lucide-vue-next';

const currentDate = new Date();

const getWeekNumber = (d) => {
    // Project started roughly on Mar 9, 2026 (Week 0). Mar 23 is Week 2.
    const projectStartDate = new Date(2026, 2, 9); // Month is 0-indexed (2 = March)
    const diffTime = d.getTime() - projectStartDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
    return Math.max(0, Math.floor(diffDays / 7));
};
const weekNumber = getWeekNumber(currentDate);

const progressTimeline = [
  {
    phase: 'Mar 2026',
    title: 'Monash onboarding and ECHO workspace',
    badge: 'foundation',
    status: 'done',
    summary: 'Built the research rhythm: meetings, literature notes, progress logs, and the ECHO website as the shared project workspace.'
  },
  {
    phase: 'Apr 2026',
    title: 'PerFRDiff and REACT/MARS feasibility',
    badge: 'data path',
    status: 'done',
    summary: 'Moved from paper reading into real data checks, loader audits, smoke tests, and early overfit experiments on the facial reaction pipeline.'
  },
  {
    phase: 'May 2026',
    title: 'Generic V0 baseline locked',
    badge: 'baseline',
    status: 'done',
    summary: 'Established a clean no-personality and no-EEG baseline using speaker audio and speaker facial attributes as the stable comparison point.'
  },
  {
    phase: 'Jun 04-08',
    title: 'Official baseline and metadata audit',
    badge: 'audit',
    status: 'done',
    summary: 'Reviewed the official REACT2026 baseline updates, clarified personality and EEG boundaries, and kept test personality out of training and selection.'
  },
  {
    phase: 'Jun 09-10',
    title: 'Big-Five V1 controlled experiments',
    badge: 'research',
    status: 'done',
    summary: 'Injected listener Big-Five through FiLM, compared true traits against zero, shuffled, and no-condition controls, and ran five matched seeds.'
  },
  {
    phase: 'Jun 18-21',
    title: 'Official-style packaging and test bridge',
    badge: 'package',
    status: 'done',
    summary: 'Validated 571-row Generic V0 exports, converted validation predictions to official-style results.pt, and generated wav2vec features for all 625 test clips.'
  },
  {
    phase: 'Jun 22',
    title: 'Generic V0 safe submission bundle',
    badge: 'current',
    status: 'current',
    summary: 'Built the 9.21 MB safe bundle with source code, checkpoint, README, reports, and clean-unzip CPU smoke evidence. It is a candidate, not the final official upload.'
  },
  {
    phase: 'Next',
    title: 'Submission-format confirmation',
    badge: 'next',
    status: 'next',
    summary: 'Ask organiser or supervisor to confirm the model-package route, whether PRED-only results.pt is supplementary, EEG/video requirements, and whether June 26 or June 28 is the final deadline.'
  }
];
</script>

<style scoped>
.glass-panel {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
}

.glass-panel-glow {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 40px rgba(0, 245, 255, 0.1);
  border-radius: 1rem;
}

.glass-panel-dark {
  background: rgba(15, 23, 42, 0.85); /* text-slate-900 with opacity */
  backdrop-filter: blur(12px);
  border-radius: 1rem;
}

.animate-spin-slow {
  animation: spin 8s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-float {
  animation: float 10s ease-in-out infinite;
}
@keyframes float {
  0%, 100% {
    transform: translateY(-10%);
  }
  50% {
    transform: translateY(10%);
  }
}
</style>
