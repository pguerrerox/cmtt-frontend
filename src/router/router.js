import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../views/Home.vue";
import ProjectView from "../views/Projects.vue";
// ---> HERE
import MoldsView from "../views/Molds.vue";
import MachinesView from "../views/Machines.vue";
import SettingsView from "../views/Settings.vue";

const routes = [
    { path: '/', component: HomeView },
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