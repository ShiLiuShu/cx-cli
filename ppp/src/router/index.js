import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/home.vue'
import HomeSelect from '../pages/HomeSelect/HomeSelect.vue'
import HomeInfo from '../pages/HomeInfo/HomeInfo.vue'
import ticket from '../pages/ticket/ticket.vue'
import TicketHot from '../pages/TicketHot/TicketHot.vue'
import TicketComing from '../pages/TicketComing/TicketComing.vue'
import cinema from '../pages/Cinema/Cinema.vue'
import movie from '../pages/movie/movie.vue'
import person from '../pages/actor/actor.vue'
import cinemaDetail from '../pages/cinemaDetail/cinemaDetail.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect:'/home/select',
      children:[
        {
          path:'select',
          component:HomeSelect
        },
        {
          path:'info',
          component:HomeInfo
        }
      ]
    },
    {
      path: '/ticket',
      component: ticket,
      redirect:'/ticket/hot',
      children:[
        {
          path:'hot',
          component:TicketHot
        },
        {
          path:'coming',
          component:TicketComing
        },
        {
          path:'cinema',
          component:cinema
        }
      ]
    },
    {
      path:'/movie/:movieId',
      name:'movie',
      component:movie
    },
    {
      path:'/person/:personId',
      name:'person',
      component:person
    },
    {
      path:'/cinema/:cinemaId',
      name:'cinemaDetail',
      component:cinemaDetail
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
