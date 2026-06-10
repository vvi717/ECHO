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
                <div class="text-[10px] font-mono font-bold tracking-widest text-[#00B8D9] uppercase mb-2">Presentation Entry</div>
                <h3 class="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-wide group-hover:text-[#00B8D9] transition-colors">REACT2026 Progress Dashboard</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 font-medium mt-2 max-w-2xl">June 10 group meeting dashboard with 5-seed validation, full-export evidence, caveats, and supervisor questions.</p>
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
            <div class="text-[10px] font-mono font-bold tracking-widest text-[#00B8D9] uppercase mb-2">Locked Control</div>
            <div class="text-2xl font-black text-slate-800 dark:text-slate-100">Generic V0</div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">Full 571-row validation export complete; no personality or EEG.</p>
          </div>
          <div class="glass-panel-glow p-5 rounded-xl">
            <div class="text-[10px] font-mono font-bold tracking-widest text-[#00B8D9] uppercase mb-2">Main V1 Candidate</div>
            <div class="text-2xl font-black text-slate-800 dark:text-slate-100">Official-Scale FiLM</div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">Best 5-seed local validation branch against matched controls.</p>
          </div>
          <div class="glass-panel-glow p-5 rounded-xl">
            <div class="text-[10px] font-mono font-bold tracking-widest text-[#00B8D9] uppercase mb-2">Next Gate</div>
            <div class="text-2xl font-black text-slate-800 dark:text-slate-100">Metric Alignment</div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">Official-style evaluation remains the main caveat before claims.</p>
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
                Official-Scale Big-Five Candidate Active
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

      <!-- ECHO Todo List (Right Col) -->
      <aside class="lg:col-span-4 lg:mt-10" v-motion-slide-visible-once-right>
        <div class="glass-panel h-full p-8 pb-12 relative overflow-hidden flex flex-col rounded-2xl border-t-4 border-t-[#00B8D9] dark:border-t-[#00F5FF]">
          
          <!-- Fluid overlay inside timeline -->
          <div class="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#00F5FF]/5 to-transparent pointer-events-none skew-x-[-15deg] translate-x-12"></div>
          
          <div class="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800 transition-colors relative z-10">
            <div class="flex flex-col">
              <h2 class="text-xl font-bold tracking-widest text-[#1C3A4B] dark:text-slate-200 uppercase">Action Plan</h2>
              <span class="text-xs font-mono font-bold text-[#00B8D9] mt-1 tracking-widest uppercase">
                Week {{ weekNumber }} &bull; {{ currentDay }}
              </span>
            </div>
            <button v-if="!isEditing" @click="enterEditMode" class="text-slate-400 hover:text-[#00B8D9] dark:hover:text-[#00F5FF] transition-colors p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <PenLine class="w-4 h-4" />
            </button>
          </div>
          
          <!-- View Toggle -->
          <div class="flex items-center gap-2 mb-6 bg-slate-100 dark:bg-slate-900/50 p-1 rounded-xl relative z-10">
             <button @click="activeView = 'today'" :class="activeView === 'today' ? 'bg-white dark:bg-slate-800 shadow text-[#00B8D9] dark:text-[#00F5FF]' : 'text-slate-500 hover:text-slate-400'" class="flex-1 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest rounded-lg transition-all">Today</button>
             <button @click="activeView = 'week'" :class="activeView === 'week' ? 'bg-white dark:bg-slate-800 shadow text-[#00B8D9] dark:text-[#00F5FF]' : 'text-slate-500 hover:text-slate-400'" class="flex-1 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest rounded-lg transition-all">This Week</button>
          </div>

          <!-- List Area -->
          <div class="relative flex-1 overflow-y-auto custom-scrollbar pr-2 min-h-[300px]">
             
             <!-- VIEW MODE -->
             <ul v-if="!isEditing" class="flex flex-col gap-4 relative z-10">
               <li v-if="activeTodoList.length === 0" class="text-xs font-mono text-slate-400 italic text-center mt-10 opacity-60">
                 [ No tasks allocated ]
               </li>
               <li v-for="t in activeTodoList" :key="t.id" class="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer border border-transparent hover:border-slate-100 dark:hover:border-slate-800" @click="toggleDone(t)">
                 <div class="mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all font-bold" :class="t.done ? 'border-[#00B8D9] dark:border-[#00F5FF] bg-[#00B8D9] dark:bg-[#00F5FF] text-white dark:text-slate-900 shadow-[0_0_10px_rgba(0,245,255,0.4)]' : 'border-slate-300 dark:border-slate-600 group-hover:border-[#00B8D9] dark:group-hover:border-[#00F5FF]'">
                    <Check v-if="t.done" class="w-3 h-3" />
                 </div>
                 <div class="text-sm font-medium transition-all" :class="t.done ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-700 dark:text-slate-300'">
                    {{ t.text }}
                 </div>
               </li>
             </ul>

             <!-- EDIT MODE -->
             <div v-else class="flex flex-col gap-4 relative z-10">
               <ul class="flex flex-col gap-3">
                 <li v-for="t in tempActiveTodoList" :key="t.id" class="flex items-center gap-2">
                   <div class="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 shrink-0"></div>
                   <input v-model="t.text" class="flex-1 bg-slate-50 dark:bg-slate-900/50 text-sm font-medium text-slate-700 dark:text-slate-300 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-[#00F5FF]" />
                   <button @click="removeTodo(t.id)" class="text-slate-400 hover:text-red-500 p-2 shrink-0 transition-colors">
                     <Trash2 class="w-4 h-4" />
                   </button>
                 </li>
               </ul>

               <!-- Add new -->
               <form @submit.prevent="addTodo" class="flex items-center gap-3 mt-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                 <input v-model="newTodoText" placeholder="Add a new task..." class="flex-1 bg-transparent text-sm font-medium text-slate-700 dark:text-slate-300 border-b border-slate-300 dark:border-slate-700 focus:border-[#00F5FF] px-2 py-2 focus:outline-none placeholder-slate-400" />
                 <button type="submit" class="p-2 text-white dark:text-slate-900 bg-[#00B8D9] dark:bg-[#00F5FF] rounded-lg shrink-0 font-bold hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all">
                   <Plus class="w-4 h-4" />
                 </button>
               </form>
             </div>
          </div>
          
          <!-- Edit Controls -->
          <div v-if="isEditing" class="flex items-center gap-3 mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 relative z-10">
             <button @click="cancelEdit" class="flex-1 py-3 text-xs font-mono font-bold text-slate-500 uppercase tracking-widest border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Cancel</button>
             <button @click="saveTodos" class="flex-1 py-3 text-xs font-mono font-bold text-white dark:text-slate-900 bg-[#00B8D9] dark:bg-[#00F5FF] uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all flex items-center justify-center gap-2">
                 <Save class="w-4 h-4" /> Save
             </button>
          </div>

        </div>
      </aside>
    </main>

    <!-- Footer -->
    <footer class="mt-20 text-center relative z-10 text-xs font-mono font-bold text-slate-400 tracking-widest uppercase">
      <router-link to="/protocol-echo" class="md:hidden block mb-4 text-[#00F5FF] hover:underline">Sys.Admin</router-link>
      <p>The ECHO AI Research Labs &bullet; Iteration 0.8</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Activity, Terminal, CalendarDays, BookOpen, FileText, TrendingUp, PenLine, Check, Plus, Trash2, Save, MonitorPlay, ArrowUpRight } from 'lucide-vue-next';
