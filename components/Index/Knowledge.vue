<template>
    <div align="center" justify="center">
        <v-row align="center" justify="center">
            <v-col align="center" justify="center" cols="12" xl="8" lg="9" md="10" >
                <div class="contet-titles mb-10">
                    <h2 class="titles">CONOCIMIENTOS ACTUALES</h2>
                </div>
                <v-container style="background-color: #FF0000; border-radius: 20px; " class="pa-3" >
                    <v-row  align="center" justify="center" >
                        <v-col  cols="3" v-for="({img,alt,Name}, index) in Conocimientos" :key="index">
                            <div
                                class="py-2 shadow"
                            >
                                <v-tooltip bottom color="#920a0a">
                                    <template v-slot:activator="{ on }" >
                                        <img v-on="on" class="img-languages" :alt="alt" :title="alt"  :src="img">
                                    </template>
                                    <h3 class="knowledge text-capitalize">{{Name}}</h3>
                                </v-tooltip>
                            </div>
                        </v-col>
                        
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col align="center" justify="center" cols="12" xl="8" lg="9" md="10" >
                <div class="contet-titles mb-10">
                    <h2 class="titles">CONOCIMIENTOS DE INTERES</h2>
                </div>
                <v-container style="background-color: #FF0000; border-radius: 20px; " class="pa-3" >
                    <v-row  align="center" justify="center">
                        <v-col  cols="3" v-for="({img,alt,Name}, index) in proximos" :key="index">
                            <div class="py-2 shadow">
                                <v-tooltip bottom color="#920a0a">
                                    <template v-slot:activator="{ on }" >
                                        <img v-on="on" class="img-languages" :alt="alt" :title="alt"  :src="img">
                                    </template>
                                    <h3 class="knowledge text-capitalize">{{Name}}</h3>
                                </v-tooltip>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </div>
</template>
<script>

export default {
    data() {
        return {
            Conocimientos:[
                {img:"/IMG/tecnologias/logo_nuxt.webp", alt:"logo_nuxt", Name:"nuxt"},
                {img:"/IMG/tecnologias/logo_vue.webp", alt:"logo_vue", Name:"vue"},
                {img:"/IMG/tecnologias/logo_vuetify.webp", alt:"logo_vuetify", Name:"vuetify"},
                {img:"/IMG/tecnologias/logo_javascript.webp", alt:"logo_javascript", Name:"javascript"},
                {img:"/IMG/tecnologias/logo_node.webp", alt:"logo_node", Name:"node"},
                {img:"/IMG/tecnologias/logo_php.webp", alt:"logo_php", Name:"php"},
                {img:"/IMG/tecnologias/logo_bootstrap.webp", alt:"logo_bootstrap", Name:"bootstrap"},
                {img:"/IMG/tecnologias/logo_bases_de_datos.webp", alt:"logo_bases_de_datos", Name:"bases_de_datos"},
                {img:"/IMG/tecnologias/logo_wordpress.webp", alt:"logo_wordpress", Name:"wordpress"},
                {img:"/IMG/tecnologias/logo_divi.webp", alt:"logo_divi", Name:"divi"},
                {img:"/IMG/tecnologias/logo_elementor.webp", alt:"logo_elementor", Name:"elementor"},
                {img:"/IMG/tecnologias/logo_azure.webp", alt:"logo_azure", Name:"azure"},
            ],
            proximos:[
                {img:"/IMG/tecnologias/logo_typescript.webp", alt:"logo_typescript", Name:"typescript"},
                {img:"/IMG/tecnologias/logo_bandera.webp", alt:"logo_bandera", Name:"bandera"},
                {img:"/IMG/tecnologias/logo_flatter.webp", alt:"logo_flatter", Name:"flatter"},
                {img:"/IMG/tecnologias/logo_larabel.webp", alt:"logo_larabel", Name:"laravel"},
            ]
        }
    }
}
</script>