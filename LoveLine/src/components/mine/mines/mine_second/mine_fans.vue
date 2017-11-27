<template>
     <div class='Fans_con'>
   	   <div class="Fans_head">
   	   	  <router-link :to="{path:'/mine'}" class='Back' tag='div'>
       	  <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/back_03.png"  alt="">
          </router-link>		
      	  <p>粉丝</p>
   	   </div>
   	   <div class="Fans_list" v-for="(fans,index) in fansData">
   	   	  <div class="Fans_left">
   	   	    <div class="Fans_img">
   	   	  	  <img :src="fans.fansImg" alt="">
            </div>
            <div class="Fans_words">
            	<p class="name">{{ fans.fansName }}</p>
            	<p><span>{{ fans.fansSex }}</span><span>{{ fans.fansAge }}</span><span>{{ fans.fansStyle }}</span></p>
            </div>
   	   	  </div>
   	   	    <div class="Fans_right">
   	   	       <p  @click='change'>{{ guanzhu }}</p>
   	        </div>
   	   </div>
   </div>
 </template>
<script>

export default {
  name: 'fans',
  data () {
    return {
    	  guanzhu:'关注',
    	  fansData:[]
    }
  },
created(){
     var currentUrl = this.$HOST + "/data/find.json";
     this.$axios.get(currentUrl).then(res=>{
     	this.fansData=res.data.fans;		
     }).catch(error=>{
		console.log(error);
     })
		},
 methods:{
     change:function(event){
         console.log(this.guanzhu);
         console.log(event)
         if(event.target.innerText == '关注'){
             event.target.innerText = '已关注';
             event.target.style.border = '1px solid #ff406f ';
              event.target.style.color = '<div id="ff"></div>406f'
         }else{
             event.target.innerText = '关注';
              event.target.style.border = '1px solid #333 ';
              event.target.style.color = '#333'
         }
     }
  }
}
</script>

<style scoped lang='less'>
.Fans_head{
	height: 50/20rem;
	width: 100%;
	background-color: #ff406f;
	position: relative;
	text-align: center;
	line-height: 50/20rem;
	font-size: 18/20rem;
	color: #fff;
	font-family: "微软雅黑";
	.Back{
		position: absolute;
		width: 25/20rem;
		height: 25/20rem;
		top: 6/20rem;
		left: 8/20rem;
		img{
			width: 22/20rem;
			height: 22/20rem;
		}
	}
}
.Fans_list{
	overflow: hidden;
	width: 355/20rem;
	background-color: #fff;
    margin: 20/20rem auto;
	.Fans_left{
		float: left;
		overflow: hidden;
		.Fans_img{
			width: 60/20rem;
			height: 60/20rem;
			float: left;
			img{
			   width: 60/20rem;
			   height: 60/20rem;
			}
		}
		.Fans_words{
			padding-left: 8/20rem;
			float: left;
			padding-top: 8/20rem;
			box-sizing: border-box;
			font-size: 17/20rem;
			.name{
				font-size: 16/20rem;
				margin-bottom: 5/20rem;
			}
			p{
				padding-bottom:10/20rem;
				box-sizing: border-box;
				font-size: 15/20rem;
			}
		}
	}
	.Fans_right{
		float: right;
		padding-top: 15/20rem;
		box-sizing: border-box;
		p{
           padding: 5/20rem 3/20rem;
           border: 1px solid #333;
           border-radius: 5/20rem;
           font-size: 12/20rem;
           width: 40/20rem;
           text-align: center;
		}
	}
}
</style>
