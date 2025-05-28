import { createWebHashHistory, createRouter } from 'vue-router'

import index from '@/views/home/index.vue'
import article from '@/views/article/index.vue'
import download from '@/views/download/index.vue'
import learn from '@/views/learn/index.vue'
import community from '@/views/community/index.vue'
import chat from '@/views/chat/index.vue'
import subscription from '@/views/subscription/index.vue'
import focus from '@/views/focus/index.vue'
import collect from '@/views/collect/index.vue'
import history from '@/views/history/index.vue'
import create from '@/views/create/index.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: index,
    },
    {
        path: '/article',
        name: 'article',
        component: article,
    },
    {
        path: '/download',
        name: 'download',
        component: download,
    },
    {
        path: '/learn',
        name: 'learn',
        component: learn,
    },
    {
        path: '/community',
        name: 'community',
        component: community,
    },
    {
        path: '/chat',
        name: 'chat',
        component: chat,
    },
    {
        path: '/subscription',
        name: 'subscription',
        component: subscription,
    },
    {
        path: '/focus',
        name: 'focus',
        component: focus,
    },
    {
        path: '/collect',
        name: 'collect',
        component: collect,
    },
    {
        path: '/history',
        name: 'history',
        component: history,
    },
    {
        path: '/create',
        name: 'create',
        component: create,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router