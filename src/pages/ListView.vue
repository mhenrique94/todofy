<template>
  <div class="wrapperPage">
    <formTask
      :key="componentKey"
      :task="task"
      :categories="categories"
      :editingTask="editingTask"
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
    <div v-for="(tarefa, index) in tasks" :key="index">
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
      },
      categories: [],
      componentKey: 0,
    };
  },
  methods: {
    getTasks() {
      fetch("http://localhost:3000/tasks")
        .then((response) => response.json())
        .then((jsontasks) => (this.tasks = jsontasks));
    },
    getCategories() {
      fetch("http://localhost:3000/categories")
        .then((response) => response.json())
        .then((jsoncats) => {
          for (var c of jsoncats) {
            this.categories.push(c.name);
          }
        });
    },
    postTasks(task) {
      const data = task;

      const dataJson = JSON.stringify(data);

      fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });
      window.location.href = "index.html";
    },
    deleteTasks(id) {
      fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });
      window.location.href = "index.html";
    },

    updateTasks(mytask) {
      const data = mytask;

      const dataJson = JSON.stringify(data);

      fetch(`http://localhost:3000/tasks/${this.task.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });
      window.location.href = "index.html";
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
        });
      window.location.href = "index.html";
    },
    forceRenderer() {
      this.componentKey += 1;
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
