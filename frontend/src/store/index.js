import Vuex from "vuex";
import Vue from "vue";
import jwt from "jsonwebtoken";
import axios from "axios";

Vue.use(Vuex);
const jwtKey =
  "ED54E67BCD64F0C63E5461223CD70FCF9D39302D2A6716BF7278E0DF88C94A63";

export default new Vuex.Store({
  state: {
    user: null,
    userScope: null,
    token: null,
  },
  getters: {
    currentUser: (state) => {
      if (!state.user) {
        state.user = localStorage.getItem("user");
      }
      return state.user;
    },
    currentScope: (state) => {
      return state.userScope;
    },
    currentToken: (state) => {
      axios.defaults.headers.common.Accept = "application/json";
      if (!state.token) {
        axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
          "token"
        )}`;
      } else {
        axios.defaults.headers.common.Authorization = `Bearer ${state.token}`;
      }
      return state.token;
    },
  },
  mutations: {
    setUser(state, user) {
      if (user) {
        state.user = user;
        const encodedUser = jwt.sign(user, jwtKey);
        localStorage.setItem("user", encodedUser);
      } else {
        state.user = null;
        localStorage.removeItem("user");
      }
    },
    setUserScope(state, userScope) {
      state.userScope = userScope || null;
    },
    setToken(state, token) {
      if (token) {
        state.token = token;
        const decodedToken = jwt.decode(token);
        state.userScope = decodedToken.scopes;
        token = jwt.sign(token, jwtKey);
        localStorage.setItem("token", token);
      } else {
        state.token = null;
      }
      if (state.token) {
        axios.defaults.headers.common.Accept = "application/json";
        axios.defaults.headers.common.Authorization = `Bearer ${state.token}`;
      } else {
        delete axios.defaults.headers.common.Authorization;
      }
    },
  },
});
