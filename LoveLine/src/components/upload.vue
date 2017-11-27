<template>
	<div class="upload">
	   <nav>
      	  <router-link :to="{path:'/index'}" class='Span'>
     	 	<span></span>
     	  </router-link>
     	   <router-link :to="{path:'/index'}" tag='h1'>
     	 	 发送
     	  </router-link>
      	</nav>
      	<div class="UpLoad-box">
      		<textarea rows="4" cols=""  placeholder="这一刻的想法......" ></textarea>
      		<div class="AddPic">
      			
      			<el-upload
				  action="https://jsonplaceholder.typicode.com/posts/"
				  list-type="picture-card"
				  :on-preview="handlePictureCardPreview"
				  :on-remove="handleRemove">
				  <i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogVisible" size="tiny">
				  <img width="100%" :src="dialogImageUrl" alt="">
				</el-dialog>
      		</div>
      	</div>
	</div>
</template>

<script>
	export default{
		name:'upload',
		data(){
			return{
				dialogImageUrl: '',
                dialogVisible: false
			}
		},
	   methods: {
        handleRemove(file, fileList) {
        console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
       }
     }
	}
</script>

<style scoped lang="less">
 .upload{
  	width: 100%;
  	padding-bottom: 2rem;
  	box-sizing: border-box;
    nav{
    overflow: hidden;
  	padding: 2rem  8/20rem  6/20rem;
  	background:#FF406F;
  	color: #FFFFFF;
  	text-align: center;
  	vertical-align: middle;
  	
  	.Span{
  		float: left;
  		width:30/20rem;
  		height: 30/20rem;
  		display: inline-block;
  		background:url('http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/back.png') no-repeat;
  		background-size: 100%;
  		
  	}

  	&>h1{
  		float: right;
  		padding-right:.5rem;
  		font-weight: 300;
  		font-size: 1rem;
  		
  		
  	}
  }
  .UpLoad-box{
  	margin-top: .5rem;
  	box-shadow: 0 0 10px rgba(0,0,0,.1);
  	padding: 0 1rem .5rem;
  	textarea{
  		font-size: 16px;
  		font-family: "微软雅黑";
  		font-weight: 300;
  		border:none;
  		width: 100%;
  		resize:none;
  		
  	}
  	
  	.AddPic{
  		  display: flex;
  		  flex-direction: row;
  	}
  }
  
}
</style>