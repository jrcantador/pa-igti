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
            <li class="nav-item pl-1">
              <router-link class="nav-link" to="/"><i class="fa fa-home fa-fw mr-1"></i
              > Home</router-link>
            </li>
            <li class="nav-item active pl-1" v-if="isLoggedIn">
              <router-link class="nav-link" to="/person"
                ><i class="fa fa-users fa-fw mr-1"></i> People</router-link                
              >
            </li>
            <li class="nav-item pl-1" v-if="isLoggedIn">
              <a @click="logout" class="nav-link" href="#"
                ><i class="fa fa-sign-out-alt fa-fw mr-1"></i>Logout</a                
              >
            </li>
            <li class="nav-item pl-1" v-if="!isLoggedIn">
              <router-link class="nav-link" to="/register"
                ><i class="fa fa-user-plus fa-fw mr-1"></i
                > Register</router-link
              >
            </li>
            <li class="nav-item pl-1" v-if="!isLoggedIn">
              <router-link class="nav-link" to="/login"
                ><i class="fa fa-sign-in-alt fa-fw fa-rotate-180 mr-1"></i
                > Login</router-link                
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
  name: "NavBar",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    async logout() {
      await this.$store.commit("setUser", null);
      this.$router.push("/login");
    },
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
