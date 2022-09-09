import Vue from "vue";
import VueRouter from "vue-router";
import ListView from "../pages/ListView.vue";
import ManageView from "../pages/ManageView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ListView,
  },
  {
    path: "/manage",
    name: "manage",
    component: ManageView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
