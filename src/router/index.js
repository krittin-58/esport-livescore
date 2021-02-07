import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LivePage from '../views/Live.vue'
import LeaguesPage from '../views/Leagues.vue'
import LeagueDetail from '../views/LeagueDetail.vue'
import MatchesPage from '../views/Matches.vue'
import GamesPage from '../views/Games.vue'
import SchedulesPage from '../views/Schedules.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/live',
    name: 'Live-page',
    component: LivePage
  },
  {
    path: '/leagues',
    name: 'Leagues-page',
    component: LeaguesPage,
  },
  {
    path: '/leagues/:id',
    name: 'League-detail',
    component: LeagueDetail,
  },
  {
    path: '/matches',
    name: 'Matches-page',
    component: MatchesPage
  },
  {
    path: '/games',
    name: 'Games-page',
    component: GamesPage
  },
  {
    path: '/schedules',
    name: 'Schedules-page',
    component: SchedulesPage
  },
  {
    path: '/about-us',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
