import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/logs',
    name: 'Logs',
    component: () => import('../views/logs')
  },
  {
    path: '/createLog',
    name: 'CreateLog',
    component: () => import('../views/createLog'),
    children: [
      {
        path: 'project',
        name: 'Project',
        component: () => import('../views/createLog/Project')
      },
      {
        path: 'change',
        name: 'Change',
        component: () => import('../views/createLog/Change')
      },
      {
        path: 'task',
        name: 'Task',
        component: () => import('../views/createLog/Task')
      },
      {
        path: 'other',
        name: 'Other',
        component: () => import('../views/createLog/Other')
      }
    ]
  },
  {
    path: '/*',
    redirect: '/logs'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
