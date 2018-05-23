import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router.js'
import iView from 'iview'
import 'iview/dist/styles/iview.css'


Vue.use(VueRouter)
Vue.use(iView)

new Vue({
	el: '#app',
	router,
	render: h=>h(App),
	data: {
    eventHub: new Vue() //事件发送接收器可通过this.$root.eventHub.$emit发送事件
  }
})

