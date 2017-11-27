<template>
	<div class="Register">
		<div class="Reg_header">
		<div class="Reg_Nav">
			<router-link :to="{path:'/'}"></router-link>
		</div>
		</div>
		<div class="Reg_seat">
		<form action="">
		  <label for=""><i></i><input ref="uname" type="text" name="" placeholder="账号"></label>
		  <label for=""><i></i><input  ref="upwd" type="text" name="" placeholder="密码"></label>
		  <label for=""><i></i><input ref="rpwd" type="text" name="" placeholder="重新输入"></label>
		  <label for=""><span></span>
		  	<input type="text" placeholder="请输入验证码"  ref="yzm"><span @click="yanz" class="yzm" v-model="yzm2"></span>
		  </label>
		</form>
		</div>
		<div class="Reg_footer">
			<a href="javascript:;" @click='register'>注册</a>
		</div>
	</div>
</template>

<script>
import qs from "qs"
import $ from "jquery"

	export default{
		name:'register',
		data(){
           return{
             yzm2:''
           }
		},
		methods:{
        register:function(event){
             this.select();

	  	},
	  	//查询功能
	  	select:function(){
	  	   var yzm = this.$refs.yzm.value;
           var upwd = this.$refs.upwd.value;
           var rpwd = this.$refs.rpwd.value;
           var uname=this.$refs.uname.value;
           console.log(uname)
           this.$axios.post('http://localhost:3000/select',{
           	username:uname
           }).then(res => {
           	if(res.data.length==0){
           		if(yzm.toLowerCase == this.yzm2.toLowerCase){
                    if(upwd && rpwd && uname ){
                    	console.log("ok")
                    	window.location.href="#/login"
           		        this.reg();
                    }else{
                    	alert("账号密码不能为空")
                    }
           		}else{
           			alert("验证码错误")
           		}
           		
           	}else{
           		alert("用户名已存在")
           	}
            // get body data
            // this.someData = response.body;

        }, response => {
            console.log("error");
        });
	  	},
	  	//注册功能
	  	reg:function(){
	  		var uname=this.$refs.uname.value;
	  		var upwd=this.$refs.upwd.value;
           this.$axios.post('http://localhost:3000/create',{
           	"username":uname,
           	"password":upwd
           }).then(res => {
             console.log(res.data);
  
        }, res => {
            console.log("error");
        });
	  	},
        yanz:function(event){
             	var arr = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','	U','V','W','X','Y','Z'];
             	var str="";
		     for(var i=0 ;i<6 ; i++){
			    var biao = Math.floor(Math.random()*arr.length);
			     str+=arr[biao];
			     this.yzm2 = str;
		       }
		     $(".yzm").html(str);
             }
		}
	}
</script>
<style scoped lang="less">

	.Reg_header{
		width:100%;
		height:80/20rem;
		color:#fff;
		overflow:hidden;
        font-size:20/20rem;
		.Reg_Nav{
			width:95%;
			text-align: center;
			margin:40/20rem auto;
			a{
				float:left;
                width:30/20rem;
                height:30/20rem;
                background:url("http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/pink_back.png") no-repeat 0 0;
                background-size:30/20rem 30/20rem;
               
			}
			span{
				display:inline-block;
				padding-right:20/20rem;
			}
		}
	} 
	.Reg_seat{
		width:95%;
		margin:0 auto;
		margin-top:60rem/20rem;
		label{
			display:block;
			width:90%;
			margin:0 auto;
			input{
			border:none;
			font-size:18/20rem;
			border-bottom:1px solid #808080;
			background-color:transparent;
			width:85%;
			height:40/20rem;
		    line-height: 40/20rem;
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
    }
    label:first-child ~ label>i{
			background:url("http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/pwd.png") no-repeat;
			  background-size:30/20rem;
			  height:40/20rem;
			  position: relative;
			  top:15/20rem;
		}
	label:last-child{
		span{
			display:inline-block;
			width:9.4%;
			height:40/20rem;
		}
     input{
     	width:50%;
     }
	}	
}
.Reg_footer{
	width:80%;
	margin:0 auto;
	margin-top:60/20rem;
	a{
      display:inline-block;
      width:100%;
      text-align: center;
      color:#fff;
      background-color:#ff406f;
      text-decoration: none;
      height:40/20rem;
      font-size: 18/20rem;
      line-height: 40/20rem;
      border-radius: 10/20rem;
      box-shadow:0 10/20rem 10/20rem  rgba(255,64,111,0.3);
	}
	a:active{
		transform:scale(0.8);
	}
}
</style>