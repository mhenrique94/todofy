<template>
  <v-app>
    <v-app-bar app color="#fb2784">
      <Navbar />
      <!-- app-bar navbar -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
      <Calendar />
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Calendar from "./components/Calendar.vue";

export default {
  name: "App",
  data: () => ({}),
  components: { Navbar, Calendar },
};
</script>
