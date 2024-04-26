<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="12" md="10" justify="center" align="center">
                <div class="contet-titles mb-10">
                    <h2 class="titles">PROYECTOS A CARGO</h2>
                </div>
                <VueSlickCarousel v-bind="settings" >
                    <div v-for="({img,alt,NameProyect, Description}, index) in projects" :key="index">
                        <div
                            class="card mx-5" 
                            max-width="auto"
                        >
                            <img
                                height="149px"
                                class="rounded-xl"
                                :src="img"
                                :alt="alt"
                                :title="alt"
                                cover
                            >

                            <h3 class="my-5 mx-3">
                                {{NameProyect}}
                            </h3>
                            <v-divider color="#500000"></v-divider>
                            <v-card-text>
                                {{Description}}
                            </v-card-text>
                        </div>
                    </div>
                </VueSlickCarousel>
            </v-col>
        </v-row>
    </div>
  </template>
  <script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: { VueSlickCarousel },
    data() {
        return {
            projects:[
                {img:"/IMG/projects/Sitio_web_Agencia_Manager.webp", alt:"Sitio_web_Agencia_Manager",NameProyect:'Sitio Web Agencia Manager SAS', Description:"Desarrollé el sitio web de la agencia Manager utilizando Nuxt.js, Vuetify.js y Vue.js para garantizar funcionalidad y experiencia de usuario óptimas."},
                {img:"/IMG/projects/Sitio_web_LosOlivosNeiva.webp", alt:"Sitio_web_LosOlivosNeiva",NameProyect:'Sitio Web Los Olivos Neiva', Description:"Desarrollé el sitio web de Los Olivos Neiva desde cero utilizando Nuxt, Vue y Vuetify. Implementé un sistema de registro de obituarios con una API REST en Node para gestionar la información y mostrar las exequias por sala."},
                {img:"/IMG/projects/Tienda_LosOlivosNeiva.webp", alt:"Tienda_LosOlivosNeiva",NameProyect:'E-Coomerce Los Olivos Neiva', Description:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. "},
                {img:"/IMG/projects/Sitio_web_Tarjeta_Digital.webp", alt:"Sitio_web_Tarjeta_Digital",NameProyect:'Sitio Web Mi tarjeta digital', Description:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. "},
                {img:"/IMG/projects/Landing_Dr_Solares.webp", alt:"Landing_Dr_Solares",NameProyect:'Landing Page Dr Solares', Description:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. "},
                {img:"/IMG/projects/Sitio_web_LaCoop.webp", alt:"Sitio_web_LaCoop",NameProyect:'Sitio Web La Coop', Description:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. "},
                {img:"/IMG/projects/Sitio_web_Navigare.webp", alt:"Sitio_web_Navigare",NameProyect:'Sitio Web Navigare', Description:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. "},
                {img:"/IMG/projects/Sitio_web_Sicol.webp", alt:"Sitio_web_Sicol",NameProyect:'Catalogo Sicol SAS', Description:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. "},
            ],
            show: false,
            settings: {
                "dots": true,
                "infinite": true,
                "autoplay": true,
                "speed": 5000,
                "autoplaySpeed": 2000,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "initialSlide": 0,
                "responsive": [
                    {
                    "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                    "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "initialSlide": 2
                        }
                    },
                    {
                    "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                    }
                ]
            }
        } 
    }
}
</script>