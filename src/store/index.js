import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {getHomeData} from "../networks/home";

export default new Vuex.Store({
  state: {
    counter:"哈哈哈",
    books:[]
  },
  mutations: {
    getData(state,payload){
      state.books = payload
    }
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
