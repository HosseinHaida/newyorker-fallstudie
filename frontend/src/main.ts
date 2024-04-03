import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import { createRouter, createWebHistory } from "vue-router"
import { Routes } from "./routes"
import { createPinia } from "pinia"

const app = createApp(App)
const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes: Routes,
})

app.use(pinia)
app.use(router)
app.mount("#app")
