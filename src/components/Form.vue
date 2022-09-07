<template>
  <div class="formulary">
    <v-form>
      <v-container>
        <v-row>
          <v-text-field
            v-model="myTask.title"
            :counter="250"
            label="Título da tarefa"
            required
            :value="task.title"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-select
            v-model="myTask.category"
            :items="categories"
            :rules="[(v) => !!v || 'Item is required']"
            label="Categoria"
            required
          ></v-select>
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
            required
          ></v-text-field>
          <v-checkbox
            v-model="checkComplete"
            :error-messages="errors"
            value="1"
            label="Tarefa concluída"
            type="checkbox"
          ></v-checkbox>
        </v-row>
        <v-row>
          <v-btn class="mr-4" @click="reset"> Limpar Form </v-btn>
          <v-btn
            color="pink lighten-1 white--text"
            class="mr-4"
            @click="$emit('salva-task', myTask)"
          >
            Salvar
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
  },
  data() {
    return {
      myTask: { ...this.task },
    };
  },
};
</script>

<style scoped>
.formulary {
  width: 50vw;
  max-width: 50vw;
}
</style>
