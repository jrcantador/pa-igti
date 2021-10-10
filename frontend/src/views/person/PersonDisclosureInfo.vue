<template>
  <div
    v-if="person"
    class="container card p-2"
    style="text-align: left; margin-bottom: 65px; margin-top: 10px"
  >
    <div class="row" style="text-align:center">
      <div class="col-12">
        <section>
          <img :src="src" width="500" height="500" v-if="src" />
          <img
            src="../../assets/sem-foto.png"
            width="500"
            height="500"
            v-if="!src"
          />
        </section>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <h3 class="pt-3">Informações Básicas</h3>
        <div v-if="person.name">
          <label>Nome: </label>{{ person.name }}<br />
        </div>
        <div v-if="person.birth_date">
          <label>Data de nascimento: </label>{{ formatDate(person.birth_date)
          }}<br />
        </div>
        <div v-if="person.address">
          <label>Endereço: </label>
          {{ person.address }}<br />
        </div>
        <div v-if="person.number">
          <label>Número: </label>
          {{ person.number }}<br />
        </div>
        <div v-if="person.postal_code">
          <label>CEP: </label>
          {{ person.postal_code }}<br />
        </div>
        <div v-if="person.telephone">
          <label>Telefone: </label>
          {{ person.telephone }}<br />
        </div>
        <div v-if="person.state">
          <label>Estado: </label>
          {{ person.state.name }}<br />
        </div>
        <div v-if="person.city">
          <label>Cidade: </label>
          {{ person.city.name }}<br />
        </div>
      </div>
      <div class="col-6" v-if="getHeader('FISICAL')">
        <h3 class="pt-3">Caracteristicas Físicas</h3>
        <div v-if="person.eye_color">
          <label>Cor dos olhos: </label>
          {{ person.eye_color }}<br />
        </div>
        <div v-if="person.hair_color">
          <label>Cor do cabelo: </label>
          {{ person.hair_color }}<br />
        </div>
        <div v-if="person.height">
          <label>Altura: </label>
          {{ person.height }}<br />
        </div>
        <div v-if="person.weight">
          <label>Peso: </label>
          {{ person.weight }}<br />
        </div>
        <div v-if="person.disabled_person">
          <label>Deficiê ncia Física: </label>
          {{ person.disabled_person }}<br />
        </div>
        <div v-if="person.others">
          <label>Observações: </label>
          {{ person.others }}<br />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12" v-if="getHeader('OTHERS')">
        <h3 class="pt-3">Outras informações</h3>
        <div v-if="person.last_clothes" class="pb-2">
          <label>Quais as roupas que foi visto pela ultima vez: </label><br />
          {{ person.last_clothes }}<br />
        </div>
        <div v-if="person.last_place" class="pb-2">
          <label>Qual o último local em que foi visto: </label><br />
          {{ person.last_place }}<br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "PersonDisclosureInfo",
  components: {},
  data() {
    return {
      person: null,
      src: null,
    };
  },
  methods: {
    getPeson() {
      axios(`/person?_id=${this.$route.params.id}`).then((response) => {
        this.person = response.data[0];
        this.getImage();
      });
    },
    formatDate(date) {
      return moment(String(date)).format("DD/MM/YYYY");
    },
    async getImage() {
      axios.get(`person?_id=${this.$route.params.id}`).then((person) => {
        this.person = person.data[0];
        const url = axios.defaults.baseURL.replace("api", "");
        if (this.person.image_id) {
          this.src = `${url}${this.person.image_id}`;
        }
      });
    },
    getHeader(header) {      
      if (header == "FISICAL") {
        if (
          !this.person.eye_color &&
          !this.person.hair_coloer &&
          !this.person.height &&
          !this.person.weight &&
          !this.person.disabled_person &&
          !this.person.others
        ) {
          return false;
        }
        return true;
      }

      if (header == "OTHERS") {
        if (!this.person.last_clothes && !this.person.last_place) {
          return false;
        }
        return true;
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.getPeson();
    });
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
}
</style>
