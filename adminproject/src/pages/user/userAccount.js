import React ,{Component} from "react"
import { ChartCard, MiniArea,Field, MiniBar, MiniProgress } from 'ant-design-pro/lib/Charts'
import NumberInfo from 'ant-design-pro/lib/NumberInfo'
import { Row, Col, Icon, Tooltip } from 'antd'
import './userAccount.css'
import numeral from 'numeral';
import moment from 'moment';

const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.floor(Math.random() * 100) + 10,
  });
}

export default class UserList extends Component{
    render(){
        return(
            <div className="userAccount">
                   <h4>昨日关键指标</h4>
               <ul className="userAccountFans">
                   <li>
                       <p>净增粉丝数：</p>
                       <h5>12</h5>
                       <span>较前日   <em>--</em></span>
                       <span>较上周   <em>--</em></span>
                       <span>较上月   <em>--</em></span>
                   </li>
                   <li>
                       <p>阅读数：</p>
                       <h5>22</h5>
                       <span>较前日   <em>--</em></span>
                       <span>较上周   <em>--</em></span>
                       <span>较上月   <em>--</em></span>
                   </li>
                   <li>
                       <p>转评赞数：</p>
                       <h5>33</h5>
                       <span>较前日  <em>--</em></span>
                       <span>较上周  <em>--</em></span>
                       <span>较上月  <em>--</em></span>
                   </li>
                   <li>
                       <p>发博数：</p>
                       <h5>1</h5>
                       <span>较前日  <em>--</em></span>
                       <span>较上周  <em>--</em></span>
                       <span>较上月  <em>--</em></span>
                   </li>
                   <li>
                       <p>文章发布数：</p>
                       <h5>1</h5>
                       <span>较前日  <em>--</em></span>
                       <span>较上周  <em>--</em></span>
                       <span>较上月  <em>--</em></span>
                   </li>
                   <li>
                       <p>文章阅读数：</p>
                       <h5>20</h5>
                       <span>较前日  <em>--</em></span>
                       <span>较上周  <em>--</em></span>
                       <span>较上月  <em>--</em></span>
                   </li>
                   <li>
                       <p>视频发布数：</p>
                       <h5>0</h5>
                       <span>较前日  <em>--</em></span>
                       <span>较上周  <em>--</em></span>
                       <span>较上月  <em>--</em></span>
                   </li>
                   <li>
                       <p>视频播放量：</p>
                       <h5>0</h5>
                       <span>较前日  <em>--</em></span>
                       <span>较上周  <em>--</em></span>
                       <span>较上月  <em>--</em></span>
                   </li>
               </ul>
                    <h4>博文情况</h4>
                <ul className="userAccountChart">
                <Row>
                    <Col span={24}>
                    <ChartCard title="搜索用户数量" total={numeral(8846).format('0,0')} contentHeight={134}>
                        <NumberInfo
                        subTitle={<span>本周访问</span>}
                        total={numeral(12321).format('0,0')}
                        status="up"
                        subTotal={17.1}
                        />
                        <MiniArea line height={45} data={visitData} />
                    </ChartCard>
                    </Col>
                    <Col span={24} style={{ marginTop: 24 }}>
                    <ChartCard
                        title="访问量"
                        action={
                        <Tooltip title="指标说明">
                            <Icon type="info-circle-o" />
                        </Tooltip>
                        }
                        total={numeral(8846).format('0,0')}
                        footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
                        contentHeight={46}
                    >
                        <MiniBar height={46} data={visitData} />
                    </ChartCard>
                    </Col>
                    </Row>
                </ul>
            </div>
        )
    }
}