import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: () => import('../components/index'),
    children:[
      {
        path:'student',
        component:() => import('../components/student')
      },
      {
        path:'course',
        component:() => import('../components/course')
      },
      {
        path:'student/add',
        component:() => import('../components/studentInfo')
      }
    ]
  }]
})
