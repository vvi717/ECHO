<template>
  <div class="min-h-screen bg-[#F0FAFB] dark:bg-[#000B1D] text-slate-800 dark:text-slate-300 relative overflow-x-hidden font-sans selection:bg-[#00F5FF]/30 pb-20 fade-in transition-colors duration-500">
    <!-- SVG Fluid Background representing Echo's sleek wings (Aligned with Portal) -->
    <svg class="absolute top-0 left-0 w-full h-full opacity-40 dark:opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 800">
      <path fill="#00F5FF" d="M0,400 C320,600 640,-100 1440,300 L1440,0 L0,0 Z" opacity="0.15" />
      <path fill="#00B8D9" d="M0,500 C400,700 800,0 1440,400 L1440,0 L0,0 Z" opacity="0.1" />
    </svg>
    <!-- Background Grid -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,184,217,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,184,217,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(15,23,42,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.4)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>

    <!-- Echo Butterfly Decoration (Exclusive to Research Notes) -->
    <transition name="slide-fade">
      <div v-if="id === '04_research_notes'" class="fixed bottom-0 -left-16 md:-left-32 lg:-left-64 xl:-left-80 w-[100vw] sm:w-[80vw] lg:w-[50vw] xl:w-[45vw] max-w-[900px] pointer-events-none z-[5] opacity-[0.85] dark:opacity-40 transition-all duration-1000 mix-blend-darken dark:mix-blend-lighten">
        <img src="/echo_butterfly.png" alt="Echo Decoration" class="w-full h-auto object-contain object-bottom translate-y-8 lg:translate-y-20 pr-10" />
        <!-- Bottom fade gradient to blend seamlessly -->
        <div class="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#F0FAFB] dark:from-[#000B1D] via-[#F0FAFB]/80 dark:via-[#000B1D]/80 to-transparent"></div>
        <!-- Left fade gradient -->
        <div class="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#F0FAFB] dark:from-[#000B1D] to-transparent"></div>
      </div>
    </transition>

    <!-- Header Section -->
    <header class="relative z-10 p-8 md:px-16 md:pt-12 flex flex-col justify-start items-start">
      <div class="flex items-center justify-between w-full">
        <div>
          <button @click="$router.push('/')" class="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-[#00B8D9] dark:hover:text-[#00F5FF] transition-colors uppercase mb-8 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700/50 bg-white/70 dark:bg-slate-900/50 backdrop-blur-md shadow-sm">
            <ArrowLeft class="w-4 h-4" />
            Back to Portal
          </button>
          
           <div class="flex items-center gap-3 mb-3">
             <component :is="moduleIcon" class="w-8 h-8 text-[#00B8D9] dark:text-[#00F5FF]" v-if="moduleIcon" />
             <span class="text-xs font-mono font-bold text-[#00B8D9] dark:text-[#00F5FF] tracking-widest uppercase border border-[#00B8D9]/30 dark:border-[#00F5FF]/30 px-2.5 py-1 rounded bg-[#00F5FF]/10">
               COLLECTION > {{ id }}
             </span>
           </div>
          <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-[#1C3A4B] dark:text-slate-100 leading-none group transition-colors">
            {{ moduleTitle }}
          </h1>
        </div>
        
        <button @click="openEditor(null)" class="hidden md:flex items-center gap-2 text-xs font-mono font-bold text-white dark:text-slate-950 uppercase py-2.5 px-6 rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#00F5FF] hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all">
          <Plus class="w-4 h-4" />
          Create New Entry
        </button>
      </div>
    </header>

    <main class="relative z-10 w-full max-w-[90rem] mx-auto p-4 md:px-16 mt-4 flex gap-8 items-start">
      
      <!-- Notes Listing Area (Left Col) -->
      <section v-if="id !== '03_literature'" class="flex-1 min-w-0 flex flex-col gap-6">
        
        <!-- Mobile Create Button -->
        <button @click="openEditor(null)" class="md:hidden flex items-center justify-center gap-2 w-full text-xs font-mono font-bold text-white dark:text-slate-950 uppercase py-3 px-6 rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#00F5FF] mb-4">
          <Plus class="w-4 h-4" />
          Create New Entry
        </button>

        <!-- Loading State -->
        <div v-if="loading" class="flex items-center justify-center p-20 animate-pulse border border-slate-200 dark:border-slate-800 rounded-xl bg-white/30 dark:bg-slate-900/30">
          <Activity class="w-8 h-8 text-[#00F5FF] animate-spin" />
        </div>

        <div class="flex flex-col lg:flex-row gap-6 mb-6">
          
          <!-- Sidebar Widgets (Left Col) -->
          <div class="w-full lg:w-80 shrink-0 flex flex-col gap-6" v-if="['02_meetings', '05_weekly_progress'].includes(id)">
            <!-- Calendar Widget -->
            <div class="bg-white dark:bg-slate-900/80 backdrop-blur-lg border border-transparent shadow-[0_4px_25px_rgba(0,184,217,0.06)] dark:shadow-none p-6 rounded-3xl">
               <div class="flex items-center gap-2 mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
                  <CalendarDays class="w-4 h-4 text-[#00B8D9] dark:text-[#00F5FF]" />
                  <h3 class="text-xs font-mono font-bold tracking-widest text-[#1C3A4B] dark:text-slate-400 uppercase">
                    {{ id === '05_weekly_progress' ? 'Weekly Outlook' : 'Schedule Logs' }}
                  </h3>
               </div>
               <VCalendar 
                  transparent 
                  borderless 
                  :attributes="calendarAttributes" 
                  @dayclick="onDayClick"
                  class="w-full"
                  :is-dark="isDark"
               />
            </div>

            <!-- Timeline Widget (Weekly Progress only) -->
            <div v-if="id === '05_weekly_progress'" class="bg-white dark:bg-slate-900/80 backdrop-blur-lg border border-transparent shadow-[0_4px_25px_rgba(0,184,217,0.06)] dark:shadow-none p-6 rounded-3xl overflow-hidden flex flex-col max-h-[500px]">
               <div class="flex items-center gap-2 mb-4 border-b border-slate-100 dark:border-slate-800 pb-2 shrink-0">
                  <TrendingUp class="w-4 h-4 text-[#00B8D9] dark:text-[#00F5FF]" />
                  <h3 class="text-xs font-mono font-bold tracking-widest text-[#1C3A4B] dark:text-slate-400 uppercase">Progress Timeline</h3>
               </div>
               <div class="flex-1 overflow-y-auto custom-scrollbar relative pl-4 pr-2 pb-4 pt-2">
                  <div class="absolute left-[22px] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>
                  <div class="flex flex-col gap-6 relative">
                    <div 
                      v-for="note in notesSortedDesc" 
                      :key="'timeline-'+note.id" 
                      class="relative flex items-center gap-4 cursor-pointer group/item"
                      @click="toggleDateFilter(getNoteDate(note))"
                    >
                      <div class="w-3.5 h-3.5 rounded-full border-2 bg-white dark:bg-slate-900 z-10 transition-colors flex shrink-0"
                        :class="isDateSelected(getNoteDate(note)) ? 'border-[#00F5FF] shadow-[0_0_10px_rgba(0,245,255,0.5)]' : 'border-slate-300 dark:border-slate-600 group-hover/item:border-[#00B8D9] dark:group-hover/item:border-[#00F5FF]'"
                      >
                         <div v-if="isDateSelected(getNoteDate(note))" class="w-1.5 h-1.5 m-auto rounded-full bg-[#00F5FF]"></div>
                      </div>
                      
                      <div class="flex flex-col transition-all overflow-hidden" :class="isDateSelected(getNoteDate(note)) ? 'scale-105 origin-left' : 'opacity-80 group-hover/item:opacity-100'">
                        <span class="text-[10px] font-mono font-bold" :class="isDateSelected(getNoteDate(note)) ? 'text-[#00B8D9] dark:text-[#00F5FF]' : 'text-slate-500'">{{ formatDate(getNoteDate(note)) }}</span>
                        <span class="text-xs font-bold truncate w-40 text-slate-700 dark:text-slate-300 group-hover/item:text-[#00B8D9] dark:group-hover/item:text-[#00F5FF]">{{ note.title || 'Untitled Session' }}</span>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <!-- Empty State (moves into flex-1 when calendar is present) -->
          <div v-if="notes.length === 0" class="flex-1 flex flex-col items-center justify-center py-32 text-slate-400 dark:text-slate-500 gap-4 opacity-70 border border-slate-300 dark:border-slate-800 border-dashed rounded-xl bg-slate-50/50 dark:bg-slate-900/20">
             <Terminal class="w-12 h-12 text-slate-400 dark:text-slate-600" />
             <p class="font-mono text-sm uppercase tracking-widest">[ NOTE FRAGMENTS MISSING ]</p>
          </div>
          
          <div v-else class="flex-1 min-w-0">
             <div class="flex items-center justify-between mb-4 max-w-3xl">
                <div class="flex items-center gap-3">
                  <span class="text-xs font-mono text-slate-500 uppercase flex gap-2 items-center">
                     SORT BY TIME:
                     <button @click="sortOrder = sortOrder === 'desc' ? 'asc' : 'desc'" class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-[#00B8D9] dark:hover:border-[#00F5FF] text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 font-bold shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:shadow-none">
                       {{ sortOrder === 'desc' ? 'NEWEST FIRST' : 'OLDEST FIRST' }}
                       <TrendingUp v-if="sortOrder === 'asc'" class="w-3.5 h-3.5" />
                       <Activity v-else class="w-3.5 h-3.5 transform -scale-y-100" />
                     </button>
                  </span>
                </div>
                <div v-if="selectedDateFilter">
                  <button @click="selectedDateFilter = null" class="text-xs font-mono font-bold text-[#00B8D9] dark:text-[#00F5FF] px-3 py-1.5 rounded-lg border border-[#00B8D9]/30 dark:border-[#00F5FF]/30 bg-[#00F5FF]/10 hover:bg-[#00F5FF]/20 transition-colors flex items-center gap-1.5">
                    <X class="w-3.5 h-3.5" />
                    CLEAR DATE FILTER
                  </button>
                </div>
             </div>

             <!-- Empty state for no filter results -->
             <div v-if="displayedNotes.length === 0" class="flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-500 gap-4 opacity-70 border border-slate-300 dark:border-slate-800 border-dashed rounded-xl bg-slate-50/50 dark:bg-slate-900/20 max-w-3xl">
                 <CalendarDays class="w-8 h-8 text-slate-400 dark:text-slate-600" />
                 <p class="font-mono text-xs uppercase tracking-widest">No entries found for this date.</p>
             </div>

             <!-- Notes Grid -->
             <TransitionGroup name="list" tag="div" class="flex flex-col gap-6 relative z-10 w-full max-w-3xl">
          <div 
            v-for="note in displayedNotes" 
            :key="note.id"
            class="group relative bg-white dark:bg-slate-900/80 backdrop-blur-lg border border-transparent shadow-[0_4px_25px_rgba(0,184,217,0.06)] dark:shadow-none hover:shadow-[0_10px_35px_rgba(0,184,217,0.12)] p-6 md:p-8 rounded-3xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 overflow-hidden w-full"
            @click="openReader(note)"
          >
            <!-- Highlight bar on user hover, matching portal styling -->
            <div class="absolute inset-0 border-2 border-transparent group-hover:border-[#00F5FF]/30 rounded-3xl transition-colors duration-300 pointer-events-none z-10"></div>
            <!-- Invisible Delete Button (Visible on hover) -->
            <button 
              @click.stop="confirmDelete(note.id)" 
              class="absolute top-4 right-4 text-slate-400 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 z-20"
              title="Delete Note"
            >
              <X class="w-4 h-4" />
            </button>

            <!-- Card Header -->
            <div class="flex flex-col gap-3 items-start justify-between mb-4 pr-6 relative z-10">
              <h2 class="text-xl md:text-2xl font-bold text-[#1C3A4B] dark:text-slate-100 group-hover:text-[#00B8D9] dark:group-hover:text-[#00F5FF] transition-colors leading-snug w-[85%]">
                {{ note.title || 'Untitled Session' }}
              </h2>
              <div class="flex flex-col items-start gap-2">
                <span 
                  class="text-[9px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md border flex items-center gap-1.5"
                  :class="note.status === 'Confirmed' ? 'border-green-500/20 text-green-600 dark:text-green-400 bg-green-500/10' : 'border-amber-500/20 text-amber-600 dark:text-amber-400 bg-amber-500/10'"
                >
                  <span v-if="note.status === 'Confirmed'" class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span v-else class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  {{ note.status === 'Confirmed' ? 'Confirmed with Supervisor' : 'Draft' }}
                </span>
                <span v-if="note.associatedLiterature" class="flex items-center gap-1.5 text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-900/30 px-2 py-0.5 rounded-md border border-indigo-100 dark:border-indigo-800/50 mt-1 mb-1">
                  <BookOpen class="w-3 h-3" />
                  {{ note.associatedLiterature }}
                </span>
                
                <span class="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 px-2 py-0.5 rounded-md border border-slate-100 dark:border-slate-800">
                  {{ id === '05_weekly_progress' ? 'Week of' : (id === '04_research_notes' ? 'Note Date' : 'Meeting') }}: {{ formatDate(note.meetingDate || note.updatedAt) }}
                </span>
              </div>
            </div>

            <!-- Content Snippet Rendering -->
            <div class="prose prose-sm prose-slate dark:prose-invert max-w-none line-clamp-3 relative pointer-events-none text-slate-500 dark:text-slate-400 font-medium z-10" v-html="renderMarkdown(note.content)"></div>
            
            <!-- Bottom Fade effect -->
            <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none rounded-b-3xl opacity-90 z-10"></div>
          </div>
        </TransitionGroup>
          </div>
        </div>
      </section>

      <!-- TOC Sidebar Area (Right Col) -->
      <aside v-if="id !== '03_literature'" class="hidden lg:block w-72 shrink-0 sticky top-8">
        <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-white dark:border-slate-800 shadow-[0_4px_30px_rgba(0,184,217,0.05)] dark:shadow-none max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
          <div class="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
            <ListTree class="w-4 h-4 text-[#00B8D9] dark:text-[#00F5FF]" />
            <h3 class="text-xs font-mono font-bold tracking-widest text-[#1C3A4B] dark:text-slate-400 uppercase">Document Index</h3>
          </div>
          <ul class="flex flex-col gap-3 font-mono text-xs">
            <li v-for="note in sortedNotesByTitle" :key="'toc-'+note.id" class="group/toc">
               <a href="#" @click.prevent="openReader(note)" class="flex items-center gap-2 text-slate-500 hover:text-[#00B8D9] dark:hover:text-[#00F5FF] transition-colors truncate font-bold">
                 <span class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover/toc:bg-[#00B8D9] dark:group-hover/toc:bg-[#00F5FF] transition-colors"></span>
                 <span class="truncate">{{ note.title || 'Untitled Session' }}</span>
               </a>
            </li>
          </ul>
        </div>
      </aside>

      <!-- Literature Manager (File / PDF specific layout) -->
      <section v-if="id === '03_literature'" class="w-full flex-1 flex flex-col gap-8">
         
         <!-- Upload Banner -->
         <div 
           class="w-full border-2 border-dashed border-[#00B8D9]/40 dark:border-[#00F5FF]/30 rounded-3xl p-10 md:p-16 flex flex-col items-center justify-center bg-[#00B8D9]/5 dark:bg-[#00F5FF]/5 hover:bg-[#00B8D9]/10 dark:hover:bg-[#00F5FF]/10 transition-colors cursor-pointer group relative overflow-hidden" 
           @click="triggerLiteratureUpload"
         >
           <div class="absolute inset-0 bg-gradient-to-br from-transparent to-[#00F5FF]/5 pointer-events-none"></div>
           <UploadCloud class="w-16 h-16 text-[#00B8D9] dark:text-[#00F5FF] mb-6 group-hover:scale-110 transition-transform duration-300" />
           <h3 class="text-xl md:text-2xl font-black tracking-tight text-[#1C3A4B] dark:text-slate-200">Upload PDF Literature</h3>
           <p class="text-xs md:text-sm text-slate-500 font-mono mt-3 max-w-lg text-center">
             Select a PDF. Future modules will automatically extract title, type, date, and categorize it via intelligent API parsing.
           </p>
           <input type="file" accept=".pdf" class="hidden" ref="literatureInputRef" @change="handleLiteratureUpload" />
         </div>

         <!-- File Grid -->
         <div v-if="loading" class="flex justify-center p-10"><Activity class="w-8 h-8 text-[#00F5FF] animate-spin" /></div>
         
         <div v-else-if="notes.length === 0" class="flex flex-col items-center justify-center py-20 text-slate-400 gap-4 opacity-70 border border-slate-300 dark:border-slate-800 border-dashed rounded-3xl bg-slate-50/50 dark:bg-slate-900/20">
             <FileText class="w-10 h-10 text-slate-400 dark:text-slate-600" />
             <p class="font-mono text-xs uppercase tracking-widest">[ NO LITERATURE FOUND ]</p>
         </div>
         
         <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full pb-20">
           <TransitionGroup name="list">
              <div 
                v-for="note in sortedNotesByTitle" 
                :key="note.id" 
                class="group relative bg-white dark:bg-slate-900/80 backdrop-blur-lg border border-transparent shadow-[0_4px_25px_rgba(0,184,217,0.06)] dark:shadow-none hover:shadow-[0_10px_35px_rgba(0,184,217,0.12)] p-6 rounded-3xl flex flex-col gap-4 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
                @click="openReader(note)"
              >
                <!-- Highlight border -->
                <div class="absolute inset-0 border-2 border-transparent group-hover:border-[#00F5FF]/30 rounded-3xl transition-colors duration-300 pointer-events-none z-10"></div>
                
                <button @click.stop="confirmDelete(note.id)" class="absolute top-4 right-4 text-slate-400 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 z-20">
                  <X class="w-4 h-4" />
                </button>
                
                <div class="w-14 h-14 rounded-2xl bg-red-500/10 dark:bg-red-500/20 flex items-center justify-center text-red-500 xl:w-16 xl:h-16 shrink-0 relative z-10">
                   <FileText class="w-7 h-7" />
                </div>

                <div class="flex flex-col gap-1.5 mt-2 relative z-10">
                   <h4 class="font-bold text-lg text-slate-800 dark:text-slate-100 line-clamp-2 leading-snug group-hover:text-[#00B8D9] dark:group-hover:text-[#00F5FF] transition-colors" :title="note.title">
                     {{ note.title || 'Untitled_Document.pdf' }}
                   </h4>
                   <span class="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500">
                     {{ formatDate(note.updatedAt) }} 
                   </span>
                </div>

                <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between relative z-10">
                   <span class="text-[9px] font-mono tracking-widest font-bold uppercase px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-md truncate max-w-[140px] border border-slate-200 dark:border-slate-700/50">
                      {{ note.associatedLiterature || 'UNCATEGORIZED PDF' }}
                   </span>
                   <button @click.stop="openEditor(note)" class="text-[10px] font-mono font-bold px-2 py-1 tracking-widest text-[#00B8D9] dark:text-[#00F5FF] hover:bg-[#00B8D9]/10 rounded transition-colors">
                     EDIT
                   </button>
                </div>
              </div>
           </TransitionGroup>
         </div>

      </section>

    </main>

    <!-- Reader Modal / Reading View -->
    <transition name="slide-fade">
      <div v-if="isReaderOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 md:p-8">
        
        <!-- Click outside to close -->
        <div class="absolute inset-0 z-0" @click="closeReader"></div>
        
        <!-- Reader Panel -->
        <div class="relative z-10 w-full max-w-4xl h-[90vh] bg-white dark:bg-[#020617] md:rounded-2xl border border-slate-200 dark:border-slate-700 shadow-[0_0_40px_rgba(0,245,255,0.05)] flex flex-col overflow-hidden transition-colors duration-300">
          
          <!-- Reader Toolbar -->
          <div class="h-auto py-4 md:py-0 md:h-20 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between px-6 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm shrink-0 transition-colors duration-300 gap-4 md:gap-0">
            <div class="flex flex-col md:flex-row items-start md:items-center gap-3 w-full">
               <h2 class="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 truncate max-w-sm md:max-w-md xl:max-w-xl transition-colors duration-300">
                 {{ currentReadingNote?.title || 'Untitled Session' }}
               </h2>
               
               <div class="flex flex-wrap items-center gap-2">
                 <span 
                    class="text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-1 rounded-full border flex items-center gap-1.5"
                    :class="currentReadingNote?.status === 'Confirmed' ? 'border-green-500/30 text-green-600 dark:text-green-400 bg-green-500/10' : 'border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10'"
                  >
                    <span v-if="currentReadingNote?.status === 'Confirmed'" class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    {{ currentReadingNote?.status === 'Confirmed' ? 'Confirmed with Supervisor' : 'Draft' }}
                 </span>
                 
                 <span v-if="currentReadingNote?.associatedLiterature" class="flex items-center gap-1.5 text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/50">
                    <BookOpen class="w-3.5 h-3.5" />
                    {{ currentReadingNote.associatedLiterature }}
                 </span>
               </div>
            </div>
            <div class="flex items-center gap-2">
               <button @click="openEditorFromReader" class="flex items-center gap-2 px-4 py-1.5 bg-[#1C3A4B] dark:bg-slate-800 text-white dark:text-[#00F5FF] hover:bg-[#00B8D9] font-bold text-xs font-mono uppercase tracking-widest rounded-md transition-all">
                 <PenLine class="w-4 h-4" />
                 Edit Mode
               </button>
               <button @click="closeReader" class="p-2 text-slate-400 hover:text-red-400 transition-colors rounded hover:bg-slate-100 dark:hover:bg-slate-800 ml-2">
                 <X class="w-6 h-6" />
               </button>
            </div>
          </div>

          <!-- Reader Content -->
          <div class="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-12 xl:p-16 bg-white dark:bg-slate-900/50 transition-colors duration-300">
             <div 
                v-html="renderMarkdown(currentReadingNote?.content)" 
                class="markdown-body markdown-renderer max-w-3xl mx-auto"
              ></div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Editor Sidebar / Overlay Overlay -->
    <transition name="slide-fade">
      <div v-if="isEditorOpen" class="fixed inset-0 z-50 flex items-stretch bg-slate-950/80 backdrop-blur-md">
        
        <!-- Click outside to close (or background visual) -->
        <div class="hidden lg:block w-1/4 xl:w-1/3 flex-shrink-0" @click="closeEditor"></div>
        
        <!-- Editor Panel -->
        <div class="w-full lg:w-3/4 xl:w-2/3 bg-white dark:bg-[#020617] border-l border-slate-200 dark:border-slate-800 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)] transform transition-transform duration-300">
          
          <!-- Editor Toolbar -->
          <div class="h-auto md:h-20 py-4 md:py-0 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between px-6 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm shrink-0 transition-colors duration-300 gap-4 md:gap-0 relative z-50">
            <div class="flex flex-wrap items-center gap-3 w-full lg:w-auto overflow-hidden pr-4">
              <input 
                v-model="editForm.title" 
                type="text" 
                class="bg-transparent text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 focus:outline-none placeholder-slate-400 dark:placeholder-slate-600 border-b border-transparent focus:border-[#00F5FF]/50 transition-colors w-full md:w-48 lg:w-64 shrink-0"
                placeholder="Document Title..."
              />
              
              <div v-if="id === '04_research_notes'" class="flex items-center gap-1.5 w-full md:w-48 lg:w-64 relative border-b border-transparent focus-within:border-[#00F5FF]/50 transition-colors">
                <BookOpen class="w-3.5 h-3.5 text-indigo-400 absolute left-0" />
                <input 
                  v-model="editForm.associatedLiterature" 
                  type="text" 
                  class="bg-transparent text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 focus:outline-none placeholder-indigo-300 dark:placeholder-indigo-800 w-full pl-6 py-1"
                  placeholder="Associated Literature..."
                />
              </div>
              
              <!-- Date Picker for Meeting Date (Required) -->
              <VDatePicker v-model="editForm.meetingDate" mode="date" :is-dark="isDark">
                <template #default="{ inputValue, inputEvents }">
                   <div class="relative flex items-center group cursor-pointer">
                     <CalendarDays class="w-4 h-4 text-slate-400 mr-2 group-hover:text-[#00B8D9] transition-colors" />
                     <input
                       class="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300 bg-transparent focus:outline-none cursor-pointer w-28 placeholder-slate-400"
                       :value="inputValue"
                       v-on="inputEvents"
                       placeholder="Select Date"
                       readonly
                     />
                   </div>
                </template>
              </VDatePicker>

              <button @click="toggleStatus" class="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border transition-colors cursor-pointer"
                :class="editForm.status === 'Confirmed' ? 'border-green-500/50 text-green-600 dark:text-green-400 hover:bg-green-500/10' : 'border-amber-500/50 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10'"
              >
                <span v-if="editForm.status === 'Confirmed'" class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span v-else class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                {{ editForm.status === 'Confirmed' ? 'STATUS: CONFIRMED' : 'STATUS: DRAFT' }}
              </button>
            </div>
            
            <div class="flex items-center gap-2 md:gap-4">
               
               <button v-if="id === '04_research_notes'" @click="parseWithAITextarea" :disabled="isParsingAI" :class="isParsingAI ? 'opacity-50 animate-pulse' : 'hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]'" class="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold text-xs font-mono uppercase tracking-widest rounded-md transition-all mr-1">
                 <Sparkles class="w-4 h-4" />
                 {{ isParsingAI ? 'PARSING...' : 'AI FORMAT' }}
               </button>

               <input type="file" ref="fileInputRef" accept=".md,.txt,.tex" class="hidden" @change="handleFileUpload" />
               <button @click="triggerFileUpload" class="p-2 text-slate-400 hover:text-[#00B8D9] dark:hover:text-[#00F5FF] transition-colors rounded hover:bg-slate-100 dark:hover:bg-slate-800" title="Upload Markdown / Text File">
                 <Upload class="w-5 h-5" />
               </button>
               <button @click="exportMarkdown" class="p-2 text-slate-400 hover:text-[#00B8D9] dark:hover:text-[#00F5FF] transition-colors rounded hover:bg-slate-100 dark:hover:bg-slate-800" title="Export Markdown">
                 <Download class="w-5 h-5" />
               </button>
               
               <div class="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
               
               <button @click="saveNote" class="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#00D4FF] to-[#00F5FF] text-white dark:text-slate-950 font-bold text-xs font-mono uppercase tracking-widest rounded-md hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all">
                 <Save class="w-4 h-4" />
                 Save
               </button>
               <button @click="closeEditor" class="p-2 text-slate-400 hover:text-red-400 transition-colors rounded hover:bg-slate-100 dark:hover:bg-slate-800 ml-2">
                 <X class="w-6 h-6" />
               </button>
            </div>
          </div>

          <!-- Split Edit & Preview -->
          <div class="flex-1 flex flex-col md:flex-row overflow-hidden bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(15,23,42,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem] transition-colors duration-300">
            <!-- Textarea -->
            <div class="w-full md:w-1/2 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 relative flex flex-col hide-scrollbar bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-sm transition-colors duration-300">
              <div class="absolute top-2 right-4 text-[10px] font-mono text-slate-400 dark:text-slate-600 uppercase pointer-events-none z-10 font-bold">RAW MARKDOWN</div>
              <textarea 
                v-model="editForm.content"
                class="flex-1 w-full h-full bg-transparent text-slate-700 dark:text-slate-300 font-mono text-sm leading-relaxed p-6 pt-10 focus:outline-none resize-none hide-scrollbar placeholder-slate-400 dark:placeholder-slate-700"
                placeholder="Start typing your meeting notes or literature review..."
                spellcheck="false"
              ></textarea>
            </div>

            <!-- Preview (Typora Style CSS) -->
            <div class="w-full md:w-1/2 h-1/2 md:h-full relative bg-white/90 dark:bg-slate-900/90 flex flex-col backdrop-blur-sm transition-colors duration-300">
              <div class="absolute top-2 right-4 text-[10px] font-mono text-[#00F5FF]/80 dark:text-[#00F5FF]/50 uppercase pointer-events-none z-10 font-bold">REAL-TIME RENDER</div>
              
              <!-- Smart TOC Button (Mobile preview only) -->
              <div class="absolute top-2 left-4 xl:hidden z-20">
                <button class="text-[10px] font-mono text-slate-500 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded bg-slate-50 dark:bg-slate-900">TOC</button>
              </div>

              <!-- Content Render -->
              <div 
                v-html="renderedEditorContent" 
                class="flex-1 w-full h-full p-6 pt-12 overflow-y-auto custom-scrollbar markdown-body markdown-renderer max-w-none text-base"
              ></div>
            </div>
          </div>
          
        </div>
      </div>
    </transition>
    
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowLeft, CalendarDays, BookOpen, FileText, TrendingUp, Activity, Terminal, Plus, X, Save, Upload, Download, ListTree, PenLine, Sparkles, UploadCloud } from 'lucide-vue-next';
import { db } from '../firebase';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { isDark } from '../composables/useTheme';

import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import 'github-markdown-css/github-markdown.css';
import 'katex/dist/katex.min.css';

const route = useRoute();
const id = computed(() => route.params.id);

// Setup marked to use highlight.js and katex
marked.use(markedKatex({
  throwOnError: false
}));

marked.setOptions({
  gfm: true,
  breaks: true,
  smartLists: true,
  highlight: function(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-',
});

// State
const notes = ref([]);
const loading = ref(true);
let unsubscribe = null;

const isEditorOpen = ref(false);
const isReaderOpen = ref(false);
const currentReadingNote = ref(null);
const editingNoteId = ref(null);
const editForm = ref({ title: '', associatedLiterature: '', content: '', status: 'Draft', meetingDate: new Date() });
const fileInputRef = ref(null);
const literatureInputRef = ref(null);
const isParsingAI = ref(false);

// Modules config
const moduleConfigs = {
  '02_meetings': { title: 'Meetings & Logs', icon: CalendarDays },
  '03_literature': { title: 'Literature Review', icon: BookOpen },
  '04_research_notes': { title: 'Research Notes', icon: FileText },
  '05_weekly_progress': { title: 'Weekly Progress', icon: TrendingUp }
};

const moduleTitle = computed(() => moduleConfigs[id.value]?.title || 'Unknown Sector');
const moduleIcon = computed(() => moduleConfigs[id.value]?.icon || null);

// Setup Firebase real-time listener for subcollection
const setupListener = (documentId) => {
  if (unsubscribe) unsubscribe();
  loading.value = true;
  notes.value = [];
  
  // Note: Standard NoSQL pattern: subcollection 'notes' right under the module doc '02_meetings' 
  // nested in 'research_data' collection.
  const notesCollectionRef = collection(db, 'research_data', documentId, 'notes');
  
  unsubscribe = onSnapshot(notesCollectionRef, (snapshot) => {
    const fetchedNotes = [];
    snapshot.forEach((docSnap) => {
      fetchedNotes.push({ id: docSnap.id, ...docSnap.data() });
    });
    
    notes.value = fetchedNotes;
    loading.value = false;
  }, (err) => {
    console.error("Firebase Listener Error:", err);
    loading.value = false;
  });
};

onMounted(() => {
  if (id.value) setupListener(id.value);
});

watch(() => route.params.id, (newId) => {
  if (newId) setupListener(newId);
});

onUnmounted(() => {
  if (unsubscribe) unsubscribe();
});

// Filter and Sorting State
const selectedDateFilter = ref(null);
const sortOrder = ref('desc');

const getNoteDate = (note) => {
  return note.meetingDate ? note.meetingDate.toDate() : (note.updatedAt ? note.updatedAt.toDate() : new Date());
};

const notesSortedDesc = computed(() => {
  return [...notes.value].sort((a, b) => getNoteDate(b) - getNoteDate(a));
});

const isDateSelected = (date) => {
  return selectedDateFilter.value && selectedDateFilter.value.toISOString().split('T')[0] === date.toISOString().split('T')[0];
};

const toggleDateFilter = (date) => {
  if (isDateSelected(date)) {
    selectedDateFilter.value = null;
  } else {
    selectedDateFilter.value = date;
  }
};

const displayedNotes = computed(() => {
  let filtered = [...notes.value];

  if (selectedDateFilter.value) {
    const filterDateStr = selectedDateFilter.value.toISOString().split('T')[0];
    filtered = filtered.filter(note => {
      const noteDate = getNoteDate(note);
      return noteDate.toISOString().split('T')[0] === filterDateStr;
    });
  }

  filtered.sort((a, b) => {
    const aTime = getNoteDate(a).getTime();
    const bTime = getNoteDate(b).getTime();
    return sortOrder.value === 'asc' ? aTime - bTime : bTime - aTime;
  });

  return filtered;
});

// Calendar Features
const calendarAttributes = computed(() => {
  if (!['02_meetings', '05_weekly_progress'].includes(id.value)) return [];
  
  const attrs = notes.value.map(note => {
    const dateToUse = getNoteDate(note);
    
    if (id.value === '05_weekly_progress') {
      return {
        key: note.id,
        highlight: {
          color: note.status === 'Confirmed' ? 'green' : 'blue',
          fillMode: 'light',
        },
        dates: dateToUse,
        popover: {
          label: note.title || 'Untitled Session',
        },
        customData: note
      };
    } else {
      return {
        key: note.id,
        dot: note.status === 'Confirmed' ? 'green' : 'blue',
        dates: dateToUse,
        popover: {
          label: note.title || 'Untitled Session',
        },
        customData: note
      };
    }
  });

  if (selectedDateFilter.value) {
    attrs.push({
      key: 'selected-date',
      highlight: {
        color: 'cyan',
        fillMode: 'solid'
      },
      dates: selectedDateFilter.value
    });
  }

  return attrs;
});

const onDayClick = (day) => {
  toggleDateFilter(day.date);
};

// Markdown Renderers
const renderMarkdown = (content) => marked.parse(content || '');
const renderedEditorContent = computed(() => marked.parse(editForm.value.content || ''));

// Reader Actions
const openReader = (note) => {
  currentReadingNote.value = note;
  isReaderOpen.value = true;
};

const closeReader = () => {
  isReaderOpen.value = false;
  setTimeout(() => { currentReadingNote.value = null; }, 300);
};

const openEditorFromReader = () => {
  const note = currentReadingNote.value;
  closeReader();
  openEditor(note);
};

// Editor Actions
const openEditor = (note = null) => {
  if (note) {
    editingNoteId.value = note.id;
    editForm.value = { 
      title: note.title || '', 
      associatedLiterature: note.associatedLiterature || '',
      content: note.content || '', 
      status: note.status || 'Draft',
      meetingDate: note.meetingDate ? note.meetingDate.toDate() : new Date()
    };
  } else {
    editingNoteId.value = null;
    editForm.value = { title: '', associatedLiterature: '', content: '', status: 'Draft', meetingDate: new Date() };
  }
  isEditorOpen.value = true;
};

const closeEditor = () => {
  isEditorOpen.value = false;
  editingNoteId.value = null;
};

const toggleStatus = () => {
  editForm.value.status = editForm.value.status === 'Draft' ? 'Confirmed' : 'Draft';
};

// CRUD Operations
const saveNote = async () => {
  if (!editForm.value.title.trim() && !editForm.value.content.trim()) return;
  
  const notesCollectionRef = collection(db, 'research_data', id.value, 'notes');
  const payload = {
    title: editForm.value.title || 'Untitled',
    associatedLiterature: editForm.value.associatedLiterature || '',
    content: editForm.value.content,
    status: editForm.value.status,
    meetingDate: typeof editForm.value.meetingDate === 'object' ? editForm.value.meetingDate : new Date(editForm.value.meetingDate),
    updatedAt: serverTimestamp()
  };

  try {
    if (editingNoteId.value) {
      // Update
      const docRef = doc(db, 'research_data', id.value, 'notes', editingNoteId.value);
      await updateDoc(docRef, payload);
    } else {
      // Add
      payload.createdAt = serverTimestamp();
      await addDoc(notesCollectionRef, payload);
    }
    closeEditor();
  } catch (error) {
    console.error("Error saving note: ", error);
  }
};

const confirmDelete = async (noteId) => {
  if (confirm("Are you sure you want to permanently delete this record?")) {
    try {
      const docRef = doc(db, 'research_data', id.value, 'notes', noteId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting note: ", error);
    }
  }
};

// File Upload & AI Parsing
const triggerFileUpload = () => {
  if (fileInputRef.value) fileInputRef.value.click();
};

const parseWithAITextarea = () => {
   if (editForm.value.content) {
      parseWithAI(editForm.value.content);
   }
};

const parseWithAI = async (rawText) => {
  isParsingAI.value = true;
  editForm.value.content = 'Loading AI parsing... Please wait.';
  try {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o', 
        response_format: { type: 'json_object' },
        messages: [
          {
            role: 'system',
            content: 'You are an advanced academic assistant. Your task is to take the user\'s raw text/note, intelligently parse it, and extract structured information. You MUST output a valid JSON object containing exactly these fields:\n1. "title": A concise, accurate title inferred from the text.\n2. "associatedLiterature": Any mentioned papers, articles, authors, or literature context (or an empty string if none are found).\n3. "date": The mentioned date in "YYYY-MM-DD" format (or current date if not found).\n4. "content": A beautifully formatted, highly professional Markdown document correcting typos and structuring the information properly with headings, bold text, bullet points.\nDo NOT output any other markdown wrappers around the JSON.'
          },
          {
            role: 'user',
            content: rawText
          }
        ]
      })
    });
    const data = await response.json();
    if(data.choices && data.choices[0] && data.choices[0].message) {
        try {
           const parsedData = JSON.parse(data.choices[0].message.content);
           if (parsedData.title) editForm.value.title = parsedData.title;
           if (parsedData.associatedLiterature) editForm.value.associatedLiterature = parsedData.associatedLiterature;
           if (parsedData.date) {
               const parsedDate = new Date(parsedData.date);
               if (!isNaN(parsedDate)) editForm.value.meetingDate = parsedDate;
           }
           editForm.value.content = parsedData.content || rawText;
        } catch(jsonErr) {
           console.error("Failed to parse JSON from AI", jsonErr);
           editForm.value.content = rawText;
        }
    } else {
        editForm.value.content = rawText; // fallback
    }
  } catch (err) {
    console.error("AI Parsing Error", err);
    editForm.value.content = rawText; // fallback to raw
  } finally {
    isParsingAI.value = false;
  }
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  // Auto-fill title from filename
  if (!editForm.value.title) {
    editForm.value.title = file.name.replace(/\.[^/.]+$/, "");
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const rawText = e.target.result;
    if (id.value === '04_research_notes') {
      parseWithAI(rawText);
    } else {
      editForm.value.content = rawText;
    }
    if (fileInputRef.value) fileInputRef.value.value = '';
  };
  reader.readAsText(file);
};

