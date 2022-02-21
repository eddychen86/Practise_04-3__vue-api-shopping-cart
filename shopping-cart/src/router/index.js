import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue';
import ProductView from '../views/ProductView.vue';
import CheckoutView from '../views/CheckoutView.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
  },
  {
    path: '/products/:productId',
    name: 'product',
    component: ProductView,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
