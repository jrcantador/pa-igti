import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Person from "../views/Person.vue";
import PersonList from "../views/PersonList.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { guest: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { guest: true },
  },
  {
    path: "/persons",
    name: PersonList,
    component: PersonList,
    meta: { requiresAuth: true },
  },
  {
    path: "/persons/form",
    name: Person,
    component: Person,
    meta: { requiresAuth: true },
  } 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    debugger;
    if (store.getters.currentUser) {
      store.getters.currentToken;
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});
export default router;
