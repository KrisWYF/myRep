<template>
	<div class = "Initiate">
		<div class="Init_header">
			<div class="Init_Nav">
				<router-link :to="{path:'/find'}"></router-link>
			<router-link tag="span" :to="{path:'/initiate/initfind'}" class="My_init">我发起的</router-link>
			<router-link tag="span" :to="{path:'/initiate/initjoin'}" class="My_join">我参与的</router-link>
			</div>
			</div>
			<router-view/>
		</div>
</template>
<script>
	
</script>
<style scoped lang="less">
	.Init_header{
		width:100%;
		height:160/20rem;
      margin-bottom:100/20rem;
		background-color:#ff406f;
		color:#fff;
		overflow:hidden;
        font-size:16/20rem;
		.Init_Nav{
			width:95%;
			text-align: center;
			margin:40/20rem auto;
			a{
				float:left;
                width:30/20rem;
                height:30/20rem;
                background:url("http://andypoppy.oss-cn-beijing.aliyuncs.com/images/fire/back.png") no-repeat;
                background-size:30/20rem 30/20rem;
			}
			span{
				display:inline-block;
				margin-right:30/20rem;
				padding:5/20rem;
				.active{
				border-bottom:3px solid #fff;
				}
			}

		}
	}
</style>