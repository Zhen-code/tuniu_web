$(document).ready(function () {
	var list=$(".list");
	$(".nav li").click(function() {
		if(!$(this).hasClass('selected')){
			$(this).addClass('selected').css('color', 'orange');
			$(this).siblings().removeClass('selected').css('color', 'black');;
		}
		var index=$(this).index();
        $(list[index]).css('display', 'block').siblings().css('display', 'none');
	});
	var bh=$(".bh");
	var index=0;
	var time=0;
	function clear_active(){
		for(var i=0;i<bh.length;i++){
			bh[i].className='bh';

		}
	}
	function go_index(){
		clear_active();
		bh[index].className='bh bh_active';
	}
    function go_next(){
    	if(index<bh.length-1){
    		index++;
    	}
    	else {
    		index=0;
    	}
    	go_index();
    }
    setInterval(() => {
      time++;
      if(time==30){
      	go_next();
      	time=0;
      }
    }, 100);
    var lgx=$("#lgx");
    var lgx_btn=$("#lgx_btn");
    var lgx_dx=$(".lgx_dx");
    var btn_group=$(".btn_group");
    var lgx_p=$(".lgx_p");
    lgx_btn.click(function() {
    	lgx.css('height', '80');
    	lgx_p.css('display', 'none');
    	$(this).css('display', 'none');
        lgx_dx.css('display', 'block');
        btn_group.css('display', 'block');
    });
    var y=$("#y");
    var n=$("#n");
    y.click(function() {
    	lgx_btn.css('display', 'block');
    	lgx.css('height', '30');
        lgx_dx.css('display', 'none');
        btn_group.css('display', 'none');
    });
    var thumbnail=$(".row .thumbnail");
    for(var i=0;i<thumbnail.length;i++){
    	$(thumbnail[i]).mouseenter(function() {
    		$(this).css({
    			marginTop: '-6px',
    			boxShadow: '0px 4px 15px #ccc'
    		});
    	});
    	$(thumbnail[i]).mouseleave(function() {
    		$(this).css({
    			marginTop: '0px',
    			boxShadow: 'none'
    		});
    	});
    }
});