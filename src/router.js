import { createRouter, createWebHistory } from 'vue-router';
import PortfolioHome from './views/PortfolioHome.vue';
import PureFlowDemo from './views/PureFlowDemo.vue';
import ResearchPortal from './views/ResearchPortal.vue';
import ThreeMonthReview from './views/ThreeMonthReview.vue';
import React2026Dashboard from './views/React2026Dashboard.vue';
import AdminDashboard from './views/AdminDashboard.vue';
import ModuleDetail from './views/ModuleDetail.vue';

const routes = [
  {
    path: '/',
    name: 'PortfolioHome',
    component: PortfolioHome
  },
  {
    path: '/echo',
    name: 'ResearchPortal',
    component: ResearchPortal
  },
  {
    path: '/three-month-review',
    name: 'ThreeMonthReview',
    component: ThreeMonthReview
  },
  {
    path: '/react2026-progress-dashboard',
    name: 'React2026Dashboard',
    component: React2026Dashboard
  },
  {
    path: '/pureflow',
    name: 'PureFlowDemo',
    component: PureFlowDemo
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
