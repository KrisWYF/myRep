<template>
	<div class='sum'>
		
         <div class="footer">
          <div class="footer_container">
                  
                    <router-link tag='p' exact to='/index' active-class="act">
                      <i class="iconfont icon-shouye myicon"></i><br/>
                      <span>首页</span>
                    </router-link>
                   
                
                    <router-link exact to='/find' tag='p'  active-class="find">
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
            <router-view/>
            
	</div>
	
</template>
<script>
	export default{

		name:'footers',
		data(){
			return{

			}
		}

	}
</script>
<style scoped lang='less'>
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