/*
 * @Author: linweibin
 * @Description: 
 * @props: 
 * @event: 
 * @Date: 2019-11-19 09:50:41
 * @LastEditors: linweibin
 * @LastEditTime: 2019-11-19 10:03:27
 */


// 深拷贝 可拷贝对象里的对象
export const deepClone = (obj=>{
    let source = obj instanceof Array ? [] : {}
    for (const item in obj) {
        source[item] = obj[item] instanceof Object ? deepClone(obj[item]) : obj[item]
        // source[item] = typeof obj[item] === 'object' ? deepClone(obj[item]) : obj[item]
    }
    return source
})

// 数组去重
export const dumpArr = (arr,v) =>{
    let curArr = deepClone(arr)
    let hash = {}
    curArr = curArr.reduce((prev,cur)=>{
        // if(!hash[cur.id]){
        //     hash[cur.id] = true
        //     prev.push(cur)
        // }
        hash[cur[v]] ? "" : hash[cur[v]] = true && prev.push(cur)
        return prev
    },[])
    return curArr
}