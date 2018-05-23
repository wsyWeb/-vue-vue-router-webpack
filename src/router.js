import VueRouter from 'vue-router'
const routes =  new VueRouter({
  routes: [
  {
    path: '/',
    component: require('./components/Dashboard.vue').default
  },
  {
    path: '/about',
    component: require('./components/About.vue').default
  }]
})

export default routes