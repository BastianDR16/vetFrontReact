
import indexCliente from './components/indexCliente.vue';
import editCliente from './components/editCliente.vue';
import indexMascota from './components/indexMascota.vue';
import editMascota from './components/editMascota.vue';
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
  },
  mascota: {
    path: '/mascota',
    name: 'indexMascota',
    component: indexMascota
  },
  editMascota: {
    path: '/editarmascota/:id',
    name: 'editMascota',
    component: editMascota
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
    {
      path: ROUTES.mascota.path,
      name: ROUTES.mascota.name,
      component: ROUTES.mascota.component
    },
    {
      path: ROUTES.editMascota.path,
      name: ROUTES.editMascota.name,
      component: ROUTES.editMascota.component
    },
  ]
});

export default router;

