import Vue from 'vue'
import Router from 'vue-router'
import  Index  from  '../components/index.vue'
import  Active   from '../components/pages/active.vue'
import  Article   from '../components/pages/article.vue'
import  Navs  from  '../components/Nav.vue'
import  Becomebeauty   from '../components/pages/becomebeauty.vue'
import  Detail   from '../components/pages/detail.vue'
import  Everyday   from '../components/pages/everyday.vue'
import  Search  from '../components/pages/search.vue'
import  Finds  from '@/components/find/find.vue'
import  TV  from  '../components/pages/TV.vue'
import  Banner from '../components/pages/Banner.vue'
import Fire from '@/components/find/fire'
import Beauty from '@/components/find/beauty'
import Hot from '@/components/find/hot'
import Initiate from "@/components/find/initiate"
import InitFind from "@/components/find/children/initfind"
import InitJoin from "@/components/find/children/initjoin"
import InitIcon from "@/components/find/children/initIcon"
import Prodatails from "@/components/find/children/prodatails"
import Mine  from  '@/components/mine/mines/mine.vue'
import Info from '@/components/mine/mines/mine_second/mine_info'
import Topic from '@/components/mine/mines/mine_second/mine_info_topic'
import Friend from '@/components/mine/mines/mine_second/mine_info_friend'
import Collect from '@/components/mine/mines/mine_second/mine_collect'
import Care from '@/components/mine/mines/mine_second/mine_care'
import Fans from '@/components/mine/mines/mine_second/mine_fans'
import Talk from '@/components/mine/mines/mine_second/mine_third/mine_collect_talk'
import Product from '@/components/mine/mines/mine_second/mine_third/mine_collect_product'
import Movie from '@/components/mine/mines/mine_second/mine_third/mine_collect_movie'
import Wenz  from '@/components/mine/mines/mine_second/mine_wenz'
import Appraise from '@/components/mine/mines/mine_second/mine_appraise'
import Start from '../components/start'
import Classify from '../components/classify/classify'
import Guide from '../components/guide/guide'
import Cheek from '../components/classify/cheek'
import SetIndex from '../components/set/set_index'
import Personal from '../components/set/personal'
import Bound from '../components/set/bound'
import Address from '../components/set/address'
import LoveLiness from '../components/set/loveliness'
import Help from '../components/set/help'
import Opinion from '../components/set/opinion'
import Upload from '../components/upload'
import Enter from '../components/start'
import Register from "@/components/register"
import Login from "@/components/login"
import $ from  "jquery"


Vue.use(Router)



export  default  new  Router({

    routes:[
     {
      path:'/',
      name:'enter',
      component:Enter
    },
    {
      path:'/guide',
      name:'guide',
      component:Guide
    },{
      path:'/register',
      name:'register',
      component:Register
    },{
      path:'/login',
      name:'login',
      component:Login
    },
      {
         path:'/index',
         name:'index',
         component:Index
         
     },
     {
     	 path:'/navs',
         name:'navs',
         component:Navs,
         children:[{
         path:'becomebeauty',
         name:'becomebeauty',
         component:Becomebeauty
        
         }]

     },
     {

         path:'/video/:id',
         name:'video',
         component:TV
        
         },
         {
         path:'/find',
         name:'find',
         component:Finds
         },
         ,
         {
         path:'/mine',
         name:'Mine',
         component:Mine
         },  
        {
          path:'/info',
          name:'info',
          component:Info
        },
        {
          path:'/topic',
          name:'topic',
          component:Topic
        },
        {
          path:'/friend',
          name:'friend',
          component:Friend
        },
        {
          path:'/collect',
          name:'collect',
          component:Collect,
          redirect:'/collect/product',
          children:[{
            path:'talk',
            component:Talk
          },
          {
            path:'product',
            component:Product
          },
          {
            path:'movie',
            component:Movie
          }]

        },
       
        {
          path:'/care',
          name:'care',
          component:Care
        },
        {
          path:'/fans',
          name:'fans',
          component:Fans
        },
        {
          path:'/wenz',
          name:'webz',
          component:Wenz
        },
        {
           path:'/appraise',
           name:'appraise',
           component:Appraise
        },
          {
      path: '/classify',
      name: 'classify',
      component:Classify 
      
    },
    {
      path: '/cheek',
      name: 'cheek',
      component:Cheek 
      
    },
     {
      path: '/setIndex',
      name: 'setIndex',
      component:SetIndex 
      
    },
    
    {
      path: '/',
      name: 'upload',
      component:Upload 
      
    },
     {
      path: "/Personal",
      name: "personal",
      component: Personal
      
    },
    {
      path: "/Bound",
      name: "bound",
      component: Bound
    },
    {
      path: "/address",
      name: "address",
      component: Address
    },
    {
      path: "/loveliness",
      name: "loveliness",
      component: LoveLiness
    },
    {
      path: "/help",
      name: "help",
      component: Help
    },
    {
      path: "/opinion",
      name: "opinion",
      component: Opinion
    },
    {
      path: "/guide",
      name: "guide",
      component: Guide
    },
         {
         	 path:'/search',
             name:'search',
             component:Search

         },
          {
         	 path:'/active',
             name:'active',
             component:Active

         },

         {
         	 path:'/detail',
             name:'detail',
             component:Detail

         },
     {
     	 path:'/everyday',
         name:'everyday',
         component:Everyday

     },
     {
     	 path:'/article',
         name:'article',
         component:Article

     },
     {
         path:'/banner',
         name:'banner',
         component:Banner

     },{
      path: '/fire',
      name: 'Fire',
      component: Fire
    },{
      path: '/beauty',
      name: 'Beauty',
      component: Beauty
    },{
      path: '/hot',
      name: 'Hot',
      component: Hot
    },{
       path: '/prodatails/:id',
      name: 'prodatails',
      component: Prodatails
    },
    {
      path: '/initiate',
      name: 'Initiate',
      component: Initiate,
      redirect: "/initiate/initfind",
      children:[
      {
          path: 'initfind',
          component: InitFind,
      },
       {
          path: 'initjoin',
          component: InitJoin
        }
     ]
  },
   {  
      path: '/initiate/initicon',
      component: InitIcon
    }
		
	]
})