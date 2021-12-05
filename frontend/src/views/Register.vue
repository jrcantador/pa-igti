<template>
  <div class="container">
    <h1>Informações de Usuário</h1>
    <div class="card p-2">
      <form novalidate>
        <div v-if="errors.length" class="alert alert-warning" role="alert">
          <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
        </div>
        <div class="row">
          <div class="col-4">
            <div class="form-group">
              <label for="name">Nome:</label>
              <input
                type="text"
                class="form-control"
                name="name"
                v-model="form.name"
              />
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="address">Endereço:</label>
              <input
                type="text"
                class="form-control"
                name="address"
                v-model="form.address"
              />
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="document">CPF:</label>
              <input
                type="text"
                class="form-control"
                name="number"
                v-model="form.document"
                v-mask="['###.###.###-##', '##.###.###/####-##']"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label for="postalCode">CEP:</label>
              <input
                type="text"
                class="form-control"
                name="postalCode"
                v-model="form.postal_code"
                v-mask="'#####-###'"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="city">Cidade:</label>
              <select v-model="form.city" class="form-select">
                <option value="1">Barra Bonita</option>
              </select>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-4">
            <div class="form-group">
              <label for="email">Email:</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  v-model="form.email"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="password">Senha:</label>
              <input
                type="password"
                class="form-control"
                name="password"
                v-model="form.password"
              />
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="passwordRepeat">Repetir Senha:</label>
              <input
                type="password"
                class="form-control"
                name="passwordRepeat"
                v-model="form.password_repeat"
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          @click.prevent="checkForm()"
          class="btn btn-primary mt-5"
        >
          Cadastrar
        </button>
      </form>
    </div>
    <p v-if="showError" id="error">Username already exists</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  components: {},
  props: ["row"],
  data() {
    return {
      form: {},
      showError: false,
      errors: [],
    };
  },
  methods: {
    async submit() {
      this.form.city = { id: this.form.city };
      axios
        .post("user", this.form)
        .then((response) => {
          this.showError = false;
          let UserForm = new FormData();
          UserForm.append("email", response.email);
          UserForm.append("password", response.password);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors.push(error);
          this.showError = true;
        });
    },
    checkForm: function() {
      this.errors = [];

      if (!this.form.name) {
        this.errors.push("O nome é obrigatório.");
      }
      if (!this.form.email) {
        this.errors.push("O e-mail é obrigatório.");
      } else if (!this.validEmail(this.form.email)) {
        this.errors.push("Utilize um e-mail válido.");
      }

      if (!this.form.document) {
        this.errors.push("O CPF é obrigatório.");
      }

      if (!this.form.password) {
        this.errors.push("A senha é obrigatória.");
      } else if (
        this.form.password.localeCompare(this.form.password_repeat) != 0
      ) {
        this.errors.push("As senhas informadas estão diferentes.");
      }

      if (!this.errors.length) {
        return this.submit();
      }
    },

    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>
