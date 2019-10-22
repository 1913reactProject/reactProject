import React from "react"


import { Menu, Icon } from 'antd';

//引过来对应的路由页面
// import {layoutRoute} from "@router"

//二级路由拿过来
const { SubMenu } = Menu;



//注意这里遍历tabbar 和遍历 所有路由不一样 ，这里的 routes只是 layoutRoute 里具有 layout布局的 路由

export default (routes)=>{

    let eachTabbar = (route) =>{
        //二级标题存在时，，
        return  <SubMenu
                    key={route.key}
                    title={
                    <span>
                        <Icon type={route.icon}/>
                        <span>{route.name}</span>
                    </span>
                    }
                >   
                    {
                        route.children.map((child)=>(
                            <Menu.Item key={child.key}>
                                <Icon type={child.icon}/>
                                <span className="nav-text">{child.name}</span>
                            </Menu.Item>
                        ))
                    }
                </SubMenu>
    }









    return routes.map((route)=>{
            if(route.children){
                //如果二级标题存在时，将整个 route传进去
                return eachTabbar(route)

            }else{
                //如果二级标题不存在时，直接展示一级路由所对应的内容
                return  <Menu.Item key={route.key}>
                            <Icon type={route.icon}/>
                            <span className="nav-text">{route.name}</span>
                        </Menu.Item>
            }
         
    })
}