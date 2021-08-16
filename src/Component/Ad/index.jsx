import React, { Component } from 'react';
import jpg from './img/84c55eb7f8551b27db5bebcc38d17502.jpg@412w_232h_1c'
import './index.css'
import { HeartFilled } from '@ant-design/icons'
import mars from './img/074898427d3b5db82e35bd30f31a0ce4c5d7904e.jpg'
class index extends Component {
    render() {
        return (
            <div id="advidase">
                <div id="left_ad">
                    {/* 推广 */}
                    <div id="ad_title">
                        <div id="ad_item">

                            <HeartFilled />
                            <span>推广</span>
                        </div>
                     
                    </div>
                    {/* 广告内容 */}
                    <div id="ad_contain">
                        <div className="ad_context">
                              {/* 206 192 */}
                            <a href="">
                                <div>
                                    <img src={jpg} alt="" />
                                </div>
                            </a>
                            <div style={{display:'flex',flexFlow:'column ',justifyContent:'space-between'}}>
                                   <a>每天建模一小时，趁年轻多学点技能养活自己！</a>
                            <a href="">up:misaka</a>
                            </div>
                        </div>
                        <div className="ad_context">
                            <a href="">
                                <div>
                                    <img src={jpg} alt="" />
                                </div>
                            </a>
                            <div style={{display:'flex',flexFlow:'column ',justifyContent:'space-between'}}>
                                   <a>每天建模一小时，趁年轻多学点技能养活自己！</a>
                            <a href="">up:misaka</a>
                            </div>
                        </div>
                        <div className="ad_context">
                            <a href="">
                                <div>
                                    <img src={jpg} alt="" />
                                </div>
                            </a>
                            <div style={{display:'flex',flexFlow:'column ',justifyContent:'space-between'}}>
                                   <a>每天建模一小时，趁年轻多学点技能养活自己！</a>
                            <a href="">up:misaka</a>
                            </div>
                        </div>
                        <div className="ad_context">
                          
                            <a href="">
                                <div>
                                    <img src={jpg} alt="" />
                                </div>
                            </a>
                            <div style={{display:'flex',flexFlow:'column ',justifyContent:'space-between'}}>
                                   <a>每天建模一小时，趁年轻多学点技能养活自己！</a>
                            <a href="">up:misaka</a>
                            </div>
                         
                        </div>

                    </div>
                </div>
                    {/* 右侧 */}
                    <div id="rigth_ad">

                        <div id="suggest">
                     <a href="">观看列表</a>
                        </div>
                        <div id="img_ad">
                               <a href="">
                            <div>
                                <img src={mars} alt=""/>
                            </div>
                        </a>
                        </div>
                     
                    </div>
            </div>
        );
    }
}

export default index;
