<template>
  <nav class="navbar white--text">
    <router-link to="/" class="logo">
      <v-toolbar-title class="font-weight-bold white--text"
        >todofy</v-toolbar-title
      >
    </router-link>
    <v-spacer></v-spacer>
    <h4 class="white--text font-weight-light">Sua to-do list em vuetify</h4>
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
}

.navList {
  display: flex;
  gap: 20px;
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}
a:hover {
  border-radius: 10px;
  padding: auto 18px;
  font-weight: 700;
}
.logo {
  display: flex;
  align-items: center;
  gap: 30px;
}
li {
  padding: 0 10px;
}
</style>
