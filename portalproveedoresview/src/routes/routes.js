import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'
import Proveedor from 'src/pages/Proveedor.vue'
import Mercancia from 'src/pages/EntradaDeMercancia.vue'
import Login from 'src/pages/Login.vue'
import Register from 'src/pages/Register.vue';
import Datos from 'src/pages/Datos.vue';
import Ingresar from 'src/pages/IngresarFactura.vue'
import DatosMercancia from 'src/pages/DatosMercancia.vue'
import ResumenFactura from 'src/pages/ResumenFactura.vue'
import ComplementoPago from 'src/pages/ComplementoPago.vue'
import Ayuda from 'src/pages/Ayuda.vue'
//
import { createWebHistory, createRouter} from 'vue-router'
//
const routes = [
  {
    path: '/',
    component: DashboardLayout,
    //redirect: '/admin/overview'
    redirect: '/login',
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'proveedor',
        name: 'Proveedor',
        component: Proveedor
      }
    ]
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'register',
        name: 'Register',
        component: Register
      },
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'mercancia',
        name: 'Mercancia',
        component: Mercancia
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'mis-datos',
        name: 'Datos',
        component: Datos
      },
      {
        path: 'ingresar-factura',
        name: 'Factura',
        component: Ingresar
      },
      {
        path: 'datos-mercancia',
        name: 'Datos Mercancia',
        component: DatosMercancia
      },
      {
        path: 'resumen-factura',
        name: 'Resumen Factura',
        component: ResumenFactura
      },
      {
        path: 'complemento',
        name: 'Complemento de Pago',
        component: ComplementoPago
      },
      {
        path: 'ayuda',
        name: 'Ayuda',
        component: Ayuda
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  { path: '*', component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
