<template>
  <div class="min-h-screen bg-[#020617] text-slate-300 font-sans font-medium selection:bg-[#00F5FF]/30">
    <!-- Login View -->
    <div v-if="!isLoggedIn" class="min-h-screen flex items-center justify-center relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.05)_0%,transparent_50%)]"></div>
      
      <div class="z-10 w-full max-w-md p-8 bg-slate-900 border border-slate-800 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] fade-in">
        <div class="text-center mb-8">
          <Terminal class="w-12 h-12 text-[#00F5FF] mx-auto mb-4 animate-pulse" />
          <h1 class="text-2xl font-bold tracking-widest text-slate-100 uppercase">System Login</h1>
          <p class="text-sm font-mono text-slate-500 mt-2">v 0.1 / DEVELOPER_MODE</p>
        </div>
        
        <form @submit.prevent="handleLogin" class="flex flex-col gap-5 relative">
          <div>
            <label class="block text-xs font-mono text-slate-400 mb-2 uppercase">Ident</label>
            <input 
              v-model="loginForm.username" 
              type="text" 
              class="w-full bg-slate-950 border border-slate-800 text-slate-200 px-4 py-3 rounded focus:outline-none focus:border-[#00F5FF] focus:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all font-mono"
              placeholder="admin"
            />
          </div>
          <div>
            <label class="block text-xs font-mono text-slate-400 mb-2 uppercase">Passcode</label>
            <input 
              v-model="loginForm.password" 
              type="password" 
              class="w-full bg-slate-950 border border-slate-800 text-slate-200 px-4 py-3 rounded focus:outline-none focus:border-[#00F5FF] focus:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all font-mono tracking-widest"
              placeholder="••••••"
            />
          </div>
          
          <button 
            type="submit" 
            class="mt-4 bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/50 py-3 rounded font-bold uppercase tracking-widest hover:bg-[#00F5FF] hover:text-slate-950 transition-all shadow-[0_0_15px_rgba(0,245,255,0.2)] hover:shadow-[0_0_30px_rgba(0,245,255,0.8)]"
          >
            Authenticate
          </button>
          
          <p v-if="loginError" class="text-red-500 text-xs font-mono text-center mt-2">{{ loginError }}</p>
        </form>
      </div>
    </div>

    <!-- Admin Dashboard View -->
    <div v-else class="min-h-screen flex flex-col h-screen fade-in">
      <!-- Header -->
      <header class="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 shrink-0 relative z-20">
        <div class="flex items-center gap-3">
          <Terminal class="w-5 h-5 text-[#00F5FF]" />
          <h1 class="font-bold tracking-widest text-slate-100 uppercase text-sm">ECHO Data Protocol - Admin</h1>
          <span class="text-xs font-mono bg-[#00F5FF]/10 text-[#00F5FF] px-2 py-0.5 rounded border border-[#00F5FF]/30">ONLINE</span>
        </div>
        <div class="flex items-center gap-6">
          <router-link to="/echo" class="text-xs font-mono text-slate-500 hover:text-[#00F5FF] transition-colors uppercase">
            Home Portal
          </router-link>
          <button @click="logout" class="text-xs font-mono text-slate-500 hover:text-red-400 transition-colors uppercase">
            Terminate Session
          </button>
        </div>
      </header>

      <div class="flex flex-1 overflow-hidden relative z-10">
        <!-- Sidebar Navigation -->
        <aside class="w-64 bg-slate-900/50 border-r border-slate-800 shrink-0 flex flex-col overflow-y-auto">
          <div class="p-4">
            <h2 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Core Modules</h2>
            <nav class="flex flex-col gap-2">
              <button 
                v-for="module in modules" 
                :key="module.id"
                @click="selectModule(module.id)"
                class="flex items-center justify-between px-4 py-3 border rounded text-left transition-all"
                :class="[
                  currentModule === module.id 
                    ? 'bg-[#00F5FF]/10 border-[#00F5FF]/50 text-[#00F5FF] shadow-[0_0_10px_rgba(0,245,255,0.1)]' 
                    : 'bg-transparent border-slate-800/50 text-slate-400 hover:border-slate-700 hover:text-slate-200 hover:bg-slate-800/20'
                ]"
              >
                <div class="flex items-center gap-3">
                  <component :is="module.icon" class="w-4 h-4" />
                  <span class="text-sm font-bold tracking-wide">{{ module.name }}</span>
                </div>
              </button>
            </nav>
          </div>
        </aside>

        <!-- Main Workspace: Split View -->
        <main class="flex-1 flex flex-col bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-[#020617]">
          <!-- Setup Toolbar -->
          <div class="h-14 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-950/50 backdrop-blur-md shrink-0">
            <span class="text-sm font-mono text-[#00F5FF]">COLLECTION: research_data > {{ currentModuleData.id }}</span>
            <div class="flex items-center gap-4">
              <span v-if="syncState === 'syncing'" class="text-xs font-mono text-[#00F5FF] animate-pulse">UPLINKING...</span>
              <span v-else-if="syncState === 'success'" class="text-xs font-mono text-green-400">DATA SECURED</span>
              <span v-else-if="syncState === 'error'" class="text-xs font-mono text-red-500">SYNC ERROR</span>
              
              <input type="file" ref="fileInputRef" accept=".md" class="hidden" @change="handleFileUpload" />
              <button 
                @click="triggerFileUpload"
                class="flex items-center gap-2 px-4 py-1.5 bg-slate-800 text-slate-300 border border-slate-700 font-bold text-xs font-mono uppercase tracking-widest rounded hover:bg-slate-700 hover:text-white transition-all shadow-sm"
              >
                Upload .MD
              </button>
              
              <button 
                @click="syncData"
                class="flex items-center gap-2 px-6 py-1.5 bg-[#00F5FF] text-slate-950 font-bold text-xs font-mono uppercase tracking-widest rounded hover:bg-white transition-all shadow-[0_0_15px_rgba(0,245,255,0.4)]"
              >
                <Save class="w-4 h-4" />
                Sync
              </button>
            </div>
          </div>

          <!-- Split Edit & Preview -->
          <div class="flex-1 flex overflow-hidden">
            <!-- Markdown Input -->
            <div class="w-1/2 border-r border-slate-800 relative flex flex-col hide-scrollbar">
              <div class="absolute top-2 right-4 text-xs font-mono text-slate-600 uppercase pointer-events-none z-10">MARKDOWN INPUT</div>
              <!-- Loading Overlay for Editor -->
              <div v-if="isLoadingData" class="absolute inset-0 bg-slate-950/80 z-20 flex items-center justify-center">
                 <Terminal class="w-8 h-8 text-[#00F5FF] animate-pulse" />
              </div>
              <textarea 
                v-model="editorContent"
                class="flex-1 w-full h-full bg-slate-950/30 text-slate-300 font-mono text-sm leading-relaxed p-6 pt-10 focus:outline-none resize-none hide-scrollbar placeholder-slate-600"
                placeholder="Enter markdown content..."
                spellcheck="false"
              ></textarea>
            </div>

            <!-- Markdown Preview Render -->
            <div class="w-1/2 relative bg-slate-900/30 flex flex-col">
              <div class="absolute top-2 right-4 text-xs font-mono text-[#00F5FF]/50 uppercase pointer-events-none z-10">LIVE RENDER</div>
              <div 
                v-html="renderedPreview" 
                class="flex-1 w-full h-full p-6 pt-10 overflow-y-auto custom-scrollbar prose prose-invert prose-blue max-w-none text-sm text-slate-300 preview-content"
              ></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { Terminal, Save, CalendarDays, BookOpen, FileText, TrendingUp } from 'lucide-vue-next';
