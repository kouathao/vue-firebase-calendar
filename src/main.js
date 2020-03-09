import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDUQT4nVT5MCn3tqGVcR1tzA_yVT3RnHW8",
  authDomain: "vue-calendar-88c6f.firebaseapp.com",
  databaseURL: "https://vue-calendar-88c6f.firebaseio.com",
  projectId: "vue-calendar-88c6f",
  storageBucket: "vue-calendar-88c6f.appspot.com",
  messagingSenderId: "791357091704",
  appId: "1:791357091704:web:6c5be2275693fceb8de28d"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
