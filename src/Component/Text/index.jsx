import React, { Component } from 'react';
// 引入css
import './index.css'
// import { } from '@ant-design/icons'
import { Carousel } from 'antd'
import '../../../node_modules/antd/dist/antd.css';
import 'axios'
import jpg from './img/12a10c50a31893817231ad451d4f64b5.jpg@880w_388h_1c_95q'
import jpg1 from './img/9208c5abc9905c127eda948eb863b80a.jpg@880w_388h_1c_95q'
import jpg2 from './img/992e600bc991f5f6c3b5b90d6f6c0eb061eacfeb.jpg@880w_388h_1c_95q'
import jpg3 from './img/e45a95281c60c035cbc29fe9c0f95569d3fff2f8.png@880w_388h_1c_95q'
import ad from './img/150ad6dbaca396267e36f44b6126a24bccd3c1f3.jpg@412w_232h_1c.jpg'
import axios from 'axios';
// import Ajax_send from '../../Redux/Actions/Context/index'
// import {connect} from 'react-redux'

// UI组件
export default class Index extends Component {
    state = {
    //    图片对象数组
    Img:[]
    }
    // componentDidMount() {
    //     // // 发送ajax请求 promise 封装
     
    //     //     axios('http://127.0.0.1:5000/b',{
    //     //         method:'GET',
    //     //         timeout:5000,
    //     //         responseType:'json'
            
    //     //     }).then((value)=>{
    //     //         // 存储在state中返回值
    //     //         console.log(value.data)
    //     //         this.setState({
    //     //             // 存储
    //     //         Img:[value.data]
              
    //     //         })
                
                
    //     //         console.log(this.state)
    //     //     },reason=>{
    //     //         console.log(reason)
    //     //     })
        
    //     // action
    //     // this.props.Ajax_send('GET')

    // }
    componentDidMount =async ()=> {
        // 发送ajax
  var data=   await axios({
          url:"http://127.0.0.1:300/img",
          method:'GET',

      })
      console.log(data.data)
    //   将值存入state
    this.setState({
        Img:[...data.data]
    })
    }
    render() {
        //    this.a=this.state.Img[0].jpg;
        return (
            <div id="warp_cousal">
                <div className="itembox">
                    {/* 轮播 */}
                    <div id="cou">
                        <Carousel effect="fade" className="cou" autoplay={true} dotPosition="bottom" dots={true} >

                            <div>
                                <a href="">
                                    <div>
                                        <img src={jpg} alt="" className="item" />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <div>
                                        <img src={jpg1} alt="" className="item" />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <div>
                                        <img src={jpg2} alt="" className="item" />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <div>
                                        <img src={jpg3} alt="" className="item" />
                                    </div>
                                </a>
                            </div>
                        </Carousel>

                    </div>
                    {/* 展示 */}
                    <div className="show_a">
                        {/* 展示快 */}
                        <div id="ad_item">
                            <a href="">
                                <div>
                                    <img src={ad} alt="" />
                                </div>
                            </a>
                        </div>
                        <div id="ad_item">
                            <a href="">
                                <div>
                                    <img src={ad} alt="" />
                                </div>
                            </a>
                        </div>
                        <div id="ad_item">
                            <a href="">
                                <div>
                                    <img src={ad} alt="" />
                                </div>
                            </a>
                        </div>
                        <div id="ad_item">
                            <a href="">
                                <div>
                                    <img src={ad} alt="" />
                                </div>
                            </a>
                        </div>
                        <div id="ad_item">
                            <a href="">
                                <div>
                                    <img src={ad} alt="" />
                                </div>
                            </a>
                        </div>
                        <div id="ad_item">
                            <a href="">
                                <div>
                                    <img src={ad} alt="" />
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


// redux
// var Context=connect((state)=>({img:state}),{
// Ajax_send
// })(Index)

// export default Context


