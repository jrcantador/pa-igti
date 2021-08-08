import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Person from "../views/person/Person.vue";
import PersonList from "../views/person/PersonList.vue";
import PersonDisclosure from "../views/person/PersonDisclosure.vue";
import PersonImage from "../views/person/PersonImage.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",    
    component: Home,
  },
  {
    path: "/register",    
    component: Register,
    meta: { guest: true },
  },
  {
    path: "/login",    
    component: Login,
    meta: { guest: true },
  },
  {
    path: "/persons",
    component: PersonList,
    meta: { requiresAuth: true },
  },
  {
    path: "/persons/form",    
    component: Person,
    meta: { requiresAuth: true },
  },
  {
    path: "/persons/form/:id",    
    component: Person,
    meta: { requiresAuth: true },
  },
  {
    path: "/persons/disclosure/:id",    
    component: PersonDisclosure,
    meta: { requiresAuth: true },
  }, 
  {
    path: "/persons/image/:id",    
    component: PersonImage,
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
