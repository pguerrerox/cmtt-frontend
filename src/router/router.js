import { createMemoryHistory, createRouter } from "vue-router";


import LoginView from "@/views/Login.vue";
import HomeView from '@/views/Home.vue';
import ProjectView from '@/views/Projects.vue';
// ---> HERE
import MoldsView from "../views/Molds.vue";
import MachinesView from "../views/Machines.vue";
import SettingsView from "../views/Settings.vue";

const routes = [
    { path: '/', component: LoginView },
    { path: '/home', component: HomeView },
    { path: '/project/:pn', component: ProjectView },
    // --> HERE 
    { path: '/molds', component: MoldsView },
    { path: '/machines', component: MachinesView },
    { path: '/settings', component: SettingsView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router