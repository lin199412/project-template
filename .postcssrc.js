/*
 * @Author: linweibin
 * @Description: 
 * @props: 
 * @event: 
 * @Date: 2019-11-19 10:27:46
 * @LastEditors: linweibin
 * @LastEditTime: 2019-11-20 16:40:22
 */
// https://github.com/michael-ciniawsky/postcss-load-config
// postcss的插件配置
module.exports = {
    "plugins": {
      // import语法引入css
      "postcss-import": {},
      // 使用autoprefixer语法,在package.json里使用browserslist字段定义autoprefixer的配置
      "autoprefixer": {}
    }
  }