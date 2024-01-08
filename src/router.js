
import indexCliente from './components/indexCliente.vue';
import editCliente from './components/editCliente.vue';
import { createRouter, createWebHistory } from "vue-router";

const ROUTES = {
  MyNewVueRoute: {
    path: '/',
    name: 'indexCliente',
    component: indexCliente
  },
  NewRoutePage: {
    path: '/editar/:id',
    name: 'editCliente',
    component: editCliente
  }
}
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // feel free to add more routes here (yeah, and your root '/' route too :) )
    {
      path: ROUTES.MyNewVueRoute.path,
      name: ROUTES.MyNewVueRoute.name,
      component: ROUTES.MyNewVueRoute.component

    },
    {
      path: ROUTES.NewRoutePage.path,
      name: ROUTES.NewRoutePage.name,
      component: ROUTES.NewRoutePage.component
    },
  ]
});

export default router;

