
// 引入
import axios from 'axios'

var init=[{}]



export default function Context(prevstate=init,action) {
    // 解构
    var {data,type}=action;
    switch (type){
        case 'Ajax':
            // 发送ajax请求
            axios()

    }
  }