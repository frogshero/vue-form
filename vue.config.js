module.exports = {
    publicPath: './', //启用间接路径
    configureWebpack: {
        devtool: 'source-map' //debug
    },
    devServer: {
        port: 5001,
        logLevel: 'debug',
        proxy: {
            '/api/qrcode': {
                target: 'https://api.pwmqr.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/qrcode': '/qrcode'
                }
            },
            '/api/ww/st': {
                target: 'http://localhost:9077',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/ww/st': '/api/st'
                }
            },
            '/api/baidu': {
                target: 'https://www.baidu.com',
                changeOrigin: true,
                secure: false,
                headers: {
                  Referer: 'https://www.baidu.com'
                },                
                pathRewrite: {
                    '^/api/baidu': ''
                }
            },
            '/api/mesbasic': {
                target: 'http://localhost:9081',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/mesbasic': '/mesbasic'
                }
            }
        }
    }
  }