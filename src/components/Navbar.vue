<template>
  <nav class="navbar white--text">
    <router-link to="/" class="logo white--text">
      <v-toolbar-title class="font-weight-bold">todofy</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <ul class="navList">
      <li><router-link to="/" class="white--text">Início</router-link></li>
      <li>
        <router-link to="/manage" class="white--text">Gerenciar</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.navList {
  display: flex;
  gap: 20px;
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
