import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from '@/views/Home.vue';
// ---> HERE
import WelcomeView from '@/views/Welcome.vue';
import ProjectView from '@/views/Projects.vue';
import MoldsView from "../views/Molds.vue";
import MachinesView from "../views/Machines.vue";
import SettingsView from "../views/Settings.vue";

const routes = [
    { path: '/', component: HomeView },
    // { path: '/welcome', component: WelcomeView},
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