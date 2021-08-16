import React, { Component } from 'react'
// 引入css
import './index.css'
// 引入antd
import '../../../node_modules/antd/dist/antd.css';
// 引入图标文字
import { YoutubeOutlined, ArrowDownOutlined, SearchOutlined, StrikethroughOutlined, UserOutlined } from '@ant-design/icons'
// 引入图标
import download from './img/app-download.png'
import imgURL from './img/icon.webp';
import logo from './img/logo.png'
import bci from './img/background.png'
import s1 from './img/sakura.png'
import s2 from './img/sakura2.png'
import women from './img/风筝.png'
// 移入jq
import $ from 'jquery'
// 引入axios
import axios from 'axios'
export default class index extends Component {
    state = {
        opacity: 0,
        sakura: [s1, s2]

    }
    componentDidMount() {
        setInterval(() => {
            $(".sakura").children('img').animate({
                top: 500,
                left: 500
            }, 2000)
        }, 200);

    }
    dowload = () => {
        //    获取原本state
        // var {opacity}=this.state;

        this.back.style.display = 'block'
    }
    out = () => {
        this.back.style.display = 'none'
    }
    backmove = (e) => {
        // 鼠标移动时
        // console.log(e.clientX)
        // console.log(e.clientY)
        //   移入时坐标
        const x = e.clientX;


        this.background.onmousemove = (e) => {
            // 移动坐标
            const b = e.clientX;
            // console.log(x,b)
            //   在往右移
            if (x > b) {

                // 获取当前背景位置
                var position = $(this.background).css('background-position')
                var p = position.replace('0px ', "")
                p = p.replace('px', "")
                var p2 = parseInt(p)
                // console.log(p2)
                p2 = p2 + 1
                // console.log('p2', p2)
                if (p2 >= 0) {
                    // 最左侧时
                    return
                }
                if (p2 < 0 && p2 > -260) {

                    // 显示风筝
                    var o = $(this.women).css('opacity')
                    o = o * 1 + 0.01

                    // console.log(o)
                    $(this.women).css('opacity', o)
                }


                // console.log(p2 = p2 + 1)
                // console.log('yes')
                $(this.background).css({ "background-position": `${p2}px 0px` })

            }
            // 在往左移
            if (x < b) {
                // 获取当前背景位置
                // console.log('no')

                var position = $(this.background).css('background-position')
                var g = position.replace('0px ', "")
                g = g.replace('px', "")
                var p3 = parseInt(g)
                // console.log(typeof p3)
                // console.log(p3--)
                p3 = p3 - 1
                // console.log('p3',p3)
                // 隐藏
                if (p3 < -160) {
                    // 显示风筝
                    var o = $(this.women).css('opacity')
                    o = o * 1 - 0.01

                    console.log(o)
                    $(this.women).css('opacity', o)
                }

                if (p3 <= -470) {
                    return
                }
                $(this.background).css({ "background-position": `${p3}px 0px` })

            }
            // console.log(x < b)
            // console.log(x > b)

        }








    }
    bcout = () => {
        // console.log("out")
        // $(this.background).animate(
        //     { "background-position": `${-290}px 0px` }
        //     , 200)

    }
    icon_over = () => {
        var { img_list, icon } = this;
        $(img_list).css({ display: 'block' })
        $(icon).css({ opacity: 0 })

    }
    icon_out = () => {
        var { img_list, icon } = this;
        $(img_list).css({ display: 'none' })
        $(icon).css({ opacity: 1 })
    }
    serch = () => {

        return (e) => {
            if (e.keyCode === 13) {
                console.log(e.target.value)
                //    发送请求
                axios(`https://search.bilibili.com/all?keyword=${e.target.value}`, {
                    method: 'GET',

                }
                    // 返回一个promise对象
                ).then(value => {
                    console.log(value.data)
                }, re => {
                    console.log(re)
                })

            }
        }

    }
    render() {
        return (
            <div>
                <div id="left_nav">
                    <ul className="nav_link_item" >
                        <li>
                            <YoutubeOutlined />
                            <a href="">主站</a>
                        </li>
                        <li>
                            <a href="">番剧</a>
                        </li>
                        <li>
                            <a href="">游戏中心</a>
                        </li>
                        <li>
                            <a href="">直播</a>
                        </li>
                        <li>
                            <a href="">会员购</a>
                        </li>
                        <li>
                            <a href="">漫画</a>
                        </li>
                        <li>
                            <a href="">赛事</a>
                        </li>
                        <li className="down" onMouseOver={this.dowload} onMouseOut={this.out}>
                            <ArrowDownOutlined />
                            <a href="">下载APP</a>
                            <div className="dowload" ref={back => this.back = back}>
                                <p>下载手机客户端</p>
                                <img src={download} alt="" />
                            </div>
                        </li>

                    </ul>
                    <div className="serchbox">
                        <input type="text" name="" id="" onKeyDown={this.serch()} />
                        <div className="serchbox">
                            <SearchOutlined />
                        </div>
                    </div>

                    <div id="rigth" >
                        <ul className="navlink">
                            <li className="icon" onMouseOver={this.icon_over} onMouseOut={this.icon_out}>
                                <div className="icon" ref={back => this.icon = back}>
                                    <img src={imgURL} alt="" />

                                </div>
                                {/* 下拉菜单 */}
                                <nav ref={back => this.img_list = back}>
                                    <nav id="img_list">
                                        <div className="icon2">
                                            <img src={imgURL} alt="" />

                                        </div>
                                        <p className="id_name">sakamotoneko</p>
                                        {/* 等级 */}
                                        <div className="level">
                                            <div>
                                                <span style={{ left: '0px' }}>等级5</span>
                                                <span style={{ right: '0px' }}>23763/28800</span>
                                            </div>
                                            <br />

                                            {/* 等级条 */}
                                            <div className="level_width"></div>
                                            <br />
                                            {/* 功能区 */}
                                            {/* 硬币 */}
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <i >
                                                    硬币  167.5
                                       </i>
                                                <i >
                                                    B币 0
                                   </i>
                                            </div>



                                        </div>

                                        {/* 关注.... */}
                                        <hr />
                                        <div className="fans">
                                            <ul>
                                                <li>
                                                    <p>关注</p>
                                                    <b>597</b>

                                                </li>
                                                <li>
                                                    <p>粉丝</p>
                                                    <b>5</b>

                                                </li>
                                                <li>
                                                    <p>动态</p>
                                                    <b>56</b>

                                                </li>
                                            </ul>
                                        </div>
                                        <hr />
                                        {/* 个人信息 */}
                                        <ul id="id_list">
                                            <li className="id_item"><UserOutlined /> <span>个人中心</span></li>
                                            <li className="id_item"><UserOutlined /> <span>投稿管理</span></li>
                                            <li className="id_item"><UserOutlined /> <span>B币钱包</span></li>
                                            <li className="id_item"><UserOutlined /> <span>订单中心</span></li>
                                            <li className="id_item"><UserOutlined /> <span>直播中心</span></li>
                                            <li className="id_item"><UserOutlined /> <span>我的课程</span></li>
                                            <hr />
                                            <li className="id_item" style={{ border: '1px 0px 1px 0px soild black' }}><UserOutlined /> <span>语言:简体中文</span></li>
                                            <hr />
                                            <li className="id_item"><UserOutlined /> <span>退出</span></li>

                                        </ul>

                                    </nav>
                                </nav>
                            </li>
                            <li>
                                <a href="">大会员</a>
                            </li>
                            <li>
                                <a href="">消息</a>
                            </li>
                            <li>
                                <a href="">动态</a>
                            </li>
                            <li>
                                <a href="">收藏</a>
                            </li>
                            <li>
                                <a href="">历史</a>
                            </li>
                            <li>
                                <a href="">创作中心</a>
                            </li>
                            <li id="send">
                                <div>
                                    <a href="">投稿</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="background" ref={back => this.background = back} style={{ backgroundImage: `url(${bci})` }} onMouseOver={this.backmove} onMouseOut={this.bcout}>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="women" ref={back => this.women = back}>
                        <img src={women} alt="" />
                    </div>
                    <div className="sakura" ref={back => this.sakura = back}>

                        {

                            setInterval(() => {
                                var { sakura } = this
                                // 获取容器宽度
                                var dw = getComputedStyle(sakura, 'width').width;
                                // 转格式
                                var dw = dw.replace('px', '');
                                dw = dw * 1

                                //   生成随机数
                                var re = Math.round(Math.random() * 1);

                                if (re == 0) {
                                    var img = document.createElement('img')
                                    img.src = s1;
                                    img.className = 's1'

                                    // 生成随机数
                                    var re2 = Math.round(Math.random() * dw);
                                    img.style.left = re2 + 'px'

                                    // 动画


                                    this.sakura.appendChild(img)

                                } else {
                                    var img2 = document.createElement('img')
                                    img2.src = s2;
                                    img2.className = 's2'
                                    // 生成随机数
                                    var re2 = Math.round(Math.random() * dw);
                                    img2.style.left = re2 + 'px'



                                    this.sakura.appendChild(img2)

                                }


                            }, 1000)
                        }
                    </div>
                    <div className="sakura" ref={back => this.s2 = back}>
                        {
                            setInterval(() => {
                                // 获取容器宽度
                                var dw = getComputedStyle(this.s2, 'width').width;
                                // 转格式
                                var dw = dw.replace('px', '');
                                dw = dw * 1

                                //   生成随机数
                                var re = Math.round(Math.random() * 1);

                                if (re == 0) {
                                    var img = document.createElement('img')
                                    img.src = s1;
                                    img.className = 's1'

                                    // 生成随机数
                                    var re2 = Math.round(Math.random() * dw);
                                    img.style.left = re2 + 'px'

                                    // 动画


                                    this.s2.appendChild(img)

                                } else {
                                    var img2 = document.createElement('img')
                                    img2.src = s2;
                                    img2.className = 's2'
                                    // 生成随机数
                                    var re2 = Math.round(Math.random() * dw);
                                    img2.style.left = re2 + 'px'



                                    this.s2.appendChild(img2)

                                }


                            }, 1000)
                        }
                    </div>
                    <div className="sakura" ref={back => this.s3 = back}>
                        {
                            setInterval(() => {
                                // 获取容器宽度
                                var dw = getComputedStyle(this.s3, 'width').width;
                                // 转格式
                                var dw = dw.replace('px', '');
                                dw = dw * 1

                                //   生成随机数
                                var re = Math.round(Math.random() * 1);

                                if (re == 0) {
                                    var img = document.createElement('img')
                                    img.src = s1;
                                    img.className = 's1'

                                    // 生成随机数
                                    var re3 = Math.round(Math.random() * dw);
                                    img.style.left = re3 + 'px'

                                    // 动画


                                    this.s2.appendChild(img)

                                } else {
                                    var img2 = document.createElement('img')
                                    img2.src = s2;
                                    img2.className = 's2'
                                    // 生成随机数
                                    var re3 = Math.round(Math.random() * dw);
                                    img2.style.left = re3 + 'px'



                                    this.s2.appendChild(img2)

                                }


                            }, 1000)
                        }

                    </div>
                    <div className="sakura" ref={back => this.s4 = back}>
                        {
                            setInterval(() => {
                                // 获取容器宽度
                                var dw = getComputedStyle(this.s4, 'width').width;
                                // 转格式
                                var dw = dw.replace('px', '');
                                dw = dw * 1

                                //   生成随机数
                                var re = Math.round(Math.random() * 1);

                                if (re == 0) {
                                    var img = document.createElement('img')
                                    img.src = s1;
                                    img.className = 's1'

                                    // 生成随机数
                                    var re3 = Math.round(Math.random() * dw);
                                    img.style.left = re3 + 'px'

                                    // 动画


                                    this.s4.appendChild(img)

                                } else {
                                    var img2 = document.createElement('img')
                                    img2.src = s2;
                                    img2.className = 's2'
                                    // 生成随机数
                                    var re3 = Math.round(Math.random() * dw);
                                    img2.style.left = re3 + 'px'



                                    this.s4.appendChild(img2)

                                }


                            }, 1000)
                        }

                    </div>
                    <div className="sakura" ref={back => this.s5 = back}>
                        {
                            setInterval(() => {
                                // 获取容器宽度
                                var dw = getComputedStyle(this.s5, 'width').width;
                                // 转格式
                                var dw = dw.replace('px', '');
                                dw = dw * 1

                                //   生成随机数
                                var re = Math.round(Math.random() * 1);

                                if (re == 0) {
                                    var img = document.createElement('img')
                                    img.src = s1;
                                    img.className = 's1'

                                    // 生成随机数
                                    var re3 = Math.round(Math.random() * dw);
                                    img.style.left = re3 + 'px'

                                    // 动画


                                    this.s5.appendChild(img)

                                } else {
                                    var img2 = document.createElement('img')
                                    img2.src = s2;
                                    img2.className = 's2'
                                    // 生成随机数
                                    var re3 = Math.round(Math.random() * dw);
                                    img2.style.left = re3 + 'px'



                                    this.s5.appendChild(img2)

                                }


                            }, 1000)
                        }
                    </div>
                </div>
            </div>

        )
    }
}
