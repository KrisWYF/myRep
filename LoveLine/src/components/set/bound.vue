<template>
	<div class="Bound">
		<nav>
      	  <router-link :to="{path:'/setIndex'}" class='Span'>
     	 	<span></span>
     	  </router-link>
      	</nav>
	    <div class="Bound-cont">
	       <p>绑定手机号，获得更周全的服务</p>
	       <div class="Input" @click="Change" >
	       	  <span style="color: #000;">手机号</span>
	       	  <input type="text" />
	       </div>
	       <div class="Input"  @click="Change">
	       	  <span>验证码</span>
	       	  <input type="text" />
	       	  <button>获取验证码</button>
	       </div>
	       <div class="Button">提 交</div>
	       <div class="BoundAnother">
	       	  <p>绑定第三方</p>
	       	  <div class="Icon">
	       	  	 <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/personal/QQ.png" alt="" />
	       	  	 <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/personal/weixin.png" alt="" />
	       	  	 <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/personal/weibo.png" alt="" />
	       	  </div>
	       </div>
	    </div>
	</div>
</template>

<script>
	export default{
		name:'bound',
		data(){
			return{
				flag:true
			}
		},
		methods:{
			
			Change(e){
				
			}
		}
	}
</script>

<style scoped lang='less'>
.Bound{
  	width: 100%;
  	padding-bottom: 2rem;
  	box-sizing: border-box;
    nav{
  	padding: 2rem  6/20rem  8/20rem;
  	background:#FF406F;
  	display: flex;
  	flex-direction: row;
  	align-items: center;

  	
  	.Span{
  		width:30/20rem;
  		height: 30/20rem;
  		display: inline-block;
  		background:url('http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/back.png') no-repeat;
  		background-size: 100%;
  	}

  	&>h1{
  		flex-grow: 1;
  		padding-right: 1.5rem;
  		font-weight: 400;
  	
  	}
  }
  .Bound-cont{
  	
  	padding: 0 2.5rem;
  	p{
  	  color: #757575;
  	  margin: 55/20rem 0 2rem 0;
  	  text-align: center;
  	  font-size: 15px;
  	}
  	.Input{
  		color: #757575;
  		display: flex;
  		flex-direction: row;
  		font-size: 16px;
  		border-bottom: 1px solid #A6A6A6;
  		margin-bottom: 40px;
  		align-items: center;
  		input{
  			background: none;
  			border: none;
  			width: 110px;
  			height: 25px;
  			font-size: 18px;
  			flex-grow: 1;
  			}
  		span{
  			// margin-right: 30px;
  		 }
  		button{
  			background: transparent;
  			border: none;
  			font-size: 12px;
  			color:#A6A6A6;
        padding: 2px;
  			border: 1px solid #A6A6A6;
  			border-radius: 16px;
  			&:hover{
  				color:#FF406F;
  			    border: 1px solid #FF406F;
  			}
  			
  		}
  	}
  	.Button{
  		        margin: 0 auto;
  	            display: block;
  				color: #333333;
  				width: 554/40rem;
  				height: 84/40rem;
  				text-align: center;
  				line-height: 84/40rem;
  				font-size: 1rem;
  				border: none;
  				color: #FFFFFF;
  				border-radius: 10px;
  				box-shadow:0px 8px 30px rgba(255,64,111,.5);
  				background: #FF406F;
          &:active{
            transform:scale(0.8);
          }
  	}
  	.BoundAnother{
  		width:100%;
  		height: 100px;
  		.Icon{
  			
           text-align: center;		
  			img{
  				width: 26/20rem;
  				height: 25/20rem;
  				margin:0 20px; 				
  	       }  
  		}
  	}
  }
  

}
</style>