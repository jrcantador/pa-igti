<template>
  <div class="container">
    <div>
      <form novalidate enctype="multipart/form-data" name="form">
        <div v-if="errors.length" class="alert alert-warning" role="alert">
          <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
        </div>
        <div class="row">
          <div class="col-12 pt-2">
            <div class="form-group">
              <input
                type="file"
                name="file"
                multiple
                ref="files"
                class="form-control-file"
              />
            </div>
          </div>
          <div class="col-12 pt-2" v-if="form.image_id">
            <img :src="src" width="500" height="500" />
          </div>
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
              {{ this.form.name }}
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
                <option v-bind:value="{ id: 1, name: 'São Paulo' }"
                  >São Paulo</option
                >
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
      src: "",
    };
  },
  methods: {
    async submit() {
      if (this.$route.params.id) {
        try {
          await axios.put(`person/${this.$route.params.id}`, this.form);

          let img = this.$refs.files.files[0];
          if (img) {
            const formData = new FormData();
            formData.append("id", this.$route.params.id);
            formData.append("file", this.$refs.files.files[0]);
            await axios.post("person/image-upload", formData);
          }

          this.$router.push("/persons");
          this.$toast.success("Pessoa atualizada com sucesso!");
        } catch (error) {
          this.errors.push(error);
          this.showError = true;
        }
      } else {
        try {
          let person = await axios.post("person", this.form);

          let img = this.$refs.files.files[0];
          if (img) {
            const formData = new FormData();
            formData.append("id", person.data._id);
            formData.append("file", this.$refs.files.files[0]);
            await axios.post("person/image-upload", formData);
          }

          this.$router.push("/persons");
          this.$toast.success("Pessoa cadastrada com sucesso!");
        } catch (error) {
          this.errors.push(error);
          this.showError = true;
        }
      }
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

    getPerson() {
      axios(`/person?_id=${this.$route.params.id}`).then((response) => {
        this.form = response.data[0];
        this.getImage();
      });
    },

    async getImage() {      
      axios.get(`person?_id=${this.$route.params.id}`).then((response) => {
        let person = response.data[0];
        const url = axios.defaults.baseURL.replace("api", "");
        this.src = person.image_id
          ? `${url}${person.image_id}`
          : null;      
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.params.id) {
        this.getPerson();
      }
    });
  },
};
</script>
