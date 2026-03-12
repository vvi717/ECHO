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
        <div>
          <h1 class="text-7xl md:text-9xl font-black tracking-tighter text-slate-800 dark:text-slate-100 leading-none relative group transition-colors">
            ECHO
            <span class="absolute top-0 left-0 w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#0088CC] opacity-0 group-hover:opacity-100 animate-pulse-glitch transition-opacity duration-500 select-none pointer-events-none">ECHO</span>
          </h1>
          <p class="mt-4 text-xl md:text-2xl font-medium text-slate-500 tracking-widest uppercase relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-[3px] after:bg-[#00F5FF]">
            Empathetic Conversational Human Operator
          </p>
        </div>
        <router-link to="/protocol-echo" class="hidden md:flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-[#00F5FF] transition-colors uppercase py-2 px-4 rounded border border-transparent hover:border-[#00F5FF]/30">
          <Terminal class="w-4 h-4" />
          Developer Login
        </router-link>
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
              <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">Weekly supervisor meetings and agenda logs.</p>
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
              <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">Research paper summaries and citations.</p>
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
              <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">Daily findings, ideas, and architecture drafts.</p>
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
              <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">Milestones tracking and sprint updates.</p>
            </div>
          </router-link>
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
            
            <div class="text-center z-10 flex flex-col items-center gap-6">
              <div class="relative w-24 h-24 border-2 border-[#00F5FF]/60 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,245,255,0.2)]">
                <div class="w-20 h-20 border border-dashed border-[#00F5FF] rounded-full animate-spin-slow absolute"></div>
                <div class="w-14 h-14 bg-[#00F5FF]/20 rounded-full animate-ping absolute"></div>
                <div class="w-6 h-6 bg-[#00F5FF] rounded-full absolute" style="box-shadow: 0 0 25px #00F5FF, 0 0 50px #00F5FF;"></div>
              </div>
              <p class="font-mono text-sm font-bold tracking-widest text-[#00F5FF] uppercase animate-pulse drop-shadow-[0_0_8px_#00F5FF]">
                System Ready... Empathy Engine Active
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

      <!-- ECHO Timeline (Right Col) -->
      <aside class="lg:col-span-4 lg:mt-10" v-motion-slide-visible-once-right>
        <div class="glass-panel h-full p-8 pb-12 relative overflow-hidden flex flex-col rounded-2xl border-t-4 border-t-[#00F5FF]">
          <!-- Fluid overlay inside timeline -->
          <div class="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#00F5FF]/5 to-transparent pointer-events-none skew-x-[-15deg] translate-x-12"></div>
          
          <h2 class="text-xl font-bold tracking-widest text-slate-800 dark:text-slate-200 uppercase mb-10 pb-4 border-b border-slate-200 dark:border-slate-700 text-right transition-colors">Progress Timeline</h2>
          
          <div class="relative flex-1 mt-4">
            <!-- Vertical Line -->
            <div class="absolute right-5 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00F5FF] via-slate-300 dark:via-slate-600 to-transparent rounded-full"></div>
            
            <!-- Nodes -->
            <ul class="relative z-10 flex flex-col gap-14 text-right pr-14 pt-2">
              <!-- Node 1 -->
              <li class="relative group">
                <div class="absolute -right-[4.25rem] top-1.5 w-[16px] h-[16px] bg-[#00F5FF] rounded-full border-[4px] border-white dark:border-slate-900 shadow-[0_0_15px_#00F5FF] transition-transform duration-300 group-hover:scale-125 group-hover:bg-white dark:group-hover:bg-slate-900 group-hover:border-[#00F5FF]"></div>
                <div class="text-xs font-mono font-bold text-[#00B8D9] mb-1 tracking-widest">MPhil Phase 1</div>
                <h4 class="text-lg font-black text-slate-800 dark:text-slate-100 tracking-wide transition-colors">Architecture Design</h4>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium leading-relaxed">Defining the emotional and linguistic bounds of the system. Initial tests on empathetic metrics.</p>
              </li>
              
              <!-- Node 2 -->
              <li class="relative group">
                <div class="absolute -right-[4.25rem] top-1.5 w-[16px] h-[16px] bg-white dark:bg-slate-800 rounded-full border-[4px] border-slate-300 dark:border-slate-600 shadow-sm transition-transform duration-300 group-hover:scale-125 group-hover:border-[#00F5FF] group-hover:shadow-[0_0_15px_#00F5FF]"></div>
                <div class="text-xs font-mono font-bold text-slate-400 mb-1 tracking-widest">v0.1 Prototype</div>
                <h4 class="text-lg font-black text-slate-800 dark:text-slate-100 tracking-wide transition-colors">LLM Integration</h4>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium leading-relaxed">Establishing core conversation pathways. Real-time cognitive tracking enabled.</p>
              </li>
              
              <!-- Node 3 -->
              <li class="relative opacity-50">
                <div class="absolute -right-[4.25rem] top-1.5 w-[16px] h-[16px] border-[3px] border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 rounded-full transition-transform duration-300 hover:scale-110"></div>
                <div class="text-xs font-mono font-bold text-slate-400 mb-1 tracking-widest">v0.2 Milestone</div>
                <h4 class="text-lg text-slate-700 dark:text-slate-200 font-bold tracking-wide transition-colors">Avatar Embodiment</h4>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium leading-relaxed">Projected: Unifying facial rig triggers with semantic sentiment analysis.</p>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </main>

    <!-- Footer -->
    <footer class="mt-20 text-center relative z-10 text-xs font-mono font-bold text-slate-400 tracking-widest uppercase">
      <router-link to="/protocol-echo" class="md:hidden block mb-4 text-[#00F5FF] hover:underline">Sys.Admin</router-link>
      <p>The ECHO AI Research Labs &bullet; Iteration 0.1</p>
    </footer>
  </div>
</template>

<script setup>
import { BrainCircuit, User, Activity, Terminal, CalendarDays, BookOpen, FileText, TrendingUp } from 'lucide-vue-next';
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
