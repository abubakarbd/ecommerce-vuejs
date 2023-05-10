import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/pages/index.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Shop from '../views/pages/Shop.vue'
const routes = [
    { path: '/', name:'index', component: Index, meta:{title:"Home"} },
    { path: '/shop', name:'shop', component: Shop, meta:{title:"Shops"} },

    { path: '/auth/login', name:'user.login', component: Login, meta:{title:"Login"} },
    { path: '/auth/register', name:'user.register', component: Register, meta:{title:"Register"} },
  ]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
const DEFAULT_TITLE = '404';
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE;
  next()
})
export default router;
