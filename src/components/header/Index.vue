<template>
  <div class="header flexOne">
    <div class="logo">
      <img src="@/assets/images/logo.png" />
    </div>
    <ul class="nav">
      <li v-for="(item,index) in navList" :key="index">
        <div class="navlogo">
          <img :src="item.icon" />
        </div>
        <span class="txt">{{ item.title }}</span>
      </li>
    </ul>
    <LangSelect />
  </div>
</template>
<script>
import LangSelect from '@/components/tools/LangSelect'
export default {
    data () {
      return {
          navList: [
              {
                  title: '首页',
                  icon: '../assets/images/home.png'
              },
              {
                  title: '订单',
                  icon: '@/assets/images/order.png'
              },
              {
                  title: '成衣工厂',
                  icon: '@/assets/images/gc.png'
              },
              {
                  title: '供应商',
                  icon: '@/assets/images/gys.png'
              }
          ]
      }
    },
    components: {
      LangSelect
    }

}
</script>
<style lang="less">
.imgcom {
    width: 100%;
    vertical-align: middle;
}
  .header{
     width: 100%;
     height: 58px;
     background: #000;
     opacity: 0.9;
     .logo{
        display: inline-block;
        width: 150px;
        margin-left: 65px;
        img {
            .imgcom()
        }
     }
     .nav{
         display: inline-block;
         img{
            .imgcom()
         }
         .txt {
             color: #fff;
         }
     }
  }
</style>
