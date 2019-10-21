# 项目步骤

# 项目环境的配置
>基于create-react-app创建的项目环境
>react-app-rewired 对create-react-app进行自定义配置

**环境相关依赖**
- react-app-rewired
- customize-cra
- babel-plugin-import

```javascript
    npm install react-app-rewired 
                customize-cra 
                babel-plugin-import 
                --dev
```


1. src 下创建需要的文件夹        pages utils actions router components lib common api store 
2. 去 config-overrides.js 里配置 addWebpackAlias({})
3. 安装技术栈

# 技术栈
- 高阶组件
- react-router-dom
- redux
- react-redux
- redux-actions
- redux-thunk
- whatwg-fetch
- react-loadable
- qs
- styled-components

- http-proxy-middleware    做跨域代理

- @babel/plugin-proposal-decorators  装饰器

```javascript
    npm install react-router-dom redux react-redux redux-actions redux-thunk whatwg-fetch react-loadable qs styled-components 
    (因为在生产环境中安装，所以不用加dev)
```
 
4. 去 utils 里封装 http.js  
5. store 里处理： 服务员拿着规章制度开店、多人协作等
6. 入口文件 index.js 里做生产者，引入 store 
7. npm run start 启动项目看看之前的安装有没有问题
8. 将 public 下的 iconfont 和 css文件夹找来
9. 在 pages 下建立find home login mine order ， 及 各自相应的 index.js 文件 ，    及 pages下的 index.js ，这是为了做路由懒加载
10. 去 common 下创建文件夹loading ，loading 下创建 index.js 和 index.css

11. 去 router 里配置路由
12. 去 utils 下创建 renderRoutes.js ，做路由遍历 ， 去 入口文件index.js 下做哈希路由 ， 去 App.js 里做

13. 做tabBar   layout  common/tabBar   router/index.js里flag true   在utils/renderRoutes.js引入    
14. react中解决跨域  在crc下建立setupProxy.js ，注意文件名千万不能写错  配置完重启npn run start
```javascript
    npm install http-proxy-middleware --dev  
```

15. es7装饰器 ？ (15 16暂先忽略 )
16. 在 create-react-app 里看 的webpack 配置项方式 ？    暴露(看之前一定要先将文件提交到缓存区)
```javascript
    npm install @babel/plugin-transfrom-react-jsx-source 
    npm install react-scripts   
```

17. 组件拆分   头部 中间内容(注意中间内容区靠定位撑开 height:100%  而不是flex=1) 尾部


# 装饰器使用流程(基于create-react-app)
- git add .     git commit -m "xxx"
- npm run eject
- 安装 npm install @babel/plugin-proposal-decorators --dev
- 找到 package.json 文件中的 babel属性
```javascript
    "plugins":[
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy":true
            }
        ]
    ]
```



18. 分类 <==> 首页     
19. 做分类页面   (注意设置自定义属性data-id)
20. 点击分类里的每一项，跳转页面








