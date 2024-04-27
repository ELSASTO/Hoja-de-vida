<template>
  <v-app dark>
    <v-main>
      <v-container fluid >
        <ClientOnly>
          <Nuxt />
        </ClientOnly>
      </v-container>
    </v-main>
  
    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    
  </v-app>
</template>
