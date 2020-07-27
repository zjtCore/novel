import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from "./components/toast/index"
import mui from "./lib/mui/js/mui"

Vue.prototype.$mui = mui;
Vue.config.productionTip = false
Vue.use(toast)

//引入mui
import "./lib/mui/css/mui.min.css"
import "./lib/mui/js/mui.min"

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
