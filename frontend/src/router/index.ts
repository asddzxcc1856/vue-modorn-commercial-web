import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue"; // Ensure this file exists at the specified path
import ProductDetail from "../views/ProductDetail.vue";
import CartView from "../views/CartView.vue";
import CheckoutView from "../views/CheckoutView.vue";
import UserProfile from "../views/UserProfile.vue";
import SearchResults from '@/components/SearchResults.vue';


const routes = [
  { path: "/", component: HomeView },
  { path: "/shop", component: ShopView },
  { path: "/product/:id", component: ProductDetail },
  { path: "/cart", component: CartView },
  { path: "/checkout", component: CheckoutView },
  { path: "/profile", component: UserProfile },
  { path: '/search', component: SearchResults },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/order/:id",
    name: "OrderDetail",
    component: () => import("../views/OrderDetail.vue"),
  },
  {
    path: "/news/:id",
    name: "NewsDetail",
    component: () => import("../views/NewsDetail.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  { 
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  { 
    path: '/privacy', 
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
