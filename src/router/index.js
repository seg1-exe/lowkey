import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Articles from '../components/Articles.vue'
import Article from '../components/Article.vue'

const routes = [
    // À compléter
    {
      path: '/',
      name : 'homepage',
      component : Home
    },
    {
      path: '/article',
      name : 'articles',
      component : Articles
    },
    {
      path: '/article/:id',
      name : 'article',
      component : Article
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router