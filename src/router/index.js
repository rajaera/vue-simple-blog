import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import PostPage from '../pages/PostPage.vue'
import NotFound  from '../NotFound.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/post/:slug', name: 'Post', component: PostPage, props: true },
  { path: '/about', name: 'About', component: About },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound } // fallback
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
