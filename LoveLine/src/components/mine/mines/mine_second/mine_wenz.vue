<template>
	<div>
		<div class="container">
			<div class="Article">
			<p>
			<router-link  :to="{path:'/collect/talk'}"><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/back_03.png" alt=""></router-link>
			<span>文章</span>
			<span><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/collect_pro01.png" alt=""></span>
			</p>
		</div>
		<div class="Focus">	
              <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/collect_pro01.png" alt="">
              <p>
              	<span>Another</span><br>
              	<span>217粉丝</span>
              	<span  @click='change'>{{guanzhu}}</span>
              </p>

              <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/collect_pro01.png" alt="">

		</div>
		<div class="comment">
			<div class="comment_top">
				<p>
					<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/collect_pro01.png" alt="">
					<span>九天前</span>
				</p>
				<p>
					<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/collect_pro01.png" alt="">
					<span>3120</span>
				</p>
				<p>
					<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/collect_pro01.png" alt="">
					<span>30</span>
				</p>
				<p>
					<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/collect_pro01.png" alt="">
					<span>500</span>
				</p>
			</div>
			<div class="comment_bottom">
				<div class="comment_bottom_list">
		   	   	  <div class="comment_bottom_left">
		   	   	    <div class="comment_bottom_img">
		   	   	  	  <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/fans01.png" alt="">
		            </div>
		            <div class="comment_bottom_words">
		            	<p>haha</p>
		            	<p><span>haah</span><span>wahaha</span><span>xiha</span></p>
		            </div>
		   	   	  </div>
		   	   	    <div class="comment_bottom_right">
		   	   	       <p>2017.8.8</p>
		   	        </div>
   	  			</div>
			</div>
			<router-link class="Check" tag='p' :to="{path:'/appraise'}">查看全部评论</router-link>
		</div>
		<div class="Comm">
			<input type="text" placeholder="评论一下楼主吧~">
		</div>
	   </div>
	</div>
</template>
<script>
	export  default{

		name:'banner',
		data(){
			return{
				guanzhu:'关注Ta'
			}
		},
		methods:{
        change:function(event){
         console.log(this.guanzhu);
         if(event.target.innerText == '关注Ta'){
             event.target.innerText = '已关注';
             event.target.style.border = '1px solid #ff406f ';
              event.target.style.color = '#ff406f'
         }else{
             event.target.innerText = '关注Ta';
              event.target.style.border = '1px solid #333 ';
              event.target.style.color = '#333'
         }
     }
  }
}
</script>
<style scoped lang='less'>
		.container{
		width:100%;
		height:667/20rem;
		background: #FBFBFB;
		// position: relative;
		
	}
		.Article{
		width: 100%;
		height: 320/40rem;
		background: #ff406f;
		color:white;
		overflow: hidden;
	}
       .Article p{
		width: 710/40rem;
		height: 80/40rem;
		margin: 40/40rem auto 0;
		overflow: hidden;

	}
	.Article p a,.Article p span{
          float: left;
	}
	   .Article p img{
		width:50/40rem;
		height: 50/40rem;
	}
	.Article span{
		margin-left:260/40rem;
		display: inline-block;
		font-size: 18/20rem;
	}
	.Article span:nth-of-type(1){
		margin-top: 12/40rem;
		font-weight: normal;
	}
	.Article span:nth-of-type(2) img{
		width:50/40rem;
		height: 50/40rem;
		margin-top: 6/40rem; 
	}
	.Focus{

		width: 95%;
		height: 510/40rem;
		background:#fff;
		position: absolute;
		top:5.85rem;
		left:5%/2;
		border-radius: 16/40rem;
		box-shadow: 2px  4px 16px rgba(0,0,0,0.1);
	}
	.Focus img:nth-of-type(1){
		width: 200/40rem;
		height: 200/40rem;
		position: absolute;
		top:-1.5rem;
		left:32/40rem;
	}
	.Focus img:nth-of-type(2){
		display: block;
		width: 668/40rem;
		height: 318/40rem;
		margin:48/40rem auto 0;
	}
	.Focus p{
		width: 400/40rem;
		margin-left: 268/40rem;
		position: relative;
	}
	.Focus p span{
		display: inline-block;
		font-size:30/40rem; 
	}
	.Focus p span:nth-of-type(1){
            margin: 40/40rem auto 8/40rem;
	}
	.Focus p span:nth-of-type(3){
		width: 120/40rem;
		height: 40/40rem;
		text-align: center;
		line-height: 40/40rem;
		border:1px solid #808080;
		border-radius: 40/40rem;
		margin-left:148/40rem;
		position: absolute;
		top:60/40rem;
	} 
	.comment{
		width: 100%;
		height: 550/40rem;
		margin: 454/40rem auto 0;
		background: #fff;
		overflow: hidden;
		box-shadow: 2px 4px 8px rgba(0,0,0,0.1);
	}
	.comment_bottom,.comment_top{
		width: 710/40rem;
		margin: 0 auto;
	}
	.Check{
		width: 100%;
		text-align: center;
		color:#ff406f;
		margin-top:20/40rem;
		font-size: 25/40rem;
	}
	.comment_top{
		overflow: hidden;
		margin-top: 10/40rem;
	}
	.comment_top p{
		font-size: 16/40rem;
	}
	.comment_top p:nth-of-type(1),.comment_top p:nth-of-type(2){
		float: left;
	}
	.comment_top p:nth-of-type(2){
		margin-left: 20/40rem;
	}
	.comment_top p:nth-of-type(4){
		margin-right: 24/40rem;
	}
	.comment_top p:nth-of-type(3),.comment_top p:nth-of-type(4){
		float: right;
	}
	.comment_top p img{
		width: 20/40rem;
		height: 20/40rem;
	}
	.comment_bottom_first{
		width: 710/40rem;
		height: 382/40rem;
		border-bottom: 1px solid #ccc;
		margin-top: 40/40rem;
	}
    .comment_bottom_list{
		overflow: hidden;
		width: 355/20rem;
	    margin: 20/20rem auto;
	.comment_bottom_left{
		float: left;
		overflow: hidden;
	    .comment_bottom_img{
			width: 60/20rem;
			height: 60/20rem;
			float: left;
			img{
			   width: 58/20rem;
			   height: 58/20rem;
			}
		}
		.comment_bottom_words{
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
	.comment_bottom_right{
		float: right;
		padding-top: 6/20rem;
		box-sizing: border-box;
		p{
           padding: 5/20rem 3/20rem;
           border-radius: 5/20rem;
           font-size: 14/20rem;
           text-align: center;
		}
	}
}

   .Comm{
   	width: 100%;
   	height: 110/40rem;
   	background: #fff;
   	text-align: center;
   	margin-top:20/40rem;
   }
   .Comm input{
   	display: inline-block;
   	width: 710/40rem;
   	height: 49/40rem;
   	margin: 24/40rem  auto 0;
   	border:1px solid #ccc;
   }
</style>
