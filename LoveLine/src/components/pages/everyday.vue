<template>
	<div id="schedule-box">
		
		<Calendar  :is_hide_otherday = true class='component'></Calendar>
		<div class="head">
			<p onclick="window.history.go(-1)">
			<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/back.png" alt="">
			<span>每日一签</span>
			</p>
		</div>
		<div class="grow">
			<div class="grow_container">
		    <p>
		    	<span>成长值</span>
		    	<span>2</span>
		    </p>

		    <p>
		    	<span>积分</span>
		    	<span>25</span>
		    </p>
		    </div>
		</div>
		  <div class="introduce">
		  	<p class='circle'>+</p>
		    	<ul>
		    		<li>积分兑豪礼</li>
		    		<li>登录签到可获得成长值,累积成长值可兑换积分</li>
		    		<li>积分可用于优惠专区购买限时产品,也可参加秒杀活动</li>
		    		<li>不定期还可参与抽奖活动哦!</li>
		    	</ul>
		    </div>
	</div>
</template>
<script>


	export  default{
		name:'everyday',
		data(){
			return{

				
			}
		}	
	}

</script>
<style scoped lang='less'>
#schedule-box{
	width:100%;
    // height:667/20rem;
    background: #fff;
    overflow: hidden;
    position: relative;
}

.component{
margin-top: 170/40rem;
}	
.head{
  position: absolute;
  top:0;
  width: 100%;
  height: 220/40rem;
  background: #ff406f;
}
.head img{
	width:60/40rem;
	height: 60/40rem;
}
.head p{
	width: 710/40rem;
	height: 100/40rem;
	margin: 60/40rem auto 0;
	overflow: hidden;
}
.head p img,.head p span{
	float: left;
}
.head p span{
	margin:12/40rem 0 0 200/40rem;
	color:#fff; 

}
.grow{
	width: 710/40rem;
	height: 190/40rem;
	border: 1px solid #808080;
	border-radius: 16/40rem;
    box-shadow: 2px  4px 16px rgba(0,0,0,0.1);
    margin: 67/40rem auto 28/40rem;
    overflow: hidden;
}
.grow_container{
     width: 600/40rem;
     margin: 35/40rem auto;
}
.grow_container p{
	width:600/40rem;
	height: 44/40rem; 
	overflow: hidden;
	color: #8C8C8C;
	font-size: 35/40rem;
}
.grow_container p:nth-of-type(1){
	 padding-bottom: 26/40rem;
	 border-bottom: 1px solid #8c8c8c;
}
.grow_container p:nth-of-type(2){
	padding-top:26/40rem; 
}


.grow_container p span:nth-of-type(1){
	float: left;
}
.grow_container p span:nth-of-type(2){
	float: right;
	margin-right:100/40rem; 
}
.introduce{
	width: 710/40rem;
	height:330/40rem;
	border: 1px solid #808080;
	border-radius: 16/40rem;
    box-shadow: 2px  4px 16px rgba(0,0,0,0.1);
    margin: 40/40rem auto 28/40rem;
    position: relative;
}
.circle{
	position: absolute;
	top:-342/40rem;
	right:52/40rem;
	width: 90/40rem;
	height: 90/40rem;
	border-radius: 50%;
	background: #ff406f;
	text-align: center;
	line-height: 90/40rem;
	color:#fff;
	font-size: 80/40rem;
}
.introduce ul{
	width: 660/40rem;
	height: 135/40rem;
	padding-top: 35/40rem;
	margin: 0 auto;
}
.introduce ul li:nth-of-type(1){
	font-size: 35/40rem;
	padding-bottom: 20/40rem;
	color:#7A7A7A;
}
.introduce ul li{
	width: 660/40rem;
	font-size: 28/40rem;
	line-height: 50/40rem;
	color: #5E5E5E;
}
</style>