import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Articles from '../components/Articles.vue'
import Article from '../components/Article.vue'
import Concepts from '../components/Concepts.vue'

const routes = [
    {
      path: '/',
      name : 'homepage',
      component : Home
    },
    {
      path: '/articles',
      name : 'articles',
      component : Articles
    },
    {
      path: '/articles/:id',
      name : 'article',
      component : Article
    },
    {
      path: '/concepts/:id',
      name: 'concepts',
      component : Concepts
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router