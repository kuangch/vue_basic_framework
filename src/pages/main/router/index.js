/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2018/11/20
 * ======================================== */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from './about'
import Home from './home'
import Per from './per'

const packageJson = require('../../../../package')
import ENV  from '../../../service/environment/env.config'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    // base: `${ENV.routerBase}`,
    routes: [
        {
            path: `/`,
            name: 'login',
            redirect: `/${packageJson.name}/`,
            meta:{
                requiresAuth: true
            }
        },
        {
            path: `/${packageJson.name}/`,
            name: 'home',
            component: Home,
            meta:{
                requiresAuth: true
            }
        },
        {
            path: `/${packageJson.name}/about`,
            name: 'about',
            component: About,
            meta:{
                requiresAuth: true
            }
        },
        {
            path: `/${packageJson.name}/per`,
            name: 'per',
            component: Per,
            meta:{
                requiresAuth: true
            }
        }
    ]
})

/**
 * 校验登录状态
 */
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!Vue.$login()) {
            window.location.href = '/'
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
})

export default router

