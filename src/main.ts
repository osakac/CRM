import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

createApp(App)
  .use(createPinia())
  .use(FloatingVue, {
    themes: {
      "custom-tooltip": {
        $extend: "tooltip",
        $resetCss: true,
        distance: 10,
      },
    },
  })
  .mount("#app");
