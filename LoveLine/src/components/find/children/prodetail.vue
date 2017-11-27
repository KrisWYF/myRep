<template>
  <div class="ProDatails">
      <div class="Bt_header">
    <div class="Bt_Nav">
      <a onclick="window.history.go(-1)"></a>
      <span>产品详情</span>
      </div>
      </div>
      <div class="Pd_content">
        <div class="Pd_left">
          <img :src="datailJian.imgUrl" alt="">
        </div>
        <div class="Pd_right">
          <p>{{datailJian.recommend}}</p>
          <p><span>参考价:</span><span>{{datailJian.consult}}</span></p>
          <p><span>功效:</span><span>{{datailJian.efficacy}}</span></p>
          <p><span>针对:</span><span>
            {{datailJian.against}}
          </span></p>
          <p><span>主要科技/成分:{{datailJian.component}}</span></p>
        </div>
      </div>
      <p>购买推荐</p>
      <div class="Pro_inter">
         <ul>
          <li>
            <div class="Pro_inter_left">
              <img :src="datailJian.imgUrl" alt="">
            </div>
            <div class="Pro_inter_center">
              <p>天天网</p>
              <p><span>价格:</span><span>{{datailJian.price}}</span></p>
                        <p><span>市场价:</span><del>{{datailJian.market}}</del></p>
            </div>
            <div class="Pro_inter_right">{{datailJian.comment}}人评价</div>
          </li>
          <li>
            <div class="Pro_inter_left">
              <img :src="datailJian.imgUrl" alt="">
            </div>
            <div class="Pro_inter_center">
              <p>唯品会</p>
              <p><span>价格:</span><span>￥359</span></p>
                        <p><span>市场价:</span><del>540</del></p>
            </div>
            <div class="Pro_inter_right">1100人评价</div>
          </li>
          <li>
            <div class="Pro_inter_left">
              <img :src="datailJian.imgUrl" alt="">
            </div>
            <div class="Pro_inter_center">
              <p>天猫</p>
              <p><span>价格:</span><span>￥359</span></p>
                        <p><span>市场价:</span><del>540</del></p>
            </div>
            <div class="Pro_inter_right">1100人评价</div>
          </li>
         </ul>
      </div>
      <div class="Talk">
 <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="口碑点评" name="first">
      <div class="Usercom">
        <ul>
          <li>
            <div class="User_top">
              <div class="User_top_left">
                <p>4.0</p>
                <p>
                <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/likepink.png" alt="">
                <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/likepink.png" alt="">
                <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/likepink.png" alt="">
                <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/likepink.png" alt="">
                <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/likegrey.png" alt="">
                </p>
              </div>
              <div class="User_top_right"></div>
            </div>
                   <div class="User_bottom">
                    <p><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/prologo.png" alt=""><span>徐娇</span></p>
                    <div class="Bot_com">
                      <div class="Bot_com_left">
                        <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/pro_people.png" alt="">
                      </div>
                      <div class="Bot_com_right">
                        众所周知,眼部肌肤往往是脆弱,容易衰老,容易暴露您的年龄
                      </div>
                    </div>
                   </div>
          </li>
        </ul>
      </div>
    </el-tab-pane>
    <el-tab-pane label="相关话题" name="second"><div class="Usercom">
        <ul>
          <li>
            <div class="User_top">
              <div class="User_top_left">
                <p>4.0</p>
                <p>
                <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/likepink.png" alt="">
                <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/likepink.png" alt="">
                <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/likepink.png" alt="">
                <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/likepink.png" alt="">
                <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/likegrey.png" alt="">
                </p>
              </div>
              <div class="User_top_right"></div>
            </div>
                   <div class="User_bottom">
                    <p><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/prologo.png" alt=""><span>徐娇</span></p>
                    <div class="Bot_com">
                      <div class="Bot_com_left">
                        <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/pro_people.png" alt="">
                      </div>
                      <div class="Bot_com_right">
                        众所周知,眼部肌肤往往是脆弱,容易衰老,容易暴露您的年龄
                      </div>
                    </div>
                   </div>
          </li>
        </ul>
      </div></el-tab-pane>
    <el-tab-pane label="相似产品" name="third"><div class="Usercom">
        <ul>
          <li>
            <div class="User_top">
              <div class="User_top_left">
                <p>4.0</p>
                <p>
                <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/likepink.png" alt="">
                <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/likepink.png" alt="">
                <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/likepink.png" alt="">
                <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/likepink.png" alt="">
                <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/likegrey.png" alt="">
                </p>
              </div>
              <div class="User_top_right"></div>
            </div>
                   <div class="User_bottom">
                    <p><img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/prologo.png" alt=""><span>徐娇</span></p>
                    <div class="Bot_com">
                      <div class="Bot_com_left">
                        <img src="http://andypoppy.oss-cn-beijing.aliyuncs.com/images/beauty/pro_people.png" alt="">
                      </div>
                      <div class="Bot_com_right">{{idx}}
                        众所周知,眼部肌肤往往是脆弱,容易衰老,容易暴露您的年龄
                      }
                      }
                      } 
                     }
                    }
                  }
                      </div>
                    </div>
                   </div>
          </li>
        </ul>
      </div></el-tab-pane>
  </el-tabs>
  </div>
  </div>
