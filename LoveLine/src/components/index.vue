<template>
  <div class="hello">
      <Navs/>
      <Introduce/>
      <Footers/>
  </div>
</template>

<script>
import  '../assets/css/font/iconfont.css'
import Footers  from './footer.vue'
import Introduce  from './introduce.vue'
import Navs  from './Nav.vue'
 
export default {
  name: 'index',
  data () {
    return {
          
      
    }
  },
    components:{
      Navs,
      Introduce,
     Footers
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>





</style>
