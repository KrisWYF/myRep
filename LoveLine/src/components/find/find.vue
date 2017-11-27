<template>
	<div class="Find-content">
	<div class="Header">
	<div class="Nav">
	<router-link to="/search"></router-link>
	<span>发现</span>
	<router-link :to="{path:'/initiate'}"></router-link>
    </div>
    </div>
    <div class="Seat">
    	<div class="S_content">
    		<router-link :to="{path:'/fire'}" tag="div" class="S_one">
    			<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/fire.png" alt="">
    			<p>最火话题</p>
    		</router-link>
    		<router-link :to="{path:'/beauty'}" tag="div" class="S_one">
    			<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/beauty.png" alt="">
    			<p>最美达人</p>
    		</router-link>
    		<router-link :to="{path:'hot'}" tag="div" class="S_one">
    			<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/hot.png" alt="">
    			<p>最热商品</p>
    		</router-link>
    	</div>
    </div>
    <div class="Product">
    	<ul>
    		<li v-for='(item,index) in findProducts'><img :src="item" alt=""></li>
    	</ul>
    </div>
     <div class="footer">
          <div class="footer_container">
                  
                    <router-link tag='p' exact to='index' active-class="act">
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
            <p class="dibu">~ * 到底咯 * ~</p>
	</div>
   
</template>
<script>

	export default{
		name:"find",
		data(){
			return{
				findProducts:[]
			}
		},
		created(){
			var currentUrl = this.$HOST + "/data/find.json";
			this.$axios.get(currentUrl)
			.then(res=>{
				this.findProducts=res.data.find_product;
				
				
			}).catch(error=>{
				console.log(error);
			})
		}
	}
</script>
<style scoped lang="less">
	.Find-content{
		.Header{
		width:100%;
		height:160/20rem;
		background:#ff406f;
		overflow:hidden;
		.Nav{
		width:95%;
		text-align:center;
		margin:40/20rem auto;
		color:#fff;
		font-size:20/20rem;
		overflow:hidden;
		a{
			display:inline-block;
			width:30/20rem;
			height: 30/20rem;
			background-color:#333;
			&:first-child{
				background:url("http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/find-search.png");
				background-size:30/20rem 30/20rem;
				float:left;
			}
			&:last-child{
				background:url("http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/find-@.png");
				background-size:30/20rem 30/20rem;
				float:right;
			}
		}
	    }
    }
    .Seat{
    	width:95%;
    	font-size:16/20rem;
    	text-align: center;
    	margin:0 auto;
    	color:#ff406f;
    	padding:10/20rem 0;
    	border:1px solid #fff;
    	border-radius:5px;
    	background-color:#fff;
    	box-shadow: 0px 0px 20px rgba(0,0,0,.3);
    	position:absolute;
    	top:90/20rem;
    	left:5%/2;
    	.S_content{
    		width:95%;
    		height:160/20rem; 
    			margin:0 auto;
    		.S_one{
    			float:left;
    			width:30%;
    			margin:0 1.6%;
    			img{
                  width:100%;
    			}
    			p{
    				margin:6/20rem;
    			}
    		}
    	}
    }
    .Product{
    	margin-top:150/20rem;
    	ul{
    		width:95%;
    		margin:0 auto;
    		li{
    			width:100%;
    			box-shadow: 0px 0px 20px rgba(0,0,0,.3);
    			border-radius:5px;
    			margin-top:20/20rem;
    			img{
    				width:100%;
    			}
    		}
    	}
    }
    margin-bottom:80/20rem;
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
    .dibu{
      color:#808080;
      font-size: 14/20rem;
      margin-top:20/20rem;
      text-align: center;
    }
</style>