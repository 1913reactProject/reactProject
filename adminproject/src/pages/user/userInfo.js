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
                    <Descriptions.Item label="照片"><img src="./4.jpg" alt = "lixianle"/></Descriptions.Item>

                    <Descriptions.Item label="">YES</Descriptions.Item>
                    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
                    <Descriptions.Item label="Usage Time" span={2}>
                    2019-04-24 18:00:00
                    </Descriptions.Item>
                    
                    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
                    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
                    <Descriptions.Item label="Config Info">
                    Data disk type: MongoDB
                    <br />
                    Database version: 3.4
                    <br />
                    Package: dds.mongo.mid
                    <br />
                    Storage space: 10 GB
                    <br />
                    Replication_factor:3
                    <br />
                    Region: East China 1<br />
                    </Descriptions.Item>
                </Descriptions>
            </div>
        )
    }
}