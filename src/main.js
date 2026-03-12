import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import router from './router'
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

const app = createApp(App)
app.use(MotionPlugin)
app.use(router)
app.use(setupCalendar, {})
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker)
app.mount('#app')
