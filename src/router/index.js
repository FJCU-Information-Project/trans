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
    path: "/analysis",
    name: "Analysis",
    component: () => import("../views/Analysis.vue"),
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
    path: "/basicanalysis",
    name: "BasicAnalysis",
    component: () => import("../views/BasicAnalysis.vue"),
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
    path: "/FactorRankAnalysis",
    name: "FactorRankAnalysis",
    component: () => import("../views/FactorRankAnalysis.vue"),
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
  {
    path: "/adddataset",
    name: "AddDataSet",
    component: () => import("../views/AddDataSet.vue"),
  },
  {
    path: "/historydataset",
    name: "HistoryDataSet",
    component: () => import("../views/HistoryDataSet.vue"),
  },
  {
    path: "/sysmannul",
    name: "SysMannul",
    component: () => import("../views/SysMannul.vue"),
  },
  {
    path: "/footer",
    name: "Footer",
    component: () => import("../components/Footer.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/Test.vue"),
  },
  {
    path: "/snadescription",
    name: "SnaDescription",
    component: () => import("../views/SnaDescription.vue"),
  },
  {
    path: "/exampleanalysis",
    name: "ExampleAnalysis",
    component: () => import("../views/ExampleAnalysis.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  let isAuth = localStorage.getItem("token");
  if (to.name !== "Dataset" && to.name !== "Login" && !isAuth && to.name !== "Index" && to.name !== "ExampleAnalysis" 
  && to.name !== "BasicAnalysis" 
  && to.name !== "IsolationAnalysis"
  && to.name !== "ResultAnalysis"
  && to.name !== "Overall"
  && to.name !== "LayerAnalysis"
  && to.name !== "FactorRankAnalysis"
  && to.name !== "SysMannul"
  && to.name !== "SnaDescription") {
    return { name: "Login" };
  }
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
