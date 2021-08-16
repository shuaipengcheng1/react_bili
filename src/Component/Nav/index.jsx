import React, { Component } from 'react';
import './index.css'
import { GithubOutlined, DownOutlined, ApartmentOutlined } from '@ant-design/icons'
import Show from './Show/index'
import { connect } from 'react-redux'
// 引入action
import { show, hide } from '../../Redux/Actions/Nav/index'
// UI组件
class Index extends Component {

    over = () => {
      
       this.props.show()
    }
    out = () => {
        this.props.hide()
    }
    render() {

        return (
            <div id="Nav">
                <div className="warp">
                    {/* 动态 */}
                    <div className="left_part">
                        <ul>
                            <li className="round_icon">
                                <a href="">
                                    <div className="round_icon"><GithubOutlined className="i" /></div>
                                    首页
                                </a></li>
                            <li className="round_icon">
                                <a href="">
                                    <div><GithubOutlined className="i" /></div>
                                    动态
                                </a></li>
                            <li className="round_icon">
                                <a href="">
                                    <div><GithubOutlined className="i" /></div>
                                    热门
                                </a></li>
                            <li className="round_icon">
                                <a href="">
                                    <div><GithubOutlined className="i" /></div>
                                    频道
                                </a></li>

                        </ul>
                    </div>
                    {/* 传送 */}
                    <div className="text">
                        <div onMouseOver={this.over} onMouseOut={this.out}>
                            <a href="">
                                <span>动画</span><small>888+</small>
                            </a>
                            {/* 展示栏 */}
                            {
                                this.props.redux.Reducer ? <Show /> : <></>
                            }
                        </div>

                        <div>
                            <a href="">
                                <span>音乐</span><small>999+</small>
                            </a>

                        </div>
                        <div>
                            <a href="">
                                <span>舞蹈</span><small>888+</small>
                            </a>

                        </div>
                        <div>
                            <a href="">
                                <span>知识</span><small>888+</small>
                            </a>

                        </div>
                        <div>
                            <a href="">
                                <span>生活</span><small>888+</small>
                            </a>

                        </div>
                        <div>
                            <a href="">
                                <span>时尚</span><small>888+</small>
                            </a>

                        </div>
                        <div>
                            <a href="">
                                <span>娱乐</span><small>888+</small>
                            </a>

                        </div>
                        <div>
                            <a href="">
                                <span>放映厅</span><small>888+</small>
                            </a>

                        </div>
                        <div>
                            <a href="">
                                <span>番剧</span><small>888+</small>
                            </a>

                        </div>
                        <div>
                            <a href="">
                                <span>国创</span><small>888+</small>
                            </a>

                        </div>
                        <div>
                            <a href="">
                                <span>游戏</span><small>888+</small>
                            </a>

                        </div>
                        <div>
                            <a href="">
                                <span>数码</span><small>888+</small>
                            </a>

                        </div>
                        <div>
                            <a href="">
                                <span>鬼畜</span><small>888+</small>
                            </a>

                        </div>
                        <div>
                            <a href="">
                                <span>资讯</span><small>888+</small>
                            </a>

                        </div>
                        <div>
                            <a href="">
                                <span>影视</span><small>888+</small>
                            </a>

                        </div>
                        <div>
                            <a href="">
                                <span>更多 <DownOutlined /></span>
                            </a>

                        </div>
                    </div>

                    {/* 投诉区 */}
                    <div className="left_part">
                        <ul>
                            <li><ApartmentOutlined /><a href="">专栏</a></li>
                            <li><ApartmentOutlined /><a href="">活动</a></li>
                            <li><ApartmentOutlined /><a href="">小黑屋</a></li>
                            <li><ApartmentOutlined /><a href="">直播</a></li>
                            <li><ApartmentOutlined /><a href="">课堂</a></li>
                            <li><ApartmentOutlined /><a href="">音乐</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}


// 将对象保存在props属性redux中 
var Redux = connect((state) => ({ redux: state }), {
    // action方法 对象简写 也会作为props的方法保存
    show,
    hide
})(Index)

export default Redux