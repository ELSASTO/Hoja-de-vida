<template>
    <div >
        <v-row justify="center" align="center">
            <v-col cols="11" md="10" justify="center" align="center">
                <div class="contet-titles my-8" data-aos="fade-right" data-aos-duration="3000">
                    <h2 class="titles">FREELANCER:</h2>
                </div>
                <div >
                    <v-row >
                        <v-col v-for="({img,alt,NameProyect, Description}, index) in projects" :key="index" data-aos="fade-up" cols="12" md="4">
                            <div
                                class="card2 mx-5" 
                                max-width="auto"
                                justify="start" align="start"
                            >
                                <div justify="center" align="center">
                                    <img
                                        height="141px"
                                        class="rounded-xl"
                                        :src="img"
                                        :alt="alt"
                                        :title="alt"
                                        cover
                                    >
                                </div>

                                <h3 class="ma-2 title-card">
                                    {{NameProyect}}
                                </h3>
                                <v-divider color="#500000"></v-divider>
                                <v-card-text class="text-card">
                                    {{Description}}
                                </v-card-text>
                            </div>
                        </v-col>
                    </v-row>
                    
                </div>
            </v-col>
        </v-row>
    </div>
</template>
<script>

export default {
    data() {
        return {
            projects:[
                {img:"/IMG/projects/sitio_web_Psicosalud.webp", alt:"sitio_web_Psicosalud",NameProyect:'Sitio Web / E-commerce Psicosalud', Description:"Actualmente, desarrollo el sitio web y tienda virtual para el consultorio Psicosalud de la Psicóloga Daniela Muñuz. Utilizo WordPress, WooCommerce y Divi para brindar una experiencia online completa y personalizada para sus pacientes."},
                {img:"/IMG/projects/posicionamiento_seo_gym_villavicencio.webp", alt:"posicionamiento_seo_gym_villavicencio",NameProyect:'Posicionamiento SEO Local a gimnasio en villavicencio', Description:"Me dedico al posicionamiento SEO local del gimnasio EFFORT FITNESS TEAM en Villavicencio, utilizando Google My Business. Logré posicionarlo consistentemente entre los tres primeros resultados en la búsqueda local de Villavicencio."},
                {img:"/IMG/projects/posicionamiento_seo_VMCO.webp", alt:"posicionamiento_seo_VMCO",NameProyect:'Posicionamiento SEO Local a Empresa VMCO', Description:"Lidero el posicionamiento SEO local de VMC, una consultora empresarial especializada. A través de Google My Business, hemos asegurado su presencia en los tres primeros resultados de búsqueda en Villavicencio, fortaleciendo su visibilidad y reputación en el ámbito local."},
            ],
        }
    }
}
</script>