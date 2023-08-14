import { createApp, defineCustomElement  } from 'vue';
import App from './App.vue';
import { createPinia } from "pinia";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas)

const Widget = defineCustomElement(App)
customElements.define('weather-widget', Widget)

const app = createApp(App);

app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#widget");