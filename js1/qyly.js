$(document).ready(function () {
	var wechat=$(".wechat");
	var wechat_code=$(".wechat_code");
	wechat.mouseenter(function() {
	wechat_code.css('display', 'block');
	});
	wechat.mouseleave(function() {
    wechat_code.css('display', 'none');
	});
	$('.carousel').carousel({
  interval: 3000
});
	var scroll_top=$("#scroll_top");
	scroll_top.click(function() {
		$("html,body").animate({scrollTop:0}, 500);
	});
	var prev=$("#prev");
    var next=$("#next");
	var index=0;
	var blocklist=$(".block");
	function clear_active(){
		for(var i=0;i<blocklist.length;i++){
			$(blocklist[i]).removeClass(' blockactive');
		}
	}
	function go_index(){
		clear_active();
		$(blocklist[index]).addClass('blockactive');
	}
	function go_prev(){
		if(index==0){
			index=0;
			prev.hide();
		}else{index--;}
		go_index();
	}
	function go_next(){
		index++;
		if(index==blocklist.length-1){
			index=blocklist.length-1;
			next.hide();
		}
		go_index();
	}
   prev.click(function() {
   	next.show();
   	go_prev();
   });
   next.click(function() {
   	prev.show();
   	go_next();
   });
});