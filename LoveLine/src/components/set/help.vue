<template>
    <div class="Help">
       <nav>
      	  <router-link :to="{path:'/setIndex'}" class='Span'>
     	 	<span></span>
     	  </router-link>
     	   <h1>帮助</h1>
      	</nav>
      	<ul>
      	   <li>功能介绍</li>
      	   <li>常见问题</li>
      	   <li>成长值记录与原则</li>
      	   <li>loveliness认证说明</li>
      	</ul>
    </div>
</template>

<script>
	export default{
		name:'help'
	}
</script>

<style scoped lang='less'>
.Help{
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
  		background:url('http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/back.png') no-repeat;
  		background-size: 100%;
  	}

  	&>h1{
  		flex-grow: 1;
  		padding-right: 1.5rem;
  		font-weight: 300;
  		font-size: 1rem;
  		
  	}
  }
  ul{
  	margin-top: 50px;
  	box-shadow: 0 0 10px rgba(0,0,0,.1);
  	li{
  		padding-left: 25/20rem;
  		height: 36/20rem;
  		line-height: 35px;
  		color: #999999;
  		font-weight:300;
  		font-size: 16/20rem;
  		border-bottom: 1px solid #F3F3F3;
  	}
  }
}
</style>