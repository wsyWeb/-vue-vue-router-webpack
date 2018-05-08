import VueRouter from 'vue-router'
const routes =  new VueRouter({
  routes: [{
    path: '/about',
    component: require('./components/Index.vue').default
  }]
})

export default routes