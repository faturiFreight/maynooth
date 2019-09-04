import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style.css'
import Vuex from 'vuex'
import store  from './store'
import Home from './components/Home'
import SignIn from './components/SignIn'
import LivingRoom from './components/LivingRoom'
import Bedroom from './components/Bedroom'
import Kitchen from './components/Kitchen'
import Cart from './components/Cart'
import LoggedIn from './components/LoggedIn'
import Axios from 'axios';

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path:'/', component: Home },
  { path:'/sign-in', component: SignIn },
  { path: '/living-room', component: LivingRoom },
  { path:'/bedroom', component: Bedroom },
  { path:'/kitchen', component: Kitchen },
  { path:'/cart', component: Cart },
  { path: '/loggedin', component: LoggedIn }
]; 

const router = new VueRouter({
	routes
});

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
