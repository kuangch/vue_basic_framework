let config = {

    // 链式配置
    chainWebpack:(config) =>{

        // 小于1k的图片转成base64
        const imageRule = config.module.rule('images')
        // imageRule.uses.clear()
        imageRule.test(/.(png|jpe?g|gif)(\?\.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign({},options, {
                    limit: 1024,
                    name: 'img/[name].[hash:8].[ext]'
                })
            )
    },

    // 普通配置
    configureWebpack: config => {
        // if (process.env.NODE_ENV === 'production') {
        //     // 为生产环境修改配置...
        // } else {
        //     // 为开发环境修改配置...
        // }
    },
}


// 多页应用配置
const glob = require('glob')
const path = require('path')
const PAGES_PATH = path.resolve(__dirname, './src/pages')
const pages = {}

const projectName = 'application'
glob.sync(PAGES_PATH + '/*/index.js').forEach(filepath => {
    let pageName = path.basename(path.dirname(filepath))
    pageName = pageName === 'main' ? 'app' : pageName
    pages[pageName] = {
        entry:filepath,
        title: pageName === 'app' ? projectName : pageName,
        filename: pageName === 'app' ? 'index.html' : `${pageName}.html`
    }
})

config.pages = pages

module.exports = config