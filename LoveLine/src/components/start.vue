<template>
<div class="start-container">
	 <div class="Pic"></div>
	 <footer>
	 	<router-link :to="{name:'guide'}" class='Footer' >
	 	美丽由你开启
	 </router-link>
	 </footer>
	 
	 
</div>
</template>
<script>
  export default {
  name: 'enter',
  components:{
   
  }

}
</script>
<style scoped lang='less'>
	 .start-container{
	 	display: flex;
        flex-direction: column;
        align-items: center;
	 	width: 100%;
	 	/*height: 667/20rem;*/
        overflow: hidden;
	 	background-color: #FF406E;
	 	.Pic{
          margin:334/40rem auto 632/40rem; 
          width: 252/40rem;
          height: 239/40rem;
          background: url("http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/logo.png");
          background-size: 100% 100%;
	 	}
	 	footer{
	 		position: absolute;
	 		font-size: 34/40rem;
	 		text-align: center;
	 		width: 100%;
	 		bottom: 0;
	 		height: 120/40rem;
	 		line-height: 120/40rem;
	 		background: #fff;
	 		a{
	 			color: #8F8F8F;
	 		}
	 		
	
	 	}
	 }
</style>