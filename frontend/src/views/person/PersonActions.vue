<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <button
          type="button"
          class="btn btn-default"
          style="width: 100%"
          v-on:click="edit"
        >
          Editar
        </button>
      </div>
      <div class="col-3">
        <button
          type="button"
          class="btn btn-default"
          style="width: 100%"          
          v-on:click="remove"
        >
          Excluir
        </button>
      </div>
      <div class="col-3">
        <button
          type="button"
          class="btn btn-default"
          style="width: 100%"
          v-on:click="disclousure"
        >
          Informativo
        </button>
      </div>
      <div class="col-3">
        <button
          type="button"
          class="btn btn-default"
          style="width: 100%"
          v-clipboard="copyToClipboard"
        >
          Copiar Link
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
      this.$router.push(`person/form/${this.row._id}`);
    },
    async remove() {
      await axios.delete(`person/${this.row._id}`);
      this.$toast.success("Pessoa excluida com sucesso!")                
      this.$emit('refresh-list', { msg: true})    
    },
    async image() {
      this.$router.push(`person/image/${this.row._id}`);
    },

    disclousure() {
      this.$router.push(`person/disclosure/${this.row._id}`);
    },
    copyToClipboard() {
      this.$toast.success("Link do informativo copiado!");
      return `${window.location.host}/person/disclosure/${this.row._id}`;
    },
  },
};
</script>

<style scoped>
.btn-default {
  font-size: 0.9rem;
  background-color: #484848;
  color: #fff
}

.btn-default:hover{  
  color: #fbc531;  
}
</style>