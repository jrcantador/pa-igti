<template>
  <div class="container">
    <button type="button" class="btn btn-new" v-on:click="newPerson">
      Novo
    </button>
    <DataTableInfo :options="tableOptions" ref="datatableInfo"/>
  </div>
</template>

<script>
import DataTableInfo from "../../components/DataTableInfo.vue";
import PersonActions from "./PersonActions.vue";

export default {
  name: "PersonList",
  components: { DataTableInfo, PersonActions },
  props: ["refresh-list"],
  data() {
    return {
      tableOptions: {
        tableName: "person",
        columns: [
          {
            title: "Nome",
            key: "name",
            type: "clickable",
            uniqueField: "_id",
            sortable: true,
            class: "col-6",
            source: 'person/form'
          },
          { title: "Ações", type: "component", name: PersonActions , class: "col-6"},
        ],
        source: "person/datatable",
        search: true,
      },
    };
  },
  methods: {
    async newPerson() {
      this.$router.push(`person/form`);
    },  
  },
};
</script>

<style scoped>

.btn-new {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  background-color: #484848;
  color: #fff
}

.btn-new:hover{  
  color: #fbc531;  
}

</style>