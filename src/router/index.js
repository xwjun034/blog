import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index'
import Categories from '@/components/pages/categories'
import Archives from '@/components/pages/archives'
import Details from '@/components/pages/details'
import CategoriesDetail from '@/components/pages/categoriesDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Index',
      component:Index,
    },
    {
      path:'/Categories',
      name:'Categories',
      component:Categories,
      // children:[
      //   {path:'/', name:'Categories',component:Categories},
      //   {path:'categoriesDetail', name:'categoriesDetail',component:CategoriesDetail}
      // ],
    },
    {
      path:'/Archives',
      name:'Archives',
      component:Archives,
    },
    {
     path:'/details/:articleId',
     name:'details',
     component:Details
    },
    {
     path:'/categoriesDetail',
     name:'categoriesDetail',
     component:CategoriesDetail
    }

  ]
})
