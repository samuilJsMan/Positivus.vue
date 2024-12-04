import { createApp } from 'vue'
import App from './App.vue'

import router from './router/router'
import store from './store/store'

import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import BaseButton from './layouts/BaseButton.vue'
import BaseAnchor from './layouts/BaseAnchor.vue'
import BaseCard from './layouts/BaseCard.vue'
import MiniDialog from './layouts/MiniDialog.vue'
import PendingButton from './layouts/PendingButton.vue'

loadFonts()

  createApp(App)
  .use(router)
  .use(store)
  .component("BaseButton", BaseButton)
  .component("BaseAnchor", BaseAnchor)
  .component(`BaseCard`,BaseCard)
  .component(`MiniDialog`,MiniDialog)
  .component(`PendingButton`,PendingButton)
  .use(vuetify)
  .mount('#app')
