import { testHandlers } from './mocks/handler'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupWorker } from 'msw'

const worker = setupWorker(...testHandlers)

async function prepare() {
  await import('../public/mockServiceWorker.js?worker')

  return worker.start({}).then(() => {
    console.groupCollapsed('[MSW] Loaded with handlers 🎉')
    worker.printHandlers()
    console.groupEnd()
    return null
  })
}

void prepare().then(() => {
  createApp(App).mount('#app')
})
