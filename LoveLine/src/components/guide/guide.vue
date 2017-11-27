<template>
	<div class="start-swiper">
	 <swiper :options="swiperOption">
	      <swiper-slide>
	      	<div class="text">
	      		<p class="first">全新首页</p>
	      		<p class="second">精选美丽文章&nbsp; 让你美丽在线</p>
	      	</div>
	        <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/guide/guide1-01_03.png">
	        <div class="smallpic a">
	        	<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/guide/guide1-02_03.png">
	        </div>

	        
	      </swiper-slide>
	      <swiper-slide>
	      	<div class="text">
	      		<p class="first">发现美丽</p>
	      		<p class="second">参与最火话题</p>
	      	</div>
	        <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/guide/guide2-01_03.png">
	        <div class="smallpic b">
	        	<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/guide/guide2-02_03.png">
	        </div>
	      </swiper-slide>
	      <swiper-slide>
	      	<router-link :to="{path:'/login'}">
	      	<div class="text">
	      		<p class="first">关注美丽</p>
	      		<p class="second ">让你成为时尚博主</p>
	      	</div>
	          <img  class ='lastPic'     src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/guide/guide2-01_03.png">
	        <div class="smallpic c">
	        	<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/guide/guide3-02_03.png">
	        </div>
	        </router-link>
	      </swiper-slide>

	        <swiper-slide>
	        	<div class='Enter'>
	      	  <router-link :to="{path:'/login'}">
	      	  	点击进入 >>
	          </router-link>
	          </div>
	      </swiper-slide>
           
      <!-- Optional controls -->
       <div class="swiper-pagination"  slot="pagination"></div> 
    </swiper>
	</div>
</template>
<script>
	export default {
	    name: 'guide',
	    data () {
		    return {
		     	show: true,
		        swiperOption: {
	            // swiper options 所有的配置同swiper官方api配置
	            // autoplay: 1000,
	            grabCursor: true,
	            setWrapperSize: true,
	            autoHeight: true,
	            pagination: '.swiper-pagination',
	            paginationClickable: true,
	            mousewheelControl: true,
	            observeParents: true,
	            loop:false,
	            // swiper callbacks
	            // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
	            onTransitionStart (swiper) {
		            console.log(swiper.activeIndex)
		            console.log(this.child)
		           //    if(swiper.activeIndex==3){
	            //   location.href ='http://127.0.0.1:8080/#/index' 
	            // }
		       		}
		          // more Swiper configs and callbacks...
		          // ...	
	        	}

    		}
		},
		methods: {
		    change: function(){
		      this.show = !this.show;
		    }
	  	}
	}
</script>
<style scoped lang="less">
.Enter{
    width:100%;
    text-align: center;
    height:667/20rem;
    line-height:667/20rem; 
    a{
    	color:#fff;
    }
}
.start-swiper{
	width: 100%;
  background: #FF406F;
  height: 667/20rem;
}
	.swiper-slide{
		margin: 0 auto;

	 &> img,.lastPic{
	width: 60%;
	padding:30% 20% 0;
	
	  }
	  .text{
	  	position: absolute;
	  	top: 10%;
	  	font-weight: 300;
	  		left: 20%;
	  	color: #fff;
	  	p.first{
	  		font-size: 24/20rem;
	  		line-height: 17/20rem;
	  	}p.second{
	  		font-size: 16/20rem;
	  		line-height: 38/20rem;
	  		letter-spacing:2/20rem;
	  	}
	  }
	  .smallpic{
	  	position: absolute;
	  	// width: 222/20rem;

	  	img{
	  		width: 240/20rem;
	  		transition: 1.2s 1s;
	  		-webkit-transition: -webkit-transform 1.2s linear;
		    transition: transform 1.2s linear;
	  	}
	  }
	  .a{
	  	top: 50%;
	  		left: 18%;
	  	box-shadow: 0 0 10px #FF406F;
	  }
	  .b{
	  	top: 30%;
	  	left: 18%;
	  	box-shadow: 0 0 10px #FF406F;
	  }
	  .c{
	  	top:30%;
	  		left: 18%;
	  	box-shadow: 0 0 10px  #FF3366;
	  	/*box-shadow:0px 0px  10px #FF406F;*/
	  }
	}
	.swiper-slide-active{
		.smallpic{
			img{
				transform:scale(1.2);
		  	    -webkit-transform:scale(1.2);
			}
		  	
		  	
		}
		.text{
			-webkit-animation:mymove 1.2s linear;
			}

		@keyframes mymove
		{
		from {top:0px;}
		to {top:10%;}
		}

		@-webkit-keyframes mymove /*Safari and Chrome*/
		{
		from {top:0px;}
		to {top:10%;}
		}

	}


</style>