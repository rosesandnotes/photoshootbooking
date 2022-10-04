import { createApp } from 'vue'
import App from './App.vue'

import '@vuepic/vue-datepicker/dist/main.css';
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
