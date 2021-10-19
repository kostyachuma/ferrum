import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './../pages/index.vue'
import Inputs from './../pages/inputs.vue'
import Buttons from './../pages/buttons.vue'
import Alerts from './../pages/alerts.vue'
import Pagination from './../pages/pagination.vue'
import Signature from './../pages/signature.vue'

Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: HomePage },
      { path: '/inputs', component: Inputs },
      { path: '/buttons', component: Buttons },
      { path: '/alerts', component: Alerts },
      { path: '/pagination', component: Pagination },
      { path: '/signature', component: Signature },
    ]
})
