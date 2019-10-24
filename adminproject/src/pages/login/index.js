import React ,{Component} from "react"
import ReactCanvasNest from 'react-canvas-nest';
import './css/index.css'
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import Axios from 'axios'
import {withRouter}  from 'react-router-dom'

    let  success = () => {
        message.success('Login Successful!');
        // console.log(this)
      };
      
    let  error = () => {
    message.error('Wrong account or password!');
    };
 class Login extends Component{
    
    render(){
        return(
            <div className="particle-network-animation">
                <ReactCanvasNest className = 'canvasNest' 
                config = {{ pointColor: ' 255, 255, 255 ', lineColor:'255,255,255',pointR:2}}
                style = {{ zIndex: 99 }} />

                <div className="input">
                    <div className="login-form">
                        <p>Administrator login</p>
                        <Form.Item>
                            <Input className="inp1" ref="input1"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input className="inp2" ref="input2"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox style={{color:'white'}}>Remember me</Checkbox>
                            <a className="login-form-forgot" href="#">
                                Forgot password
                            </a> <br/><br/>
                            <Button type="primary"  className="login-form-button"
                                onClick={this.inp.bind(this)}
                            >
                                Login
                            </Button>
                            Or  <a href="#">register now!</a>
                        </Form.Item>
                    </div>
                </div>
               
                <div className="msg">
                    Initial username : admin <br/>
                    Initial password : admin
                </div>
            </div>
        )
    }
    inp=(props) => {
        let v1 = this.refs.input1.state.value
        let v2 = this.refs.input2.state.value
        
        Axios.post('/abc',{
            us:v1,
            ps:v2
        })
        .then( (data)=> {
            console.log(data)
            if(data.data.err === true) {
            success()
            document.cookie = 'token=123'
            this.props.history.push('/home')
            }else{
                error()
            }
        })
        
    }
}
export default withRouter(Login)