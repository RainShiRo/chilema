import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [

    {
    path: '/',
    name: 'welcome',
    component: () => import('../views/welcome.vue'),
    children:
        [
            {
            path: '/create',
            name: 'Create',
            component: () => import('../components/welcome/Create.vue')
            },
            {
            path: '/guest',
            name: 'Guest',
            component: () => import('../components/welcome/Guest.vue')
            },
            {
                path: '/login',
                name: 'Login',
                component: () => import('../components/welcome/Login.vue')
            },
            {
                path: '/forgetPW',
                name: 'forgetPW',
                component: () => import('../components/welcome/ForgetPW.vue')
            },
        ]

    },
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/index.vue')
    },

    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('../views/404.vue')
    },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
