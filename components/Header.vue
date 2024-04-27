<template>
  <header class="stick">
      <div fluid class="mb-5 py-5 header" >
        <v-row justify="space-around">
          <v-toolbar-title class="mt-2 mt-md-0 mt-lg-0 MyName">EL SASTO</v-toolbar-title>
          <div class="d-none d-xl-block d-lg-block">
            <v-btn v-for="({item,href}, index) in menuItems" :key="index" text :href="href">{{item}}</v-btn>
          </div>
          <div class="d-lg-none d-xl-none"> 
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#ff0000"></v-app-bar-nav-icon>
            <v-bottom-sheet v-model="drawer">
              <v-sheet
                class="text-center"
                height="600"
              >
                <div class="pt-8">
                  <h2 class="titles pb-8">EL SASTO</h2>
                  <div v-for="({item,href}, index) in menuItems" :key="index">
                    <v-btn text :href="href" @click.stop="drawer = !drawer"> {{item}}</v-btn> <br>
                  </div>
                </div>
              </v-sheet>
            </v-bottom-sheet>
          </div>
        </v-row>
      </div>
    </header>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      menuItems: [
        {item:'Conocimientos', href:'#Knowledge'},
        {item:'Proyectos', href:'#Projects'},
        {item:'Experiencia Laboral', href:'#WorkExperience'},
        {item:'Contacto', href:'#Contact'},
        {item:'Freelancer', href:'#Freelancer'},
      ],
    };
  },
};
</script>




