<template>
	<div class="Personal">
		<nav>
      	  <router-link :to="{path:'/setIndex'}" class='Span'>
     	 	<span></span>
     	  </router-link>
      	   <h1>个人资料</h1>
      	</nav>
      	
	   <div class="Personal-cont">
	   	  <div class="Personal-box">
	   	  	 <p>完善个人资料可以获得10个成长值哦~</p>
	   	  	 <div class="List">
	   	  	 	<div class="Desc">头像</div>
	   	  	 	<div><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/personal/personal_03.png" alt="" /></div>
	   	  	 </div>
	   	  	 <div class="List">
	   	  	 	<div class="Desc">昵称</div>
	   	  	 	<div>莎莎</div>
	   	  	 </div>
	   	  </div>
	   	  <div class="Personal-box">
	   	  	 <div class="List">
	   	  	 	<div class="Desc">性别</div>
	   	  	 	<div>女</div>
	   	  	 </div>
	   	  	 <div class="List">
	   	  	 	<div class="Desc">生日</div>
	   	  	 	<div>生日惊喜年年有</div>
	   	  	 </div>
	   	  	 <div class="List">
	   	  	 	<div class="Desc">肤质</div>
	   	  	 	<div>贴心内容推荐多</div>
	   	  	 </div>
	   	  	 <div class="List">
	   	  	 	<div class="Desc">兴趣</div>
	   	  	 	<div>选择你的兴趣</div>
	   	  	 </div>
	   	  </div>
	   	  <div class="Personal-box">
	   	  	 <div class="List">
	   	  	 	<div class="Desc">loveliness暗号</div>
	   	  	 	<div>5552loveliness</div>
	   	  	 </div>
	   	  	 <div class="List">
	   	  	 	<div class="Desc">注册时间</div>
	   	  	 	<div>2017-2-20</div>
	   	  	 </div>
	   	  </div>
	   </div>
	</div>
</template>

<script>
	export default{
		name:'personal',
		data(){
			return{}
		}
	}
</script>

<style  scoped lang='less'>
	.Personal{
  	width: 100%;
  	padding-bottom: 2rem;
  	box-sizing: border-box;
    nav{
  	padding: 2rem  6/20rem  8/20rem;
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
  		font-weight: 400;
  	
  	}
  }
  .Personal-box{
  	width: 100%;
  	box-shadow: 0 0 5px rgba(0,0,0,.1);
  	p{
  		color: #8D8D8D;
  		font-size: 14px;
  		font-weight: 300;
  		text-align: center;
  		height: 60/20rem;
  		line-height: 60/20rem;
  	}
  	&>.List:last-child{border: none;}
  	.List{
  		padding: 0 27/20rem;
  		display: flex;
  		flex-direction: row;
  		color:#333333;
  		font-size: 16px;
  		border-bottom: 1px solid #333;
  		&>div{
  			line-height: 2.2rem;
  			height: 2.2rem;
  		}
  		img{
  			width: 1.8rem;
  		}
  		.Desc{
  			flex-grow: 1;
  		}
  	}
  }
}
</style>