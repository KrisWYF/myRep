<template>
	<div>
		<div class="container">
			<div class="Article">
			<p>
			<router-link  to="/index"><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/back.png" alt=""></router-link>
			<span><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/article.png" alt=""></span>

			</p>
		</div>
		<div class="Focus">	
              <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/BANNER_03.png" alt="">
              <p>
              	<span>Another</span><br>
              	<span>217粉丝</span>
              	<span  @click="Changes">关注ta</span>
              </p>

              <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/fenshua_03.png" alt="">

		</div>
		<div class="comment">
			<div class="comment_top">
				<p>
					<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/BANNER_10.png" alt="">
					<span>九天前</span>
				</p>
				<p>
					<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/ice.png" alt="">
					<span>3120</span>
				</p>
				<p>
					<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/BANNER_15.png" alt="">
					<span>30</span>
				</p>
				<p>
					<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/BANNER_12.png" alt="">
					<span>500</span>
				</p>
			</div>
			<div class="comment_bottom">
				<div class="comment_bottom_first">
					<ul>
						<li  v-for="(item,index) in Banner">
							<img :src="item.touxiang" alt="">
							<div>
							<p><span>{{item.name}}</span><span>{{item.time}}</span></p>
							<p>{{item.recommend}}</p>
							</div>
						</li>
					
					</ul>
				</div>
				<p class="Check">查看全部评论</p>
			</div>
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
			Banner:[],
			flag:true
				
			}
		},methods:{
              Changes(event){

            if(event.target.innerText == '关注ta'){
             event.target.innerText = '已关注';
             event.target.style.border = '1px solid #ff406f ';
              event.target.style.color = '#ff406f'
         }else{
             event.target.innerText = '关注ta';
              event.target.style.border = '1px solid #333 ';
              event.target.style.color = '#333'
         }
        }
		},
		
		　
		created(){

	 var currentUrl = this.$HOST + "/data/find.json"
			this.$axios.get(currentUrl)
      .then(res=>{


         this.Banner=res.data.comment
        


      }).catch(error=>{

        console.log(error)
      })
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
		height: 60/40rem;
		margin: 60/40rem auto 0;
		overflow: hidden;

	}
	   .Article p img{
		width:60/40rem;
		height: 60/40rem;
	}
	.Article span{
		margin-left:526/40rem;
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
		margin-top:40/40rem;
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
		height: 360/40rem;
		// height: 630/40rem;
		border-bottom: 1px solid #ccc;
		margin-top: 50/40rem;
		overflow: hidden;
	}
	.comment_bottom_first ul{
		
		margin-bottom: 30/40rem;
		
	}
	.comment_bottom_first ul li{
		width: 710/40rem;
		height: 85/40rem;
		margin:0  auto  35/40rem;
	}

    .comment_bottom_first ul li div p span{
		color:#808080;
		float: right;

	}
	.comment_bottom_first ul li div p{
		width: 550/40rem;
	}
	.comment_bottom_first ul li div{
			float:left;
			margin-left: 40/40rem;
			font-size: 30/40rem;
	}
	.comment_bottom_first ul li div p:nth-of-type(1){
		margin-bottom: 53/40rem;
	}
	.comment_bottom_first ul li div p:nth-of-type(1) span:nth-of-type(1){
		float: left;
	}

	.comment_bottom_first ul li img{
			width: 80/40rem;
			height: 80/40rem;
			float: left;
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
