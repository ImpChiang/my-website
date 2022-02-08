import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/index.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/blog/index.vue')
    },
    {
        path: '/blog/detail/:id',
        name: 'BlogDetail',
        component: () => import('@/views/blog/detail.vue')
    },
    {
        path: '/tools',
        name: 'Tools',
        component: () => import('@/views/tools.vue')
    },
    {
        path: '/admin/editor',
        name: 'Editor',
        component: () => import('@/views/admin/article.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
