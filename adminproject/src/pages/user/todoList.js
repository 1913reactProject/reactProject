import React ,{Component} from "react"
import { Button,Input } from 'antd';
import './todoList.css'
import Axios from 'axios'

export default class TodoList extends Component{
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
   
    render(){
        return(
            <div className="listBox">
                <h4>TodoList</h4>
                <div className="input">
                    <Input placeholder="请输入待办事项" ref="input" / > 
                <Button type="primary" onClick={() => {this.add()}}>提交</Button>
                </div>
                <div className="list">
                    <ul>
                        {this.state.list.map((item,index) =>{
                                return (
                                    <li>
                                        {index + 1 + '.'}<p>{item.message}</p>
                                        {!item.show?<Button onClick = {() => {this.tab(index)}}>完成</Button>: <span>已完成</span>}
                                        <Button type="danger" onClick = {() => {this.del(index)}}>删除</Button> 
                                    </li>
                                )
                            })  
                        }
                        
                        
                    </ul>
                </div>
            </div>
        )
    }
    listGet() {
        Axios.get('/list/get')
        .then((data) => {
            let data1 = JSON.parse(data.data.list)
             console.log(data1)
            let list = data1
            // this.state.list = list
            this.setState({list:list})
            this.set()
            console.log(data)
        }
        )
    }
    add() {
        let val = this.refs.input.state.value
        console.log(val)
        let list = this.state.list
        let new1 = {message:val,show:false}
        list.push(new1)
        this.setState(list)
        
        this.set()
    }
    tab(num) {
        console.log(num)
        let list = this.state.list
        list[num].show = true
        this.setState(list)
        this.set()
    }
    del(num) {
        let list = this.state.list
        list.splice(num,1)
        this.setState(list)
        this.set()
    }
    set(){
        console.log(this.state.list)
        let list = JSON.stringify(this.state.list)
        Axios.post('./list/set',{list:list})
        .then((data) => {
            console.log(data)
        })
    }
    componentWillMount() {
        this.listGet()
        console.log(this.state.list)
    }
    
}