<template>
   <div class='Collect_con'>
   	   <div class="Collect_head">
   	   	  <router-link :to="{path:'/mine'}" class='Back' tag='div'>
       	  <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/back_03.png"  alt="">
          </router-link>		
      	  <p>收藏</p>
   	   </div>
   	   <div class="Collect_nav">
   	   	  <div class='Talk'>
   	   	  	<router-link :to="{path:'/collect/talk'}" tag='p'>话题</router-link>
   	   	  </div>
   	   	  <div class="Product">
   	   	  		<router-link :to="{path:'/collect/product'}" tag='p'>产品</router-link>
   	   	  </div>
   	   	  <div class="Movie">
   	   	  	<router-link :to="{path:'/collect/movie'}" tag='p'>视频</router-link>
   	   	  </div>
   	   </div>
   	   <router-view />
   </div>
</template>

<script>
export default {
  name: 'collect',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang='less'>
.Collect_head{
	height: 50/20rem;
	background-color: #fff;
	width: 100%;
	background-color: #ff406f;
	position: relative;
	text-align: center;
	line-height: 50/20rem;
	font-size: 18/20rem;
	color: #fff;
	font-family: "微软雅黑";
	.Back{
		position: absolute;
		width: 25/20rem;
		height: 25/20rem;
		top: 6/20rem;
		left: 8/20rem;
		img{
			width: 22/20rem;
			height: 22/20rem;
		}
	}

}
.Collect_nav{
	width: 100%;
	height: 50/20rem;
	// border: 1px solid #000;
	overflow: hidden;

	.Talk,.Product,.Movie{
		width: 33.3%;
		height: 25/20rem;
		margin: 14/20rem auto;
		float: left;
		border-right: 1px solid #888;
		box-sizing: border-box;
		font-size: 16/20rem;
		line-height: 25/20rem;
		text-align: center;
		vertical-align: center;
		
	}
	.Movie{
		border:none;
	}
	
}
</style>