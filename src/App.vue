<template>
  <div class="min-h-screen bg-gradient-to-br from-[#000B1D] to-[#002759] text-white relative overflow-hidden font-sans selection:bg-[#00F5FF]/30 pb-16">
    <!-- SVG Fluid Background representing Echo's Wings -->
    <svg class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 800">
      <path fill="#00F5FF" d="M0,400 C320,600 640,-100 1440,300 L1440,0 L0,0 Z" />
      <path fill="#FFFFFF" d="M0,800 C400,600 800,900 1440,200 L1440,800 L0,800 Z" opacity="0.3" />
    </svg>

    <!-- Header Section -->
    <header class="relative z-10 p-8 pt-16 md:px-16 md:pt-24 flex flex-col justify-start items-start" v-motion-fade-visible-once>
      <h1 class="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E0E0E0] animate-pulse-glitch leading-none">
        ECHO
      </h1>
      <p class="mt-4 text-xl md:text-2xl font-light text-[#00F5FF]/80 tracking-widest uppercase relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-[2px] after:bg-[#00F5FF]">
        Empathetic Conversational Human Operator
      </p>
    </header>

    <!-- Main Content Array -->
    <main class="relative z-10 w-full max-w-7xl mx-auto p-4 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
      
      <!-- Holographic Status Area (Left Col) -->
      <section class="lg:col-span-8 flex flex-col gap-6" v-motion-slide-visible-once-left>
        <div class="flex items-center gap-3 mb-2">
          <Activity class="w-6 h-6 text-[#00F5FF]" />
          <h2 class="text-2xl font-semibold tracking-wide text-white/90 uppercase">Holographic Status</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- LLM Vector Card -->
          <div class="glass-panel-glow p-8 flex flex-col justify-between group h-[280px]">
            <div class="flex justify-between items-start mb-4">
              <div class="p-3 bg-[#00F5FF]/10 rounded-xl group-hover:bg-[#00F5FF]/20 transition-colors">
                <BrainCircuit class="w-8 h-8 text-[#00F5FF]" />
              </div>
              <span class="text-xs font-mono text-[#00F5FF]/60 bg-[#00F5FF]/5 px-2 py-1 rounded border border-[#00F5FF]/20">SYS.ONLINE</span>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-3 tracking-wide">LLM Intelligence Vector</h3>
              <p class="text-sm text-white/60 leading-relaxed font-light line-clamp-3">
                Processing natural language inputs via generalized semantic models. Mapping cognitive intent and emotive context in real-time.
              </p>
              <div class="mt-6 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-[#00F5FF] to-white w-[85%] rounded-full shadow-[0_0_10px_#00F5FF]"></div>
              </div>
            </div>
          </div>

          <!-- Avatar Vector Card -->
          <div class="glass-panel-glow p-8 flex flex-col justify-between group h-[280px]">
            <div class="flex justify-between items-start mb-4">
              <div class="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                <User class="w-8 h-8 text-white" />
              </div>
              <span class="text-xs font-mono text-white/60 bg-white/5 px-2 py-1 rounded border border-white/20">SYNC.ESTABLISHED</span>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-3 tracking-wide">Avatar Expression Vector</h3>
              <p class="text-sm text-white/60 leading-relaxed font-light line-clamp-3">
                Synthesizing micro-expressions and voice intonations parameters for high-fidelity empathetic human-computer embodiment.
              </p>
              <div class="mt-6 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-white to-[#00F5FF] w-[92%] rounded-full shadow-[0_0_10px_#FFFFFF]"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Nexus / Demo Pane -->
        <div class="mt-8">
          <div class="flex items-center gap-3 mb-4">
            <Terminal class="w-6 h-6 text-[#00F5FF]" />
            <h2 class="text-2xl font-semibold tracking-wide text-white/90 uppercase">The Nexus</h2>
          </div>
          <div class="glass-panel-glow relative overflow-hidden h-72 md:h-80 flex items-center justify-center border-l-[3px] border-[#00F5FF]">
            <!-- Holographic scanning line effect -->
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#00F5FF]/5 to-transparent h-[200%] w-full animate-float opacity-30"></div>
            
            <div class="text-center z-10 flex flex-col items-center gap-6">
              <div class="relative w-20 h-20 border border-[#00F5FF]/40 rounded-full flex items-center justify-center">
                <div class="w-16 h-16 border border-dashed border-white/20 rounded-full animate-spin-slow absolute"></div>
                <div class="w-12 h-12 bg-[#00F5FF]/10 rounded-full animate-ping absolute"></div>
                <div class="w-4 h-4 bg-[#00F5FF] rounded-full absolute" style="box-shadow: 0 0 20px #00F5FF;"></div>
              </div>
              <p class="font-mono text-sm tracking-widest text-[#00F5FF] uppercase animate-pulse">
                Initiating... Waiting for Data
              </p>
            </div>
            
            <!-- Tech decoration crosshairs -->
            <div class="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/20"></div>
            <div class="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/20"></div>
            <div class="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-white/20"></div>
            <div class="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/20"></div>
          </div>
        </div>
      </section>

      <!-- ECHO Timeline (Right Col) -->
      <aside class="lg:col-span-4 lg:mt-10" v-motion-slide-visible-once-right>
        <div class="glass-panel h-full p-8 pb-12 relative overflow-hidden flex flex-col rounded-2xl border-t-[#00F5FF]/30">
          <!-- Fluid overlay inside timeline -->
          <div class="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#00F5FF]/5 to-transparent pointer-events-none skew-x-[-15deg] translate-x-12"></div>
          
          <h2 class="text-xl font-semibold tracking-widest text-white/90 uppercase mb-10 pb-4 border-b border-white/10 text-right">Progress Timeline</h2>
          
          <div class="relative flex-1 mt-4">
            <!-- Vertical Line -->
            <div class="absolute right-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00F5FF] via-white/20 to-transparent rounded-full opacity-60"></div>
            
            <!-- Nodes -->
            <ul class="relative z-10 flex flex-col gap-14 text-right pr-14 pt-2">
              <!-- Node 1 -->
              <li class="relative group">
                <div class="absolute -right-[4.2rem] top-1.5 w-[14px] h-[14px] bg-[#00F5FF] rounded-full border-[3px] border-[#002759] shadow-[0_0_12px_#00F5FF] transition-transform duration-300 group-hover:scale-125 group-hover:bg-white group-hover:shadow-[#FFFFFF]"></div>
                <div class="text-xs font-mono text-[#00F5FF] mb-1 tracking-widest">MPhil Phase 1</div>
                <h4 class="text-lg font-bold text-white tracking-wide">Architecture Design</h4>
                <p class="text-sm text-white/50 mt-2 font-light leading-relaxed">Defining the emotional and linguistic bounds of the system. Initial tests on empathetic metrics.</p>
              </li>
              
              <!-- Node 2 -->
              <li class="relative group">
                <div class="absolute -right-[4.2rem] top-1.5 w-[14px] h-[14px] bg-white rounded-full border-[3px] border-[#002759] shadow-[0_0_12px_#FFFFFF] transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#00F5FF] group-hover:shadow-[#00F5FF]"></div>
                <div class="text-xs font-mono text-white mb-1 tracking-widest">v0.1 Prototype</div>
                <h4 class="text-lg font-bold text-white tracking-wide">LLM Integration</h4>
                <p class="text-sm text-white/50 mt-2 font-light leading-relaxed">Establishing core conversation pathways. Real-time cognitive tracking enabled.</p>
              </li>
              
              <!-- Node 3 -->
              <li class="relative opacity-60">
                <div class="absolute -right-[4.2rem] top-1.5 w-[14px] h-[14px] border-[2px] border-white/40 bg-[#000B1D] rounded-full transition-transform duration-300 hover:scale-110 hover:border-white/80"></div>
                <div class="text-xs font-mono text-white/60 mb-1 tracking-widest">v0.2 Milestone</div>
                <h4 class="text-lg text-white font-medium tracking-wide">Avatar Embodiment</h4>
                <p class="text-sm text-white/30 mt-2 font-light leading-relaxed">Projected: Unifying facial rig triggers with semantic sentiment analysis.</p>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </main>

    <!-- Footer -->
    <footer class="mt-20 text-center relative z-10 text-xs font-mono text-[#4a5568] tracking-widest uppercase">
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
