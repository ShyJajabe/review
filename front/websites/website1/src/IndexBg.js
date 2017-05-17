/**
 * Created by admin on 2017/5/17.
 */
import React, { Component } from 'react';

class IndexBg extends Component {
    constructor(props) {
        super(props);
        // this.state = {isToggleOn: true};
        //
        // // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }
    componentDidMount() {
            var canvas = document.querySelector("#canvas");//获取Canavs标签
            var context = canvas.getContext("2d");//获取Canvas的上下文绘图环境
            var winW = window.innerWidth;//获取页面宽
            var winH = window.innerHeight;//获取页面高
            canvas.width = winW;//赋值Canvas的宽度
            canvas.height = winH;
console.log(context);


            context.fillStyle = '#fff';
            // context.fillRect(p.x, p.y, p.w, p.h);
            // context.strokeRect(p.x, p.y, p.w, p.h);

        context.fillRect(20,20,150,100);
    }
    render() {
        return (
            <canvas id="canvas"></canvas>
        );
    }
}

export default IndexBg;
