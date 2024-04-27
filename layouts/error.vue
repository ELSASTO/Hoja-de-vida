<template>
  <v-app dark>
    <div  align="center" justify="center" >
        <v-row align="center" justify="center">
            <v-col cols="11"  class="contenedor"  align="center" justify="center">
                <v-row align="center" justify="center">
                    <v-col  data-aos="fade-right" data-aos-duration="3000" align="start" justify="center" cols="10" md="5" lg="5" sm="10">
                        <h1 class="font1" v-if="error.statusCode === 404">
                            <span class="MyName"> {{ pageNotFound }} </span>
                        </h1>
                        <h1 class="font1" v-else>
                            <span class="MyName"> {{ otherError }} </span>
                        </h1>
                        <h1 style="font-size: 18px; font-weight: normal;" class="font1">Trabajamos para mejorar</h1>
                        <div class="social-buttons">
                          <v-btn data-aos="fade-up" data-aos-anchor-placement="top-bottom" block class="font1 mt-5" style="background-color: #ff0000;" href="/">Regresar al inicio</v-btn>
                        </div>
                    </v-col>
                    <v-col align="center" justify="center" cols="10" md="5" lg="5" sm="10" class="mb-10 " >
                        <img class="foto" data-aos="fade-up-left" data-aos-duration="4000" width="450" src="/IMG/Desarrollador_web_Alejandro_Sastouqe.webp">
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
  </v-app>

</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
