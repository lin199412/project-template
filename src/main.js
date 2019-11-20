/*
 * @Author: linweibin
 * @Description: 
 * @props: 
 * @event: 
 * @Date: 2019-11-19 09:50:41
 * @LastEditors: linweibin
 * @LastEditTime: 2019-11-20 16:37:18
 */
import './styles/main.less'
import './styles/index.css'
import './styles/reset.css'
import testTs from './testTs'

import ajax from './request'

console.log(ajax)
ajax({
    url: "http://h5.test.hengqihj.com/hjBaseUrl/inf/api/h5/information/detail",
    type: "GET",
    data: {
        id: 183
    },
    dataType: "json",
    success: function (response) {
      // 此处放成功后执行的代码
       // 解析返回的字符串 转为json对象
      var usingdata = eval("("+response+")");
      console.log(usingdata)
    },
    fail: function (status) {
      // 此处放失败后执行的代码
    }
});

ajax({
    url:"http://h5.test.hengqihj.com/hjBaseUrl/inf/api/h5/infcomment/add",
    type:'POST',
    data:{
        infoId:'186',
        comment:'评论',
        token:'811b04668000016e86b75ace84000090'
    },
    dataType:'json',
    timeout:10000,
    contentType:"application/json;charset=UTF-8",
    success:function(data){
　　　　//服务器返回响应，根据响应结果，分析是否登录成功
    },
    //异常处理
    error:function(e){
        console.log(e);
    }
})

/**
 * YDUI 可伸缩布局方案
 * rem计算方式：设计图尺寸px / 100 = 实际rem  例: 100px = 1rem
 */
!function (window) {

    /* 设计图文档宽度 */
    var docWidth = 750;

    var doc = window.document,
        docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

    var recalc = (function refreshRem () {
        var clientWidth = docEl.getBoundingClientRect().width;

        /* 8.55：小于320px不再缩小，11.2：大于420px不再放大 */
        docEl.style.fontSize = Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) * 5 + 'px';

        return refreshRem;
    })();

    /* 添加倍屏标识，安卓为1 */
    docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1);

    if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
        /* 添加IOS标识 */
        doc.documentElement.classList.add('ios');
        /* IOS8以上给html添加hairline样式，以便特殊处理 */
        if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
            doc.documentElement.classList.add('hairline');
    }

    if (!doc.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

}(window);