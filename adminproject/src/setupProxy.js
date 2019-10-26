const proxy = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(proxy(
    "/weibo",{
      target:"https://m.weibo.cn",
      changeOrigin:true,
      pathRewrite:{
        "^/weibo":""
      }
    }
  ))
  app.use(proxy(
    "/login",{
      target:"https://10.60.14.137",
      changeOrigin:true,
      pathRewrite:{
        "^/login":""
      }
    }
  ))
  
}
//https://m.weibo.cn/api/container/getIndex?containerid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Dtopicband  &title=%E5%BE%AE%E5%8D%9A%E7%83%AD%E6%90%9C&extparam=pos%3D0_0%26mi_cid%3D100103%26cate%3D10103%26filter_type%3Drealtimehot%26c_type%3D30%26display_time%3D1569636242&luicode=10000011&lfid=231583