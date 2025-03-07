import { createMemoryHistory, createRouter } from "vue-router";


import LoginView from "@/views/Login.vue";
import GuestView from '@/views/Guest.vue';
import HomeView from '@/views/Home.vue';
// ---> HERE
import ProjectView from '@/views/Projects.vue';
import MoldsView from "../views/Molds.vue";
import MachinesView from "../views/Machines.vue";
import SettingsView from "../views/Settings.vue";

const routes = [
    { path: '/', component: LoginView },
    { path: '/guest', component: GuestView },
    { path: '/home', component: HomeView },
    // --> HERE 
    { path: '/projects/:pn', component: ProjectView },
    { path: '/molds', component: MoldsView },
    { path: '/machines', component: MachinesView },
    { path: '/settings', component: SettingsView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router