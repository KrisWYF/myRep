<template>
  <div class='Container'>
      <div class='Heads'>
         <router-link :to="{path:'/register'}" tag='span'>我的</router-link>
         <router-link :to="{path:'/setIndex'}" tag='div' >
         <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/shez.png" alt="">
         </router-link>
      </div>
      <div class='Content'>
         <div class='User_img'>
         <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/mine_head.png"  alt="">
         </div>
         <div class='Message'>
           <p>Another</p>
           <p>Beautiful Lucky</p>
         </div>
         <div class='Btn'>
            <router-link :to="{path:'/care'}" tag='span'>关注</router-link>
            <router-link :to="{path:'/fans'}" tag='span'>粉丝</router-link>
         </div>
      </div>
      <div class='Bottom'>
         <router-link :to="{path:'/info'}" class="Info" tag="div">
         <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/info.png" alt="">
          <p>消息</p>
         </router-link>
         <router-link :to="{path:'/collect'}" class="Collect" tag="div">
         <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/collect.png" alt="">
           <p>收藏</p>
         </router-link>
         <router-link :to="{path:'/everyday'}" class="Sign" tag="div">
            <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/sign.png" alt="">
           <p>签到</p>
         </router-link>
      </div>
           <div class="footer">
          <div class="footer_container">
                    <router-link tag='p' exact to='/index' active-class="act">
                      <i class="iconfont icon-shouye myicon"></i><br/>
                      <span>首页</span>
                    </router-link>
                   
                
                    <router-link to='/find' tag='p'  active-class="find">
                      <i class="iconfont icon-discover myicon"></i><br/>
                      <span>发现</span>
                    </router-link>
             
             
                    <router-link tag='p' exact to='/classify'   active-class="category"><i class="iconfont icon-fenlei myicon"></i><br/>
                      <span >分类</span>
                    </router-link>
            
                
                  <router-link tag='p' exact to='/mine' active-class="mine"><i class="iconfont icon-wode myicon"></i>
                    <br/><span>我的</span>
                  </router-link>
                
                   </div>
            </div>
    </div>
</template>

<script>

export default {
  name: 'Mine',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.Container{
   position: relative;
   .Heads{

       width: 100%;
       height: 200/20rem;
       padding: 5/20rem  10/20rem;
       box-sizing: border-box;
       background-color: #ff406f;
       color: #fff;
       text-align: center;
       font-size: 18/20rem;
       padding-top:30/20rem; 
       overflow: hidden;
       div{
        float: right;
        margin-top: -0.3rem;
       img{
        width: 25/20rem;
        height: 25/20rem;
       }
      }
     }
   .Content{
        width: 95%;
        height: 150/20rem;
        border: 1px solid #fff;
        border-radius: 5/20rem;
        position: absolute;
        top: 150/20rem;
        left:5%/2;
        background-color: #fff;
        box-shadow: 0px 0px 30px #888888;
        .User_img{
          width: 70/20rem;
          height: 70/20rem;
          position: absolute;
          top: -20/20rem;
          left: 12/20rem;
          img{
            width: 70/20rem;
            height: 70/20rem;
          }
        }
        .Message{
          position: absolute;
          top: 0.6rem;
          left: 5rem;
          // border: 1px solid #000;
        }
        .Btn{
          // border: 1px solid #000;
          position: absolute;
          bottom: 1rem;
          margin-left: 50%;
          transform:translateX(-50%);
          span:first-child{
           margin-right: 5rem;
          }
          span{
            font-size: 16/20rem;
          }
        }
   }
   .Bottom{
      width: 355/20rem;
      height: 60/20rem;
      border: 1px solid #fff;
      background-color: #fff;
      position: absolute;
      top: 330/20rem;
      margin-left: 50%;
      transform:translateX(-50%);
      border-radius: 5/20rem;
      box-shadow: 0px 0px 20px #888888;
      font-size: 17/20rem;
         div{
          position: absolute;
          p{
            color: #333;
          }
          img{
            width: 23/20rem;
            height: 23/20rem;
            position: absolute;
            top: -27/20rem;
            left: 2/20rem;
          }
         }
        .Info{
           position: absolute;
           top: 72%;
           transform:translateY(-50%);
           left: 15%;
        }
        .Collect{
          position: absolute;
          top: 72%;
          transform:translateY(-50%);
          left: 45%;
        }
        .Sign{
          position: absolute;
          top: 72%;
          transform:translateY(-50%);
          left: 75%;
        }
        
      }
     
   }
   .act,.find,.category,.mine{
   color:#ff406f;
}

 .footer{
  position:fixed;
  z-index: 999;
  bottom: 0;
  width: 100%;
  height: 120/40rem;
  background: #fff;
  margin: 0;
 }
 .footer_container{
  width: 624/40rem;
  padding: 10/40rem  0 0;
  
  margin: 0 auto;
  overflow: hidden;
 }
  .footer_container p{
    float: left;
    text-align: center;
    // margin-right: 90/40rem;
  }
  .footer_container p  i{
    font-size: 50/40rem;
  }
   .footer_container p span{
    font-size: 30/40rem;
   }
 
    // .footer_container p:nth-child(1) span,.footer_container p:nth-child(1) i{
    //     color:#ff406f;
    // }
    .footer_container p:nth-child(4){
      margin-right: 0;
      float: right;
    }
    .footer_container p:nth-child(2){
        margin-left:3.25rem;
    }
    .footer_container p:nth-child(3){
        margin-left: 3.25rem;
    }
</style>
