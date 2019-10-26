import React ,{Component} from "react"
import { Carousel } from 'antd';
import './index.css'
import './script.js'
import './style.css'


export default class Home extends Component{
    render(){
        return(
            <div className="homeSwiper">
                <h1>My Project</h1>
                <div id="jsi-flying-fish-container" className="container"></div>
                {/* <Carousel autoplay>
                    <div>
                        <img src="./1.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="./2.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="./3.jpg" alt=""/>
                    </div>
                    
                </Carousel> */}
            </div>
        )
    }
}