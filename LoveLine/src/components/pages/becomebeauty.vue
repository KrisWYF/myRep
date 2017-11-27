<template>
	<div>
		<div class="container">
		<div class="Becomebeauty">
			 <el-tabs v-model="activeName2" type="card" @tab-click="handleClick" >
		    <el-tab-pane label="美丽视频" name="first">
		    	<div class="MVfirst"   v-for="(item,index) in Autoplay">
				<router-link  tag='div' :to="{name:'video',params:{id:index}}"><img :src="item.img1" />
                </router-link>
				<span>今日推荐</span>
				<span>|</span>
				<span>底妆全靠它</span>
				<span>春日幻彩</span>
			</div>		
		    </el-tab-pane>
		    <el-tab-pane label="女神日记" name="second">
		    	<div class="MVfirst"   v-for="item in Autoplay">
				<img :src="item.img"  alt="">
				<span>今日推荐</span>
				<span>|</span>
				<span>底妆全靠它</span>
				<span>春日幻彩</span>
			</div>
		    </el-tab-pane>
		  </el-tabs>

			</div>
		</div>
	</div>
</template>
<script>
	export  default{

		name:'becomebeauty',
		data(){
			return{

				 activeName2: 'first',
				 Autoplay:[]
			}
		},
		 methods: {
       handleClick(tab, event){
        // console.log(tab, event);
       }
    },created(){
    	 var currentUrl = this.$HOST + "/data/find.json"
			this.$axios.get(currentUrl)
      .then(res=>{
         this.Autoplay=res.data.Video
         // console.log(this.Autoplay)


      }).catch(error=>{

        console.log(error)
      })
    }

	  }
</script>
<style scoped lang='less'>
.container{
	width: 95%;
	margin:0 auto;
	height: 1500/40rem;
	position: relative;
	z-index: 666;
}
	.Becomebeauty{
		width: 95%;
		height: 1500/40rem;
		background: #fff;
		position: absolute;
		top:-4.25rem;
		left:5%/2;
		// z-index: -777;
		overflow: hidden;
		border-radius: 16/40rem;
		box-shadow: 2px  4px 16px rgba(0,0,0,0.1);
		
	}
	.MVfirst{
		width: 670/40rem;
        height: 328/40rem;
        margin: 0 auto 2.5rem;
	}
	.Becomebeauty  p{
		width: 100%;
		margin: 79/40rem;
	}
	.Becomebeauty  p span{
		margin-left: 80/40rem;
	}
	.Becomebeauty  p span:nth-child(1){
		color:#ff406f;
	}
	.Becomebeauty  p span:nth-child(2):hover{
		color:#ff406f;
	}
	.MVfirst video{
        width: 670/40rem;
        height: 328/40rem;
	}
	.MVfirst img{
        width: 670/40rem;
        height: 328/40rem;
	}
	.MVfirst span{
		display: inline-block;
		color: #808080;
		font-size: 36/40rem;
		margin-top: 25/40rem;
	}
	
</style>