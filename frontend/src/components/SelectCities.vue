<template>
  <div>
    <label for="state">Cidade:</label>
    <select
      class="form-control m-input"
      @select="emitChangeEvent"
      @change="emitChangeEvent"
      :v-model="model"
    >
      <option value="">{{ firstOption }}</option>
      <option
        v-for="city in selects"
        :key="city.id"
        :value="city.id"
        :selected="city.id == selected"        
        >{{ city.nome }}</option
      >
    </select>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SelectCities",
  data() {
    return {
      firstOption: this.first ? this.first : "Selecione uma Cidade",
      selects: [],
    };
  },
  props: ["model", "uf", "selected"],
  methods: {
    async getData(uf) {
      const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`;
      const res = await axios.get(url);      
      this.selects = res.data;
      console.log(res.data);
    },
    emitChangeEvent(variable) {
      this.$emit("change", variable.target.value);
    },
  },
  watch: {
    uf(newValue) {      
      this.getData(newValue);
    },
  },
};
</script>
