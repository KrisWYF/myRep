<template>
   <div class="classify">
      <div class="classify-cont">
        <nav>
          <span></span>
          <h1>分类</h1>
        </nav>
       <div class="classify-main">
       	  <div class="pro">
       	  	 <img  src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/classify/caizhuang_03.png" alt="" />
       	  	 <div class="pro-box"> 
                <!--<div class="grid" v-for="(icon,index) in list.icon" :key='index'>
                    <i :class="icon"></i>
                </div>
                <h4 v-for="(desc,index) in list.desc" :key='index'>{{desc}}</h4>-->
                <div class="grid">
                    <i class="iconfont icon-icon41"></i>
       	  	 		<h4>粉底</h4>
                </div>
                <router-link :to="{path:'Cheek'}" class="grid">
                    <i class="iconfont icon-tiandi"></i>
       	  	 		<h4>腮红</h4>
                </router-link>
                <div class="grid">
                   <i class="iconfont icon-icon41"></i>
       	  	 		<h4>眼彩</h4>
                </div>
                 <div class="grid">
                    <i class="iconfont icon-icon003"></i>
       	  	 		<h4>睫毛膏</h4>
                </div>
                <div class="grid">
                    <i class="iconfont icon-jiugaixin-meizhuang"></i>
       	  	 		<h4>眉笔</h4>
                </div>
                
       	  	 </div>
       	  </div>
       	   <div class="pro">
       	  	 <img  src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/classify/mianbu_03.png" alt="" />
       	  	 <div class="pro-box"> 
                <div class="grid">
                    <i class="iconfont icon-hufu"></i>
       	  	 		<h4>卸妆</h4>
                </div>
                <div class="grid">
                   <i class="iconfont icon-jifuhuli"></i>
       	  	 		<h4>洁面</h4>
                </div>
                <div class="grid">
                    <i class="iconfont icon-t"></i>
       	  	 		<h4>T部护理</h4>
                </div>
                <div class="grid">
                    <i class="iconfont icon-meironghufu"></i>
       	  	 		<h4>面部护理</h4>
                </div>
                <div class="grid">
                   <i class="iconfont icon-Imeironghuazhuang-xifahufa"></i>
       	  	 		<h4>颈部护理</h4>
                </div>
                <div class="grid">
                   <i class="iconfont icon-yanzhuang"></i>
       	  	 		<h4>眼部护理</h4>
                </div>
                
       	  	 </div>
       	  </div>
       	    <div class="pro">
       	  	 <img class="xiang" src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/classify/xiangshui_03.png" alt="" />
       	  	 <div class="pro-box"> 
                <div class="grid">
                    <i class="iconfont icon-xiangshui1"></i>
       	  	 		<h4>女士香水</h4>
                </div>
                <div class="grid">
                    <i class="iconfont icon-xiangshuicaizhuang"></i>
       	  	 		<h4>男士香水</h4>
                </div>
                <div class="grid">
                    <i class="iconfont icon-Imeironghuazhuang-shuangfushui"></i>
       	  	 		<h4>迷你香水</h4>
                </div>
                <div class="grid">
                    <i class="iconfont icon-xiangshuicaizhuang"></i>
       	  	 		<h4>香体走珠</h4>
                </div>

       	  	 </div>
       	  </div>
       </div>
      </div>
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
   </div>
</template>

<script>
import  '../../assets/css/icon/iconfont.css'	
import  Footers  from '../../components/footer.vue'
 
 export default {
  name: 'Classify',
  data(){
  	 return{

  	 }
  },
  components:{
    Footers
  }


}
</script>

<style scoped lang='less'>
  .classify{
  	width: 100%;
  	padding-bottom: 2rem;
  	box-sizing: border-box;
  
  }
  nav{
  	padding: 2rem  6/20rem  8/20rem;
  	background:#FF406F;
  	display: flex;
  	flex-direction: row;
  	color: #FFFFFF;
  	align-items: center;
  	text-align: center;
  	
  	&>span{
  		width:30/20rem;
  		height: 30/20rem;
  		display: inline-block;
  		background:url('http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/sousuo.png') no-repeat;
  		background-size: 100%;
  	}
  	&>h1{
  		flex-grow: 1;
  		padding-right: 1.5rem;
  		font-weight: 400;
  	
  	}
  	
  
  	}
  	
  	.classify-main{
  		width: 95%;
  		margin: 0 auto;
  		text-align: center;
  		img{
  		 margin: 1rem 0;
  		  width: 117/20rem;
  		}
  		.xiang{
  			width:4.5rem;
  		}
  		.pro-box{
  			
  			box-sizing: border-box;
  		    padding-left: 1rem;
  		    padding-top: 1rem;
  		  
  			width: 100%;
  			height: 180/20rem;
  			border-radius: 5px;
  			box-shadow: 0px 0px 8px #D5D6E2;
  	
  		    .iconfont{
  		    &:hover{color:#FF406F;}
  			font-size: 2rem;
            color: #808080;
			
  		    }
  		   
  		    .grid{
  		    	cursor: pointer;
  		    	padding:0 1rem;
  		    	float: left;
  		    	padding-bottom: 1rem;
  		    }
  		    
  		    h4{
  		    	margin-top: 5px;
  		    	font-size: 12/20rem;
  		    	font-weight:400;
  		    	color: #959595;
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