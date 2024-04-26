
<template>
  <div class="social-buttons">
    <v-btn class="social-button" color="red" fab small href="https://api.whatsapp.com/send?phone=573142484466">
      <v-icon dark>mdi-whatsapp</v-icon>
    </v-btn>
    <v-btn class="social-button" color="red" fab small href="https://www.linkedin.com/in/jose-alejandro-sastoque-agudelo-11462abb/">
      <v-icon dark>mdi-linkedin</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'SocialButtons'
}
</script>

<style scoped>
.social-buttons {
  position: fixed;
  top: 20px; /* Ajusta la posición vertical según necesites */
  right: 20px; /* Ajusta la posición horizontal según necesites */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 9999;
  
}

.social-button {
  margin-bottom: 10px;
}
</style>