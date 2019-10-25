import React ,{Component} from "react"
import { Descriptions } from 'antd'
import './userInfo.css'

export default class UserInfo extends Component{
    render(){
        return(
            <div className="userInfo">
                <Descriptions title="User Info" bordered>
                    <Descriptions.Item label="姓名">李先乐</Descriptions.Item>
                    <Descriptions.Item label="性别">男</Descriptions.Item>
                    {/* <Descriptions.Item label="照片"><img src="./4.jpg" alt = "lixianle"/></Descriptions.Item> */}

                    <Descriptions.Item label="学校">青岛大学</Descriptions.Item>
                    <Descriptions.Item label="所在地">北京</Descriptions.Item>
                    <Descriptions.Item label="注册时间" span={2}>
                    2019-04-24 18:00:00
                    </Descriptions.Item>
                    <Descriptions.Item label="公司">未填写</Descriptions.Item>
                    <Descriptions.Item label="关注">60</Descriptions.Item>
                    <Descriptions.Item label="粉丝">999</Descriptions.Item>
                    <Descriptions.Item label="自我介绍">
                    该用户很懒,
                    <br />
                    什么都没留下。
                    <br />
                    </Descriptions.Item>
                </Descriptions>
            </div>
        )
    }
}