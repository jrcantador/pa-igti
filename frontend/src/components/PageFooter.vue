<template>
  <div id="container" class="footer">        
    <div id="mentions">            
      <p>{{ mention }}</p>
    </div>
  </div>
</template>
<script>
export default {
   name: "PageFooter",
  data(){
    return{
      mention : '2021 | Júnior Cantador'
    }
  }
};
</script>
<style>

.footer {
  position: fixed;
    bottom:0;
    left:0;
}

#container {
  padding-top: 20px;
  margin-top: 20px;
  width: 100vw;
  color: #fbc531;
  background-color: #484848;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#contacts {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
}
#contacts--contact {
  text-align: right;
}
#contacts--social {
  width: 20%;
  display: flex;
  justify-content: space-between;
}
#contacts--social div {
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 50%;
}
#mentions p {
  font-size: 0.5em;
}
</style>
