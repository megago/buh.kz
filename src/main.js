import { createApp } from 'vue'
import App from './App.vue'
import { vReveal } from './directives/reveal'
import { i18n, setLocale } from './i18n'
import '@fontsource-variable/inter/wght.css'
import './styles/tokens.css'
import './styles/base.css'

// Apply the detected/stored locale to <html lang> and <title>/<meta description>
// before mounting, so the very first paint already matches it.
setLocale(i18n.global.locale.value)

createApp(App).use(i18n).directive('reveal', vReveal).mount('#app')
