import Vue from 'vue'
import router from './router'
import App from './App.vue'

const app = new Vue({
    router,
    render: h => h(App)
})

export { app, router }