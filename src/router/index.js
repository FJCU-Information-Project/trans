import { createRouter, createWebHashHistory } from "vue-router";
/*
import Home from "../views/Home.vue";
import Index from "../views/Index.vue";
import Upload from "../views/Upload.vue";
*/

const routes = [
  {
    path: "/",
    name: "Index",
    component: () =>
      import("../views/Index.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import("../views/Home.vue"),
  },
  {
    path: "/upload",
    name: "Upload",
    component: () =>
      import("../views/Upload.vue"),
  },
  {
    path: "/config",
    name: "Config",
    component: () =>
      import("../views/Config.vue"),
  },
  {
    path: "/analysis_1",
    name: "Analysis1",
    component: () =>
      import("../views/Analysis1.vue"),
  },
  {
    path: "/analysis_2",
    name: "Analysis2",
    component: () =>
      import("../views/Analysis2.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
