const webpack = require('webpack')
const path = require('path')
const axios = require('axios')
const bodyParser = require('body-parser')
const apiHost = 'http://47.94.22.148:8040'

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 8888,
    proxy: {
      '/api': {
        target: 'http://47.94.22.148:8040',
        changeOrigin: true,
        pathRewrite: {
          '^api': ''
        }
      }
    }, 
    before(app) {
      app.use(bodyParser.urlencoded({extended: true}))
      const querystring = require('querystring')  

      app.post('/api/getDirectReportProjectListService', bodyParser.json(), function (req, res) {
        // const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
        const url = `${apiHost}/rt`
        axios.post(url, req.body, {
          headers: {
            // referer: 'https://y.qq.com/',
            // origin: 'https://y.qq.com',
            'Content-type': 'application/x-www-form-urlencoded'
          }
        }).then((response) => {
          res.json(response.data)
        }).catch((e) => {
          console.log(e)
        })
      })
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))

    config.plugin('context')
      .use(webpack.ContextReplacementPlugin,
        [/moment[/\\]locale$/, /zh-cn/])
  },
  baseUrl: ''
}