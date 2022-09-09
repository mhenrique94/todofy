<template>
  <div class="wrapperPage">
    <Drawer
      class="suspendMenu"
      @show="
        (receives) => {
          show = receives;
        }
      "
    />
    <v-container v-if="show == 'categoryShow'">
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
    </v-container>

    <v-container v-if="show == 'userShow'">
      <v-container fluid class="banner">
        <v-row>
          <v-text-field
            v-model="user.name"
            label="Digite e clique em + para adicionar um novo usuário"
          ></v-text-field>
          <v-btn
            class="mx-2 float"
            fab
            dark
            color="pink"
            @click="pushUsers(user)"
          >
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </v-row>
      </v-container>
      <v-card>
        <v-list class="list">
          <v-list-item
            class="catContainer"
            v-for="(user, index) in users"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title
                >{{ user.name
                }}<i @click="deleteUser(user.id)" class="gg-trash gg"></i
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import callApi from "@/callApi";
import Drawer from "@/components/Drawer.vue";
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
    getUsers() {
      callApi.getUsers((respostaApi) => {
        for (var u of respostaApi) {
          this.users.push(u);
        }
      });
    },
    pushUsers(cat) {
      callApi.pushUsers(cat);
      this.reload();
    },
    deleteUser(id) {
      callApi.deleteUser(id);
      this.reload();
    },
    reload() {
      this.$router.go();
    },
  },
  data() {
    return {
      categories: [],
      users: [],
      category: {
        name: null,
      },
      user: {
        name: null,
      },
      show: "categoryShow",
    };
  },
  created() {
    this.getCategories();
    this.getUsers();
  },
  components: { Drawer },
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

.suspendMenu {
  position: relative;
}
</style>
