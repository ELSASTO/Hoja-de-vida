<template>
    <div  align="center" justify="center" >
        <v-row align="center" justify="center">
            <v-col cols="11"  class="contenedor"  align="center" justify="center">
                <v-row align="center" justify="center">
                    <v-col  data-aos="fade-right" data-aos-duration="3000" align="start" justify="center" cols="10" md="5" lg="5" sm="10">
                        <h2 class="font1 mt-8 mt-lg-0" >
                            Hola! Soy 
                            <br><span class="MyName " style="color: white;"> Alejandro </span><span class="MyName"> Sastoque </span>
                        </h2>
                        <h1 style="font-size: 18px; font-weight: normal;" class="font1">Desarollodor web Full-Stack y estudiante de ingenieria de sofware</h1>
                        <div class="social-buttons">
                            <v-btn class="social-button" color="red" fab small href="https://api.whatsapp.com/send?phone=573142484466">
                            <v-icon dark>mdi-whatsapp</v-icon>
                            </v-btn>
                            <v-btn class="social-button" color="red" fab small href="https://www.linkedin.com/in/jose-alejandro-sastoque-agudelo-11462abb/">
                            <v-icon dark>mdi-linkedin</v-icon>
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col align="center" justify="center" cols="10" md="5" lg="5" sm="10" class="mb-10 " >
                        <div class=" mt-10">
                            <v-img class="foto fotoAlejo mt-10" data-aos="fade-up-left" data-aos-duration="4000" width="450" src="/IMG/Desarrollador_web_fullstack_Alejandro_Sastoque.webp"/>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped > 
.social-buttons {
  /* position: fixed; */
  /* top: 20px; Ajusta la posición vertical según necesites */
  /* right: 20px; Ajusta la posición horizontal según necesites */
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  
}

.social-button {
  margin-left: 10px;
  margin-top: 10px;
}
</style>