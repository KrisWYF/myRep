<template>
	<div class="hot">
		<div class="Ht_header">
		<div class="Ht_Nav">
			<router-link class="Ht_tu" :to="{path:'/find'}"></router-link>
			<span>最热商品</span>
			</div>
		</div>
		<div class="Hot_seat">
		<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/hot/hot.png" alt=''>
	  </div>
	  <div class="Ht_product">
	  	<ul>
			<li v-for="(item,index) in HotSale">
			<router-link class="Ht_tu" tag="div" :to="{name:'prodatails',params:{id:index}}">
				<img :src="item.imgUrl" alt="">
			</router-link>
				<p>{{item.recommend}}</p>
				<div class="Comment">
				 <div class="Cm_left">
					<img :src="item.icon" alt="">
					<span>Asura</span>
				 </div>
                 <div class="Cm_right">
					<img  src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/cheek/like.png" @click="change" :id='index'>
					<span>{{item.thumbs}}</span>
				 </div>
				</div>
			</li>
		</ul>
	  </div>
	  <div class="Ht_loli">
	  	<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/hot/loli.png" alt="">
	  </div>
	  
	  <div class="Ht_Pd_content" v-for="(item,index) in LiLoPr">
	  	 <div class="Pd_left">
	  	 
	  	 	<img :src="item.pr_imgurl" alt="">
	 
	  	 </div>
	  	 <div class="Pd_right">
	  	 	<p>{{item.pr_intro}}</p>
	  	 	<p>{{item.pr_stroe}}</p>
	  	 	<p>{{item.pr_price}}</p>
	  	 </div>
	  </div>
	</div>
</template> 
<script>
	export default{
		name:"hot",
		data(){
			return{
				LiLoPr:[],
				HotSale:[]
			}
		},methods:{
          change(event){
          if(event.target.src=='http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/cheek/like.png'){
          event.target.src='http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/cheek/liked.png'
          this.HotSale[event.target.id].thumbs+=1;
        }else{
          event.target.src='http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/cheek/like.png'
          this.HotSale[event.target.id].thumbs-=1;
        }
      
}
     },
		created(){
			var currentUrl = this.$HOST + "/data/find.json";
			this.$axios.get(currentUrl).then(res=>{
				this.LiLoPr = res.data.LoLi;
				this.HotSale = res.data.hot_sale;
			}).catch(error=>{
				console.log(error);
			})
		}
	}
</script>
<style scoped lang="less">
	.Ht_header{
		width:100%;
		height:160/20rem;
      margin-bottom:140/20rem;
		background-color:#ff406f;
		color:#fff;
		overflow:hidden;
        font-size:20/20rem;
		.Ht_Nav{
			width:95%;
			text-align: center;
			margin:40/20rem auto;
			a{
				float:left;
                width:30/20rem;
                height:30/20rem;
                background:url("http://andypoppy.oss-cn-beijing.aliyuncs.com/images/fire/back.png") no-repeat 0 -0.2rem;
                background-size:30/20rem 30/20rem;
			}
			span{
				display:inline-block;
				padding-right:20/20rem;
			}
		}
	}
	.Hot_seat{
		width:95%;
		height:175/20rem;
		background-size:100% 150/20rem;
		margin:0 auto;
		overflow: hidden;
        position:absolute;
        border-radius: 5px;
        top:90/20rem;
        left:5%/2;
        box-shadow: 0px 0px 20px rgba(0,0,0,.3);
        img{
        	width:100%;
        	height:100%;
        }
	}
	.Ht_product{
		width:95%;
		margin:20/20rem auto;
		ul{
			overflow: hidden;
			li{
				float:left;
				width:47%;
				font-size:10/20rem;
				padding-bottom:5/20rem;
				box-shadow: 0px 0px 10px rgba(0,0,0,.3);
				margin-bottom:10/20rem;
				border-radius:5px;
			    font-family:"Microsoft YaHei";
				&>.Ht_tu{
					width:100%;
					img{
					width:100%;
				}
			}
				&:nth-child(1){
				    margin-right:3.8%;
				}
				p{
					margin-top:10/20rem;
					height:30px;
				}
				.Comment{
                  span{
                 	position:relative;
                 	top:-0.3rem;
                 }
                 img{
                   	width:20/20rem;
                   	height:20/20rem;
                   }	
                   padding:0 0.2rem;
				.Cm_left{
					float:left;
				}
				.Cm_right{
					float:right;
				}
			}
			}
		}
	}
	.Ht_loli{
		text-align:center;
		img{
			width:140/20rem;
		}
	}
	.Ht_Pd_content{
		width:91%;
		margin:0 auto;
		margin-bottom:20/20rem;
		overflow:hidden;
		padding:10/20rem 2%;
        border-radius: 5px;
		box-shadow: 0px 0px 10px rgba(0,0,0,.3);
		font-size:14/20rem;
		color:#808080;
		.Pd_left,.Pd_right{
            float:left;
		}
        .Pd_left{
        	margin-right:20/20rem;
        	img{
        		width:80/20rem;
        		border-radius: 5px;
        	}
        }
        .Pd_right{
        	p:first-child{
                margin-bottom:15/20rem;
        	}
        	p:nth-child(2){
        		margin-bottom:20/20rem;
        	}
        }
	}
</style>