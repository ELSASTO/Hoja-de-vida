<template>
    <div class="contenedor">
        <v-row justify="center" align="center">
            <v-col cols="11" md="10" justify="center" align="center">
                <div class="contet-titles mx-8" data-aos="fade-right" data-aos-duration="3000">
                    <h2 class="titles">PROYECTOS:</h2>
                </div>
                <v-container>

                    <VueSlickCarousel v-bind="settings" >
                        <div v-for="({img,alt,NameProyect, Description}, index) in projects" :key="index" data-aos="fade-up">
                            <div
                                class="card mx-5" 
                                max-width="auto"
                                justify="start" align="start"
                            >
                                <img
                                    height="149px"
                                    class="rounded-xl"
                                    :src="img"
                                    :alt="alt"
                                    :title="alt"
                                    cover
                                >
    
                                <h3 class="ma-2 title-card">
                                    {{NameProyect}}
                                </h3>
                                <v-divider color="#500000"></v-divider>
                                <v-card-text class="text-card">
                                    {{Description}}
                                </v-card-text>
                            </div>
                        </div>
                    </VueSlickCarousel>
                </v-container>
            </v-col>
        </v-row>
    </div>
</template>
<style lang="scss">
.slick-prev:before {
  color: red;
  font-size: 30px;
}

.slick-next:before {
  color: red;
  font-size: 30px;
}
</style>
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
                {img:"/IMG/projects/Sitio_web_Agencia_Manager.webp", alt:"Sitio_web_Agencia_Manager",NameProyect:'Sitio Web Agencia Manager SAS', Description:"Desde cero, desarrollé el sitio web de la Agencia Manager, utilizando tecnologías avanzadas como Nuxt, Vue y Vuetify. Este proyecto incorporó un enfoque meticuloso en la creación de una interfaz intuitiva y dinámica para los usuarios"},
                {img:"/IMG/projects/Sitio_web_LosOlivosNeiva.webp", alt:"Sitio_web_LosOlivosNeiva",NameProyect:'Sitio Web Los Olivos Neiva', Description:"Desarrollé el sitio web Olivos Neiva utilizando Nuxt.js y Vue.js para la interfaz del cliente. Además, creé una API con Node.js para gestionar los registros diarios de obituarios, organizados por sala."},
                {img:"/IMG/projects/Tienda_LosOlivosNeiva.webp", alt:"Tienda_LosOlivosNeiva",NameProyect:'E-Coomerce Los Olivos Neiva', Description:"Desarrollé tienda virtual para Olivos Neiva en WordPress utilizando Divi y WooCommerce. Implementé código personalizado para funciones específicas solicitadas por el cliente, asegurando una experiencia de compra personalizada y eficiente."},
                {img:"/IMG/projects/Sitio_web_Tarjeta_Digital.webp", alt:"Sitio_web_Tarjeta_Digital",NameProyect:'Sitio Web Mi tarjeta digital', Description:"Desarrollé el sitio web para un producto de la agencia Manager de Perfiles de Tarjetas Digitales. Utilicé Nuxt.js, Vue.js y Vuetify.js para crear alrededor de 20 tarjetas digitales personalizadas para los clientes, asegurando una presentación impactante y funcional."},
                {img:"/IMG/projects/Landing_Dr_Solares.webp", alt:"Landing_Dr_Solares",NameProyect:'Landing Page Dr Solares', Description:"Creé una landing page multilingüe para el Dr. Solares, cirujano plástico en Villavicencio. Desarrollada en WordPress con Divi, garantizando una presentación profesional y accesible en varios idiomas."},
                {img:"/IMG/projects/Sitio_web_LaCoop.webp", alt:"Sitio_web_LaCoop",NameProyect:'Sitio Web La Coop', Description:"Desarrollé el sitio web para la Cooperativa en Villavicencio. Utilicé WordPress y Divi para garantizar una presentación profesional y accesible, satisfaciendo las necesidades específicas de la cooperativa y sus miembros."},
                {img:"/IMG/projects/Sitio_web_Navigare.webp", alt:"Sitio_web_Navigare",NameProyect:'Sitio Web Navigare', Description:"Participé en un 90% del desarrollo del sitio web para Navigare SAS, una empresa de yates. Implementé un sistema de reservas con Amelia y notificaciones por WhatsApp. Utilicé WordPress y Divi para garantizar una presentación profesional y funcional."},
                {img:"/IMG/projects/Sitio_web_Sicol.webp", alt:"Sitio_web_Sicol",NameProyect:'Catalogo Sicol SAS', Description:"Desarrollé el 90% del catálogo de productos para Sicol SAS, empresa de suministro de EPP. Utilicé WordPress y Divi para garantizar una presentación profesional y funcional de los productos, cumpliendo con los requerimientos específicos del cliente."},
            ],
            show: false,
            settings: {
                "dots": false,
                "infinite": true,
                "autoplay": true,
                "speed": 1000,
                "autoplaySpeed": 10000,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "pauseOnDotsHover": true,
                "pauseOnFocus": true,
                "pauseOnHover": true,
                "initialSlide": 0,
                "responsive": [
                    {
                    "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                            "infinite": true,
                            "dots": false
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
                            "slidesToScroll": 1,
                        }
                    }
                ]
            }
        } 
    }
}
</script>