import React ,{Component} from "react"
import { Descriptions, Badge } from 'antd';
import { Pie, yuan,Bar } from 'ant-design-pro/lib/Charts';
import './weiboMsg.css'

const salesPieData = [
    {
      x: '6-12岁',
      y: 7056000,
    },
    {
      x: '13-18岁',
      y: 39388000,
    },
    {
      x: '19-22岁',
      y: 142296000,
    },
    {
      x: '23-25岁',
      y: 108192000,
    },
    {
      x: '26-29岁',
      y: 117600000,
    },
    {
      x: '30-39岁',
      y: 113484000,
    },
    {
        x: '40以上',
        y: 39984000,
      }
  ];
const salesData = [{x:'2016.1',y:2.61},{x:'2016.4',y:2.88},{x:'2016.7',y:3.10},{x:'2016.10',y:3.30},{x:'2017.1',y:3.4},{x:'2017.3',y:3.6},{x:'2017.7',y:3.8},{x:'2017.10',y:3.9},{x:'2018.1',y:4.11},{x:'2018.4',y:4.33},{x:'2018.7',y:4.55},{x:'2018.10',y:4.6},{x:'2019.1',y:4.60},{x:'2019.3',y:4.62}];
// for (let i = 2016; i <= 2019; i += 1) {
//   salesData.push({
//     x: `${i + 1}年`,
//     y: Math.floor(Math.random() * 1000) + 300,
//   });
// }
export default class AddBooks extends Component{
    render(){
        return(
            <div className="weiboMsg">
               <h4>微博用户年龄分布：</h4>
                <Pie
                    hasLegend
                    title="2019微博用户总数："
                    subTitle="2019微博用户总数"
                    total={() => (
                    <span
                        dangerouslySetInnerHTML={{
                        __html: (salesPieData.reduce((pre, now) => now.y + pre, 0) / 100000000) + '亿',
                        }}
                    />
                    )}
                    data={salesPieData}
                    valueFormat={val => <span dangerouslySetInnerHTML={{ __html: (val / 10000)+ '万'}} />}
                    height={294}
                />
                <h4>微博月活跃用户增长趋势：(亿)</h4>
                <Bar height={200} width={30}  data={salesData}/>
            </div>
        )
    }
}