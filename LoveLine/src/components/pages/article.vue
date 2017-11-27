<template>
	<div>
		<div class="container">
		<div class="Article">
			<p>
			<router-link  to="/index"><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/back.png" alt=""></router-link>
			<span>精选文章</span>
			<span><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/article.png" alt=""></span>
			</p>
		</div>
    <div class="content">
		<div class="Product"  v-for='(news,index) in newsList'>
              <div class="Product_top">
                  <img :src="news.touxiangUrl"  alt="">
                  <span>{{news.text}}</span>
                   <span  @click="Changes">关注ta</span>
                 
              </div>
              <div class="Product_bottom">
                <img :src="news.bigPhoto"  alt="">
              </div>
            </div> 
             <h3>----已经到底啦!---</h3>
      </div>
     

</div>
	</div>
</template>
<script>
	export  default{

		name:'article',
		data(){
			return{
      
        flag:true,
        newsList:[]
     
				
			}
		},
    methods:{
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


         this.newsList=res.data.article
         console.log(this.newsList)


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
    width: 100%;
  position: absolute;
  top:214/40rem;
  left:5%2;
  }
  .content h3{
    width: 95%;
    text-align: center;
    font-weight: normal;
    color:#808080;
    margin-top: -64/40rem;
  }

	.Product{
  width: 95%;
  height: 600/40rem;
  background-color: #fff;
  margin: 0 auto 110/40rem;
  box-shadow: 2px  4px 16px rgba(0,0,0,0.1);
  border-radius: 10/40rem;
}
.Product_top{
   width: 100%;
   margin: 0 auto;
   position: relative;
   text-align: right;
   line-height: 103/40rem;

}
.Product_top img{
  position: absolute;
  top:-36/40rem;
  left:0;
  z-index: 777;
}
.Product_top span{
  display: inline-block;
}
.Product_top span:nth-child(2){
  margin-right: 5.5rem;
  margin-top: 43/40rem;
}
.Product_top span:nth-child(3){
  width: 90/40rem;
  height: 50/40rem;
  font-size: 20/40rem;
  line-height: 50/40rem;
  text-align: center;
  margin-right: 25/40rem;
  border-radius: 25/40rem;
  color: #777;
  margin-top: -10/40rem;
  border: 1px solid #000;
}

.Product_bottom{
  width: 710/40rem;
  margin: 45/40rem auto;
}
.Product_bottom img{
  width: 100%;
  height: 356/40rem;
}


</style>