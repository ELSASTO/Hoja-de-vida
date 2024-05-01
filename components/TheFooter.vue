<template>
    <footer class="mt-10">
        <div class="contenedor">
            <v-row align="center" justify="center">
                <v-col cols="12" xl="8" lg="8" align="center" justify="center">
                    <div class="mb-5">
                        <v-btn class="social-button" color="red" fab small href="https://api.whatsapp.com/send?phone=573142484466">
                        <v-icon dark>mdi-whatsapp</v-icon>
                        </v-btn>
                        <v-btn class="social-button" color="red" fab small href="https://www.linkedin.com/in/jose-alejandro-sastoque-agudelo-11462abb/">
                        <v-icon dark>mdi-linkedin</v-icon>
                        </v-btn>
                    </div>
                    <v-row align="center" justify="center">
                        <v-col align="center" justify="center" cols="12" xl="6" lg="6" md="6">
                            <v-text-field
                                label="Enviar Mensaje"
                                color="red"
                                v-model="mensaje"
                                prepend-icon="mdi-whatsapp"
                                hide-details
                                v-on:keyup.enter="sendMessage"
                            ></v-text-field>
                            <v-btn data-aos="fade-up" data-aos-anchor-placement="top-bottom" block class="font1 mt-5" style="background-color: #ff0000;" @click="sendMessage">Enviar Mensaje</v-btn>
                        </v-col>
                    </v-row>
                    <v-row justify="space-around">
                        <div class="d-none d-xl-block d-lg-block mb-5">
                            <v-btn v-for="({item,href}, index) in menuItems" :key="index" text :href="href">{{item}}</v-btn>
                        </div>
                    </v-row>
                    <span>&copy; {{ new Date().getFullYear() }}</span>
                </v-col>
            </v-row>
        </div>
    </footer>
</template>
<script>
  export default {
    data: () => ({
        mensaje:'',
        menuItems: [
            {item:'Conocimientos', href:'#Knowledge'},
            {item:'Proyectos', href:'#Projects'},
            {item:'Experiencia Laboral', href:'#WorkExperience'},
            {item:'Contacto', href:'#Contact'},
            {item:'Freelancer', href:'#Freelancer'},
        ],
    }),

    methods: {
      sendMessage () {
        let url = 'https://api.whatsapp.com/send?phone=573142484466&text='+this.mensaje
        window.location.replace(url)
      },
    },
  }
</script>