<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Insira as informações de acesso</h5>
            <form @submit.prevent="submit">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  v-model="form.email"
                />
                <label for="floatingInput">Email</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="form.password"
                />
                <label for="floatingPassword">Senha</label>
              </div>
              <div class="form-floating mb-3">
                <p v-if="showError" id="error">Email ou senha incorreta</p>
              </div>
              <div class="d-grid">
                <button
                  class="btn btn-login text-uppercase fw-bold"
                  type="submit"
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showError: false,
    };
  },
  methods: {
    async submit() {
      const info = {
        email: this.form.email,
        password: this.form.password,
      };
      axios
        .post("login", info)
        .then((res) => {
          this.$store.commit("setUser", res.data);
          this.$store.commit("setToken", res.data.token);
          this.$router.push("/");
          this.showError = false;
        })
        .catch((error) => {
          this.showError = true;
        });
    },
  },
};
</script>

<style scoped>

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  background-color: #484848;
  color: #fff
}

.btn-login:hover{  
  color: #fbc531;  
}

</style>
