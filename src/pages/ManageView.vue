<template>
  <div class="wrapperPage">
    <v-container fluid class="banner">
      <v-row>
        <v-text-field
          v-model="category.name"
          label="Digite e clique em + para adicionar uma nova categoria"
        ></v-text-field>
        <v-btn
          class="mx-2 float"
          fab
          dark
          color="pink"
          @click="pushCategory(category)"
        >
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </v-row>
    </v-container>
    <v-card>
      <v-list class="list">
        <v-list-item
          class="catContainer"
          v-for="(cat, index) in categories"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title
              >{{ cat.name
              }}<i @click="deleteCategory(cat.id)" class="gg-trash gg"></i
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import callApi from "@/callApi";
export default {
  name: "ManageView",
  methods: {
    getCategories() {
      callApi.getCategories((respostaApi) => {
        for (var c of respostaApi) {
          this.categories.push(c);
        }
      });
    },
    pushCategory(cat) {
      callApi.pushCategory(cat);
      this.reload();
    },
    deleteCategory(id) {
      callApi.deleteCategory(id);
      this.reload();
    },
    reload() {
      this.$router.go();
    },
  },
  data() {
    return {
      categories: [],
      category: {
        name: null,
      },
    };
  },
  created() {
    this.getCategories();
  },
};
</script>
<style>
.float {
  float: right;
}
.gg {
  width: 9px;
  height: 10px;
  float: right;
  margin-right: 10px;
  cursor: pointer;
}
.banner {
  margin: 20px auto;
}
</style>