import { db } from '../firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

const activeView = ref('today'); // 'today' or 'week'
const isEditing = ref(false);

const currentDate = new Date();
const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
const formatFullDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

const getWeekNumber = (d) => {
    // Project started roughly on Mar 9, 2026 (Week 0). Mar 23 is Week 2.
    const projectStartDate = new Date(2026, 2, 9); // Month is 0-indexed (2 = March)
    const diffTime = d.getTime() - projectStartDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
    return Math.max(0, Math.floor(diffDays / 7));
};
const weekNumber = getWeekNumber(currentDate);

const todos = ref({
   today: [],
   week: []
});
const tempTodos = ref({ today: [], week: [] });
const newTodoText = ref('');

const activeTodoList = computed(() => todos.value[activeView.value]);
const tempActiveTodoList = computed(() => tempTodos.value[activeView.value]);

const TODO_DOC_PATH = () => doc(db, 'research_data', '05_weekly_progress', 'settings', 'dashboard_todos');

const fetchTodos = async () => {
    try {
        const docSnap = await getDoc(TODO_DOC_PATH());
        if (docSnap.exists() && docSnap.data().data) {
            todos.value = JSON.parse(docSnap.data().data);
        } else {
            todos.value = { today: [], week: [] };
        }
    } catch (e) {
        console.error("Error fetching todos:", e);
    }
};

const enterEditMode = () => {
    tempTodos.value = JSON.parse(JSON.stringify(todos.value));
    isEditing.value = true;
};

const cancelEdit = () => {
    isEditing.value = false;
    newTodoText.value = '';
};

const addTodo = () => {
    if (!newTodoText.value.trim()) return;
    tempTodos.value[activeView.value].push({
        id: Date.now().toString(),
        text: newTodoText.value.trim(),
        done: false
    });
    newTodoText.value = '';
};

const removeTodo = (id) => {
    tempTodos.value[activeView.value] = tempTodos.value[activeView.value].filter(t => t.id !== id);
};

const toggleDone = async (todo) => {
    if (isEditing.value) return;
    todo.done = !todo.done;
    todos.value[activeView.value] = [...todos.value[activeView.value]]; // trigger reactivity
    await saveToFirebase();
};

const saveTodos = async () => {
    todos.value = JSON.parse(JSON.stringify(tempTodos.value));
    isEditing.value = false;
    newTodoText.value = '';
    await saveToFirebase();
};

const saveToFirebase = async () => {
    try {
        // 1. Save JSON to persistent settings
        await setDoc(TODO_DOC_PATH(), {
            data: JSON.stringify(todos.value),
            updatedAt: serverTimestamp()
        }, { merge: true });

        // 2. Sync to a weekly progress note
        const noteDocId = `todo_sync_w${weekNumber}_${currentDate.getFullYear()}`;
        const noteDocPath = doc(db, 'research_data', '05_weekly_progress', 'notes', noteDocId);
        
        let markdownContent = `> **Auto-synced from Action Plan**\n\n### Today (${formatFullDate})\n`;
        if (todos.value.today.length === 0) markdownContent += `*No tasks allocated.*\n`;
        todos.value.today.forEach(t => {
            markdownContent += `- [${t.done ? 'x' : ' '}] ${t.text}\n`;
        });
        markdownContent += `\n### This Week\n`;
        if (todos.value.week.length === 0) markdownContent += `*No tasks allocated.*\n`;
        todos.value.week.forEach(t => {
            markdownContent += `- [${t.done ? 'x' : ' '}] ${t.text}\n`;
        });

        await setDoc(noteDocPath, {
            title: `Action Plan - Week ${weekNumber}`,
            associatedLiterature: `Week ${weekNumber}`,
            content: markdownContent,
            status: 'Confirmed',
            category: 'todos',
            folder: 'Action Plans',
            meetingDate: currentDate,
            updatedAt: serverTimestamp()
        }, { merge: true });
    } catch (e) {
        console.error("Error saving todos:", e);
    }
};

onMounted(() => {
    fetchTodos();
});
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
