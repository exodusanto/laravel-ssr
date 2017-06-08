import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import { sync } from 'vuex-router-sync'

export default function createApp (context) {

    if(context){
        store.replaceState(Object.assign({}, store.state, context));
    }
    
    sync(store, router)

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })

    return { app, router, store }
}