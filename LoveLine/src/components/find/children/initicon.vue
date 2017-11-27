<template>
	<div class="Initicon">
		<div class="Init_header">
			<div class="Init_Nav">
				<router-link :to="{path:'/initiate/initfind'}"></router-link>
			<router-link tag="span" :to="{path:'/initiate/initfind'}" class="My_init">我发起的</router-link>
			<router-link tag="span" :to="{path:'/initiate/initjoin'}" class="My_join">我参与的</router-link>
			</div>
		</div>
		<div class="Bt_hot">
	  	<div class="Bt_top">
	  		<div class="Btt_left">
	  			<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/bt_people.png" alt="">
	  			<span>Another</span>
	  			<span>2月1日 5:21</span>
	  			<span>217粉丝</span>
	  		</div>
	  	</div>
	  	  <div class="clear"></div>
	  	<div class="Bt_bottom">
	  	<div class="BtB_content">
	  		<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/initfind.png" alt="">
	  		</div>
	  	</div>
	  	<p>美丽的一天</p>
	  </div>
	<div class="Init_pp">
		<i>
		<span>9天前</span>
		<span>3120</span>
		</i>
		<i>
		<span>30</span>
		<span>500</span>
		</i>
	</div>
	    <div class="Init_comment">
	    	<ul>
	    		<li>
	    			<div class="Com_left">
	    				<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/bt_people.png" alt="">
	    			</div>
	    			<div class="Com_center">
	    				<p>芮儿</p>
	    				<p>大爱楼主推荐,赞赞赞!</p>
	    			</div>
	    			<p>22分钟前</p>
	    		</li>
	    		<li>
	    			<div class="Com_left">
	    				<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/bt_people.png" alt="">
	    			</div>
	    			<div class="Com_center">
	    				<p>芮儿</p>
	    				<p>大爱楼主推荐,赞赞赞!</p>
	    			</div>
	    			<p>22分钟前</p>
	    		</li>
	    		<li>
	    			<div class="Com_left">
	    				<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/bt_people.png" alt="">
	    			</div>
	    			<div class="Com_center">
	    				<p>芮儿</p>
	    				<p>大爱楼主推荐,赞赞赞!</p>
	    			</div>
	    			<p>22分钟前</p>
	    		</li>
	    	</ul>
	    </div>
	</div>
</template>
<script></script>
<style scoped lang="less">
	.Init_header{
		width:100%;
		height:90/20rem;
		margin-bottom:20/20rem;
		background-color:#ff406f;
		color:#fff;
		overflow:hidden;
        font-size:16/20rem;
		.Init_Nav{
			width:95%;
			text-align: center;
			margin:40/20rem auto;
			a{
				float:left;
                width:30/20rem;
                height:30/20rem;
                background:url("http://andypoppy.oss-cn-beijing.aliyuncs.com/images/fire/back.png") no-repeat;
                background-size:30/20rem 30/20rem;
			}
			span{
				display:inline-block;
				margin-right:30/20rem;
				padding:5/20rem;
				.active{
				border-bottom:3px solid #fff;
				}
			}
		}
	}
	.Bt_hot{
		width:95%;
		margin:0 auto;
		padding:5/20rem 0;
        border-radius:5px;
        box-shadow: 0px 0px 15px rgba(0,0,0,.3);
        margin-bottom:10/20rem;
        p{
        	font-size:14/20rem;
        	margin-top:10/20rem;
        	margin-left:15/20rem;
        }
		.Bt_top{
			width:95%;
			font-size:16px;
			margin-bottom:30/20rem;
			.Btt_left{
				float:left;
				position:relative;
				img{
					position: absolute;
					top:-14/20rem;
					left:14/20rem;
					width:60/20rem;
				}
				span{
					display:block;
					color:#808080;
					margin-left:80/20rem;
					margin-bottom:5/20rem;
					font-size:12/20rem;
				}
				span:nth-type-of(1){
					margin-bottom:0px;
				}
			}
		}
		.Bt_bottom{
			.BtB_content{
				width:95%;
				margin:0 auto;
			img{
				width:100%;
			}
		}
	}
}
.Init_pp{
	width:95%;
	margin:0 auto;
	margin-bottom:20/20rem;
	overflow: hidden;
	i{
		font-style: normal;
		font-size:12/20rem;
		span{
			padding-left:20/20rem;
		}
		span{
        			font-size:12/20rem;
        			padding-left:18/20rem;
        		}
        		span:first-child{
        			background:url(http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/clock.png) no-repeat;
        			background-size:15/20rem 15/20rem;
        		}
        		span:nth-child(2){
        			background:url(http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/ice.png) no-repeat;
        			background-size:15/20rem 15/20rem;
        		}
        		span:nth-child(3){
        			background:url(http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/msg.png) no-repeat;
        			background-size:15/20rem 15/20rem;
        		}
        		span:nth-child(4){
        			background:url(http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/header.png) no-repeat;
        			background-size:15/20rem 15/20rem;
        		}
	}
	i:first-child{
		float:left;
	}
	i:last-child{
		float:right;
	}	
}
.Init_comment{
	width:95%;
	margin:0 auto;
	ul{
		li{
			font-size:12/20rem;
			font-color:#333;
			overflow:hidden;
			margin-bottom:10/20rem;
			border-bottom:1px solid #eee;
			padding-bottom:8/20rem;
			div{
               float:left;
              margin-right:15/20rem;
              p:first-child{
              	margin-bottom:15/20rem;
              }
			}
			&>p{
				float:right;
              
              	color:#808080;
			}
			img{
				width:40/20rem;
			}
		}
	}
}
</style>