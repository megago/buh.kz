import { createApp } from 'vue'
import App from './App.vue'
import { vReveal } from './directives/reveal'
import '@fontsource-variable/inter/wght.css'
import './styles/tokens.css'
import './styles/base.css'

createApp(App).directive('reveal', vReveal).mount('#app')
