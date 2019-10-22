//注意 pc 端的 renderRouter.js 与 app 不一样
import React from "react"
import {Switch,Route,Redirect} from "react-router-dom"

//layout布局
import LayoutComponent from "@layout"
import Cookies from "js-cookie"




export default (routes)=>{

    let eachRoutes = (route) =>{
        //有二级标题的话，先进来当前这个一级大路由，然后 分别遍历二级路由，Switch适配
    return <Route key={route.key} path={route.path} render={(props)=>{
                return  <Switch>
                            {
                                route.children.map((child)=>{
                                    if(child.children){
                                        //如果二级路由还有二级路由时，再次调用自己  传child
                                        return  <LayoutComponent key={child.key}>
                                                    {eachRoutes(child)}
                                                </LayoutComponent>
                                        
                                    }else{
                                        //如果二级路由不再有二级路由时，渲染当前二级路由的组件
                                        return  <Route key={child.key} path={child.path} render={(props)=>{
                                                            if(Cookies.get("token")){
                                                                //如果token已经存在，则判断是否去 /login 路由   ---->(因为login也是一级路由，login不需要加 layout 布局 )
                                                                if(child.path === "/login"){
                                                                    return <child.component {...props}/>
                                                                }else{
                                                                    return <LayoutComponent>                
                                                                                <child.component {...props}/>
                                                                            </LayoutComponent>
                                                                }
                                                                
                                                            }else{
                                                                //如果一级路由是login 或者 没有token的话，就重定向到 /login ，渲染Login组件
                                                                return <Redirect to={{pathname:"/login"}}/>
                                                            }
                                                        }}/>
                    
        
                                    }
                                })
                            }
                        </Switch>
            
            }}/>

    }




    return routes.map((route)=>{
        if(route.children){
            //如果有二级三级标题  -----> 将 有子集路由的这个路由连带子集一块扔出去
            return eachRoutes(route)

        }else{
            //如果没有二级标题，渲染被layout布局包裹的内容，渲染的组件用render，(render可以做路由守卫，可以传值)
            return  <Route key={route.key} path={route.path} render={(props)=>{
                                if(Cookies.get("token") || route.path === "/login"){
                                    //如果token已经存在，则判断是否去 /login 路由   ---->(因为login也是一级路由，login不需要加 layout 布局 )
                                    if(route.path === "/login"){
                                        return <route.component {...props}/>
                                    }else{
                                        return <LayoutComponent>                
                                                    <route.component {...props}/>
                                                </LayoutComponent>
                                    }
                                    
                                }else{
                                    //如果一级路由是login 或者 没有token的话，就重定向到 /login ，渲染Login组件
                                    return <Redirect to={{pathname:"/login"}}/>
                                }
                            }}/>
                    
        }
    })


}

