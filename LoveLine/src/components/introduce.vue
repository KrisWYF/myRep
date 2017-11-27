<template>
	<div>
    <div class="container">
    <router-link tag="div" to="/banner">
		 <div class="Lunbo">
             <swiper :options="swiperOption">
                 
                  <swiper-slide>
                    <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/lunbo_03.png"alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/fire/fire-top50.png"alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/beauty.png"alt="">
                  </swiper-slide>
                  <!-- Optional controls -->
                  <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
           </div>
         </router-link>
            <div class="Center_nav">
                  <router-link to='/article'>精选文章</router-link>
                  <router-link to='/active'>活动推荐</router-link>
                  <router-link to='/everyday'>美日一签</router-link>
            </div> 
            <div class="Center_nav_bottom">
              
                  <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/heart1_03.png" height="9" width="10" alt="">
                  <span>活动专题</span>
                   <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/heart1_03.png" height="9" width="10" alt="">
            </div> 
            <div class="Product">
              <div class="Product_top">
                <router-link to="/detail"> 
                  <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/touxiang_03.png" alt="">
                </router-link>
                  <span>悦晓舞</span>
                  <span v-bind:class="{focus:isActive}" @click="Changes">{{intro}}</span>
              </div>
              <div class="Product_bottom">
                <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/product_03.png"  alt="">
              </div>
            </div>

            <router-view></router-view>
            </div>
	</div>
</template>
<script>
	export  default{
		name:'introduce',
		data(){
			return{
        isActive:false,
        focus:true,
         intro:"关注ta",
				swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          autoplay: 3000,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          observeParents: true,
          loop:true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        
          // more Swiper configs and callbacks...
          // ...

         
        }
			}
		},
    methods:{

        Changes(event){

            if(event.target.innerText == '关注ta'){
             event.target.innerText = '已关注';
             event.target.style.border = '1px solid #ff406f ';
              event.target.style.color = '#ff406f'
         }else{
             event.target.innerText = '关注ta';
              event.target.style.border = '1px solid #333 ';
              event.target.style.color = '#333'
         }
            
        }

    }
	}
</script>
<style scoped  lang='less'>
	.container{
  width: 100%;
  height:620/20rem;
   background-color: #F2F2F2;
   overflow: hidden;

  }
.Lunbo{
    position: absolute;
    top:200/40rem;
    left:5%/2;
    width: 95%;
    height: 300/40rem;
    // background: red;
    z-index: 666;
    border-radius: 10/40rem;
    border: 2px solid transparent;

}
.Lunbo img{
   width:100%;
   height: 350/40rem;
}
.Center_nav{
  clear:both;
  width: 95%;
  height:118/40rem;
  background-color: #fff;
  line-height:118/40rem; 
  margin: 240/40rem auto  0;
  text-align: center;

}
.Center_nav a{
  font-size:36/40rem;
  color: #303030;
  text-decoration: none;
  margin-right:1.625rem; 
}
.Center_nav a:nth-child(1){
   margin-left: 20/40rem;
}
.Center_nav a:nth-child(3){
	margin-right: 20/40rem;
}
.Center_nav_bottom{
  width:95%;
  height: 118/40rem;
  margin: 30/40rem auto  0;
  text-align: center;
}
.Center_nav_bottom span{
  display: inline-block;
  margin: 0  40/40rem;
}
.Product{
  width: 95%;
  height: 680/40rem;
  background-color: #fff;
  margin: 0 auto;
}
.Product_top{
   width: 672/40rem;
   margin: 0 auto;
   position: relative;
   text-align: right;
   line-height: 103/40rem;
   .focus{
      color: #FFCC33 !important;
      border: 1px solid #FFCC33 !important;
  }

}
.Product_top img{
  position: absolute;
  top:-36/40rem;
  left:0;
  z-index: 777;
}
.Product_top span{
  display: inline-block;
}
.Product_top span:nth-child(2){
  margin-right: 5.5rem;
  margin-top: 43/40rem;
}
.Product_top span:nth-child(3){
  width: 110/40rem;
  height: 50/40rem;
  font-size: 20/40rem;
  line-height: 50/40rem;
  text-align: center;
  border-radius: 25/40rem;
  color: #777;
  margin-top: -10/40rem;
  border: 1px solid #000;
}

.Product_bottom{
  width: 95%;
  margin: 45/40rem auto;
}
.Product_bottom img{
  width: 100%;
  height: 356/40rem;
}
</style>