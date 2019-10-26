import React ,{Component} from "react"
import { Button,Comment, Tooltip,message,Popconfirm, Icon, Avatar } from 'antd';
import moment from 'moment';
import './message.css'
import Axios from "axios";


export default class UserInfo extends Component{
    constructor() {
        super()
        this.state={
            messageText:[],
            dislikes:0,
            likes: 0,
            action: null,
        }
    }
    confirm(index) {
        this.del(index)
        message.info('删除成功！！！')

      }
    render(){
        const { likes,dislikes, action } = this.state;
        
          
        const actions = [
            <span key="comment-basic-like">
              <Tooltip title="Like">
                <Icon
                  type="like"
                  theme={action === 'liked' ? 'filled' : 'outlined'}
                  onClick={this.like}
                />
              </Tooltip>
              <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
            </span>,
            <span key=' key="comment-basic-dislike"'>
                <Tooltip title="Dislike">
                <Icon
                    type="dislike"
                    theme={action === 'disliked' ? 'filled' : 'outlined'}
                    onClick={this.dislike}
                />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
                </span>,
            // <span key="comment-basic-reply-to" onClick={() => {this.del()}}
            // >Reply to</span>
          ]
        return(
            <div className="userInfo">
               
                <div className="input">
                    <textarea rows={4}  ref="text" placeholder="请留言..."/>
                    <Button onClick={() => {this.input()}}>提交</Button>
                </div>
                <div className="messageList">
                    {this.state.messageText.map((item,index) => {
                        return (
                            <Comment onClick={() => {this.text(index)}}
                                
                                author={<a>Lee</a>}
                                avatar={
                                <Avatar src="./head.jpg" alt="Han Solo"/>
                                }
                                content={
                                <p>
                                    {item.text}
                                </p>
                                }
                                datetime={
                                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                    <span>{moment().fromNow()}</span>
                                    <Popconfirm placement="top" title='你确定要删除该留言？' onConfirm={() => {this.confirm(index)}} okText="Yes" cancelText="No">
                                        <button className="delItem" onClick={() => {}}>删除</button>
                                    </Popconfirm>
                                    
                                </Tooltip>
                                }
                                actions={actions}

                            />
                        )
                    })}
                
                </div>
            </div>
        )
    }
    like = () => {
        this.setState({
        likes: 1,
        dislikes: 0,
          action: 'liked',
        });
      }
    dislike = () => {
        this.setState({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
        })
    }
    text(a) {
        console.log(a)
        console.log(this)
    }
    del(num) {
        let list = this.state.messageText
        list.splice(num,1)
        this.setState({messageText:list})
        this.submit()
    }
    confirm(index) {
        message.info('Clicked on Yes.');
        this.del(index)
      }
    input() {
        let value = this.refs.text.value
        if(value === '') {
            message.warning('请输入内容！')
            return false
        }
        message.success('留言成功!')
        let item = {text:value,like:false}
        let list = this.state.messageText
        list.push(item)
        this.setState({messageText:list})
        document.querySelector('textarea').value = ''
        // console.log(this.state.messageText)

        this.submit()
    } 
    getMessage() {
        Axios.get("/leave/get")
        .then((data) => {
            let data1 = JSON.parse(data.data.data)
            console.log(data1)
            this.setState({messageText:data1})
        })
    }
    submit() {
        let list = JSON.stringify(this.state.messageText)
        Axios.post('/leave/set',{data:list})
        .then((data) => {
            console.log(data)
        })
    }
    componentWillMount() {
        this.getMessage()
    }
}