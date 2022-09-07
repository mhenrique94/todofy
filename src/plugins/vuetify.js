import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#e91e63",
        secondary: "#03a9f4",
        accent: "#673ab7",
        error: "#ff5722",
        warning: "#f44336",
        info: "#3f51b5",
        success: "#009688",
      },
    },
  },
});
