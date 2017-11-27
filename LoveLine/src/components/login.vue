<template>
	<div class="Login">
		<div class="Lo_header">
			<img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/login.png" alt="">
		</div>
		<div class="Lo_seat">
			<form action="">
				<label for=""><i></i>
				  <input type="text" placeholder="请输入手机号" ref='uname'>
				</label>
				<label for=""><i></i>
				   <input type="password" placeholder="请输入密码" ref='upwd'>
				</label>
			</form>
			<div @click="denglu" id="Denglu">登录</div>
			<router-link :to="{path:'/index'}">游客试用</router-link>
		</div>
		<div class="Forget">
			<p>
			<a href="#">忘记密码</a>
			<span>|</span>
			<router-link :to="{path:'/register'}">立即注册</router-link>
			</p>
			<p>
			<a href="javascript:;"></a>
			<a href="javascript:;"></a>
			<a href="javascript:;"></a>
			</p>
		</div>
	</div>
</template>
<script>
import $ from "jquery"
import qs from "qs"
	export default{
		name:"login",
		data(){
			return{
    
			}
		},
		methods:{
			denglu(){
				var uname = this.$refs.uname.value;
				var upwd = this.$refs.upwd.value;
				this.$axios.post("http://localhost:3000/select",qs.stringify({
					username:uname,
					password:upwd
				}))
                 .then(res => {
                 	var data = res.data
                 	console.log(data)
                 	for (var i=0;i<data.length;i++) {
                 		if(data[i].username == uname){
                 			if(data[i].password == upwd ){
                 				window.location.href="/"
                 				console.log("登陆成功");
                 				break;
                 			}else{
                 				 console.log("账号或者密码错误");
                 			}
                 		}else{
                 			console.log("账号不存在")
                 		}
                 	}
                 })
                 .catch(error => {
                 	console.log(error)
                 })	
			}
		}
	}
</script>
<style scoped lang="less">
	.Lo_header{
		text-align: center;
	    margin-top:80/20rem;
		img{
			width:120/20rem;
		}
	}
	a{
		text-decoration: none;
	}
	.Lo_seat{
		width:95%;
		margin:0 auto;
		margin-top:40rem/20rem;
		label{
			display:block;
			width:90%;
			margin:0 auto;
			input{
			border:none;
			font-size:18/20rem;
			border-bottom:1px solid #808080;
			
			width:85%;
			height:30/20rem;
		    line-height: 30/20rem;
		}
		&>i{
			display:inline-block;
			width:9.4%;
			height:50/20rem;
			position: relative;
			top:1.3rem;
			margin-right:2%;
		}
		&:first-child>i{
			  background:url("http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/regpeople.png") no-repeat;
            background-size:30/20rem;
		}
		&:last-child>i{
			  background:url("http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/pwd.png") no-repeat;
            background-size:30/20rem;
		}
		&:last-child{
			margin-bottom:40/20rem;
		}
	}
	#Denglu{
		display:block;
		width:80%;
		margin:0 auto;
		text-align: center;
        color:#fff;
        background-color:#ff406f;
        height:40/20rem;
        font-size: 18/20rem;
        line-height: 40/20rem;
        border-radius: 10/20rem;
        margin-bottom:20/20rem;
       box-shadow:0 10/20rem 10/20rem  rgba(255,64,111,0.3);
	}
	#Denglu:active{
		transform:scale(0.8);
	}
	a:last-child{
		display:block;
		width:80%;
		margin:0 auto;
		text-align: center;
       color:#333;
       background:none;
	}
	margin-bottom:30/20rem;
}
.Forget{
	width:70%;
	margin:0 auto;
	text-align: center;
	color:#808080;
	p:first-child{
		overflow: hidden;
		margin-bottom:30/20rem;
		a{
		color:#808080;
	}
	a:first-child{
		float:left;
	}
	a:last-child{
		float:right;
	}
	}
	p:last-child{
		text-align: center;
		a{
			display: inline-block;
			width:40/20rem;
            height:40/20rem;
		}
		a:first-child{
			background:url(http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/loginqq.png) no-repeat;
			background-size:40/20rem;
			float:left;
		} 
		a:nth-child(2){
            background:url(http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/loginwx.png) no-repeat;
            background-size:42/20rem;
		}
		a:last-child{
			float:right;
			background:url(http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/loginwb.png) no-repeat;
			background-size:50/20rem;
		}
	}
}
</style>