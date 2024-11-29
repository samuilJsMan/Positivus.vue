import { createApp } from 'vue'
import App from './App.vue'

//import router from './router'
//import store from './store/store'

import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import baseButton from './components/baseButton.vue'
import baseAnchor from './components/baseAnchor.vue'

loadFonts()

const app=createApp(App)

  //app.use(router)
  //app.use(store)
  app.component("baseButton", baseButton)
  app.component("baseAnchor", baseAnchor)
  app.use(vuetify)
  app.mount('#app')
