# pc端后台管理项目


1. 安装脚手架 npm install create-react-app -g

2. 创建项目 create-react-app reactcsm

3. 安装 antd-Design
```javascript
 npm install antd
```

4. 安装 ‘按需加载’ 的依赖包
```javascript
    npm install react-app-rewired 
                customize-cra 
                babel-plugin-import 
                --dev
```

5. 配置package.json里的 "scripts":{}

6. 在根目录下创建 config-overrides.js 文件，并配置 addWebpackAlias({}) ，(这个文件与移动端不同的是：libraryName: 'antd' )  

7. 至此，按需加载完毕。

8. 安装以下 ‘技术栈’ 的依赖包
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

- js-cookie 

```javascript
    npm install react-router-dom redux react-redux redux-actions redux-thunk whatwg-fetch react-loadable qs styled-components
    (因为在生产环境中安装，所以不用加dev。 装饰器和js-cookie暂时不安装)
```
```javascript
    npm install http-proxy-middleware --dev
```

9. utils里引入 http.js (fetch的封装)



- 分割线------------------------------------------------------------------------------------------------------

10. src 下创建需要的文件夹        pages utils actions router components lib common api store    

11. 配置路由 => store里

12. 。。。

13. pages里创建如下几个页面
    系统首页       用户          书籍            登录     注册
     home         user          books           login    register

    index.js      userList.js   booksList.js    index.js
                  userInfo.js   addBooks.js


14. 做layout布局

15. 10-14 路由跑通 登录守卫也跑通

16. 重定向 根路径 / 的时候，到 home页面， 没有登录也进不去。。

- 分割线-------------------------------------------------------------------------------------------------------------------

17. 


