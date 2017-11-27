<template>
<div class='Pingl_con'>
 <div class="Pingl_head">
   	   	  <router-link :to="{path:'/wenz'}" class='Back' tag='div'>
       	  <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/back_03.png"  alt="">
          </router-link>		
      	  <p>评论</p>
 </div>
  <div class="Pingl_list">
       <div v-for="(ping,index) in pinglData" >
	       <div class='Cons'>
	   	   	  <div class="Pingl_left">
	   	   	    <div class="Pingl_img">
	   	   	  	  <img :src="ping.userImg" alt="">
	            </div>
	            <div class="Pingl_words">
	            	<p>{{ ping.userName }}</p>
	            	<p><span>{{ ping.userTalk }}</span></p>
	            </div>
	   	   	  </div>
	   	   	  <div class="Pingl_right">
	   	   	     <p >{{ ping.time }}</p>
	   	      </div>
	   	   </div>
   	   </div> 
   	 </div>
 </div>
</template>
<script>

export default {
  name: 'pingl',
  data () {
    return {
    	pinglData:''
    }	
  },
   created(){
  var currentUrl = this.$HOST+"/data/find.json"
  this.$axios.get(currentUrl)
  .then(res=>{

  	for(var i=0; i<res.data.appraise.length;i++){
           if(res.data.appraise[i].userTalk.length>15){
            res.data.appraise[i].userTalk = res.data.appraise[i].userTalk.slice(15)+"..."
       }

  	}
    this.pinglData = res.data.appraise
  }).catch(error=>{
    console.log(error);
  })
 }
}
</script>

<style scoped lang='less'>
.Pingl_head{
	height: 50/20rem;
	width: 100%;
	background-color: #ff406f;
	position: relative;
	text-align: center;
	line-height: 50/20rem;
	font-size: 18/20rem;
	color: #fff;
	background-color: #fff;
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
.Pingl_list{
	overflow: hidden;
	width: 355/20rem;
    margin: 0/20rem auto;
    border-radius: 5/20rem;
    border: 1px solid #fff;
    padding: 5/20rem 5/20rem;
    box-shadow: 0/20rem -3/20rem 10/20rem #888888;
    box-sizing: border-box;
    .Cons{
    	margin:15/20rem auto;
    	overflow: hidden;
    }
	.Pingl_left{
		float: left;
		overflow: hidden;
		.Pingl_img{
			width: 55/20rem;
			height: 55/20rem;
			float: left;
			img{
			   width: 55/20rem;
			   height: 55/20rem;
			}
		}
		.Pingl_words{
			padding-left: 8/20rem;
			float: left;
			padding-top: 8/20rem;
			box-sizing: border-box;
			font-size: 15/20rem;
			p{
				padding-bottom:10/20rem;
				box-sizing: border-box;
			}
		}
	}
	.Pingl_right{
		float: right;
		padding-top: 3/20rem;
		box-sizing: border-box;
		p{
           padding: 5/20rem 3/20rem;
           font-size: 12/20rem;
           text-align: center;
           color:#808080;
		}
	}
}
</style>
