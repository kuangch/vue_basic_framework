/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2018/10/18
 * ======================================== */

import axios from 'axios'
import vueAxios from 'vue-axios'
import {baseUrl} from '../environment/env.config'

axios.defaults.baseURL = baseUrl
axios.defaults.timeout = 1000 * 10

export default function (Vue) {
    Vue.use(vueAxios,axios)
}
