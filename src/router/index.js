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
    path: "/overall",
    name: "Overall",
    component: () => import("../views/Overall.vue"),
  },
  {
    path: "/layeranalysis",
    name: "LayerAnalysis",
    component: () => import("../views/LayerAnalysis.vue"),
  },
  {
    path: "/resultanalysis",
    name: "ResultAnalysis",
    component: () => import("../views/ResultAnalysis.vue"),
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
    path: "/monoNodeanalysis",
    name: "MonoNodeAnalysis",
    component: () => import("../views/MonoNodeAnalysis.vue"),
  },
  {
    path: "/isolationanalysis",
    name: "IsolationAnalysis",
    component: () => import("../views/IsolationAnalysis.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/management",
    name: "Management",
    component: () => import("../views/Management.vue") /*
    children: [
      {
        path: 'history',
        name: 'History',
        component: () => import("../views/History.vue"),
      },
      {
        path: "favorite",
        name: "Favorite",
        component: () => import("../views/Favorite.vue"),
      },
    ],*/,
  },
  {
    path: "/dataset",
    name: "Dataset",
    component: () => import("../views/Dataset.vue"),
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
