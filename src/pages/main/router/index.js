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

Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/per',
            name: 'per',
            component: Per
        }
    ]
})