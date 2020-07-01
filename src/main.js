import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {request} from "./networks/request"
import toast from "./components/toast/index"
Vue.config.productionTip = false
Vue.use(toast)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
request({
  url:"zjt/novel"
}).then(res=>{
  // console.log(res)
}).catch(err=>{
  // console.log(err);
})