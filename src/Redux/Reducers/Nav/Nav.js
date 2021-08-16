// 是一个纯函数
// 初始值
var initdata=false;
export default function Reducer(prevstate=initdata,action) { 
    // 解构action
    var {type,data}=action;
    console.log('a')
    switch (type){
        case 'show':return data
        case 'hide':return data
        default:
            return prevstate
    }

    }
 