<template>
  <button 
    @click="toggleDark()" 
    class="fixed bottom-6 right-6 z-[999] p-3 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 border flex items-center justify-center cursor-pointer"
    :class="isDark ? 'bg-slate-800/80 border-slate-700 text-[#00F5FF] hover:bg-slate-700 hover:shadow-[0_0_15px_rgba(0,245,255,0.4)]' : 'bg-white/80 border-slate-200 text-slate-600 hover:bg-slate-100 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]'"
    title="Toggle Theme"
  >
    <Moon v-if="isDark" class="w-5 h-5" />
    <Sun v-else class="w-5 h-5" />
  </button>
</template>

<script setup>
import { Sun, Moon } from 'lucide-vue-next'
import { isDark, toggleDark } from '../composables/useTheme.js'
</script>
