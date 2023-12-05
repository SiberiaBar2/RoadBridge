import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import Plain from 'plain-ui'
// import 'plain-ui/dist/plain-ui.min.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App'
import router from './router'

const app = createApp(App)





app.use(createPinia())
// app.use(Plain) // 使用ui组件
app.use(ElementPlus)
app.use(router)

app.mount('#app')
