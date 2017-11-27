<template>
   <div class="Movie">
      <div class="Movie_left">
          <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/collect_talk_head.png" alt="">
          <span>Lucy</span>
       </div>
      <div class="Movie_right">
          <p>2017.11.20</p>
      </div> 
      <div class="Movie_img">
       <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/collect_talk01.png" alt="">
      </div>
   </div>
</template>

<script>
export default {
  name: 'movie',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang='less'>
.Movie{
  font-size: 15/20rem;
   width: 360/20rem;
   height: 200/20rem;
   overflow: hidden;
   margin:10/20rem auto 0;
   box-shadow: 0/20rem 0/20rem 30/20rem #888888;
   border-radius: 5/20rem;
   .Movie_img{
     width: 360/20rem;
     height: 160/20rem;
     border-radius: 5/20rem;
     img{
        width: 360/20rem;
        height: 160/20rem;
     }
   }
   .Movie_left{
      float: left;
      width: 80/20rem;
      height: 40/20rem;
      text-align: center;
      padding-top: 5/20rem;
      box-sizing: border-box;
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
   .Movie_right{
      float: right;
      text-align: center;
      padding-top: 15/20rem;
      box-sizing: border-box;
      margin-right: 8/20rem;
   }
}
</style>