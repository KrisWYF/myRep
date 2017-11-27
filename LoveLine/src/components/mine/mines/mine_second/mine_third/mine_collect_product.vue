<template>
<div>
<div class="Product_img" v-for='(pro,index) in productData'>
             <div class="Product_left">
               <img :src="pro.collect_product_img1" alt="">
               <p>{{ pro.collect_product_con1 }}</p>
               <span>参考价: ¥{{ pro.collect_product_price1 }}</span>
               <span class='Pl'>{{ pro.collect_product_num1 }}</span>
             </div>
             <div class="Product_right">
                <img :src="pro.collect_product_img2" alt="">
               <p>{{ pro.collect_product_con2 }}</p>
               <span>参考价:¥{{ pro.collect_product_price2 }}</span>
                <span class='Pl'>{{ pro.collect_product_num2 }}</span>
             </div>
          </div>
 </div>
</template>

<script>
export default {

  name: 'product',
  data () {
    return {
      productData:[]
      
    }
  },
 created(){
  var currentUrl = this.$HOST+"/data/find.json"
  this.$axios.get(currentUrl)
  .then(res=>{
    this.productData = res.data.collect_product;
  }).catch(error=>{
    console.log(error);
  })
 }
}
</script>

<style scoped lang='less'>
.Product_img{
  overflow: hidden;
  border-radius: 5/20rem;
  width: 335/20rem;
  height: 150/20rem;
  margin: 10/20rem auto 0;
  box-shadow: 0/20rem 0/20rem 10/20rem rgba(0,0,0,0.3);
  .Product_left,.Product_right{
    box-sizing: border-box;
    width: 160/20rem;
    height: 150/20rem;
    font-size: 8/20rem;
    overflow: hidden;
    p{
     margin-bottom: 8/20rem;
    }
    .Pl{
      float: right;
      margin-right: 8/20rem;
      display: block;
      padding-left: 20/20rem; 
      background:url(http://andypoppy.oss-cn-beijing.aliyuncs.com/images/images/infos.png) no-repeat;
      background-position: 0.3rem 0/20rem;
      background-size: 12/20rem 12/20rem;
    }
    img{
      width:160/20rem;
      height: 100/20rem;
    }
  }
  .Product_right{
    float: right;
    
  }
  .Product_left{
    float: left;
  }
}
</style>