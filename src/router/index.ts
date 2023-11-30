import { createRouter, createWebHistory } from 'vue-router'
import Wel from '@/page/wel/index.vue'
import ProjectList from '@/page/project-list/index.vue'
import EvaluateList from '@/page/evaluate-list'

export const routes = [
  {
    path: '/beckon',
    name: '招彩管理',
    children: [
      {
        path: '/evaluatelist',
        name: '公告列表',
        component: Wel,

        meta: {
          title: '公告列表'
        }
      },
      {
        path: '/projectList',
        name: '项目列表',
        component: ProjectList,

        meta: {
          title: '项目列表'
        }
      }
    ]
  },
  {
    path: '/evaluate',
    name: '评委端',
    children: [
      {
        path: '/wel',
        name: '评委端列表',
        component: EvaluateList,

        meta: {
          title: '评委端列表'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
