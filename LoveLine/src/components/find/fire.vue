<template>
	<div class="Fire">
	<div class="Fr_header">
		<div class="Fr_Nav">
			<router-link :to="{path:'/find'}"></router-link>
			<span>最火话题</span>
		</div>
	</div>
	<div class="Fr_seat">
		<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/fire/fire-top50.png" alt=''>
	</div>
	<div class="Fr_top">
		<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/fire/top50.png" alt="">
	</div>
	<div class="Fr_product">
		<ul>
			<li v-for="(item,index) in fire" :class="[index%2 ==0? 'active':'']">   
			<router-link class="Ht_tu" tag="div" :to="{name:'prodatails',params:{id:index}}"> 
				<img :src="item.imgUrl" alt="" >
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
	</div>
</template>
<script>
	export default{
		name:"fire",
		data(){
			return{
                fire:[]
             
			}
		},methods:{
          change(event){
          if(event.target.src=='http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/cheek/like.png'){
          event.target.src='http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/cheek/liked.png'
          this.fire[event.target.id].thumbs+=1;
        }else{
          event.target.src='http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/cheek/like.png'
          this.fire[event.target.id].thumbs-=1;
        }
      
}
     },
		created(){
			var currentUrl = this.$HOST + "/data/find.json"
			this.$axios.get(currentUrl)
			.then(res=>{
                 this.fire=res.data.fire;
                 
			}).catch(error=>{
				console.log(error);
			})
		}
	}
</script>
<style scoped lang="less">
	.Fr_header{
		width:100%;
		height:160/20rem;
		background-color:#ff406f;
		color:#fff;
		overflow:hidden;
        font-size:20/20rem;

		.Fr_Nav{
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
	.Fr_seat{
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
	.Fr_top{
       margin-top:140/20rem;
       text-align: center;
       img{
       	width:140/20rem;
       }
	}
	.Fr_product{
		width:95%;
		margin:20/20rem auto;
		ul{
			overflow: hidden;
			.active{
					 margin-right:3%;
				}
			li{
				float:left;
				width:47%;
				margin-left:1%;
				font-size:10/20rem;
				padding-bottom:5/20rem;
				box-shadow: 0px 0px 10px rgba(0,0,0,.3);
				margin-bottom:20/20rem;
				border-radius:5px;
			    font-family:"Microsoft YaHei";
				&>.Ht_tu{
					width:100%;
					img{
					width:100%;
				}
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
</style>