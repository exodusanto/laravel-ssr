import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import { sync } from 'vuex-router-sync'

sync(store, router)


export default function createApp (context) {

    if(context){
        store.replaceState(Object.assign({}, store.state, context));
    }

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })

    return { app, router, store }
}