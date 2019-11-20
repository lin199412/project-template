/*
 * @Author: linweibin
 * @Description: 
 * @props: 
 * @event: 
 * @Date: 2019-11-19 09:50:41
 * @LastEditors: linweibin
 * @LastEditTime: 2019-11-19 18:13:36
 */
import './styles/main.less'
import './styles/index.css'
import './styles/reset.css'
import testTs from './testTs'


let hash = {}
// arr3 = arr3.reduce((prev,cur,index)=>{
//     // 将cur的id放入hash对象中, 以cur的id作为hash的key
//     console.log(hash)
//     hash[cur.id] ? "" : hash[cur.id] = true && prev.push(cur)

//     // if(!hash[cur.id]){
//     //     hash[cur.id] = true
//     //     prev.push(cur)
//     // }
//     console.log(hash)
//     // console.log(cur)
//     // console.log(obj)
//     return prev
// },[])


let request = new XMLHttpRequest()
request.open('get','/',true)
request.setRequestHeader('b','2')
request.setRequestHeader('c',3)
request.withCredentials = true
request.onreadystatechange = function(){
    // console.log(request)
}
request.upload.onprogress = (ev)=>{
    console.log(11)
}
// json对象需要序列化成字符串格式
request.send('a=1')

