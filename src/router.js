import Vue from 'vue'
import Router from 'vue-router'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import EventCreate from './views/EventCreate.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/events',
      name: 'event-show',
      component: EventShow
    },
    {
      path: '/events/create',
      name: 'event-create',
      component: EventCreate
    }
  ]
})
