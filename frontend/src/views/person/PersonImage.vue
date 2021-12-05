<template>
  <div class="container">
    <div class="row">
      <div class="col-12 pt-2">
        <div class="form-group">
          <input
            type="file"
            name="file"
            multiple
            ref="files"
            class="form-control-file"            
          />
        </div>
        <button type="button" class="btn" v-on:click="uploadImagem">
          Enviar
        </button>
      </div>
      <div class="col-12 pt-2" v-if="person">
        <img :src="src" width="500" height="500" v-if="src">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PersonImages",
  components: {},
  props: ["row"],
  data() {
    return {
      person : null,
      src : ""
    };
  },
  methods: {
     async uploadImagem(){
      const formData = new FormData();
      formData.append('id', this.$route.params.id);
      formData.append('file', this.$refs.files.files[0]);
      try {
        await axios.post("person/image-upload", formData);
      } catch (error) {
        console.log(error);
      }
    },
    async getImage(){      
      axios.get(`person?_id=${this.$route.params.id}`).then(person =>{
        this.person = person.data[0];
        const url = axios.defaults.baseURL.replace("api", "");        
        this.src = this.person.image_id ? `${url}${this.person.image_id}` : null;
      });      
    }
  },
  mounted(){
    this.getImage();
  }

};
</script>
