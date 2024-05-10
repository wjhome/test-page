import { createApp } from 'vue'

import DialogService from 'primevue/dialogservice'
import PrimeVue from 'primevue/config'
import './style.css'
import 'primeicons/primeicons.css'
// import PrimeOne from 'primevue/themes/primeone'
import Aura from 'primevue/themes/aura'
import App from './App.vue'
import router from './router'

const app = createApp(App)
console.log(11)
app.use(router)
app.use(PrimeVue, {
	// Default theme configuration
	theme: {
		preset: Aura,
		options: {
			prefix: 'p',
			darkModeSelector: '.my-app-dark',
			cssLayer: false,
		},
	},
})
app.use(DialogService)
console.log(22)
app.mount('#app')
