<template>
	<div class="Beauty">
		<div class="Bt_header">
		<div class="Bt_Nav">
			<router-link :to="{path:'/find'}"></router-link>
			<span>最美达人</span>
			</div>
		</div>
		<div class="Bt_seat">
		<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/beauty.png" alt=''>
	  </div>
	  <div class="Bt_hot" v-for="(item,index) in beauty">
	  	<div class="Bt_top">
	  		<div class="Btt_left">
	  			<router-link to='/detail'><img :src="item.bt_icon" alt=""></router-link>
	  			<span>{{item.username}}</span>
	  		</div>
	  		<div class="Btt_right">
	  			<p  @click='change'>{{ guanzhu }}</p>
	  		</div>
	  	</div>
	  	  <div class="clear"></div>
	  	<div class="Bt_bottom">
	  	<div class="BtB_content">
	  		<img :src="item.bt_one" alt="">
	  		<img :src="item.bt_two" alt="">
	  		</div>
	  	</div>
	  </div>
	</div>
</template>
<script>
	export default{
		name:"beauty",
		data(){
			return{
			  guanzhu:'关注',
			   beauty:[],
			   ok:true
			}
		},
		methods:{
           change(event){
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
		},
		created(){
			var currentUrl = this.$HOST + "/data/find.json"
			this.$axios.get(currentUrl)
			.then(res=>{
			
				this.beauty = res.data.beauty;
			}).catch(error=>{
				console.log(error);
			})
		}
	}
</script>
<style scoped lang="less">
		.Bt_header{
		width:100%;
		height:160/20rem;
		background-color:#ff406f;
		color:#fff;
		overflow:hidden;
        font-size:20/20rem;
        margin-bottom:150/20rem;
		.Bt_Nav{
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
		.clear{
			clear:both;
		}
		.Bt_seat{
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
	.Bt_hot{
		width:95%;
		margin:0 auto;
		padding:15/20rem 0;
        border-radius:5px;
        box-shadow: 0px 0px 15px #ddd;
        margin-bottom:40/20rem;
		.Bt_top{
			width:95%;
			font-size:16px;
			margin-bottom:30/20rem;
			.Btt_left{
				float:left;
				position:relative;
				img{
					position: absolute;
					top:-44/20rem;
					width:60/20rem;
				}
				span{
					margin-left:80/20rem
				}
			}
			.Btt_right{
				float:right;
				p{
					display:inline-block;
					width:60/20rem;
					height:24/20rem;
					line-height:24/20rem; 
					border:1px solid #808080;
					text-align:center;
					border-radius:12/20rem;
					background-color:#fff;
					font-size:12/20rem;
				}
			}
		}
		.Bt_bottom{
			.BtB_content{
				width:95%;
				margin:0 auto;
			img{
				width:49%;
			}
		}
	}
}
</style>