<template>
  <div class="home container">
    <div class="card p-2">
      <h1 class="title">ATENÇÃO!</h1>
      <hr />
      <p>
        Nosso sistema fornece uma forma que busca facilitar a divulgação. Deixamos claro que não temos vinculos com Policia militar, civil e federal de nenhum estado. </p>
      <p>        
        Então recomendamos que antes de usar nosso sistema, notifique junto as autoridades de sua cidade o desaparecimento.
      </p>
      <p> Segue a <a href="cartilha.pdf" target="_blank"> cartilha</a> que o o ministério público do estado de São Paulo fornece para auxiliar nos casos de desaparecimentos.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data: () => {
    return {
      person: "",
    };
  },
  methods: {
    openPdf(){
      window.open('../assets/cartilha.pdf', 'Teste', 'status=no, width=125, height=100')
    }
  },
  beforeMount() {},
};
</script>

<style scoped>
.title {
  color: red;
  font-weight: bold;
}
</style>
