import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "nprogress/nprogress.css";

Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
