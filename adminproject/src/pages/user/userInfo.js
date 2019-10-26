import React ,{Component} from "react"
import { Descriptions,Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon } from 'antd'
import './userInfo.css'

const { Option } = Select;

 class UserInfo extends Component{
    state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  }
    render(){
        // const { getFieldDecorator } = this.props.form;
        return(
            <div className="userInfo">
                <Descriptions title="用户个人信息" bordered>
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

                <Button className="change" onClick={this.showDrawer}>修改</Button>

                <Drawer
                    title="修改用户信息>>"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="姓名">
                            <Input placeholder="请输入您的姓名" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="性别">
                                <Input
                                placeholder="请输入性别"
                                />
                            </Form.Item>
                        </Col>
                        </Row>
                        <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="学校">
                            
                                <Select placeholder="请输入学校名称">
                                <Option value="xiao">清华大学</Option>
                                <Option value="mao">青岛大学</Option>
                                </Select>
                            
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="所在地">
                            
                                <Select placeholder="请选择所在地">
                                <Option value="private">北京</Option>
                                <Option value="public">青岛</Option>
                                </Select>
                           
                            </Form.Item>
                        </Col>
                        </Row>
                        <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="公司">
                            
                                <Select placeholder="请选择公司">
                                <Option value="jack">腾讯</Option>
                                <Option value="tom">阿里</Option>
                                <Option value="tom">百度</Option>
                                </Select>
                            
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="请选择">
                            
                                <DatePicker.RangePicker
                                style={{ width: '100%' }}
                                getPopupContainer={trigger => trigger.parentNode}
                                />
                           
                            </Form.Item>
                        </Col>
                        </Row>
                        <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item label="自我介绍">
                            <Input.TextArea rows={4} placeholder="请输入自我介绍>>" />
                            </Form.Item>
                        </Col>
                        </Row>
                    </Form>
                    <div
                        style={{
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        width: '100%',
                        borderTop: '1px solid #e9e9e9',
                        padding: '10px 16px',
                        background: '#fff',
                        textAlign: 'right',
                        }}
                    >
                        <Button className="btnSub" onClick={this.onClose} style={{ marginRight: 8 }}>
                        取消
                        </Button>
                        <Button className="btnSub" onClick={this.onClose} type="primary">
                        确定
                        </Button>
                    </div>
                    </Drawer>
            </div>
        )
    }
}

export default UserInfo