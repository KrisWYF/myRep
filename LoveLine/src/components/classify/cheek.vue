

<template>
     <div class="Cheek">
      <nav>
        <router-link :to="{path:'/index'}" class='Span'>
        <span></span>
        </router-link>
             <h1>腮红</h1>
      </nav>
      <div class="Cheek-Box">
       <div class="Cheek-cont">
         <div v-for='(item,index) in cheek'  :class="[index%2 ==0? 'Active':'']" class="Cheek-box" >
          <!--<div class="Cheek-grid">-->
        <router-link class="Ht_tu" tag="div" :to="{name:'prodatails',params:{id:index}}"> 
        <img :src="item.imgUrl" alt="" >
        </router-link>
              <p>{{item.recommend}}</p>
             <div class="Pro-desc">
                <span class="Price">参考价:{{item.thumbs}}</span>
                  
                  <p class="P">
                    <span>
                      <img  src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/cheek/like.png" @click="change" :id='index'>
                      
                    </span>
                     <span>{{item.likeCount}}</span>
                  </p>
                 
              </div>
          <!--</div>-->
         </div>
       
       </div>
       </div>
     </div>
</template>

<script>
export default {
  name: 'cheek',
 
  data () {
    return {
      cheek:[]

    }
  },
  created(){
     var currentUrl = this.$HOST + "/data/find.json"
      this.$axios.get(currentUrl)
    .then(res=>{
      this.cheek=res.data.cheek;
    }).catch(error=>{
      console.log(error);
    })
  },methods:{
     change(event){
        if(event.target.src=='http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/cheek/like.png'){
          event.target.src='http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/cheek/liked.png'
          this.cheek[event.target.id].likeCount+=1;
        }else{
          event.target.src='http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/cheek/like.png'
          this.cheek[event.target.id].likeCount-=1;
        }
      
}
     }
 
}
</script>

<style scoped lang='less'>
  .Cheek{
  

    .Active{
      margin-right: 11/20rem;
    }
    position: relative;
    width: 100%;
    padding-bottom: 2rem;
    box-sizing: border-box;
  
  }
    nav{
    padding: 2rem  6/20rem  100/20rem;
    background:#FF406F;
    display: flex;
    flex-direction: row;
    color: #FFFFFF;
    align-items: center;
    text-align: center;
    
    &>.Span{
      width:30/20rem;
      height: 30/20rem;
      display: inline-block;
      background:url('http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/back.png') no-repeat;
      background-size: 100%;
    }
    &>h1{
      flex-grow: 1;
      padding-right: 1.5rem;
      font-weight: 400;
    
    }
}
.Cheek-Box{
  
    width: 100%;
    position: absolute;
    top:5rem;
}
.Cheek-cont{
  margin: 0 auto;
  background: #fff;
  width: 95%;


  p{
    
    padding-left: 5/20rem;
    font-size: 12px;
    display: inline-block;}
  
  .Cheek-box{
    /*margin: 0 4px;*/
    box-shadow: 0 0 10px rgba(0,0,0,.4);
    margin-bottom: 10px;
    background: #FFF;
        border-radius: 5px 5px 0 0;
        display:inline-block;
    width: 48.3%;
    // height: 195/20rem;
        font-size: 12px;
        color:#333;
    .Ht_tu{img{
      width: 100%;
      height: 300/40rem;
      margin-bottom: 5px;
    }
  }
    span>img{
      width: .6rem;
    }
    
  }

  .Pro-desc{
    
     padding: 0 5/20rem;
     height: 1rem;
     line-height: 1rem;
     .Price{
      margin-right:.5rem;
     }
     p{
      display: inline-block;
     }
  }
  
}
</style>
