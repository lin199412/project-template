/*
 * @Author: linweibin
 * @Description: 
 * @props: 
 * @event: 
 * @Date: 2019-11-19 10:37:57
 * @LastEditors: linweibin
 * @LastEditTime: 2019-11-19 17:55:19
 */
class Shape {
    area: number;
    color: string;
    constructor ( name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "pink";
    };

    shoutout() {
        return "I'm " + this.color + " with an area of " + this.area + " cm squared.";
    }
}

var square = new Shape("square", 30, 30);
// console.log( square.shoutout() );
// console.log( 'Area of Shape: ' + square.area );
// console.log( 'Color of Shape: ' + square.color );