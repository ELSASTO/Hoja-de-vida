<template>
    <div>
        <div class="menu-hamburguesa">
            <button @click="toggleMenu" class="btn-menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav class="nav-menu" v-show="showMenu">
            <v-card>
                <ul >
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </v-card>
        </nav>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
}
</script>