// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import goods from 'components/goods/goods.vue'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

Vue.config.productionTip = false
Vue.config.debug = true

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component: seller
    }
  ],
  linkActiveClass: 'active'
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
router.push('/goods')
