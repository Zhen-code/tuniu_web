$(document).ready(function () {
	var rtli=$(".rt");
	$(rtli[0]).mouseenter(function() {
		$(".rt .one").rotate({
			animateTo:180
		});
	}).mouseleave(function() {
		$(".rt .one").rotate({
			animateTo:0
		});
	});
	$(rtli[1]).mouseenter(function() {
		$(".rt .two").rotate({
			animateTo:180
		});
	}).mouseleave(function() {
		$(".rt .two").rotate({
			animateTo:0
		});
	});
	$("#tn-slide").mouseenter(function() {
		$(".preNext").css('display', 'block');
	}).mouseleave(function() {
		$(".preNext").css('display', 'none');
	});
	var carsour=$(".carsour");
	var pre=$(".pre");
	var next=$(".next");
	var listpoint=$("#point li");
	var index=1;
	function clear_active(){
	for(var i=0;i<listpoint.length;i++){
		$(listpoint[i]).removeClass('point-active');
	}
}
    function go_index(){
    	clear_active();
    	$(listpoint[index-1]).addClass('point-active');
    }
	function animate(offset){
    var left=carsour.css('left');
    left=parseInt(left);
    var newleft=left+offset;
    if (newleft>-920) {
     newleft=-4600;
    }
    if(newleft<-4600){
     newleft=0;
    }
    carsour.css('left', newleft);
 }

	pre.click(function() {
		index--;
		if(index==0){
			index=5;
		}
		go_index();
		animate(920);
	});
	next.click(function() {
		index++;
		if(index>5){
			index=1;
		}
		go_index();
		animate(-920);
	});
	var autoplay=function() {
		index++;
		if(index>5){
			index=1;
		}
		go_index();
		animate(-920);
	}
	setInterval(() => {
	 autoplay();
	
	}, 3000);
	for(var i=0;i<listpoint.length;i++){
		$(listpoint[i]).mouseenter(function () {
			if($(this).hasClass('point-active')){
				return;
			}//优化已有类代码
			$(this).addClass('point-active').siblings().removeClass('point-active');
			var myIndex=$(this).attr('index');
			var newoffset=-920*(myIndex-index);
            animate(newoffset);
            index=myIndex;
		});
	}
});