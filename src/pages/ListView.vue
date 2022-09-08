<template>
  <div class="wrapperPage">
    <v-btn
      class="mx-2"
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
      componentKey: 0,
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
      const data = mytask;

      const dataJson = JSON.stringify(data);

      fetch(`http://localhost:3000/tasks/${this.task.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });
      this.reload();
    },
    editTasks(id) {
      fetch(`http://localhost:3000/tasks/${id}`)
        .then((response) => response.json())
        .then((resp) => {
          this.task.id = resp.id;
          this.task.title = resp.title;
          this.task.dueTo = resp.dueTo;
          this.task.project = resp.project;
          this.task.user = resp.user;
          this.task.isConclude = resp.isConclude;
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
  margin: auto;
}
</style>
