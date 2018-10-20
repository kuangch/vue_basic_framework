let config = {

    // 链式配置
    chainWebpack:(config) =>{

        config.devtool("source-map")

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


        // 代码分割
        // config.entry('vue').add('vue').end()
        // config.entry('jquery').add('jquery').end()
        // config.entry('dilu_common').add('convenience-image').end()
        config.optimization.splitChunks({
            // chunks: "all",
            // automaticNameDelimiter: '-',
            // name: true,
            cacheGroups: {
                vue: {
                    test: /[\\/]node_modules[\\/]vue[\\/]/,
                    chunks: 'initial',
                    name: "vue",
                    priority: 10,
                },

                // jquery: {
                //     chunks: 'initial',
                //     test: /[\\/]node_modules[\\/]jquery[\\/]/,
                //     name: "jquery",
                //     priority: 10,
                // },

                // 这里定义的是在分离前被引用过2次以上的文件，将其一同打包到common.js中
                // common:{
                //     chunks: 'all',
                //     name: "common",
                //     minChunks: 2,
                //     minSize: 5
                // }
            }
        })

    },

    // 普通配置
    // configureWebpack: config => {
    //     // if (process.env.NODE_ENV === 'production') {
    //     //     // 为生产环境修改配置...
    //     // } else {
    //     //     // 为开发环境修改配置...
    //     // }
    // },
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
        filename: pageName === 'app' ? 'index.html' : `${pageName}.html`,
        chunks:['vue',pageName]
    }
})

config.pages = pages

module.exports = config