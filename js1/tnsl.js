window.onload=function () {
	
	
	
	// var count=0;
	// var setTime=setInterval(() => {
	//   banner_image();
	// }, 4000);
	// function banner_image(){
	// 	ulinfo.className='ullist animate';
	// 	count++;
	// 	ulinfo.style.marginLeft = (-1580*count)+'px';
	// 	setTimeout(function(){
	// 		if(count>2){
	// 			count=0;
	// 			ulinfo.className='ullist';
	// 			ulinfo.style.marginLeft = '0px';
	// 		}
	// 	},500);
	// }
	// var ulinfo=document.getElementById("ullist");
	// var ts=document.getElementsByClassName("ts");
	// var go_prev=document.getElementById("go_prev");
 //    var go_next=document.getElementById("go_next");
 //    var index=0;
 //    function go_pre(){
    
 //    }
	// go_prev.onclick=function(){
	// 	if(index==0){
	// 		index=ts.length-1;
	// 	}else{
	// 		index--;
	// 	}
	// }
	// go_next.onclick=function(){
	// 	if(index>ts.length-1){
	// 		index=0;
	// 	}else {
	// 		index++;
	// 	}
	// }
	
//获得标签对象
    let imgList = document.getElementById("imgList");
    let btn = $("btn");
    let leftBtn = document.getElementById("go_prev");
    let rightBtn = document.getElementById("go_next");

    //获得子元素
    let imgListChildren = imgList.children;

    //用来记录当前是第几张图片
    let index = 0;

    //一张图片的宽度
    const IMG_WIDTH = 1580;

    //存储定时器的返回值
    let timer = null;

    //当鼠标移入imgList时，btn显示
    imgList.onmousemove = function () {
        //鼠标进入时不自动播放，清除定时器
        clear();
    }
    //当鼠标移出imgList时，btn隐藏
    imgList.onmouseout = function () {
        //鼠标离开时，启动定时器
        startAuto();
    }

    //若不添加下面两句，则会出席那bug，鼠标进入btn时会抖动
    //当鼠标移到btn时，btn显示
    btn.onmouseenter = function () {
        //鼠标进入时不自动播放，清除定时器
        clear();
    }
    //当鼠标移出btn时，btn隐藏
    btn.onmouseout = function () {        //鼠标离开时，启动定时器
        startAuto();
    }

    //点击左侧按钮时，left向左移动
    leftBtn.onclick=function(){
        leftMove();
    }
    //左侧按钮
    function leftMove() {
        
        //向做移动index--
        index--;
        //若index===-1，那么就直接设置left为-4*IMG_WIDTH，然后index = 3
        if (index === -1) {
            imgList.style.left = -3 * IMG_WIDTH + "px";
            index = 2;
        }
        //设置left值
        MotionUtils.bufferMove(imgList, {
            left: -index * IMG_WIDTH
        });
       
    }
    //点击右侧按钮时，left向右运动
    rightBtn.onclick=function(){
        rightMove();
    }

   

    //自动播放
    startAuto();

    //自动播放
    function startAuto() {
        timer = setInterval(function () {
            rightMove();
        }, 4000);
    }

    //清除定时器
    function clear() {
        clearInterval(timer);
    }


   
   

    //右侧按钮
    function rightMove() {
        //向右移动index++
        index++;
        //若index===5，那么直接把imgList的left值设为0，index设为1
        if (index > 2) {
            imgList.style.left = 0;
            index = 0;
        }
        //设置left值
        MotionUtils.bufferMove(imgList, {
            left: -index * IMG_WIDTH
        });
        
      
    }
 var code=$("code");
 var weixin=$("weixin");
 var iphone=$("iphone");
 var anzhuo=$("anzhuo");
 var ip_code=$("ip_code");
 var az_code=$("az_code");
 weixin.onmouseenter=function () {
 	code.style.display = 'block';
 }
 code.onmouseenter=function () {
 	code.style.display = 'block';
 }
 weixin.onmouseleave=function() {
 	code.style.display="none";
 }
 code.onmouseleave=function() {
 	code.style.display="none";
 }
 iphone.onmouseenter=function () {
 	ip_code.style.display = 'block';
 }
 ip_code.onmouseenter=function () {
 	ip_code.style.display = 'block';
 }
 iphone.onmouseleave=function() {
 	ip_code.style.display="none";
 }
 ip_code.onmouseleave=function() {
 	ip_code.style.display="none";
 }
 anzhuo.onmouseenter=function () {
 	az_code.style.display = 'block';
 }
 az_code.onmouseenter=function () {
 	az_code.style.display = 'block';
 }
 anzhuo.onmouseleave=function() {
 	az_code.style.display="none";
 }
 az_code.onmouseleave=function() {
 	az_code.style.display="none";
 }

}
function $(id) {
    return document.getElementById(id);
}

function getStyle(element, attr) {
    let result = element.currentStyle ? element.currentStyle[attr] : getComputedStyle(element, null)[attr];
    return Number.parseFloat(result);
}



let MotionUtils = {
    /**
     *
     * @param obj 要改变的对象
     * @param attr 要改变的对象的属性
     * @param finalValue 要改变对象的属性的最大值
     * @param callback 在上一次运动完后下一次要运动的函数，回调自己
     */
    bufferMove: function (obj, data, callback) {
        //清除旧定时器
        clearInterval(obj.timer);
        //开启新定时器
        obj.timer = setInterval(function () {
            //flg标识运动是否完毕
            let flg = true;
            for (let attr in data) {
                //获得当前obj属性值
                let currentValue;
                if (attr === "opacity") {
                    currentValue = Number.parseFloat(getStyle(obj, attr)) * 100;
                } else {
                    currentValue = Number.parseInt(getStyle(obj, attr));
                }
                //计算速度
                let speed = (data[attr] - currentValue) / 8;

                //计算物体运动方向
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

                //计算下一次obj的属性值
                let nextValue = currentValue + speed;
                //设置属性值
                if (attr === "opacity") {
                    obj.style[attr] = nextValue / 100;
                    obj.style.filter = "alpha(opacity=" + nextValue + ")";
                } else {
                    obj.style[attr] = nextValue + "px";
                }
                //判断当前属性是否运动完毕
                if (nextValue !== data[attr]) {
                    flg = false;
                }
            }
            //清除定时器
            if (flg) {
                clearInterval(obj.timer);
                //如果传了callback，那么就执行这个函数
                if (callback) {
                    callback();
                }
            }
        }, 50);
    },



    fadein: function (element) {
        let speed = 0.1;
        clearInterval(element.timer);
        element.timer = setInterval(function () {
            let currentOpacity = Number(getStyle(element, "opacity"));

            if (currentOpacity < 1) {
                element.style.opacity = currentOpacity + speed;
            }
            if (currentOpacity >= 1) {
                element.style.opacity = 1;
                clearInterval(element.timer);
            }
        }, 50);
    },

    fadeout: function (element) {
        let speed = 0.1;
        clearInterval(element.timer);
        element.timer = setInterval(function () {
            let currentOpacity = Number(getStyle(element, "opacity"));

            if (currentOpacity > 0) {
                element.style.opacity = currentOpacity - speed;
            }
            if (currentOpacity <= 0) {
                element.style.opacity = 0;
                clearInterval(element.timer);
            }
        }, 50);
    }
   
}