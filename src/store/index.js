import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {getHomeData} from "../networks/home";

export default new Vuex.Store({
  state: {
    counter:"哈哈哈",
    books:[],
    users:"",
    isLogin:false,
    shoppingInfo:[]
  },
  mutations: {
    getData(state,payload){
      state.books = payload
    },
    getUser(state,user){
      state.users = user;
    },
    getIsLogin(state,isLogin){
      state.isLogin = isLogin;
    },
    // getShoppingInfo(state,shoppingInfo){
    //   state.shoppingInfo.push(shoppingInfo);
    // }
  },
  actions: {
    getHomeDataA({commit,state}){
      getHomeData().then(res=>{
        console.log(res)
        commit("getData",res)
        state.books=res;
      })
    }

  },
  modules: {

  }
})
