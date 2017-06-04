import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import { sync } from 'vuex-router-sync'

sync(store, router)

const app = new Vue({
    router,
    store,
    render: h => h(App)
})

export { app, router, store }