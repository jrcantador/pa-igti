import axios from "axios";

const state = {
  user: null,
  posts: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StatePosts: (state) => state.posts,
  StateUser: (state) => state.user,
};

const actions = {
  async Register({ dispatch }, form) {
    await axios.post("user", form);
    let UserForm = new FormData();
    UserForm.append("email", form.email);
    UserForm.append("password", form.password);
    await dispatch("LogIn", UserForm);
  },

  async LogIn({ commit }, user) {
    await axios.post("login", {
      email: user.get("email"),
      password: user.get("password"),
    });
    await commit("setUser", user.get("email"));
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, email) {
    state.user = email;
  },
  logout(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
