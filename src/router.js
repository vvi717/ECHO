import { createRouter, createWebHistory } from 'vue-router';
import ResearchPortal from './views/ResearchPortal.vue';
import AdminDashboard from './views/AdminDashboard.vue';
import ModuleDetail from './views/ModuleDetail.vue';

const routes = [
  {
    path: '/',
    name: 'ResearchPortal',
    component: ResearchPortal
  },
  {
    path: '/protocol-echo',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/module/:id',
    name: 'ModuleDetail',
    component: ModuleDetail,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
