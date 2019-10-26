import React ,{Component} from "react"
import { Card, Col, Row,Icon, Avatar } from 'antd';
import './bookList.css'
import Axios from 'axios'
import { Item } from "rc-menu";
const { Meta } = Card;

    

export default class BooksList extends Component{
    constructor() {
        super()
        this.state={
            list:[]
        }
    }
    render(){
        return(
            <div className="hotWeibo">
                <h4>热门话题</h4>
                <ul className="weibolist">
                    {this.state.list.map((item,index) => {
                        return(
                            <li>
                                <img src={item.pic} alt=""/>
                                <div>
                                    <div className="top">
                                        <div className="btn">{index + 1}</div>
                                        <p>{item.title_sub}</p>
                                    </div>
                                    <span>{item.desc1||''}</span>
                                    <em>{item.desc2}</em>
                                </div>
                            </li>
                        )
                    })
                    }
                    
                </ul>
            </div>
        )
    }
    componentDidMount() {
        Axios.get('/weibo/api/container/getIndex?containerid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Dtopicband&title=%E5%BE%AE%E5%8D%9A%E7%83%AD%E6%90%9C&extparam=pos%3D0_0%26mi_cid%3D100103%26cate%3D10103%26filter_type%3Drealtimehot%26c_type%3D30%26display_time%3D1572005171&luicode=10000011&lfid=231583')
        .then((data) => {
            console.log(data.data.data.cards[0].card_group)
            let list = data.data.data.cards[0].card_group
            this.setState({list:list})

        })
    }
}