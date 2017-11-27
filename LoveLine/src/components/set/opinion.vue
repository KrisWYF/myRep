<template>
	<div class="Opinion">
		<nav>
      	  <router-link :to="{path:'/setIndex'}" class='Span'>
     	 	<span></span>
     	  </router-link>
     	   <h1>loveliness小助理</h1>
     	  <router-link :to="{path:'/setIndex'}" class='Share'>
     	 	<span></span>
     	  </router-link>
      	</nav>
      	<p>常见问题</p>
      	<div class="serviceWrap">
			<div class="right">
				 <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/personal/personal_03.png" alt="">
				<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/input_01.png">
			</div>
			<div class="left">
				
				<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/loveliness.png">
			    <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/input_02.png" alt="">
			</div>
	   </div>
	   <div class="bottom">
		  <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/add.png" alt="" />
		  <span>|</span>
		  <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/face.png" alt="" />
		  <input type="text" placeholder="请输入文字" />
		  <button>发送</button>
	   </div>
   
	</div>
</template>

<script>
	export default{
		name:'opinion'
	}
</script>

<style scoped lang='less'>
.Opinion{
  	width: 100%;
  	padding-bottom: 2rem;
  	height: 667/20rem;
  	box-sizing: border-box;
    nav{
  	padding: 2rem 13/20rem 6/20rem 5/20rem;
  	
  	background:#FF406F;
  	display: flex;
  	flex-direction: row;
  	color: #FFFFFF;
  	align-items: center;
  	text-align: center;
  	
  	.Span{
  		width:28/20rem;
  		height: 28/20rem;
  		display: inline-block;
  		background:url('http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/back.png') no-repeat;
  		background-size: 100%;
  	}
     .Share{
     	width:28/20rem;
  		height: 28/20rem;
  		display: inline-block;
  		background:url('http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/set/share.png') no-repeat;
  		background-size: 100%;
     }
  	&>h1{
  		flex-grow: 1;
  		font-weight: 300;
  		font-size: 1rem;
  		
  	}
  }
    &>p{
  		color:#a3a3a3;
  		text-align: center;
  		height: 50/20rem;
  		line-height: 50/20rem;
  		font-size: 15/20rem;
  		font-weight: 300;
  	}

}

.serviceWrap{
	padding:0 1rem ;
	box-sizing: border-box;
	
	.left{
		img{
			width: 100/40rem;
			height: 100/40rem;
			&:nth-child(2){
				width: 100/20rem;
				height: 88/50rem;
			}
		}
	}
	.right{
		margin-top: 30/50rem;
		overflow: hidden;
		img{
			width: 100/40rem;
			height: 100/40rem;
			float: right;
			&:nth-child(2){
				width: 100/20rem;
				height: 88/50rem;
				margin-top: 30/50rem;
				margin-right: 15/50rem;
			}
		}
	}
}
.bottom{
	width:100%;
	height: 50/20rem;
	padding: 0 15/20rem;
	box-sizing: border-box;
	position: absolute;
	bottom: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
   &>img{
   	  width: 1rem;
   	  height: 1rem;
   }
   input{
   	  flex-grow: 1;
   	  margin: 0 10px;
   	  border: none;
   	  height: 24/20rem;
   	  border-radius: 5px;
   	  padding-left: 10px;
   	  border: 1px solid #808080;
   }
   span{
   	 margin: 0 10px;
   	 color:#818181;
   	 font-size: 18px;
   }
   button{
   	width: 50/20rem;
   	height: 26/20rem;
    background: none;
    border: none;
    color:#808080;
     border: 1px solid #808080;
      border-radius: 5px;
   }
}
	
</style>