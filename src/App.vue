<template>
  <div class="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E2E8F0] text-slate-800 relative overflow-hidden font-sans selection:bg-[#00F5FF]/30 pb-16">
    <!-- SVG Fluid Background representing Echo's sleek wings -->
    <svg class="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 800">
      <path fill="#00F5FF" d="M0,400 C320,600 640,-100 1440,300 L1440,0 L0,0 Z" opacity="0.15" />
      <path fill="#94A3B8" d="M0,800 C400,600 800,900 1440,200 L1440,800 L0,800 Z" opacity="0.15" />
    </svg>

    <!-- Header Section -->
    <header class="relative z-10 p-8 pt-16 md:px-16 md:pt-24 flex flex-col justify-start items-start" v-motion-fade-visible-once>
      <h1 class="text-7xl md:text-9xl font-black tracking-tighter text-slate-800 leading-none relative group">
        ECHO
        <span class="absolute top-0 left-0 w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#0088CC] opacity-0 group-hover:opacity-100 animate-pulse-glitch transition-opacity duration-500 select-none pointer-events-none">ECHO</span>
      </h1>
      <p class="mt-4 text-xl md:text-2xl font-medium text-slate-500 tracking-widest uppercase relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-[3px] after:bg-[#00F5FF]">
        Empathetic Conversational Human Operator
      </p>
    </header>

    <!-- Main Content Array -->
    <main class="relative z-10 w-full max-w-7xl mx-auto p-4 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
      
      <!-- Holographic Status Area (Left Col) -->
      <section class="lg:col-span-8 flex flex-col gap-6" v-motion-slide-visible-once-left>
        <div class="flex items-center gap-3 mb-2">
          <Activity class="w-6 h-6 text-[#00B8D9]" />
          <h2 class="text-2xl font-bold tracking-wide text-slate-700 uppercase">System Status</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- LLM Vector Card -->
          <div class="glass-panel-glow p-8 flex flex-col justify-between group h-[280px]">
            <div class="flex justify-between items-start mb-4">
              <div class="p-3 bg-[#00F5FF]/10 text-[#00B8D9] rounded-xl group-hover:bg-[#00F5FF]/20 group-hover:shadow-[0_0_15px_#00F5FF] transition-all duration-300">
                <BrainCircuit class="w-8 h-8" />
              </div>
              <span class="text-xs font-mono font-bold text-[#00B8D9] bg-[#00F5FF]/10 px-2 py-1 rounded border border-[#00F5FF]/30">SYS.ONLINE</span>
            </div>
            <div>
              <h3 class="text-xl font-black text-slate-800 mb-3 tracking-wide">LLM Intelligence</h3>
              <p class="text-sm text-slate-500 leading-relaxed font-medium line-clamp-3">
                Processing natural language inputs via generalized semantic models. Mapping cognitive intent and emotive context in real-time.
              </p>
              <div class="mt-6 w-full h-1.5 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                <div class="h-full bg-gradient-to-r from-[#00F5FF] to-[#0088CC] w-[85%] rounded-full shadow-[0_0_10px_#00F5FF]"></div>
              </div>
            </div>
          </div>

          <!-- Avatar Vector Card -->
          <div class="glass-panel-glow p-8 flex flex-col justify-between group h-[280px]">
            <div class="flex justify-between items-start mb-4">
              <div class="p-3 bg-slate-100 text-slate-600 rounded-xl group-hover:bg-slate-200 group-hover:text-slate-800 transition-all duration-300">
                <User class="w-8 h-8" />
              </div>
              <span class="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-300">SYNC.ESTABLISHED</span>
            </div>
            <div>
              <h3 class="text-xl font-black text-slate-800 mb-3 tracking-wide">Avatar Expression</h3>
              <p class="text-sm text-slate-500 leading-relaxed font-medium line-clamp-3">
                Synthesizing micro-expressions and voice intonations parameters for high-fidelity empathetic human-computer embodiment.
              </p>
              <div class="mt-6 w-full h-1.5 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                <div class="h-full bg-slate-700 w-[92%] rounded-full shadow-[0_0_10px_#1A202C]"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Nexus / Demo Pane (Dark contrast area!) -->
        <div class="mt-8">
          <div class="flex items-center gap-3 mb-4">
            <Terminal class="w-6 h-6 text-slate-700" />
            <h2 class="text-2xl font-bold tracking-wide text-slate-700 uppercase">Holographic Core</h2>
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
          
          <h2 class="text-xl font-bold tracking-widest text-slate-800 uppercase mb-10 pb-4 border-b border-slate-200 text-right">Progress Timeline</h2>
          
          <div class="relative flex-1 mt-4">
            <!-- Vertical Line -->
            <div class="absolute right-5 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00F5FF] via-slate-300 to-transparent rounded-full"></div>
            
            <!-- Nodes -->
            <ul class="relative z-10 flex flex-col gap-14 text-right pr-14 pt-2">
              <!-- Node 1 -->
              <li class="relative group">
                <div class="absolute -right-[4.25rem] top-1.5 w-[16px] h-[16px] bg-[#00F5FF] rounded-full border-[4px] border-white shadow-[0_0_15px_#00F5FF] transition-transform duration-300 group-hover:scale-125 group-hover:bg-white group-hover:border-[#00F5FF]"></div>
                <div class="text-xs font-mono font-bold text-[#00B8D9] mb-1 tracking-widest">MPhil Phase 1</div>
                <h4 class="text-lg font-black text-slate-800 tracking-wide">Architecture Design</h4>
                <p class="text-sm text-slate-500 mt-2 font-medium leading-relaxed">Defining the emotional and linguistic bounds of the system. Initial tests on empathetic metrics.</p>
              </li>
              
              <!-- Node 2 -->
              <li class="relative group">
                <div class="absolute -right-[4.25rem] top-1.5 w-[16px] h-[16px] bg-white rounded-full border-[4px] border-slate-300 shadow-sm transition-transform duration-300 group-hover:scale-125 group-hover:border-[#00F5FF] group-hover:shadow-[0_0_15px_#00F5FF]"></div>
                <div class="text-xs font-mono font-bold text-slate-400 mb-1 tracking-widest">v0.1 Prototype</div>
                <h4 class="text-lg font-black text-slate-800 tracking-wide">LLM Integration</h4>
                <p class="text-sm text-slate-500 mt-2 font-medium leading-relaxed">Establishing core conversation pathways. Real-time cognitive tracking enabled.</p>
              </li>
              
              <!-- Node 3 -->
              <li class="relative opacity-50">
                <div class="absolute -right-[4.25rem] top-1.5 w-[16px] h-[16px] border-[3px] border-slate-300 bg-slate-100 rounded-full transition-transform duration-300 hover:scale-110"></div>
                <div class="text-xs font-mono font-bold text-slate-400 mb-1 tracking-widest">v0.2 Milestone</div>
                <h4 class="text-lg text-slate-700 font-bold tracking-wide">Avatar Embodiment</h4>
                <p class="text-sm text-slate-500 mt-2 font-medium leading-relaxed">Projected: Unifying facial rig triggers with semantic sentiment analysis.</p>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </main>

    <!-- Footer -->
    <footer class="mt-20 text-center relative z-10 text-xs font-mono font-bold text-slate-400 tracking-widest uppercase">
      <p>The ECHO AI Research Labs &bullet; Iteration 0.1</p>
    </footer>
  </div>
</template>

<script setup>
import { BrainCircuit, User, Activity, Terminal } from 'lucide-vue-next';
</script>

<style scoped>
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
</style>