// Literature specific PDF mock upload
const triggerLiteratureUpload = () => {
   if (literatureInputRef.value) literatureInputRef.value.click();
};

const handleLiteratureUpload = async (event) => {
   const file = event.target.files[0];
   if (!file) return;

   const fakeTitle = file.name.replace(/\.[^/.]+$/, "");
   const notesCollectionRef = collection(db, 'research_data', id.value, 'notes');
   
   // Future API interface would go here. For now, we mock the autofill format.
   const payload = {
      title: fakeTitle,
      associatedLiterature: 'PDF Metadata Pending',
      content: `> **System Note:** PDF \`${file.name}\` uploaded successfully. \n> The intelligent parsing API for literature metadata is preparing to process this file in future versions.\n\n### Document Details\n- **File Size:** ${(file.size / 1024 / 1024).toFixed(2)} MB\n- **Type:** Portable Document Format\n\n*(You can edit this manual review section below)*`,
      status: 'Draft',
      meetingDate: new Date(),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
   };

   try {
     await addDoc(notesCollectionRef, payload);
     if (literatureInputRef.value) literatureInputRef.value.value = '';
   } catch(e) {
     console.error("Literature PDF Mock Upload Error:", e);
   }
};

// Export to Markdown
const exportMarkdown = () => {
  const content = editForm.value.content || '';
  const title = editForm.value.title || 'Untitled';
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${title}.md`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Utils
const formatDate = (timestamp) => {
  if (!timestamp) return 'No Date';
  
  let date;
  if (timestamp && typeof timestamp.toDate === 'function') {
    date = timestamp.toDate();
  } else if (timestamp instanceof Date) {
    date = timestamp;
  } else {
    date = new Date(timestamp);
  }
  
  return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
};

const sortedNotesByTitle = computed(() => {
  return [...notes.value].sort((a, b) => {
    const titleA = (a.title || '').toLowerCase();
    const titleB = (b.title || '').toLowerCase();
    return titleA.localeCompare(titleB);
  });
});

</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.4s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

/* Glass panel updates already exist globally via style.css with `glass-panel` mapped to `.dark` */

/* Transition Group Animations for list */
.list-enter-active, .list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.list-leave-active {
  position: absolute;
}

/* Custom Scrollbar */
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
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 245, 255, 0.5);
}

/* 
  針對 ECHO 專案的 Typora 風格自訂 (markdown-renderer overrides)
*/

.markdown-renderer {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif !important;
  line-height: 1.8 !important; /* 增加行高，提升阅读舒适度 */
  background: transparent !important;
  color: #374151 !important; /* Light mode text */
}

.dark .markdown-renderer {
  color: #d1d5db !important; /* 柔和的浅灰色，不刺眼 */
}

/* 标题美化 */
.markdown-renderer h1, .markdown-renderer h2 {
  border-bottom: 1px solid rgba(0, 245, 255, 0.2) !important; /* 淡淡的 Echo 蓝底划线 */
  padding-bottom: 0.5rem !important;
  margin-top: 2rem !important;
  color: #111827 !important;
}

.dark .markdown-renderer h1, .dark .markdown-renderer h2 {
  color: #ffffff !important;
}

/* 强调文字（Bold）*/
.markdown-renderer strong {
  color: #0088CC !important; /* Light mode 强调蓝 */
  font-weight: 600 !important;
}

.dark .markdown-renderer strong {
  color: #00F5FF !important; /* 暗黑模式荧光蓝 */
}

/* 列表间距 */
.markdown-renderer li {
  margin-bottom: 0.5rem !important;
}

/* 引用块（Blockquote） */
.markdown-renderer blockquote {
  border-left: 4px solid #00F5FF !important;
  background: rgba(0, 245, 255, 0.05) !important;
  padding: 1rem 1.5rem !important;
  font-style: italic !important;
  color: #4b5563 !important; /* light mode text */
  border-radius: 0 0.5rem 0.5rem 0 !important;
  margin: 1.5rem 0 !important;
}

.dark .markdown-renderer blockquote {
  color: #9ca3af !important; /* dark mode text */
}

/* Pre / Code block overwrites */
.markdown-renderer pre {
  background-color: #f1f5f9 !important;
  border-radius: 0.75rem !important;
  border: 1px solid #e2e8f0 !important;
}

.dark .markdown-renderer pre {
  background-color: #0f172a !important; 
  border: 1px solid #1e293b !important;
}
</style>
