export  function show() {
    // 返回一个action对象
    return {type:'show',data:true};
  }
export function hide() {
    return {type:'hide',data:false}
  }