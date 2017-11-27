<template>
    <div class="Info_con">
      <div class='Info_head'>
       <router-link :to="{path:'/mine'}" class='Back' tag='div'>
       	  <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/back_03.png"  alt="">
       </router-link>		
      	<p>消息</p>
      </div>
      <div class="Info_nav">
      	<div class="Notice">
      		<p>通知</p>
      	</div>
      	<div class="Chat">
      		<p>聊天</p>
      	</div>
      </div>
      <div class='Info_message Info1'>
      	 <div class='Images_mes'><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/info1.png" height="96" width="96" alt=""></div>
      	 <div class='Tz'><p>通知</p></div>
      	 <div class='Rq'><p>2016年11月20日</p></div>
      	 <div class='Nr'><p>首次登陆成功，奖励拿到手软!</p></div>
      </div>
      <router-link class='Info_message Info2' :to="{path:'/topic'}" tag='div'>
      	 <div class='Images_mes'><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/info2.png" alt=""></div>
      	 <div class='Tz'><p>话题消息通知</p></div>
      	 <div class='Rq'><p>2016年11月20日</p></div>
      	 <div class='Nr'><p></p></div>
      </router-link>
      <router-link class='Info_message Info2' :to="{path:'/friend'}" tag='div'>
      	 <div class='Images_mes'><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/info3.png" alt=""></div>
      	 <div class='Tz'><p>新好友通知</p></div>
      	 <div class='Rq'><p>2016年11月20日</p></div>
      	 <div class='Nr'><p></p></div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang='less'>
.Info_head{
	height: 50/20rem;
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
.Info_nav{
	width: 100%;
	height: 60/20rem;
	// background-color: green;
	overflow: hidden;
	box-sizing: border-box;
	// box-shadow: 5/20rem 5/20rem 5/20rem #999999;
	div{
		margin-top: 11/20rem;
	}
	.Notice{
		width:50%;
		height: 35/20rem;
		// background-color: chocolate;
		float: left;
		border-right:1px solid #666;
		box-sizing: border-box; 
		text-align: center;
		line-height: 35/20rem;
		font-size: 18/20rem;
	}
	.Chat{
		width:50%;
		height: 35/20rem;
		// background-color: red;
		float: left;
		text-align: center;
		line-height: 35/20rem;
		font-size: 18/20rem;
	}
}
.Info1{
	margin-top: 8/20rem;
}
.Info2,.Info3{
	margin-top: 15/20rem;
}
.Info_message{
	width: 100%;
	height: 100/20rem;
	border: 1px solid #fff;
	position: relative;
	box-sizing: border-box;
	background-color: #fff;
	border-left: #fff;
	border-right:#fff;
	box-shadow: 3px 0px 16px #888888;
    .Images_mes{
    width:70/20rem;
    height: 70/20rem; 
    position: absolute;
    top: 16/20rem;
    left: 16/20rem;
     img{
	    width:70/20rem;
	    height: 70/20rem;
     }
    }
    .Tz{
      	position: absolute;
      	top: 28/20rem;
      	left: 100/20rem;
      	font-size: 18/20rem;

      }
      .Rq{
      	position: absolute;
      	top: 28/20rem;
      	right: 5/20rem;
        font-size: 15/20rem;
      }
      .Nr{
      	position: absolute;
      	top: 68/20rem;
      	left: 100/20rem;
        font-size: 15/20rem;
      }
}
</style>