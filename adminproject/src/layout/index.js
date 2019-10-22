import React, { Component } from "react"

import { Layout, Menu } from 'antd';

import renderTabbar from "@utils/renderTabbar"
import {layoutRoute} from "@router"

import {withRouter} from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout;



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
                            {/* 一级标题 */}
                            {/* <Menu.Item key="1">
                                <Icon type="user" />
                                <span className="nav-text">nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span className="nav-text">nav 2</span>
                            </Menu.Item> */}

                                    {/* 二级标题 */}
                                    {/* <SubMenu
                                        key="sub1"
                                        title={
                                        <span>
                                            <Icon type="mail" />
                                            <span>Navigation One</span>
                                        </span>
                                        }
                                    >
                                        <Menu.Item key="5">Option 5</Menu.Item>
                                        <Menu.Item key="6">Option 6</Menu.Item>
                                        <Menu.Item key="7">Option 7</Menu.Item>
                                        <Menu.Item key="8">Option 8</Menu.Item>
                                    </SubMenu> */}
                        </Menu>
                    </Sider>
                    {/* 右边的内容区 */} 
                    <Layout style={{ marginLeft: 200 }}>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                                {this.props.children}

                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
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


