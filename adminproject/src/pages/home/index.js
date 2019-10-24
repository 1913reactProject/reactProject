import React ,{Component} from "react"
import { Carousel } from 'antd';
import './index.css'

export default class Home extends Component{
    render(){
        return(
            <div className="homeSwiper">
                {/* <div id="jsi-flying-fish-container" class="container"></div> */}
                <Carousel autoplay>
                    <div>
                        <img src="./1.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="./2.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="./3.jpg" alt=""/>
                    </div>
                    
                </Carousel>
            </div>
        )
    }
}