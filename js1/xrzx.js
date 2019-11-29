 window.onload=function(){
      // 轮播图效果
    var pp=document.getElementsByClassName("pp");
    var po=document.getElementsByClassName("po");
    var time=0;
    var index=0;
    var clearActive=function () {
        for(var i=0;i<pp.length;i++){
            pp[i].className='pp';
        }
        for(var i=0;i<po.length;i++){
            po[i].className='po';
        }
    }
    var goIndex=function () {
        clearActive();
        pp[index].className='pp active';
        po[index].className='po po_active';
    }
    var gonext=function () {
        if(index<pp.length-1){
            index++;
        }else {
            index=0;
        }
        goIndex();
    }
    for(var i=0;i<po.length;i++){
        po[i].addEventListener('mouseenter',function () {
             var pointIndex=this.getAttribute('data-index');
             index=pointIndex;
           goIndex();
           time=0; 
        });
    }
    setInterval(() => {
      time++;
      if(time==30){
      gonext();
      time=0;
      }
    }, 100);
}