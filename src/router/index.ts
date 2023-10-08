import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'contactbook',
      component: () => import('@/views/ContactBook.vue')
    },
    // route for page not found
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue')
    },
    {
      path: '/contacts/:id',
      name: 'contact.edit',
      component: () => import('@/views/ContactEdit.vue'),
      props: true // Truyền các biến trong $route.params vào làm props
    },
    {
      path: '/contacts/create',
      name: 'contact.create',
      component: () => import('@/views/CreateContact.vue')
    }
  ]
})

export default router
