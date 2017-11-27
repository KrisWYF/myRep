// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import  router   from './router'
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
import  { Tabs,TabPane,Switch} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css';
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Calendar from 'vue-calendar-component';
import qs from "qs"
import  Vuex from 'vuex'
import VueResource from 'vue-resource'
import {swiper,swiperSlide} from "vue-awesome-swiper"


Vue.use(ElementUI)
Vue.use(Switch)
Vue.use(VueAwesomeSwiper)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Calendar)
Vue.use(Vuex)
Vue.use(VueResource)
var  store =new Vuex.Store({
  state:{
    Indexid:0
  },mutations:{
    getId(state){
      console.log(state)
    }

  }
})
Vue.prototype.$axios=Axios
Vue.prototype.$HOST = '/api'
Vue.prototype.$URL = '/url'
// import './styles/style.less'
Axios.interceptors.request.use(function (config) {
   if(config.method == "post"){
    	config.data = qs.stringify(config.data);
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


Axios.interceptors.response.use(function (response) {
    
    return response;
  }, function (error) {
   
    return Promise.reject(error);
  });


Vue.config.productionTip = false

export default{

  components: {
     swiper,
     swiperSlide
    
    }

}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
