<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <button
          type="button"
          class="btn btn-primary pr-5"
          style="width: 100%"
          v-on:click="edit"
        >
          Editar
        </button>
      </div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-danger"
          style="width: 100%"
          v-on:click="remove"
        >
          Excluir
        </button>
      </div>
      <div class="col-3">
        <button
          type="button"
          class="btn btn-danger"
          style="width: 100%"
          v-on:click="disclousure"
        >
          Gerar Informativo
        </button>
      </div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-danger"
          style="width: 100%"
          v-on:click="remove"
        >
          Copiar Link
        </button>
      </div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-danger"
          style="width: 100%"
          v-on:click="image"
        >
          Inserir Imagem
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PersonActions",
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
    async edit() {
      this.$router.push(`persons/form/${this.row._id}`);
    },
    async remove() {
      await axios.delete(`person/${this.row._id}`);
    },
    async image() {
      this.$router.push(`persons/image/${this.row._id}`);
    },

    disclousure() {
      this.$router.push(`persons/disclosure/${this.row._id}`);
    },

    handlingInformation() {
      const locality = {
        address: this.form.address,
        number: this.form.number,
        city: this.form.city,
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
