import createApp from './app'

export default context => {
  const { app, router, store } = createApp(context);
  
  // set router's location
  router.push(context.url)


  const initialState = Object.assign({}, store.state, context);

  return Promise.all(router.getMatchedComponents().map(component => {
    if (component.preFetch) {
      return component.preFetch(initialState)
    }
  })).then(() => {
    context.initialState = initialState;
    return app
  })
}