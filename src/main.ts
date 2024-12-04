import { createApp } from 'vue'
import App from './App.vue'

//import router from './router'
import store from './store/store'

import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import baseButton from './layouts/baseButton.vue'
import baseAnchor from './layouts/baseAnchor.vue'
import baseCard from './layouts/baseCard.vue'
import miniDialig from './layouts/miniDialig.vue'

loadFonts()

const app=createApp(App)

  //app.use(router)
  app.use(store)
  app.component("baseButton", baseButton)
  app.component("baseAnchor", baseAnchor)
  app.component(`baseCard`,baseCard)
  app.component(`miniDialig`,miniDialig)
  app.use(vuetify)
  app.mount('#app')
