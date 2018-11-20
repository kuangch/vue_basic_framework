/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2018/10/18
 * ======================================== */

import http from './http'
import ui from './ui'
import login from './login'
const Base = {}

Base.install = function (Vue) {
    http(Vue)
    ui(Vue)
    login(Vue)
}
export default Base