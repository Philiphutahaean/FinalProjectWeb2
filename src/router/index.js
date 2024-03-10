import { createRouter, createWebHistory } from "vue-router";
import ServiceList from "../components/ServiceList.vue";
import ServiceCreate from "../components/ServiceCreate.vue";
import ServiceDetails from "../components/ServiceDetails.vue";
import ServiceEdit from "../components/ServiceEdit.vue";
import UserList from "../components/UserList.vue";
import UserCreate from "../components/UserCreate.vue";
import UserDetails from "../components/UserDetails.vue";
import UserEdit from "../components/UserEdit.vue";
import Login from "../components/Login.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ServiceList,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },

    {
      path: "/create",
      name: "servicecreate",
      component: ServiceCreate,
    },
    {
      path: "/service/:id",
      name: "servicedetail",
      component: ServiceDetails,
    },
    {
      path: "/service/:id/edit",
      name: "serviceedit",
      component: ServiceEdit,
    },
    {
      path: "/users",
      name: "userlist",
      component: UserList,
    },
    {
      path: "/users/create",
      name: "usercreate",
      component: UserCreate,
    },
    {
      path: "/users/:id",
      name: "userdetail",
      component: UserDetails,
    },
    {
      path: "/users/:id/edit",
      name: "useredit",
      component: UserEdit,
    },
  ],
});
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.name !== "login" && !authStore.isLoggedIn) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
