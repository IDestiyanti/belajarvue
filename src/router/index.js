import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Matakuliah from "../views/Matakuliah.vue";
import Dosen from "../views/Dosen.vue";
import EditDosen from "../views/EditDosen.vue";
import EditMatkul from "../views/EditMatkul.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/matakuliah",
    name: "Matakuliah",
    component: Matakuliah
  },
  {
    path: "/editmatkul",
    name: "EditMatkul",
    component: EditMatkul
  },
  {
    path: "/dosen",
    name: "Dosen",
    component: Dosen
  },
  {
    path: "/EditDosen",
    name: "EditDosen",
    component: EditDosen
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