</template>
<script>
  export default {
    name:"prodatails",
    data() {
      return {
        activeName: 'first',
        detailId:"",
        datailJian:{}
      };
    },
    created(){
        // console.log(this.$store.state.findId)
        var currentURL=this.$HOST+"/data/find.json";
        this.$axios.get(currentURL)
        .then(res => {
             this.datailJian=res.data.cheek[this.$store.state.findId];
        })
        .catch(error => {
          console.log(error);
        })
      },
      computed:{
      idx(){
        var detailId=this.$route.path.split("/").splice(2,1)+"";
        this.$store.state.findId = detailId;
        detailId=this.detailId;
        return this.$store.state.findId; 
      }
  },
    methods: {
      handleClick(tab, event){
      },
      getId(){
         this.$store.commit('getId',this.detailId)
      }
    }
  }
</script>
<style scoped lang="less">
  .Bt_header{
    width:100%;
    height:80/20rem;
    background-color:#ff406f;
    color:#fff;
    overflow:hidden;
        font-size:20/20rem;
    .Bt_Nav{
      width:95%;
      text-align: center;
      margin:40/20rem auto;
      a{
        float:left;
        width:30/20rem;
        height:30/20rem;
        background:url("http://andypoppy.oss-cn-beijing.aliyuncs.com/images/fire/back.png") no-repeat 0 -0.2rem;
      background-size:30/20rem 30/20rem;
               
      }
      span{
        display:inline-block;
        padding-right:20/20rem;
      }
    }
  }
     .Pd_content{
      width:95%;
      margin:0 auto;
      padding:30/20rem 0;
      overflow:hidden;
      .Pd_left,.Pd_right{
        float:left;
      }
      .Pd_left{
        img{
          width:130/20rem;
        }
        margin-right:10/20rem;
        border:1px solid #808080;
        border-radius:5px;
      }
      .Pd_right{
        font-size:12/20rem;
        p{
          width:200/20rem;
          margin-bottom:6/20rem;
          color:#333;
        }
        p:first-child{
          font-size:16/20rem;
        }
        p:nth-child(2)>span,p:nth-child(5)>span{
          color:#808080;
        }
        }
     } 
     .ProDatails>p{
      width:95%;
      margin:0 auto;
      color:#808080;
      margin-bottom:10/20rem;
     }
     .Pro_inter{
      width:95%;
      margin:0 auto;
      border-radius:5px;
      box-shadow: 0px 0px 10px rgba(0,0,0,.3);
      margin-bottom:20/20rem;
      ul{
           padding:2%;
        li{
          overflow: hidden;
          position:relative;
          margin:8/20rem 0;
          font-size: 12/20rem;
          img{
            width:100/20rem;
            border:1px solid #808080;
            border-radius:5px;
          }
              .Pro_inter_left,.Pro_inter_center{
                 float:left;
              }
              .Pro_inter_center{
                p{
                  margin:10/20rem;
                }
                p:first-child{
                   font-size:16/20rem;
                   color:#333;  
                }
                p:nth-child(2),p:nth-child(3){
                  color:#808080;
                }
              }
              .Pro_inter_right{
                position:absolute;
                bottom:5/20rem;
                right:0;
                height:20/20rem;
                padding-left:20/20rem;
                color:#808080;
                background:url(http://andypoppy.oss-cn-beijing.aliyuncs.com/images/find/msg.png) no-repeat;
                background-size:20/20rem;
              }
        }
      }
     }
     .Talk{
      width:95%;
      margin:0 auto;
       .Usercom{
        border-radius:5px;
        box-shadow: 0px 0px 15px rgba(0,0,0,0.3);
        font-size: 14/20rem;
        ul{
          
          li{
            margin-left:30/20rem;
            padding:20/20rem 0;
          .User_top{
            p{
              text-align: center;
              margin-bottom:10/20rem;
            }
          } 
        .User_bottom{
         &>p{
             span{
              position: relative;
              bottom:5/20rem;
              left:5/20rem;
             }
         }
         .Bot_com{
          margin:10/20rem;
          overflow: hidden;
          .Bot_com_left,.Bot_com_right{
            float:left;
          }
          .Bot_com_left{
            img{
              width:80/20rem;
            }
            margin-right:10/20rem
          }
          .Bot_com_right{
            width:200/20rem;
            line-height: 20/20rem;
            color:#808080;
          }
         }
        }
       }
      }
     }
    }

</style>