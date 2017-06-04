import { app, router } from './app'

export default context => {
  // set router's location
  router.push(context.url)

  return Promise.all(router.getMatchedComponents().map(component => {
    // if (component.preFetch) {
    //   return component.preFetch(store)
    // }
  })).then(() => {
    // context.initialState = store.state
    return app
  })
}