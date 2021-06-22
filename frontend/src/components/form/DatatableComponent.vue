<template>
  <datatable :columns="columns" :data="rows"></datatable>
</template>

<script>

import { VueDatatable } from 'vuejs-datatable';

export default {
  name: "DatatableComponent",
  props: {
    columns: {
      type: Array
    },
    rows: {
      type: Array
    },
  },
  beforeCreate : () => {
    return {
      
      
    }
  }
};
</script>

<style>
</style>