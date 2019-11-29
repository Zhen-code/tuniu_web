$(document).ready(function () {
        slide();//手风琴效果
        setInterval("noticeUp('.notice ul','-66px',1000)", 4000);//公告栏
        /*超级菜单切换*/
        var cjtm_active=$(".cjtm_active");
        var cjtm_list=$(".cl");
        var cjtm_pane=$("#cjtm_pane");
        var cjtm_box=$(".cjtm_box");
        var cjzyx_box=$(".cjzyx_box");
        var lufq_box=$(".lufq_box");
        var tjjp_box=$(".tjjp_box");
        var tjjd_box=$(".tjjd_box");
        var tjqz_box=$(".tjqz_box");
        var tjmp_box=$(".tjmp_box");
        for(var i=0;i<cjtm_list.length;i++){
          $(cjtm_list[i]).mouseenter(function(){
             $(this).addClass("cjtm_active").siblings().removeClass("cjtm_active");
              var index=$(cjtm_list).index($(this));
              switch (index) {
                case 0:
                  var zhuangtai=cjtm_box.css('display');
                  if(zhuangtai=="none"){
                    cjtm_pane.children().css('display', 'none');
                  }
                 
                  cjtm_box.css('display','block');
                  break;
                 case 1:
                  var zhuangtai=cjzyx_box.css('display');
                  if(zhuangtai=="none"){
                    cjtm_pane.children().css('display', 'none');
                  }
                  function show(){
                    cjzyx_box.css('display', 'block');
                  }
                  setTimeout(show(),4000);
                  
                  break;
                  case 2:
                  var zhuangtai=lufq_box.css('display');
                  if(zhuangtai=="none"){
                    cjtm_pane.children().css('display', 'none');
                  }
                  lufq_box.css('display', 'block');
                  break;
                  case 3:
                  var zhuangtai=tjjp_box.css('display');
                  if(zhuangtai=="none"){
                    cjtm_pane.children().css('display', 'none');
                  }
                  tjjp_box.css('display', 'block');
                  break;
                  case 4:
                  var zhuangtai=tjjd_box.css('display');
                  if(zhuangtai=="none"){
                    cjtm_pane.children().css('display', 'none');
                  }
                  tjjd_box.css('display', 'block');
                  break;
                  case 5:
                  var zhuangtai=tjqz_box.css('display');
                  if(zhuangtai=="none"){
                    cjtm_pane.children().css('display', 'none');
                  }
                  tjqz_box.css('display', 'block');
                  break;
                   case 6:
                  var zhuangtai=tjmp_box.css('display');
                  if(zhuangtai=="none"){
                    cjtm_pane.children().css('display', 'none');
                  }
                  tjmp_box.css('display', 'block');
                  break;
                default:
                  break;
              }
           });
        }
        // end
        // media-boxshadow
        var len=$("#cjtm_pane .media");
        for(var i=0;i<len.length;i++){
          $(len[i]).mouseenter(function() {
            $(this).css({'boxShadow':'2px 2px 2px orange','position':'relative'});
          }).mouseleave(function() {
            $(this).css({'boxShadow':'none'});
          });
        }
      // 结束 
      // 当季热玩菜单
       var djrw_active=$(".djrw_active");
        var djrw_list=$(".dl");
        var djrw_pane=$("#djrw_pane");
         var djrw_right=$(".djrw_right");
        var cjgat=$(".cjgat");
        var cjcx=$(".cjcx");
        var cjzz=$(".cjzz");
        var yl=$(".yl");
        var hd=$(".hd");
        var jngt=$(".jngt");
        var jnzz=$(".jnzz");
        var zbzj=$(".zbzj");
        for(var i=0;i<djrw_list.length;i++){

          $(djrw_list[i]).mouseenter(function(){
            $(this).addClass("djrw_active").siblings().removeClass('djrw_active');
              var index=$(djrw_list).index($(this));
              switch (index) {
                case 0:
                  var zhuangtai=cjgat.css('display');
                  if(zhuangtai=="none"){
                    djrw_right.children().css('display', 'none');
                  }
                 
                  cjgat.css('display','block');
                  break;
                 case 1:
                  var zhuangtai=cjcx.css('display');
                  if(zhuangtai=="none"){
                    djrw_right.children().css('display', 'none');
                  }
                  function show(){
                    cjcx.css('display', 'block');
                  }
                  setTimeout(show(),4000);
                  
                  break;
                  case 2:
                  var zhuangtai=cjzz.css('display');
                  if(zhuangtai=="none"){
                    djrw_right.children().css('display', 'none');
                  }
                  cjzz.css('display', 'block');
                  break;
                  case 3:
                  var zhuangtai=yl.css('display');
                  if(zhuangtai=="none"){
                    djrw_right.children().css('display', 'none');
                  }
                  yl.css('display', 'block');
                  break;
                  case 4:
                  var zhuangtai=hd.css('display');
                  if(zhuangtai=="none"){
                    djrw_right.children().css('display', 'none');
                  }
                  hd.css('display', 'block');
                  break;
                  case 5:
                  var zhuangtai=jngt.css('display');
                  if(zhuangtai=="none"){
                    djrw_right.children().css('display', 'none');
                  }
                  jngt.css('display', 'block');
                  break;
                   case 6:
                  var zhuangtai=zbzj.css('display');
                  if(zhuangtai=="none"){
                    djrw_right.children().css('display', 'none');
                  }
                  zbzj.css('display', 'block');
                  break;
                default:
                  break;
              }
           });
          }
          // end
          var cjcx_list=$(".cjcx_list>li");
          for(var i=0;i<cjcx_list.length;i++){
            $(cjcx_list[i]).mouseenter(function(){
              $(this).addClass('cjcx_active').siblings().removeClass('cjcx_active');
            })
          }
          // end
          var cp_active=$(".cp_active");
          var cp=$(".cxphb_list li");
          for(var i=0;i<cp.length;i++){
            $(cp[i]).click(function() {
              $(this).addClass("cp_active").siblings().removeClass("cp_active");
            });
          }
});

    window.onload=function(){
      // 轮播图效果
    var items=document.getElementsByClassName("item");
    var points=document.getElementsByClassName("point");
    var time=0;
    var goPrev=document.getElementById("goprev");
    var goNext=document.getElementById("gonext");
    var index=0;
    var clearActive=function () {
        for(var i=0;i<items.length;i++){
            items[i].className='item';
        }
        for(var i=0;i<points.length;i++){
            points[i].className='point';
        }
    }
    var goIndex=function () {
        clearActive();
        items[index].className='item active';
        points[index].className='point active';
    }
    var gonext=function () {
        if(index<items.length-1){
            index++;
        }else {
            index=0;
        }
        goIndex();
    }
    goNext.addEventListener('click',function () {
        gonext();
    });
    var goprev=function () {
        
        if(index==0){
            index=5;
        }else{
            index--;
        }
        goIndex();
    }
    goPrev.addEventListener('click',function () {
        goprev();
    });
    for(var i=0;i<points.length;i++){
        points[i].addEventListener('click',function () {
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
    // 轮播图end
    var yjg=document.getElementsByClassName("yjg");
    var point1=document.getElementsByClassName("point1");
    var index_yjg=0;
    var time_yjg=0;
    var clear_active=function(){
      for(var i=0;i<yjg.length;i++){
        yjg[i].className='yjg';
      }
      for(var i=0;i<point1.length;i++){
        point1[i].className='point1';
      }
    }
   var go_index=function(){
    clear_active();
    yjg[index_yjg].className='yjg yjgactive9';
    point1[index_yjg].className='point1 point_active';
   }
   var go_next=function(){
    if(index_yjg<yjg.length-1){
      index_yjg++;

    }else{
      index_yjg=0;
    }
    go_index();
   }
setInterval(() => {
      time_yjg++;
      if(time_yjg==30){
      go_next();
      time_yjg=0;
      }
    }, 100);
for(var i=0;i<point1.length;i++){
  point1[i].addEventListener('click',function(){
    var index_data=this.getAttribute('data-index');
    index_yjg=index_data;
    go_index();
  })
}
// index头部城市选择效果
var station=$(".station");
station.mouseenter(function() {
  $(".show_city").css('display', 'block');
}).mouseleave(function() {
  $(".show_city").css('display', 'none');
});
$(".show_city").mouseenter(function() {
  $(".show_city").css('display', 'block');
}).mouseleave(function() {
  $(".show_city").css('display', 'none');
});
var lilist=$("#tags li");
var tagContent=$(".tagContent");
for(var i=0;i<lilist.length;i++){
  $(lilist[i]).click(function() {
    $(this).addClass('sa_active').siblings().removeClass('sa_active');
    var index=$(this).index();
    switch (index) {
      case 0:
        $(tagContent[0]).addClass('selectTag').siblings().removeClass('selectTag');
        break;
      case 1:
        $(tagContent[1]).addClass('selectTag').siblings().removeClass('selectTag');
      default:
        // statements_def
        break;
    }
  });
}

}
