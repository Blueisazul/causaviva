import { createRouter, createWebHistory } from 'vue-router'
import PageIndex from '../pages/PageIndex.vue'
import Portafolio from '../pages/Portafolio.vue'
import Login from '../pages/auth/Login.vue'
import SelectRol from '../pages/auth/Register/SelectRol.vue'
import RegisterOrganization from '../pages/auth/Register/RegisterOrganization.vue'
import RegisterVolunteer from '../pages/auth/Register/RegisterVolunteer.vue'
import EnrolledMaintance from '../components/Organization/EnrolledMaintance.vue'
import DashboardMaintance from '../components/Organization/DashboardMaintance.vue'
import ProposalsNew from '../components/Organization/Proposals/ProposalsNew.vue'
import ProposalsMaintance from '../components/Organization/Proposals/ProposalsMaintance.vue'
//import Register from '../pages/auth/Register.vue' - Porque register.vue esta dentro de Register
import CatalogeDetalle from '../components/CatalogeDetalle.vue'

const routes = [
  { path: '/', component: PageIndex },
  { path: '/portafolio', component: Portafolio },
  { path: '/portafolio/detalle', component: CatalogeDetalle },
  { path: '/login', component: Login },
  { path: '/register', component: SelectRol },
  { path: '/registro-organizacion', component: RegisterOrganization },
  { path: '/registro-voluntario', component: RegisterVolunteer },
  { path: '/portal/Organizacion/Propuestas', component: ProposalsMaintance },
  { path: '/portal/Organizacion/Propuestas/Nuevo', component: ProposalsNew },
  { path: '/portal/Organizacion/Propuestas/Editar/:id', component: ProposalsNew },
  { path: '/portal/Organizacion/Inscritos', component: EnrolledMaintance },
  { path: '/portal/Organizacion/Dashboard', component: DashboardMaintance }
];

const router = createRouter({
  history: createWebHistory('/causaviva/'), // o solo '/' si tu app está en la raíz
  routes,
})

export default router