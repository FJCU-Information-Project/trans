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
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/upload",
    name: "Upload",
    component: () => import("../views/Upload.vue"),
  },
  {
    path: "/config",
    name: "Config",
    component: () => import("../views/Config.vue"),
  },
  {
    path: "/layeranalysis",
    name: "LayerAnalysis",
    component: () => import("../views/LayerAnalysis.vue"),
  },
  {
    path: "/intersectionanalysis",
    name: "IntersectionAnalysis",
    component: () => import("../views/IntersectionAnalysis.vue"),
  },
  {
    path: "/resultanalysis",
    name: "ResultAnalysis",
    component: () => import("../views/ResultAnalysis.vue"),
  },
  {
    path: "/intersectionanalysis",
    name: "IntersectionAnalysis",
    component: () => import("../views/IntersectionAnalysis.vue"),
  },
  {
    path: "/closenessanalysis",
    name: "ClosenessAnalysis",
    component: () => import("../views/ClosenessAnalysis.vue"),
  },
  {
    path: "/degreeanalysis",
    name: "DegreeAnalysis",
    component: () => import("../views/DegreeAnalysis.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/management",
    name: "Management",
    component: () => import("../views/Management.vue"),
  },
  {
    path: "/history",
    name: "History",
    component: () => import("../views/History.vue"),
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: () => import("../views/Favorite.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
