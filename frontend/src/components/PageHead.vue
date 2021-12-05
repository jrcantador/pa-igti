<template>
  <header id="nav">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand text-white" href="#"
          ><i class="fa fa-search-location fa-lg mr-2"></i> CPD</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#nvbCollapse"
          aria-controls="nvbCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nvbCollapse">
          <ul class="navbar-nav ml-auto">
            <li
              class="nav-item pl-1"
              v-bind:class="{ active: pathActive == '/'}"
            >
              <router-link class="nav-link" to="/" @click.native="setPathActive"
                ><i class="fa fa-home fa-fw mr-1"></i> Home</router-link
              >
            </li>
            <li
              class="nav-item pl-1"
              v-if="isLoggedIn"
              v-bind:class="{ active: pathActive == '/person' }"
            >
              <router-link
                class="nav-link"
                to="/person"
                @click.native="setPathActive"
                ><i class="fa fa-users fa-fw mr-1"></i> Pessoas</router-link
              >
            </li>
            <li class="nav-item pl-1" v-if="isLoggedIn"  v-bind:class="{ active: pathActive == '/logout' }">
              <a @click="logout" class="nav-link" href="#"
                ><i class="fa fa-sign-out-alt fa-fw mr-1"></i>Sair</a
              >
            </li>
            <li class="nav-item pl-1" v-if="!isLoggedIn"  v-bind:class="{ active: pathActive == '/register' }">
              <router-link
                class="nav-link"
                to="/register"
                @click.native="setPathActive"
                ><i class="fa fa-user-plus fa-fw mr-1"></i>
                Registrar</router-link
              >
            </li>
            <li class="nav-item pl-1" v-if="!isLoggedIn"  v-bind:class="{ active: pathActive == '/login' }">
              <router-link
                class="nav-link"
                to="/login"
                @click.native="setPathActive"
                ><i class="fa fa-sign-in-alt fa-fw fa-rotate-180 mr-1"></i>
                Entrar</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "PageHead",
  data() {
    return {
      pathActive: "",
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    async logout() {
      this.pathActive = '/login';
      await this.$store.commit("setUser", null);
      this.$router.push("/login");
    },
    setPathActive() {
      this.pathActive = window.location.pathname;
    },
  },
  mounted() {    
    this.setPathActive();
  },
};
</script>
<style>
#nav {
  padding-bottom: 30px;
}

.navbar {
  background-color: #484848;
}
.navbar .navbar-nav .nav-link {
  color: #fff;
  text-decoration: none;
}
.navbar .navbar-nav .nav-link:hover {
  color: #fbc531;
  text-decoration: none;
}
.navbar .navbar-nav .active > .nav-link {
  color: #fbc531;
  text-decoration: none;
}

footer a.text-light:hover {
  color: #fed136 !important;
  text-decoration: none;
}
footer .cizgi {
  border-right: 1px solid #535e67;
}
@media (max-width: 992px) {
  footer .cizgi {
    border-right: none;
  }
}
</style>
