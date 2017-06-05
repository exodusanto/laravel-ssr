import createApp from './app'

const { app, store } = createApp()

store.replaceState(window.__INITIAL_STATE__)

app.$mount('#root')