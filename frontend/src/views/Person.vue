<template>
  <div class="container">
    <div>
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
              <label for="address">Data de nacimento:</label>
              <input
                type="date"
                class="form-control"
                name="birth_date"
                v-model="form.birth_date"
              />
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="name">Endereço:</label>
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
              <label for="name">Número:</label>
              <input
                type="text"
                class="form-control"
                name="number"
                v-model="form.number"
              />
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="document">Telefone:</label>
              <input
                type="text"
                class="form-control"
                name="telephone"
                v-model="form.telephone"
                v-mask="'(##) ######-####'"
              />
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="city">Estado:</label>
              <select v-model="form.state" class="form-select">
                <option v-bind:value="{id: 1, name: 'São Paulo'}">São Paulo</option>
              </select>
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="state">Cidade:</label>
              <select v-model="form.city" class="form-select">
                <option v-bind:value="{ id: 1, name: 'Barra Bonita' }"
                  >Barra Bonita</option
                >
              </select>
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="name">CEP:</label>
              <input
                type="text"
                class="form-control"
                name="postal_code"
                v-model="form.postal_code"
                v-mask="'#####-###'"
              />
            </div>
          </div>
          <h3 class="pt-3">Caracteristicas Físicas</h3>
          <div class="col-4">
            <div class="form-group">
              <label for="name">Cor dos olhos:</label>
              <input
                type="text"
                class="form-control"
                name="eye_color"
                v-model="form.eye_color"
              />
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="name">Cor do cabelo:</label>
              <input
                type="text"
                class="form-control"
                name="hair_color"
                v-model="form.hair_color"
              />
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="name">Altura:</label>
              <input
                type="text"
                class="form-control"
                name="height"
                v-model="form.height"
              />
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="name">Peso:</label>
              <input
                type="text"
                class="form-control"
                name="weight"
                v-model="form.weight"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="name">Deficiencia Física:</label>
              <input
                type="text"
                class="form-control"
                name="disabled_person"
                v-model="form.disabled_person"
                placeholder="Descrever deficiencia"
              />
            </div>
          </div>
          <div class="col-12 pt-2">
            <div class="form-group">
              <label for="others">Outras informações</label>
              <textarea
                class="form-control"
                name="others"
                rows="3"
                v-model="form.others"
              ></textarea>
            </div>
          </div>
          <h3 class="pt-3">Outras informações</h3>
          <div class="col-12 pt-2">
            <div class="form-group">
              <label for="last_clothes"
                >Quais as roupas que foi visto pela ultima vez:</label
              >
              <textarea
                class="form-control"
                name="last_clothes"
                rows="3"
                v-model="form.last_clothes"
              ></textarea>
            </div>
          </div>
          <div class="col-12 pt-2">
            <div class="form-group">
              <label for="last_place"
                >Qual o ultimo local em que foi visto:</label
              >
              <textarea
                class="form-control"
                name="last_place"
                rows="3"
                v-model="form.last_place"
              ></textarea>
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Person",
  components: {},
  data() {
    return {
      form: {},
      showError: false,
      errors: [],
    };
  },
  methods: {
    async submit() {
      this.handlingInformation();
      console.log(this.form);
      axios
        .post("person", this.form)
        .then((response) => {
          this.$router.push("/home");
          this.$toast.success('Pessoa cadastrada com sucesso!');
        })
        .catch((error) => {
          this.errors.push(error);
          this.showError = true;
        });
    },

    handlingInformation() {
      debugger;
      const locality = {
        address: this.form.address,
        number: this.form.number,
        city:  this.form.city,
        state: this.form.state,
        postal_code: this.form.postal_code,
        telephone: this.form.telephone,
      };
      const physicalCharacteristics = {
        eye_color: this.form.eye_color,
        hair_color: this.form.hair_color,
        height: this.form.height,
        weight: this.form.weight,
        disabled_person: this.form.disabled_person,
        others: this.form.others,
      };

      const important_informations = {
        last_clothes: this.form.last_clothes,
        last_place: this.form.last_place,
      };

      this.form["physicalCharacteristics"] = physicalCharacteristics;
      this.form["locality"] = locality;
      this.form["important_informations"] = important_informations;
    },

    checkForm: function() {
      this.errors = [];

      if (!this.form.name) {
        this.errors.push("O nome é obrigatório.");
      }
      if (!this.form.birth_date) {
        this.errors.push("A data de nascimento é obrigatória.");
      }

      if (!this.form.telephone) {
        this.errors.push("O telefone é obrigatória.");
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
