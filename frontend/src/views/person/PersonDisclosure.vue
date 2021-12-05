<template>
  <div v-if="person" class="container">
    <button type="button" class="btn btn-danger" v-on:click="generateReport">
      Download PDF
    </button>
    <vue-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="false"
      :paginate-elements-by-height="1400"
      filename="disclosure"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a4"
      pdf-orientation="portrait"
      pdf-content-width="800px"
      :html-to-pdf-options="html2PdfOptions"
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <PersonDisclosureInfo />
      </section>
    </vue-html2pdf>
    <PersonDisclosureInfo />
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
import PersonDisclosureInfo from "./PersonDisclosureInfo.vue";
import axios from "axios";
import moment from "moment";
export default {
  name: "PersonDisclosure",
  components: { VueHtml2pdf, PersonDisclosureInfo },
  data() {
    return {
      person: null,
      html2PdfOptions: {},
    };
  },
  methods: {
    getPeson() {
      axios(`/person?_id=${this.$route.params.id}`).then((response) => {
        this.person = response.data[0];
      });
    },
    formatDate(date) {
      return moment(String(date)).format("DD/MM/YYYY");
    },

    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
  mounted() {
    this.html2PdfOptions = {
      margin: 0,
      filename: "disclousure.pdf",
      image: {
        type: "jpeg",
        quality: 0.98,
      },
      enableLinks: true,
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
      },
    };
    this.getPeson();
  },
};
</script>
