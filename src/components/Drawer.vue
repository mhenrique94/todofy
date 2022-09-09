<template>
  <v-container>
    <v-navigation-drawer floating permanent width="100%">
      <v-list dense width="100%">
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
          class="listItemGroup"
          width="100%"
        >
          <v-list-item
            router
            @click="clickItem(item.click)"
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Categorias",
          icon: "mdi-shape",
          click: "categoryShow",
        },
        { title: "Usuários", icon: "mdi-account", click: "userShow" },
      ],
      selectedItem: 0,
    };
  },
  methods: {
    clickItem(selectedItem) {
      this.$emit("show", selectedItem);
    },
  },
};
</script>
<style scoped>
.listItemGroup {
  display: flex;
  gap: 20px;
}
</style>
