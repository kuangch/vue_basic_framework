/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2018/10/18
 * ======================================== */

import http from './http'
const Base = {}

Base.install = function (Vue) {
    http(Vue)
}
export default Base