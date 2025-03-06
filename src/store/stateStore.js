import { defineStore } from 'pinia';

export const useAppStateStore = defineStore('appState', {
    state: () => {
        return {
            managers: [],
            loggedAs: {},
            projects: []
        }
    },
    getters: {
        roManagers: (state) => state.managers,
        roProjects: (state) => {
            const data = state.projects
            return [... data]
        },
        roLoggedAs: (state) => {
            const data = state.loggedAs
            return {... data}
        }
    },
    actions: {
        async getManagers() {
            try {
                const response = await fetch('http://localhost:5000/api/getManagers')
                return this.managers = await response.json()
            }
            catch (err) {
                console.error(err);
            }
        },
        async getProjects() {
            try {
                const response = await fetch('http://localhost:5000/api/projects')
                return this.projects = await response.json()
            }
            catch (err) {
                console.error(err);
            }
        },
        setLoggedAs(manager){
            this.loggedAs = manager
        }

    }
})