<template>
   <div class="Talk">
      <router-link class="Talk_img" :to="{path:'/wenz'}" tag='div'>
       <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/collect_talk01.png" alt="">
      </router-link>
      <div class="Talk_left">
          <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/collect_talk_head.png" alt="">
          <span>Lucy</span>
       </div>
      <div class="Talk_right">
          <p>1122</p>
      </div> 
   </div>
</template>

<script>
export default {
  name: 'talk',
  data () {
    return {
      talkData:[]
    }
  },
 created(){
  var currentUrl = this.$HOST+"/data/find.json"
  this.$axios.get()
  .then(res=>{
    this.talkData = res.data.collect_talk
  }).catch(error=>{
    console.log(error);
  })
 }
}
</script>

<style scoped lang='less'>
.Talk{
  font-size: 15/20rem;
   width: 360/20rem;
   height: 200/20rem;
   overflow: hidden;
   margin:10/20rem auto 0;
   box-shadow: 0/20rem 0/20rem 30/20rem #888888;
   border-radius: 5/20rem;
   .Talk_img{
     width: 360/20rem;
     height: 160/20rem;
     background-color: red;
     border-radius: 5/20rem;
     margin-bottom: 5/20rem;  
     img{
        width: 360/20rem;
        height: 160/20rem;
     }
   }
   .Talk_left{
      float: left;
      width: 80/20rem;
      height: 40/20rem;
      text-align: center;
      img{
         width: 30/20rem;
         height: 30/20rem;
      }
      span{
         float: right;
         width: 40/20rem;
         height: 30/20rem;
         padding-top: 8/20rem;
         box-sizing: border-box;
      }
   }
   .Talk_right{
      float: right;
      margin-right: 20/20rem;
      font-size: 95%;
      width: 40/20rem;
      height: 30/20rem;
      text-align: center;
      padding-left: 25/20rem;
      padding-top: 8/20rem;
      box-sizing: border-box;
      background:url(http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/infos.png) no-repeat;
      background-position: 0.1rem 7/20rem;
   }
}
</style>