<template>
	<div>
		<div class="container">
		<div class="Article">
			<p>
			<router-link  to="/index"><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/back.png" alt=""></router-link>
			<span>活动推荐</span>
			<span><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/article.png" alt=""></span>
			</p>
		</div>
		<div class="content">
		<div class="Product"   v-for='news in List'>
             <img :src="news.img" alt="">
            </div>
        </div>
      
</div>
	</div>
</template>
<script>
	export  default{

		name:'active',
		data(){
			return{
               List:[]
				
			}
		},
		created(){

	var currentUrl = this.$HOST + "/data/find.json"
			this.$axios.get(currentUrl)
      .then(res=>{


         this.List=res.data.active
         console.log(this.List)


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
		background: #fff;
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
	.Article p span,.Article p a{
		float: left;
	}
	.Article p a{
		display: inline-block;
		margin-top: -9/40rem;
		width: 56/40rem;
	}
	.Article p span:nth-child(2){
		margin-left:220/40rem;
	}
	.Article p span:nth-child(3){
		width: 45/40rem;
		margin-left: 200/40rem;
	}
	.Article p span img,.Article p a img{
		width:60/40rem;
		height: 60/40rem;
	}
	.content{
		width:95%;
	  position: absolute;
	  top:214/40rem;
	  left:5%/2;
	}
	.Product{
  width: 100%;
  height: 393/40rem;
  background-color: #fff;
  margin:0 auto  40/40rem;
  box-shadow: 2px  4px 16px rgba(0,0,0,0.1);
  border-radius: 10/40rem;
}
.Product img{
	display: inline-block;
	width:92%;
	height: 87%;
	margin: 28/40rem;
}




</style>