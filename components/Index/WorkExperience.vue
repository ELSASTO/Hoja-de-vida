<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="12" md="10" justify="center" align="center">
                <div class="contet-titles mb-10">
                    <h2 class="titles">EXPERIENCIA LABORAL</h2>
                </div>
                <VueSlickCarousel v-bind="settings" >
                    <div v-for="({img,alt,NameCompany, labors}, index) in experiencia" :key="index">
                        <div
                            class="card-experience mx-5" 
                            max-width="auto"
                        >
                        <v-row justify="center" align="center">
                            <v-col cols="12" lg="5" justify="center" align="center">
                                <img
                                    height="200px"
                                    class="rounded-xl"
                                    :src="img"
                                    :alt="alt"
                                    :title="alt"
                                    cover
                                >
                            </v-col>
                            <v-col  cols="12" lg="6">
                                <h3 class="my-5 mx-3">
                                    {{NameCompany}}
                                </h3>
                                <p>
                                    {{labors}}
                                </p>
                            </v-col>
                        </v-row>
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
            experiencia:[
                {img:"/IMG/experience/equipo_beta_agencia_manager.webp", alt:"equipo_beta_agencia_manage", NameCompany:"Agencia Manager SAS", labors:"Vue.js · Desarrollo en Wordpress · Mockups · Diseño centrado en el usuario · WordPress · Resolución de problemas · Experiencia de usuario · Proyectos de desarrollo · Análisis de requisitos · Análisis web · Balsamiq · Investigación de palabras clave · Capacidad de respuesta · Habilidades sociales · Trabajo en equipo · Revisión de código · Nuxt.js · Comunicación con los clientes · Bases de datos · Flujos de usuario · Implementación de estrategias · Mantenibilidad · Requisitos técnicos · Estructuras de datos · Desarrollo de software · Shopify · Node.js · Plugins · HTML · Algoritmos"}
            ],
            show: false,
            settings: {
                "dots": true,
                "infinite": true,
                "autoplay": true,
                "speed": 5000,
                "autoplaySpeed": 2000,
                "slidesToShow": 1,
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