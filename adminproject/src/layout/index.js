import React, { Component } from "react"

import { Layout, Menu,Badge,Dropdown, Icon } from 'antd';

import renderTabbar from "@utils/renderTabbar"
import {layoutRoute} from "@router"
import './index.css'
import {withRouter} from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout;
const menu = (
    <Menu>
      <Menu.Item>
        <a href="#"  rel="noopener noreferrer" onClick={() => {user()}} >
          退出登录
        </a>
      </Menu.Item>
      
    </Menu>
  )
  function user() {
    console.log(1)
    document.cookie='token'+'='+''
    
    }
class LayoutComponent extends Component {
    render() {
        console.log(this.props.children)
        return (
            <div>
                <Layout>
                    {/* 左边的tabBar */}
                    <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}
                    >
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']} onClick={this.handleTo.bind(this)}>

                            {renderTabbar(layoutRoute)}
                           
                        </Menu>
                    </Sider>
                    {/* 右边的内容区 */} 
                    <Layout style={{ marginLeft: 200 }}>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Badge count={99} overflowCount={10} >
                                <a href="#" className="head-example" />
                                <Icon type="notification" />
                            </Badge>
                            <span>Lee</span>

                            <Dropdown overlay={menu} placement="bottomCenter">
                                <img  src="./head.jpg" alt="" />
                            </Dropdown>
                           
                            
                        </Header> 
                        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                                {this.props.children}

                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}></Footer>
                    </Layout>
                </Layout>,
            </div>
        )
    }
    // handleTo(...rest){
    //     console.log(rest)
    //     console.log(rest[0].key)
    // }
    handleTo({key}){
        // console.log(key)
        // console.log(this.props)
        this.props.history.push(key)
    }
    



}


export default withRouter(LayoutComponent)


