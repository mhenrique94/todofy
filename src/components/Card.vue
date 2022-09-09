<!-- taskTitle selectCategory date checkComplete -->
<template>
  <v-card elevation="2" class="card">
    <v-card-title>{{ tarefa.title }}</v-card-title>
    <v-card-text class="cardText">
      <v-row>Categoria: {{ tarefa.category }}</v-row>
      <v-row>Vence em {{ tarefa.dueTo }}</v-row>
      <v-row>Criado por {{ tarefa.user }}</v-row>
      <v-row
        >Status: {{ tarefa.isConclude ? "Concluida" : "Em andamento" }}</v-row
      >
    </v-card-text>
    <v-card-actions>
      <v-btn color="pink lighten-2" text @click="$emit('edita-task', tarefa)">
        Editar
      </v-btn>
      <v-btn
        color="pink lighten-2"
        text
        @click="$emit('deleta-task', tarefa.id)"
      >
        Excluir
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "cardTask",
  props: {
    tarefa: {
      type: Object,
      required: true,
    },
    task: {},
  },
};
</script>

<style scoped>
.cardText {
  padding-left: 5%;
}
</style>