import { marked } from 'marked';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Verify config holds

const isLoggedIn = ref(false);
const loginForm = ref({ username: '', password: '' });
const loginError = ref('');

// Important Module Configs based on User request
const modules = [
  { id: '02_meetings', name: '02 Meetings', icon: CalendarDays },
  { id: '03_literature', name: '03 Literature Review', icon: BookOpen },
  { id: '04_research_notes', name: '04 Research Documents', icon: FileText },
  { id: '05_weekly_progress', name: '05 Weekly Progress', icon: TrendingUp }
];

const currentModule = ref('02_meetings');
const editorContent = ref('');
const syncState = ref('idle'); // idle, syncing, success, error
const isLoadingData = ref(false);

const currentModuleData = computed(() => modules.find(m => m.id === currentModule.value));
const renderedPreview = computed(() => marked.parse(editorContent.value || ''));

onMounted(() => {
  if (localStorage.getItem('isAdmin') === 'true') {
    isLoggedIn.value = true;
    loadModuleData(currentModule.value);
  }
});

const handleLogin = () => {
  // Hardcoded Gatekeeper Logic
  if (loginForm.value.username === 'admin' && loginForm.value.password === 'vvixxm') {
    isLoggedIn.value = true;
    localStorage.setItem('isAdmin', 'true');
    loadModuleData(currentModule.value);
  } else {
    loginError.value = 'ACCESS DENIED: INVALD CREDENTIALS';
    loginForm.value.password = '';
  }
};

