import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CollectionDataView from "../views/CollectionDataView.vue";
import PublishDataView from "../views/PublishDataView.vue";
import ResultView from "../views/Result.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "collectionData",
    component: CollectionDataView,
  },
  {
    path: "/publishData",
    name: "publishData",
    component: PublishDataView,
  },
  {
    path: "/result",
    name: "result",
    component: ResultView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
