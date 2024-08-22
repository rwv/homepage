import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n'
import VueGtag from 'vue-gtag'

const locale = navigator.language

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'en' // set fallback locale
})

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(VueGtag, {
  config: { id: 'G-949LFDL5RT' }
})

app.mount('#app')
