import createApp from './app'

const { app, store } = createApp(window.__INITIAL_STATE__)

app.$mount('#root')