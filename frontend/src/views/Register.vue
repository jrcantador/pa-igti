<template>
  <div class="container">
    <div>
      <form @submit="checkForm">
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
        <button type="submit" class="btn btn-primary mt-5">Cadastrar</button>
      </form>
    </div>
    <p v-if="showError" id="error">Username already exists</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {},
      showError: false,
      errors: [],
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        this.form.city = { id: this.form.city };
        await this.Register(this.form);
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
    checkForm: function(e) {
      this.errors = [];

      if (!this.form.name) {
        this.errors.push("O nome é obrigatório.");
      }
      if (!this.form.email) {
        this.errors.push("O e-mail é obrigatório.");
      } else if (!this.validEmail(this.email)) {
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
        return true;
      }

      e.preventDefault();
    },

    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>
