<template>
	<div>
		<div class="container">
			<div class="Article">
			<p onclick="window.history.go(-1)">
			<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/back.png" alt="">
			</p>
		</div>
		<div class="content" >
		<div class="Fans" v-for='item in fans'>
			<p>
				<img :src="item.touxiang" alt="">
				<br>	
				<span>Another</span>
				<br>
				<span>{{item.fans}}粉丝</span>
				<br>
			</p>
			<a href="javascript:;">和ta聊天</a>
			<a href="javascript:;" @click='check'>关注ta</a>
		</div>
          
		<div class="Morecolor" v-for='(news,index) in Details'>
			<img :src="news.img"alt="">
			<p>
				<span>今日推荐</span>
				<span>|</span>
				<span>底妆全靠它</span>
				<span>春日幻彩</span>
			</p>
		</div>
		      </div>
			</div>
	</div>
</template>
<script>
	export  default{

		name:'detail',
		data(){

			return{
               flag:true,
               Details:[],
               fans:[]
				
			}
		},methods:{
			 check(event){

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
         this.Details=res.data.detailimg
         this.fans=res.data.detailfans
         // console.log(this.fans)
         
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
		position: relative;
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
	.content{
		width: 95%;
		position: absolute;
		top:174/40rem;
		left:5%/2;

	}
	
	.Fans{
		width: 710/40rem;
		height: 370/40rem;
		background: #fff;
		border-radius: 16/40rem;
		box-shadow: 2px  4px 16px rgba(0,0,0,0.1);
		overflow: hidden;
	}
	.Fans p{
		width: 710/40rem;
		margin: 25/40rem auto 0;
		text-align: center;
	}
	.Fans p span{
		color:#808080;
	}
	.Fans a{
		display: inline-block;
		width: 160/40rem;
		height: 60/40rem;
		font-size: 35/40rem;
		text-align: center;
		border:1px solid #808080;
		line-height: 60/40rem;
		text-decoration: none;
		border-radius: 20/40rem;
		color:#808080;
		margin-top: 30/40rem;
		margin-left: 126/40rem;
	}

	.Fans p span:nth-of-type(2){
		font-size: 35/40rem;
	}
	.Fans img{
		width: 140/40rem;
		height: 140/40rem;
	}
	.Morecolor,.Moreproduct{
		width: 710/40rem;
		height: 430/40rem;
		background: #fff;
		margin: 1.5rem auto 30/40rem;
		border-radius: 16/40rem;
		box-shadow: 2px  4px 16px rgba(0,0,0,0.1);
	}
	.Moreproduct{
		margin-top: 50/40rem;
	}
	.Morecolor img,.Moreproduct img{
		display: inline-block;
		width: 670/40rem;
		height: 320/40rem;
		margin: 22/40rem 18/40rem;
	}
	.Morecolor p,.Moreproduct p{
		margin-left:20/40rem;
		color: #808080; 
	}
</style>