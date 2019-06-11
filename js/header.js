
    $(document).ready(function(){ 

        //保存固定头部的高度
    var  headerHeight= document.getElementById("header").offsetHeight;

    // 判断屏幕上划还是下滑
    var p=0,t=0;  
  
    $(window).scroll(function(e){  


            p = $(this).scrollTop(); 
            if (p>headerHeight) {
                $("#header").css({
                    "height":"0",
                    "z-index":"-1",
                    "width":"100%",
                    "overflow":"hidden",
                   "opacity":"0",
                   "position":"fixed",
                    "top":"0",
                    "transition": "all 0.5s"
                });
                $("body").css({
                    "margin-top":headerHeight+"px"
                });
            }
            if(t<=p){//下滚  

               window.up=false;
            }  
              
            else{//上滚  
                window.up=true;
            }  


            if (window.up) {
                $("#header").css({
                    "height":headerHeight+"px",
                    "opacity":"1",
                    "z-index":"10"
                });
            }
            setTimeout(function(){t = p;},0);         
    });  


     


      function getscroll() {
          return {
              top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
              left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
          };
      }


});  