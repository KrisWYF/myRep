<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

import Classify  from  "./components/classify/classify"
export default {
  name: 'app',

  components:{
    Classify
  }

}
</script>

<style  lang="less">
/*swicth 开关*/
 .Set-main .el-switch__core{
     position: absolute;
     right: -94/20rem;
    
  }
/*swicth 开关*/
 
 /*轮播图开始*/
 .start-swiper .swiper-wrapper{
 padding-bottom: 2rem;
 }
  .start-swiper .el-carousel__item{
  height:100%;
 }
 .start-swiper .swiper-pagination-bullets{
  &>span:last-child{
    display: none;
  }
}


.start-swiper  .swiper-pagination-bullet-active{
  background: rgba(255,255,255,.7);
}
.start-swiper .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
  
}

 /*轮播图结束*/

/*发表看法开始*/
.el-upload--picture-card{
    width:62/20rem;
    height:62/20rem;
    border: none;
    border-radius: 10px;
    background: url('http://andypoppy.oss-cn-beijing.aliyuncs.com/images/upload.png');
    background-size: 100%100%;
    i{display: none;}
} 

.el-upload-list--picture-card{
   width:62/20rem;
    height:62/20rem;
    
  .el-upload-list__item-status-label{
    background: #FF406F;
  }


}

 /*发表看法结束*/
 
.Talk .el-tabs__item.is 

-active {
    color: #ff406f;

  }
  .Talk .el-tabs__item{
      font-size:18/20rem;
      padding:0 24/20rem;
  }
  .Talk .el-tabs__nav-wrap::after{
        content: "";
    position: static;
  }
  .Talk .el-tabs__active-bar{
    position: static;
    background-color: #fff;
  }
  .Talk .el-tabs__nav-scroll{
    padding:0 20/20rem;
  }
  .el-upload--picture-card{
    width:62/20rem;
    height:62/20rem;
    border: none;
    border-radius: 10px;
    background: url('http://andypoppy.oss-cn-beijing.aliyuncs.com/find/upload.png');
    background-size: 100%100%;
    i{display: none;}
} 

.el-upload-list--picture-card{
   width:62/20rem;
    height:62/20rem;
    
  .el-upload-list__item-status-label{
    background: #FF406F;
  }


}

 
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}
body {
  line-height: 1;

}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
a{text-decoration: none;display: inline-block;}
/* remember to define focus styles! */
:focus {
  outline: 0;
}

/* remember to highlight inserts somehow! */
ins {
  text-decoration: none;
}
del {
  text-decoration: line-through;
}

/* tables still need 'cellspacing="0"' in the markup */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

</style>

