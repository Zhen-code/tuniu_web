$(document).ready(function () {
	var slidingpiece=$(".sliding-piece");
	var pre=$(".mask-left");
	var nex=$(".mask-right");
	function animate(offset){
		var left=parseInt(slidingpiece.css('left'));
        if(left<-1516){
        	left=0;
        }

		var newleft=left+offset;
		if(newleft>0){
			left=-1516;
			 slidingpiece.css('left', left);
		}
		var allTime=500;
        var count=10;
        var speed=offset/(allTime/count);
        speed=parseInt(speed);
        if(left>newleft){
        var slideleft=left+speed;
        	
        	 	setInterval(() => {
        	 	 if(slideleft>newleft){
        	 	 slideleft+=speed;
                 slidingpiece.css('left', slideleft);
                 } 
        	 	}, 20);
             
         }
        }
	pre.click(function() {
    	animate(758);
    });
    nex.click(function() {
    	animate(-758);
    });
	});
   
    // setInterval(() => {
    //   animate(-758);
    // }, 3000);
