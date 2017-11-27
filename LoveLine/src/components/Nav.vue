<template>
	<div class="con">
		 <div class='Head_nav'>
           <div class="Head_nav_top">
             <router-link exact to='/search'><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/find-search.png" alt="" ></router-link>
              <router-link  exact to='/index' active-class='act'>美丽推荐</router-link>
             <router-link  exact to='/navs/becomebeauty' active-class='active'>学变美</router-link>
             <a href="#"><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/index-images/scan_03.png" height="48" width="48" alt=""></a>
           </div>
     </div>
 
       <Footers/>

	</div>
	
</template>
<script>
import  Footers  from  '../components/footer.vue'
	export default{

		name:'navs',
		data(){
			return{

        

			}
		},
    components:{
      Footers
    }

	}
</script>
<style scoped lang='less'>
.active,.act{
  border-bottom: 3px solid #fff;
}
.con{
  overflow: hidden;
}
	.Head_nav{
  width: 100%;
  height:320/40rem;
  padding-top: 50/40rem;
  background-color: #FF406F;
  overflow: hidden;
  position: relative;

}
.Head_nav_top{
   width: 710/40rem;
   height: 67/40rem;
   margin:20/40rem  auto 0;
   overflow: hidden;
   text-align: center;
   overflow: hidden;
}
.Head_nav_top a{
  text-decoration: none;
  display: inline-block;
  font: italic 36/40rem "楷体";
  color: white;
  float: left;
  margin-top: 10/40rem;
}

.Head_nav_top a:nth-child(1) img{
  width: 70/40rem;
  height: 70/40rem;
}
.Head_nav_top a:nth-child(1){
  margin-top: 0;
}
.Head_nav_top a:nth-child(2){
  margin-left: 95/40rem;
  padding-bottom: 10/40rem;
}
.Head_nav_top a:nth-child(3){
  // margin-right: 80/40rem;
  margin-left: 94/40rem;
  padding-bottom: 10/40rem;
  
}
.Head_nav_top a:nth-child(4){
  margin-left: 84/40rem;
  margin-top: 0;
}
.Head_nav_top a img{
  width: 60/40rem;
  height: 60/40rem;

}
</style>