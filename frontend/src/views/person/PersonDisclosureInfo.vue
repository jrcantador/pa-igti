<template>
  <div v-if="person" class="container card p-2 mt-2" style="text-align: left">
    <section>
      <img :src="src" width="500" height="500" v-if="src" />
      <img src="../../assets/sem-foto.png" width="500" height="500" v-if="!src" />
    </section>

    <h3 class="pt-3">Informações Básicas</h3>
    <label v-if="person.name">Nome: {{ person.name }} </label><br />
    <label v-if="person.birth_date"
      >Data de nascimento: {{ formatDate(person.birth_date) }}<br />
    </label>
    <div v-if="person.locality">
      <label v-if="person.locality.address">Endereço: </label>
      {{ person.locality.address }}<br />
      <label v-if="person.locality.number">Número: </label>
      {{ person.locality.number }}<br />
      <label v-if="person.locality.postal_code">CEP: </label>
      {{ person.locality.postal_code }}<br />
      <label v-if="person.locality.telephone">Telefone: </label>
      {{ person.locality.telephone }}<br />
      <label v-if="person.locality.state.name">Estado: </label>
      {{ person.locality.state.name }}<br />
      <label v-if="person.locality.city.name">Cidade: </label>
      {{ person.locality.city.name }}<br />
    </div>
    <h3 class="pt-3">Caracteristicas Físicas</h3>
    <div v-if="person.physical_characteristics">
      <label v-if="person.physical_characteristics.eye_color"
        >Cor dos olhos:
      </label>
      {{ person.physical_characteristics.eye_color }}<br />

      <label v-if="person.physical_characteristics.hair_color"
        >Cor do cabelo:
      </label>
      {{ person.physical_characteristics.hair_color }}<br />

      <label v-if="person.physical_characteristics.height">Altura: </label>
      {{ person.physical_characteristics.height }}<br />

      <label v-if="person.physical_characteristics.weight">Peso: </label>
      {{ person.physical_characteristics.weight }}<br />

      <label v-if="person.physical_characteristics.disabled_person"
        >Deficiencia Física:
      </label>
      {{ person.physical_characteristics.disabled_person }}<br />

      <label v-if="person.physical_characteristics.others"
        >Outras informações:
      </label>
      {{ person.physical_characteristics.others }}<br />
    </div>

    <h3 class="pt-3">Outras informações</h3>
    <div v-if="person.important_informations">
      <label v-if="person.important_informations.last_clothes"
        >Quais as roupas que foi visto pela ultima vez::
      </label>
      {{ person.important_informations.last_clothes }}<br />
      <label v-if="person.important_informations.last_place"
        >Qual o ultimo local em que foi visto:: </label
      >{{ person.important_informations.last_place }}<br />
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
  },
  mounted() {
    this.$nextTick(() => {
      this.getPeson();
    });
  },
};
</script>
