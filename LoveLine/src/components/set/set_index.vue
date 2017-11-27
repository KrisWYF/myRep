<template>
  <div class="Set">
      <div class="Set-cont">
      	<nav>
      	  <router-link :to="{path:'/mine'}" class='Span'>
     	 	<span></span>
     	  </router-link>
      	   <h1>设置</h1>
      	</nav>
      	
      	<div class="Set-main">
      		<ul>
      			<router-link tag='li' to='/personal'> 				
      				<span><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/set_03.png" alt="" /></span>
      				个人资料
      			</router-link>
      			<router-link tag='li' to='/bound'> 				
      				<span><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/set_06.png" alt="" /></span>
      				绑定
      			</router-link>
      			<router-link tag='li' to='/address'> 				
      				<span><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/set_10.png" alt="" /></span>
      				收货地址
      			</router-link>
      			<router-link tag='li' to=''> 				
      				<span><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/set_14.png" alt="" /></span>
      				清除缓存
      			</router-link>
      			<li> 				
      				<span><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/set_17.png" alt="" /></span>
      				小屏模式(省高达70%流量)
      				<el-switch  
					  v-model="value"
					  active-color="#FF406F"
					  inactive-color="#ccc"
					  name='switch'
					  >
					</el-switch>
      			</li>
      			<router-link tag='li' to=''> 				
      				<span><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/set_20.png" alt="" /></span>
      				消息推送
      			</router-link>
      			<router-link tag='li' to='/loveliness'> 				
      				<span><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/set_23.png" alt="" /></span>
      				关于loveliness
      			</router-link>
      			<router-link tag='li' to='/help'> 				
      				<span><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/set_25.png" alt="" /></span>
      				帮助
      			</router-link>
      			<router-link tag='li' to='/opinion'> 				
      				<span><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/set_28.png" alt="" /></span>
      				意见反馈
      			</router-link>
      			<router-link tag='button' to='/login'> 				
                                    退出登录
      			</router-link>
      		</ul>
      	</div>
      </div>
  </div>
</template>

<script>
	export default{
		name:'SetIndex',
		data(){
			return{
				 value:true
			}
		}
	}
</script>

<style scoped lang='less'>

.Set{
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
  	
  	.Set-main{
  		width: 95%;
  		height: 607/20rem;
  		border-radius: 2px;
  		margin: 0 auto;
  		box-shadow: 0 -5px 10px rgba(0,0,0,.1);
  		font-size:16/20rem;
  		color:#333;
  		padding-top: 20/20rem;
  		
  		
  		ul{
 
  			li{
  		    /*width: 100%;*/
  			  height: 50/20rem;
  			line-height: 50/20rem;
  			position: relative;
  			padding-left: 48/20rem;
  			&:hover{
  				background:rgba(0,0,0,.1);
  			}
  			
  			img{
  				position: absolute;
  				top: 16/20rem;
  				left: 18/20rem;
  				width: 18/20rem;
  				
  			}
  			
  		   }
  		   button{
  		   	    margin: 30/20rem auto 0;
  				display: block;
  				color: #333333;
  				width: 554/40rem;
  				height: 84/40rem;
  				font-size: 30/40rem;
  				border: none;
  				border-radius: 10px;
  				box-shadow:2px 2px 30px rgba(0,0,0,.1);
  				background: #FFFFFF;
  			}
  		}
  	}
  
  }

</style>