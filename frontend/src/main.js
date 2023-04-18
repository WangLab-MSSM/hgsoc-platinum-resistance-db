import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import AsyncComputed from 'vue-async-computed'
import VueRouter from 'vue-router'

import vuetify from '@/plugins/vuetify' // path to vuetify export

import JsonExcel from "vue-json-excel";

import Home from './components/Home'
import About from './components/About'
import Forum from './components/Forum'
import Test from './components/Test'

Vue.use(VueRouter)
Vue.use(AsyncComputed)

const routes = [
  { 
    path: '/', 
    components: {
      main: Home
    }, 
  },
  { 
    path: '/about', 
    components: {
      main: About
    } 
  },
  { 
    path: '/forum', 
    components: { 
      main: Forum 
    }, 
    children: [
      {
        path: 'test',
        components: {forum: Test}
      },
    ]
  },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false
Vue.use(Buefy)

Vue.component("downloadExcel", JsonExcel);
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
