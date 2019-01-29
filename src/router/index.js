import Vue from "vue";
import Router from "vue-router";
import Signup from "../components/Signup";
import Landing from "../components/Landing";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Landing",
      component: Landing
    },

    {
      path: "/users",
      name: "Signup",
      component: Signup
    }
  ]
});
