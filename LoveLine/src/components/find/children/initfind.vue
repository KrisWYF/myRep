<template>
	<div class="initfind">
		<div class="Infi_seat">
		 <router-link tag="div" :to="{path:'/initiate/initicon'}" class="Pd_left">
	  	 	<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/initfind.png" alt="">
	  	 </router-link>
	  	 <div class="Pd_right">
	  	 	<p>美丽的一天</p>
	  	 	<p>
	  	 	<span>9天前</span>
	  	 	<span>3120</span>
	  	 	<span>30</span>
	  	 	<span>500</span>
	  	 	</p>
	  	 </div>
	  </div>
	</div>
</template>
<script></script>
<style scoped lang="less">
	.Infi_seat{
		width:91%;
		margin:0 auto;
		margin-bottom:20/20rem;
		overflow:hidden;
		padding:40/20rem 2%;
        border-radius: 5px;
		box-shadow: 0px 0px 10px rgba(0,0,0,.3);
		background-color:#fff;
		font-size:14/20rem;
		 position:absolute;
        border-radius: 5px;
        top:90/20rem;
        left:5%/2;
		color:#333333;
		.Pd_left,.Pd_right{
            float:left;
		}
        .Pd_left{
        	margin-right:5/20rem;
        	img{
        		width:140/20rem;
        	}
        }
        .Pd_right{
        	p:first-child{
        		margin-top:10/20rem;
                margin-bottom:30/20rem;
                font-size:20/20rem;
                text-align: center;
        	}
        	p:last-child{
        		span{
        			font-size:12/20rem;
        			padding-left:18/20rem;
        		}
        		span:first-child{
        			background:url(http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/clock.png) no-repeat;
        			background-size:18/20rem 18/20rem;
        		}
        		span:nth-child(2){
        			background:url(http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/ice.png) no-repeat;
        			background-size:18/20rem 18/20rem;
        		}
        		span:nth-child(3){
        			background:url(http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/msg.png) no-repeat;
        			background-size:18/20rem 18/20rem;
        		}
        		span:nth-child(4){
        			background:url(http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/header.png) no-repeat;
        			background-size:18/20rem 18/20rem;
        		}
        	}
        }
	}
</style>