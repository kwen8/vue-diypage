import Vue from "vue";
import Vuex from "vuex";
import diypage from "./modules/diypage";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    diypage
  }
});

export default store;
