/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2018/7/20
 * ======================================== */

let baseUrl = "";   //这里是一个默认的url，可以没有
let urlPrefix = '/dev_test'
switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl = urlPrefix  //这里是本地的请求url
        break
    case 'production':
        baseUrl = "/"   //生产环境url
        break
}

export {
    baseUrl,
    urlPrefix
}