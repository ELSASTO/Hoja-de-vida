<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="12" md="10" justify="center" align="center">
                <div class="contet-titles mb-10" data-aos="fade-right" data-aos-duration="3000">
                    <h2 class="titles">EXPERIENCIA LABORAL</h2>
                </div>
                <VueSlickCarousel v-bind="settings" >
                    <div v-for="({img,alt,NameCompany, labors,tecnologias}, index) in experiencia" :key="index">
                        <div
                            class="card-experience mx-5" 
                            max-width="auto"
                        >
                        <v-row justify="center" align="center">
                            <v-col cols="12" lg="4" justify="center" align="center">
                                <img
                                    data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                    height="200px"
                                    class="rounded-xl mt-10 mt-lg-0"
                                    :src="img"
                                    :alt="alt"
                                    :title="alt"
                                    cover
                                >
                            </v-col>
                            <v-col  cols="12" lg="7" justify="start" align="start" class="ma-2">
                                <h3 class=" title-card ma-2">
                                    <v-icon color="#ff9494">mdi-domain</v-icon> {{NameCompany}} <v-icon>mdi-arrow-right</v-icon>
                                </h3>
                                <h4 class="text-card mb-5 ma-2" style="font-size: 10px;">2021 - 2024 (2 Años 7 meses)</h4>
                                <p class="text-card ma-2" style="font-weight: lighter !important;  ">
                                    {{labors}}
                                </p>
                                <h3 class="title-card ma-2">
                                    <v-icon color="#ff9494">mdi-laptop</v-icon> Tecnologias <v-icon>mdi-arrow-right</v-icon>
                                </h3>
                                <div class="contenedor-tecnologias mx-2" data-aos="fade-down">
                                    <div class="tecnologia font1" v-for="tecnologia in tecnologias" :key="tecnologia">{{ tecnologia }}</div>
                                </div>

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
                {img:"/IMG/experience/equipo_beta_agencia_manager.webp", 
                alt:"equipo_beta_agencia_manage", 
                NameCompany:"Agencia Manager SAS", 
                labors:"Durante mi trayectoria en Agencia Manager, me desempeñé como líder de equipo, gestionando el desarrollo y la personalización de diversos proyectos web. Planifiqué e implementé estrategias para garantizar el éxito de cada proyecto. Además, me encargué del mantenimiento del software y administré el hosting a través de SSH, asegurando un rendimiento óptimo y seguro para nuestros clientes.",
                tecnologias:["Nuxt.js","Vue.js", "Vuetify.js", "Node.js", "HTML5", "CSS", "MySQL", "PHP", "APIRest", "SSH", "WordPress","DIVI", "ELEMENTOR", "Plugins", "WooCommerce"]
            }
            ],
            show: false,
            settings: {
                "dots": true,
                "fade": true,
                "infinite": true,
                "autoplay": true,
                "speed": 5000,
                "autoplaySpeed": 2000,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "initialSlide": 0,
                "pauseOnDotsHover": true,
                "pauseOnFocus": true,
                "pauseOnHover": true,
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