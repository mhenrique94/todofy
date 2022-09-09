<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="formulary">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row>
          <v-text-field
            v-model="myTask.title"
            :rules="titleRules"
            :counter="250"
            label="Título da tarefa"
            required
            :value="task.title"
          ></v-text-field>
        </v-row>
        <v-row class="centerLine">
          <v-select
            v-model="myTask.category"
            :items="categories"
            :rules="nameRules"
            label="Categoria"
            required
          ></v-select>
          <router-link to="/manage" class="link"
            ><v-icon>mdi-dots-horizontal</v-icon></router-link
          >
        </v-row>
        <v-row>
          <v-date></v-date>
        </v-row>
        <v-row>
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="myTask.dueTo"
                :rules="[(v) => !!v || 'Item is required']"
                label="Selecione a data de expiração da tarefa"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="myTask.dueTo"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
        </v-row>
        <v-row>
          <v-text-field
            v-model="myTask.user"
            :counter="16"
            label="Autor"
            :rules="nameRules"
            required
          ></v-text-field>
          <v-checkbox
            v-model="myTask.isConclude"
            label="Tarefa concluída"
            type="checkbox"
          ></v-checkbox>
        </v-row>
        <v-row>
          <v-btn class="mr-4" @click="reset"> Limpar Form </v-btn>
          <v-btn
            v-if="editingTask === false"
            color="pink lighten-1 white--text"
            class="mr-4"
            @click="$emit('salva-task', myTask)"
          >
            Salvar
          </v-btn>
          <v-btn
            v-else
            color="pink lighten-1 white--text"
            class="mr-4"
            @click="$emit('atualiza-task', myTask)"
          >
            Atualizar
          </v-btn>
          <v-btn
            color="grey lighten-1 white--text"
            class="mr-4"
            @click="$emit('to-index')"
          >
            Cancelar
          </v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "formTask",
  props: {
    task: {
      type: Object,
      required: true,
    },
    categories: [],
    editingTask: {
      type: Boolean,
    },
  },
  data() {
    return {
      myTask: { ...this.task },
      valid: true,
      nameRules: [
        (v) => !!v || "Preencha esse campo",
        (v) =>
          (v && v.length <= 16) ||
          "Esse campo precisar ter no máximo 16 caracteres",
      ],
      titleRules: [
        (v) => !!v || "Name is required",
        (v) =>
          (v && v.length <= 250) ||
          "Esse campo aceita no máximo 250 caracteres",
      ],
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.formulary {
  width: 50vw;
  max-width: 50vw;
}
.link {
  margin: 14px 0 auto 14px;
  text-decoration: none;
}
</style>
