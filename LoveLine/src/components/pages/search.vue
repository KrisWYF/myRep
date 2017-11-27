<template>
	<div>
		<div class="back">
			<div class="container">
		<div class='search'>
     <router-link  to="/index"><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/back.png" alt=""></router-link>
			<input id="inputs" type="text" placeholder="请输入要搜索的内容" @keyup="getInfo"  v-model='keyword'><button @click='haveSearch'>搜索</button>
		</div>
		</div>
  
		<div class="Detail">
    <ul id="list">
        <li @click="getSearch" v-for="(item,index) in result">
          <span>{{item[0]}}</span>
        </li>
      </ul>  
    </div>
		<div class="List" v-show='loveSearch'>
      <h3>大家爱搜</h3>
			<p>身体乳</p>
			<p>口红</p>
			<p>控油</p>
			<p>粉饼</p>
			<p>精华</p>
		</div>
</div>

	</div>
</template>
<script>
	export  default{

		name:'search',
		data(){
			return{
        flag:true,
         ok:false,
         loveSearch:true,
         keyword:'',
         result:[]
			}
		},
    methods:{
      haveShow(event){
        if(this.flag){
        this.ok=!this.ok;
        this.loveSearch=!this.loveSearch;
        this.flag=false;
        
        }
        
      },
      getInfo(event){
         var current = this.$URL+"/sug?q="+this.keyword+"&code=utf-8&area=c2c&nick=&sid=null"
        this.$axios.get(current).
         then(res=>{
        this.result=res.data.result;
      }).catch(error=>{
       console.log(error);
      });
      },
      getSearch(e){
         var inputs = document.getElementById("inputs");
         inputs.value=e.target.innerText;
  
      },
      haveSearch(event){
        if(this.ok){
           this.ok=!this.ok;

        }

    
      }
        }

	}
</script>
<style scoped lang='less'>
   .back{
   	width:100%;
   	height: 667/20rem;
   	background: #fff;
   }
   .container{
   	width: 100%;
   	height:128/40rem;
   	background:#FF406F; 
   	overflow: hidden;
   }
  
   .Detail{
    background:#fff;
    position: relative;
    z-index: 666;
    ul{
      box-shadow: 0px 0px 10px rgba(0,0,0,.1);
       width:80%;
       margin:0 auto;
    li{
      color:#808080;
      padding-left:20/20rem;
      font-size: 14/20rem;
      border-bottom:1px solid #eee;
      line-height: 30/20rem;
    }
  }
   }
    .search{
      width:95%;
      height: 65/40rem;
      margin: 37/40rem auto 0;
      text-align: center;
   }
   .search a,.search input,.search button{
       

         float: left;

   }
   .search a{
    margin-top: -10/40rem;
   }
   .search a img{
      width:60/40rem;
      height: 60/40rem;
   }
   .search input{
   	display: inline-block;
   	width: 450/40rem;
   	height: 50/40rem;
   	border-radius: 10/40rem;
   	border: none;
    margin-left: 14/40rem;
   	margin-right: 20/40rem;
   	padding-left:70/40rem;
   	position: relative;
     background: url("http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/search_red_03.png") no-repeat 13/40rem;
     background-size:47/40rem,47/40rem;;
     background-color:#fff;
   }
    input::-webkit-input-placeholder{
   	   color: #FF406F;
   }
   .search  button{
   	border:none;
   	width: 92/40rem;
   	height: 47/40rem;
   	border-radius: 10/40rem;
   	background: #fff;
   	color:#FF406F;
   }
   .detail{
    width: 540/40rem;
    height: 450/40rem;
    margin: -4/40rem auto 0;
    color:#808080;
    overflow: hidden;
    padding-left: 60/40rem;
    border-radius: 16/40rem;
    border: 1px solid #ccc;
    border-top: transparent;
    box-shadow: 2px  4px 16px rgba(0,0,0,0.1);
   }
   .detail ul{
    margin: 50/40rem 0 60/40rem;
     overflow: hidden;
   }
   .detail ul li{
    float: left;
    margin-right: 45/40rem;
   }
   .detail p{
    width: 380/40rem;
    height: 100/40rem;
    margin-bottom: 60/40rem;
    overflow: hidden;
   }
   .detail p span{
    float: left;
    margin:0 0 20/40rem 32/40rem;
   }
   .detail p span:nth-of-type(2){
    font-size:30/40rem; 
   }
   // .detail p:nth-of-type(2) span:nth-of-type(2){
   //     margin-top: 54/40rem;
   //     margin-left: -162/40rem;

   // }
   .detail p img{
       width: 100/40rem;
       height: 100/40rem;
       float:left;
   }
   h3{
   	font-weight: normal;
   	color:#808080;
   	margin: 18/40rem 0 18/40rem 20/40rem;
   	font-size: 30/40rem;
   }
   .List{
       width:93%;
       height: 40/40rem;
       position: fixed;
       top:140/40rem;
       left:7%/2;
       z-index:0;
   }
   .List p{
   	float: left;
   	font-size: 20/40rem;
   	color: #808080;
    width: 94/40rem;
    height: 36/40rem;
    text-align: center;
    line-height:36/40rem;
    border:1px solid #FF406F;
    border-radius: 10/40rem;
    margin-right: 40/40rem;
   }
  
</style>