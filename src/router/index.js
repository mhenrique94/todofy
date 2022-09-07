import Vue from "vue";
import VueRouter from "vue-router";
import ListView from "../pages/ListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ListView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
