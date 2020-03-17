import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router'
import store from './store'
import api from './api'
import i18n from './lang'
import 'ant-design-vue/dist/antd.css'

// 全局业务css样式
import './styles/index.less'
Vue.config.productionTip = false

Vue.prototype.$api = api

Vue.use(Antd)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
