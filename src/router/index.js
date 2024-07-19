import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import DashBoardPage from '../pages/DashBoardPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/dashboard', component: DashBoardPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
