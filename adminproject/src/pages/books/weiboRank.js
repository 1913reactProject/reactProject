import React ,{Component} from "react"
// import { Table, Divider, Tag } from 'antd'
import './weiboRank.css'
import Axios from "axios"
import { TagCloud } from 'ant-design-pro/lib/Charts';
import 'ant-design-pro/dist/ant-design-pro.css';
 class WeiboRank extends Component{
     constructor() {
         super()
         this.state={
            hotList:[],
            newHot:[],
            flag:true

         }
     }
    render(){
        return(
            <div className="weiboRank">
                    <h4 onClick={this.tab}>微博热搜排行</h4>

                {!this.state.flag?<ul className="hotList">
                    {this.state.hotList.map((item,index) => {
                        return (
                            <li>
                                <em>{index + 1 + '、 '}</em>
                                <span>{item.desc}</span>
                                <span>{item.desc_extr||''}</span>
                                <i></i>
                                {item.icon?<img src={item.icon} /> :<i></i>}
                            </li>
                        )})
                    }
                </ul>:<TagCloud data={this.state.newHot} height={480}  />}
                
                
                    
            </div>
        )
    }
    tab=() => {
        this.setState({flag:!this.state.flag})
    }
    componentWillMount() {
        Axios.get("/weibo/api/container/getIndex?containerid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot&title=%E5%BE%AE%E5%8D%9A%E7%83%AD%E6%90%9C&extparam=pos%3D0_0%26mi_cid%3D100103%26cate%3D10103%26filter_type%3Drealtimehot%26c_type%3D30%26display_time%3D1569636242&luicode=10000011&lfid=231583")
        .then((data) => {
            console.log(data.data.data.cards)
            let list = data.data.data.cards[0].card_group
            let list1 = data.data.data.cards[1].card_group
            this.setState({hotList : list})
            console.log(this.state.hotList,list)
            let newHot1 = []
            list.forEach((item) => {
                // console.log(item.desc)
                newHot1.push(item.desc)
            })
            console.log(newHot1)
            
            const tags = [];
            for (let i = 0; i < 50; i += 1) {
                tags.push({
                    name: list[i].desc,
                    value: list[i].desc_extr||1
                });
            }
            this.setState({newHot:tags})
        })
        
    }
    

}
export default WeiboRank