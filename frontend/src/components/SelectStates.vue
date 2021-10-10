<template>
  <div>    
    <label for="state">Estado:</label>
    <select
      class="form-control m-input"
      @select="emitChangeEvent"
      @change="emitChangeEvent"
      :v-model="model"
    >
      <option value="">{{ firstOption }}</option>
      <option
        v-for="state in selects"
        :key="state.sigla"
        :value="state.sigla"
        :selected="state.sigla == selected"
        >{{state.sigla}} - {{ state.nome }}</option
      >
    </select>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SelectStates",
  data() {
    return {
      firstOption: this.first ? this.first : "Selecione uma Cidade",
      selects: [],
    };
  },
  props: ["model", "selected"],
  methods: {
    async getData() {
      const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`;
      const res = await axios.get(url);
      this.selects = res.data;
    },
    emitChangeEvent(variable) {      
      this.$emit("change", variable.target.value);      
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
