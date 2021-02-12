module.exports = {
    devServer: {
        port: 5001,
        logLevel: 'debug',
        proxy: {
            '/api/qrcode': {
                target: 'https://cli.im',
                changeOrigin: true,
                // pathrewrite: {
                //     '^/api/qrcode': '/api/qrcode'
                // }
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
                pathrewrite: {
                    '^/api/baidu': ''
                }
            },
            '/api/mesbasic': {
                target: 'http://localhost:9081',
                changeOrigin: true,
                pathrewrite: {
                    '^/api/mesbasic': '/mesbasic'
                }
            }
        }
    }
  }