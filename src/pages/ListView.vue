<template>
  <div class="wrapperPage">
    <v-btn
      class="mx-2 btn-floating"
      fab
      dark
      color="pink"
      @click="
        editIsEnabled = true;
        listIsEnabled = false;
      "
    >
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
    <formTask
      v-show="editIsEnabled"
      :key="componentKey"
      :task="task"
      :categories="categories"
      :editingTask="editingTask"
      @to-index="reload()"
      @salva-task="
        (task) => {
          postTasks(task);
        }
      "
      @atualiza-task="
        (mytask) => {
          updateTasks(mytask);
        }
      "
    />
    <div v-for="(tarefa, index) in tasks" :key="index" v-show="listIsEnabled">
      <cardTask
        :tarefa="tarefa"
        :task="task"
        @deleta-task="
          (id) => {
            deleteTasks(id);
            getTasks();
          }
        "
        @edita-task="
          (receives) => {
            task = receives;
            editingTask = true;
            editIsEnabled = true;
            listIsEnabled = false;
            forceRenderer();
          }
        "
      />
    </div>
  </div>
</template>

<script>
import formTask from "../components/Form.vue";
import cardTask from "../components/Card.vue";
import callApi from "@/callApi";

export default {
  name: "ListView",

  components: {
    formTask,
    cardTask,
  },
  data() {
    return {
      editIsEnabled: false,
      listIsEnabled: true,
      editingTask: false,
      tasks: [],
      task: {
        id: null,
        title: null,
        dueTo: null,
        category: null,
        user: null,
        isConclude: Boolean,
      },
      categories: [],
      componentKey: {
        type: Number,
      },
    };
  },
  methods: {
    getTasks() {
      callApi.getTasks((respostaApi) => {
        this.tasks = respostaApi;
      });
    },
    getCategories() {
      callApi.getCategories((respostaApi) => {
        for (var c of respostaApi) {
          this.categories.push(c.name);
        }
      });
    },
    postTasks(task) {
      callApi.postTasks(task);
      this.reload();
    },
    deleteTasks(id) {
      callApi.deleteTasks(id);
      this.reload();
    },
    updateTasks(mytask) {
      callApi.updateTasks(mytask);
      this.reload();
    },
    editTasks() {
      callApi.editTasks((respostaApi) => {
        this.task = respostaApi;
      });
      this.reload();
    },
    forceRenderer() {
      this.componentKey += 1;
    },
    reload() {
      window.location.href = "index.html";
    },
  },
  created() {
    this.getTasks();
    this.getCategories();
  },
};
</script>

<style>
.wrapperPage {
  max-width: 50vw;
  margin-left: 20%;
}

.btn-floating {
  position: fixed;
  left: 2%;
  top: 15%;
}
</style>
