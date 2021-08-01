<template>
  <div class="container">
    <button type="button" class="btn btn-primary" v-on:click="newPerson">Novo</button>
    <DataTableInfo :options="tableOptions" />
  </div>
</template>

<script>
import DataTableInfo from "../components/DataTableInfo.vue";
import PersonActions from "../views/PersonActions.vue";

export default {
  name: "PersonList",
  components: { DataTableInfo, PersonActions },
  data() {
    return {
      tableOptions: {
        tableName: "person",
        columns: [
          {
            title: "Nome",
            key: "name",
            type: "clickable",
            uniqueField: "id",
            sortable: true,
          },
          {
            title: "Data de nascimento",
            key: "birth_date",
            type: "date",
            sortable: true,
          },
          { title: "Action", type: "component", name: PersonActions },
        ],
        source: "person/datatable",
        search: true,
      },
    };
  },
  methods: {
    async newPerson() {
      this.$router.push(`persons/form`);
    },
  },
};
</script>
