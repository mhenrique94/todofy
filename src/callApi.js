import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default {
  getCategories: (callback) => {
    axios
      .get("/categories")
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
  getUsers: (callback) => {
    axios
      .get("/users")
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
  pushCategory: (cat) => {
    const data = cat;
    const headers = { "Content-Type": "application/json" };
    const dataJson = JSON.stringify(data);
    axios.post("/categories", dataJson, {
      headers: headers,
    });
  },
  pushUsers: (user) => {
    const data = user;
    const headers = { "Content-Type": "application/json" };
    const dataJson = JSON.stringify(data);
    axios.post("/users", dataJson, {
      headers: headers,
    });
  },
  deleteCategory: (id) => {
    axios.delete(`/categories/${id}`);
  },
  deleteUser: (id) => {
    axios.delete(`/users/${id}`);
  },
  getTasks: (callback) => {
    axios
      .get("/tasks")
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
  postTasks: (task) => {
    const data = task;
    const headers = { "Content-Type": "application/json" };
    const dataJson = JSON.stringify(data);
    axios.post("/tasks", dataJson, {
      headers: headers,
    });
  },
  deleteTasks: (id) => {
    axios.delete(`/tasks/${id}`);
  },
  updateTasks(task) {
    const dataJson = JSON.stringify(task);
    const headers = { "Content-Type": "application/json" };
    axios.patch(`/tasks/${task.id}`, dataJson, {
      headers: headers,
    });
  },
  editTasks: (callback) => {
    axios
      .get(`/tasks/${this.task.id}`)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
};