const logout = () => {
  isLoggedIn.value = false;
  localStorage.removeItem('isAdmin');
  loginForm.value = { username: '', password: '' };
};

const selectModule = (id) => {
  currentModule.value = id;
  loadModuleData(id);
};

const loadModuleData = async (moduleId) => {
  isLoadingData.value = true;
  editorContent.value = '';
  try {
    const docRef = doc(db, 'research_data', moduleId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists() && docSnap.data().content) {
      editorContent.value = docSnap.data().content;
    } else {
      editorContent.value = ''; // Ensure blank canvas for new segments
    }
  } catch (error) {
    console.error("Error loading document:", error);
    editorContent.value = `> Error fetching from sector ${moduleId}: ${error.message}`;
  } finally {
    isLoadingData.value = false;
  }
};

const syncData = async () => {
  if (!isLoggedIn.value) return;
  syncState.value = 'syncing';
  
  try {
    const docRef = doc(db, 'research_data', currentModule.value);
    // Upsert operation using { merge: true } with setDoc
    await setDoc(docRef, {
      content: editorContent.value,
      updated_at: new Date().toISOString()
    }, { merge: true });
    
    syncState.value = 'success';
    setTimeout(() => { syncState.value = 'idle'; }, 3000);
  } catch (error) {
    console.error("Error syncing document:", error);
    syncState.value = 'error';
    setTimeout(() => { syncState.value = 'idle'; }, 5000);
  }
};

const fileInputRef = ref(null);

const triggerFileUpload = () => {
  if (fileInputRef.value) {
    fileInputRef.value.click();
  }
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    editorContent.value = e.target.result;
    // reset input so the same file can be uploaded again if needed
    if (fileInputRef.value) {
      fileInputRef.value.value = '';
    }
  };
  reader.readAsText(file);
};
</script>

<style>
/* Animations */
.fade-in {
  animation: fadeIn 0.4s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Scrollbars */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0, 245, 255, 0.2);
  border-radius: 4px;
}

/* Prose/Markdown Adjustments inside Admin view */
.preview-content h1, .preview-content h2, .preview-content h3 {
  color: #fff;
  font-weight: 700;
  border-bottom: 1px solid rgba(0, 245, 255, 0.2);
  padding-bottom: 0.3em;
}
.preview-content a {
  color: #00F5FF;
  text-decoration: none;
}
.preview-content a:hover {
  text-decoration: underline;
}
.preview-content pre {
  background-color: #020617;
  border: 1px solid #1e293b;
}
.preview-content code {
  color: #7dd3fc;
  background-color: rgba(255,255,255,0.05);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}
.preview-content blockquote {
  border-left-color: #00F5FF;
  background: rgba(0, 245, 255, 0.05);
  padding: 0.5rem 1rem;
}
</style>
