
document.addEventListener("DOMContentLoaded", function () {
    


    const app = {
      
      // su ly cac su kien
      handleEvent: function () {
        const _this = this;
        
        
        // hide cac element khi click ra ngoai
        document.addEventListener('click',function(e){
          
        })
      },
      
      // window scroll
      windowScroll:function(){
        var _this = this;
        window.onscroll = function(){
          
        }
      },
      // khoi tao function start
      start: function () {
        
        // su ly cac su kien
        this.handleEvent();
        // window scroll
        this.windowScroll();
      },
    };
  
    app.start();
  });
