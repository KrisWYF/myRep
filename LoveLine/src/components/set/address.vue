<template>
	<div class="Address">
		<nav>
      	  <router-link :to="{path:'/setIndex'}" class='Span'>
     	 	<span></span>
     	  </router-link>
     	   <h1>收货地址</h1>
      	</nav>
      	<div class="Address-box">
      		<div class="Address-left">
	      		<p class="Name">
	      			<span>阿花妹妹  </span>&nbsp;&nbsp;
	      			<span>  18265262526</span>
	      		</p>
	      		<p class="Postcode">
	      			<span>邮政编码</span>
	      			<span>12345</span>
	      		</p>
	      		<p>
	      			中国北京市北京市昌平区金燕龙大厦123室
	      		</p>
      	    </div>
      	    <div class="Address-right">
      	    	<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/address_03.png" alt="" />
      	    </div>
      	</div>
	</div>
</template>

<script>
	export default{
		name:'address',
		
	}
</script>

<style scoped lang='less'>
.Address{
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
  .Address-box{
  	
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	margin-top: 15px;
  	width:100%;
  	box-shadow:0 0 14px rgba(0,0,0,.15);
  	color: #979797;
  	padding: .5rem 1.5rem 1rem;
  	box-sizing: border-box;
  	p{font-size: 13px;}
  	.Name{
  		font-size: 18px;
  		height:2.5rem;
  		line-height: 2.5rem;
  	}
  	.Postcode{
  		font-size: 13px;
  		height: 1.5rem;
  		line-height: 1.5rem;
  	}
  }
  .Address-left{
  	width: 94%;
  	box-sizing: border-box;
  }
  .Address-right{
  	img{
  		width: 20px;
  	}
  }
}
</style>