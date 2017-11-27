<template>
	<div class="Love">
	   <nav>
      	  <router-link :to="{path:'/setIndex'}" class='Span'>
     	 	<span></span>
     	  </router-link>
     	   <h1>loveliness</h1>
      	</nav>
	   <div class="Love-cont">
	     <p>关于loveliness</p>
	     <div class="Pic">
	     	<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/loveliness.png" alt="" />
	     	<p class="PicInfor">当前版本: V1.0.0版</p>
	     </div>
	     <ul>
	     	<li>分享给朋友</li>
	     	<li>分享声明</li>
	     </ul>
	   </div>
	</div>
</template>

<script>
	export default {
		name:"loveliness"
	}
</script>

<style  scoped lang='less'>
.Love{
  	width: 100%;
  	padding-bottom: 2rem;
  	box-sizing: border-box;
    nav{
  	padding: 2rem  8/20rem  8/20rem;
  	background:#FF406F;
  	display: flex;
  	flex-direction: row;
  	color: #FFFFFF;
  	align-items: center;
  	text-align: center;
  	
  	.Span{
  		width:30/20rem;
  		height: 30/20rem;
  		display: inline-block;
  		background:url('http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/back_03.png') no-repeat;
  		background-size: 100%;
  	}

  	&>h1{
  		flex-grow: 1;
  		padding-right: 1.5rem;
  		font-weight: 300;
  		font-size: 1rem;
  		
  	}
  }
  .Love-cont{
  	
  	  		color: #A3A3A3;
  	  		font-weight: 300;
  	&>p{
  		text-align: center;
  		height: 50/20rem;
  		line-height: 50/20rem;
  		font-size: 15/20rem;
  		font-weight: 300;
  	}
  	.Pic{
  		width: 100%;
  		text-align: center;
  		box-shadow: 0 0 15px rgba(0,0,0,.14);
  		padding: 38/20rem 0 58/20rem 0;
  		font-size: 16px;
  		line-height: 1rem;
  		
  		img{
  			width:5rem;
  		}
  	}
  	ul{
  		margin-top:18/20rem;
  		width: 100%;
  		box-shadow: 0 0 15px rgba(0,0,0,.14);
  		font-size: 16px;
  		
  	}
  
  	li{
  		padding-left: 25/20rem;
  		height: 35/20rem;
  		line-height: 35/20rem;
  		&:last-child{
  			border-top: 1px solid #F2F2F2;
  		}
  	}
  }
  
}
</style>