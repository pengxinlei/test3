import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let router = new VueRouter()
router.map({
	"/" : {
		component : require('pages/page1.vue'),
		name : 'page1',
	},
	"/page2" : {
		component:require('pages/page2.vue'),
		name : 'page2'
	}
})
router.start(App,'app')
/* eslint-disable no-new */
