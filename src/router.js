import { createRouter, createWebHistory } from 'vue-router';
import hutsView from './Views/hutsView.vue'

const routes = [
  { path: '/huts', component: hutsView },  
//   {
//     path: '/huts',
//     name: 'huts',
//     component: () => import('./Views/hutsView.vue')
//    },
  // ... other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;