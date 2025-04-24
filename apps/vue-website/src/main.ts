import "@/assets/stylesheets/main.scss"

import { createApp } from "vue"
import { createPinia } from "pinia"
import { createIcon } from "./icon.ts"

import App from "./App.vue"
import router from "./router"

import ElementPlus from "element-plus"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus, { size: "small", zIndex: 3000 })
app.component("FontAwesomeIcon", createIcon())

app.mount("#app")
