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
};
