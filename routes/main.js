import Vue from 'vue'

import Home from './components/Home'

Vue.use(VueRouter)

const routes = [
	{ path:'/', component: Home }
]; 

const router = new VueRouter({
	routes
});