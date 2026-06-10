<template>
  <div
    class="min-h-screen overflow-x-hidden bg-white"
    style="font-family: Inter, sans-serif"
    @mousemove="handleMouseMove"
  >
    <nav class="fixed top-0 left-0 right-0 z-50 flex w-screen max-w-full items-center justify-start gap-4 px-5 sm:px-8 py-4 sm:py-5 md:justify-between">
      <div class="flex items-center">
        <router-link to="/" aria-label="Back to portfolio">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="none">
            <path d="M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z" fill="#111111" />
          </svg>
        </router-link>
      </div>

      <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-gray-900 rounded-full px-2 py-1.5 items-center gap-1">
        <button class="bg-white text-gray-900 text-sm font-medium px-4 py-1.5 rounded-full">Device</button>
        <button
          v-for="item in navItems"
          :key="item"
          class="text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full hover:text-white transition-colors"
        >
          {{ item }}
        </button>
      </div>

      <button class="hidden md:flex bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-full items-center gap-2 hover:bg-gray-700 transition-colors">
        <span class="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
        Reserve Yours
      </button>

      <button class="md:hidden text-gray-900 p-1" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <X v-if="menuOpen" :size="22" />
        <Menu v-else :size="22" />
      </button>
    </nav>

    <div
      v-if="menuOpen"
      class="fixed top-0 left-0 right-0 z-40 bg-white pt-16 pb-6 px-5 shadow-lg flex flex-col gap-1 md:hidden"
    >
      <button
        v-for="item in mobileItems"
        :key="item"
        class="text-gray-800 text-base font-medium py-3 border-b border-gray-100 text-left hover:text-gray-500 transition-colors"
      >
        {{ item }}
      </button>
      <button class="mt-4 bg-gray-900 text-white text-sm font-medium px-5 py-3 rounded-full flex items-center gap-2 justify-center hover:bg-gray-700 transition-colors">
        <span class="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
        Reserve Yours
      </button>
    </div>

    <section ref="heroRef" class="relative w-full max-w-full overflow-hidden" style="height: 100vh">
      <svg
        class="absolute inset-0 w-full h-full pointer-events-none z-0"
        style="opacity: 0.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            :x="gridOffset.x"
            :y="gridOffset.y"
            :width="GRID_CELL"
            :height="GRID_CELL"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748b" stroke-width="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div
        class="absolute inset-0 bg-center bg-cover bg-no-repeat z-10"
        :style="{ backgroundImage: `url('${BG_IMAGE_1}')` }"
      ></div>

      <canvas ref="canvasRef" class="hidden"></canvas>
      <div
        class="absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none"
        :style="revealStyle"
      ></div>

      <div class="absolute bottom-12 sm:bottom-12 md:bottom-56 left-5 sm:left-8 md:left-12 max-w-[260px] sm:max-w-xs z-50">
        <p class="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] text-gray-600 uppercase mb-2 sm:mb-3">PureFlow One</p>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
          Clean Air, Clear<br />Mind. Anywhere.
        </h1>
        <div class="flex items-center gap-3 sm:gap-4">
          <button class="bg-gray-900 text-white text-xs sm:text-sm font-medium px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-gray-700 transition-colors">Discover</button>
          <button class="flex items-center gap-2 text-gray-700 text-xs sm:text-sm font-medium hover:text-gray-900 transition-colors">
            <Play :size="12" class="fill-gray-700" />
            View Specs
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { Menu, Play, X } from 'lucide-vue-next';

const BG_IMAGE_1 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260512_012043_9764f2d0-5c6e-4faa-94a6-a8253df08c5e.png&w=1280&q=85';
const BG_IMAGE_2 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260512_012949_6b24738e-6e5f-4b6f-93d7-5772f4d32285.png&w=1280&q=85';
const SPOTLIGHT_R = 260;
const GRID_CELL = 48;

const navItems = ['Real Stories', 'Science', 'Plans', 'Reach Us'];
const mobileItems = ['Device', ...navItems];

const menuOpen = ref(false);
const heroRef = ref(null);
const canvasRef = ref(null);
const maskImage = ref('');
const gridOffset = reactive({ x: 0, y: 0 });

const mouse = { x: 0, y: 0 };
const smooth = { x: 0, y: 0 };
let rafId = 0;

const revealStyle = computed(() => ({
  backgroundImage: `url('${BG_IMAGE_2}')`,
  maskImage: maskImage.value ? `url(${maskImage.value})` : 'none',
  WebkitMaskImage: maskImage.value ? `url(${maskImage.value})` : 'none',
  maskSize: '100% 100%',
  WebkitMaskSize: '100% 100%',
}));

const handleMouseMove = (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
};

const resizeCanvas = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const drawReveal = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const context = canvas.getContext('2d');
  if (!context) return;

  context.clearRect(0, 0, canvas.width, canvas.height);
  const gradient = context.createRadialGradient(smooth.x, smooth.y, 0, smooth.x, smooth.y, SPOTLIGHT_R);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.4, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.6, 'rgba(255,255,255,0.75)');
  gradient.addColorStop(0.75, 'rgba(255,255,255,0.4)');
  gradient.addColorStop(0.88, 'rgba(255,255,255,0.12)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  context.fillStyle = gradient;
  context.beginPath();
  context.arc(smooth.x, smooth.y, SPOTLIGHT_R, 0, Math.PI * 2);
  context.fill();
  maskImage.value = canvas.toDataURL();
};

const animate = () => {
  smooth.x += (mouse.x - smooth.x) * 0.1;
  smooth.y += (mouse.y - smooth.y) * 0.1;

  const rect = heroRef.value?.getBoundingClientRect();
  if (rect) {
    const cx = (smooth.x - rect.left) / rect.width - 0.5;
    const cy = (smooth.y - rect.top) / rect.height - 0.5;
    gridOffset.x += (cx * 16 - gridOffset.x) * 0.06;
    gridOffset.y += (cy * 16 - gridOffset.y) * 0.06;
  }

  drawReveal();
  rafId = requestAnimationFrame(animate);
};

onMounted(() => {
  mouse.x = window.innerWidth / 2;
  mouse.y = window.innerHeight / 2;
  smooth.x = mouse.x;
  smooth.y = mouse.y;
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  rafId = requestAnimationFrame(animate);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCanvas);
  cancelAnimationFrame(rafId);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
</style>
