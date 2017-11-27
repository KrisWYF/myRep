<template>
 <div class='Sign_con'>
   	   <div class="Sign_head">
   	   	  <router-link :to="{path:'/info'}" class='Back' tag='div'>
       	  <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/back_03.png"  alt="">
          </router-link>		
      	  <p>话题消息通知</p>
   	   </div>
   	   <div class="Border">
   	   <div class="Care_list">
   	   	  <div class="Care_left">
   	   	    <div class="Care_img">
   	   	  	  <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/fans02.png" alt="">
            </div>
            <div class="Care_words">
            	<p>小明哈哈啊哈哈哈</p>
            </div>
   	   	  </div>
   	   	  <!--   <div class="Care_right">
   	   	       <p @click='change'>{{ guanzhu }}</p>
   	        </div> -->
   	   </div>
   	 </div> 
   </div>
</template>

<script>
export default {
  name: 'topic',
  data () {
    return {
    	 guanzhu:'关注'
    }
  },
  methods:{
     change:function(event){
         console.log(this.guanzhu);
         if(event.target.innerText == '关注'){
             event.target.innerText = '已关注';
             event.target.style.border = '1px solid #ff406f ';
              event.target.style.color = '#ff406f'
         }else{
             event.target.innerText = '关注';
              event.target.style.border = '1px solid #333 ';
              event.target.style.color = '#333'
         }
     }
  }
}
</script>

<style scoped lang='less'>
.Sign_head{
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
.Border{
	width: 100%;
	border-top: 1px  solid #fff;
	border-bottom:  1px  solid #fff;
	margin-top: 8/20rem;
	box-shadow: 0/20rem 0/20rem 16/20rem #888888;
	.Care_list{
		overflow: hidden;
		width: 355/20rem;
	    margin: 20/20rem auto;
		.Care_left{
			float: left;
			overflow: hidden;
			.Care_img{
				width: 60/20rem;
				height: 60/20rem;
				float: left;
				img{
				   width: 60/20rem;
				   height: 60/20rem;
				}
			}
			.Care_words{
				padding-left: 8/20rem;
				float: left;
				padding-top: 8/20rem;
				box-sizing: border-box;
				font-size: 17/20rem;
				p{
					padding-bottom:10/20rem;
					box-sizing: border-box;
				}
			}
		}
		.Care_right{
			float: right;
			padding-top: 15/20rem;
			box-sizing: border-box;
			p{
	           padding: 5/20rem 3/20rem;
	           border: 1px solid #333;
	           border-radius: 5/20rem;
	           font-size: 12/20rem;
	           width: 40/20rem;
	           text-align: center;
			}
		}
	}
 }	
</style>