// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/PageSubArea/HotPlayMovies.api':{
        target:'https://api-m.mtime.cn',
        changeOrigin:true,
        pathRewrite:{
          '^/PageSubArea/HotPlayMovies.api':'/PageSubArea/HotPlayMovies.api'
        }
      },
      '/PageSubArea/GetFirstPageAdvAndNews.api':{
        target:'http://m.mtime.cn/Service/callback.mi',
        changeOrigin:true,
        pathRewrite:{
          '^/PageSubArea/GetFirstPageAdvAndNews.api':'/PageSubArea/GetFirstPageAdvAndNews.api'
        }
      },
      '/Showtime/LocationMovies.api':{
        target:'https://api-m.mtime.cn',
        changeOrigin:true,
        pathRewrite:{
          '^/Showtime/LocationMovies.api':'/Showtime/LocationMovies.api'
        }
      },
      '/Movie/MovieComingNew.api':{
        target:'https://api-m.mtime.cn',
        changeOrigin:true,
        pathRewrite:{
          '^/Movie/MovieComingNew.api':'/Movie/MovieComingNew.api'
        }
      },
      '/movie/detail.api':{
        target:'https://ticket-api-m.mtime.cn',
        changeOrigin:true,
        pathRewrite:{
          '^/movie/detail.api':'/movie/detail.api'
        }
      },
      '/movie/hotComment.api':{
        target:'https://ticket-api-m.mtime.cn',
        changeOrigin:true,
        pathRewrite:{
          '^/movie/hotComment.api':'/movie/hotComment.api'
        }
      },
      '/person/detail.api':{
        target:'https://ticket-api-m.mtime.cn',
        changeOrigin:true,
        pathRewrite:{
          '^/person/detail.api':'/person/detail.api'
        }
      },
      '/OnlineLocationCinema/OnlineCinemasByCity.api':{
        target:'http://m.mtime.cn/Service/callback.mi',
        changeOrigin:true,
        pathRewrite:{
          '^/OnlineLocationCinema/OnlineCinemasByCity.api':'/OnlineLocationCinema/OnlineCinemasByCity.api'
        }
      },
      '/cinema/showtime.api':{
        target:'http://m.mtime.cn/Service/callback-ticket.mi',
        changeOrigin:true,
        pathRewrite:{
          '^/cinema/showtime.api':'/cinema/showtime.api'
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
