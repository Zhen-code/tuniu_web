// 广告手风琴效果
function slide(){
    var list=$(".sfq li");
        for(var i = 0;i<list.length;i++){
            $(list[i]).mouseenter(function() {
                $(this).animate({
                    width: 120,
                    backgroundPosition:-98},
                    100, function() {
                   
                }).siblings(list[i+1]).animate({
                    width: 98,
                    backgroundPosition: 0},
                    100, function() {         
                });
            });
        }
        // end
    }
