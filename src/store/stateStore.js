import { defineStore } from 'pinia';

export const useAppStateStore = defineStore('appState', {
    state: () => {
        return {
            managers: [],
            loggedAs: {},
            projects: [],
            projectPlannedData: {},
            projectActualData: []
        }
    },
    getters: {
        roManagers: (state) => state.managers,
        
        roProjects: (state) => {
            const data = [...state.projects]
            return data
        },

        roLoggedAs: (state) => {
            const data = { ...state.loggedAs }
            return data
        },

        roProjectPlannedData: (state) => {
            const data = { ...state.projectPlannedData}
            return data
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

        setLoggedAs(manager) {
            this.loggedAs = manager
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
        /**
        * async function that fetch the projects for a given manager
        * @param {string} manager - name of manager to lookup 
        * @returns Array of Objects with project information.
        */
        async getProjectsByManager(manager) {
            try {
                const response = await fetch(`http://localhost:5000/api/projects/${manager}`)
                return this.projects = await response.json()
            }
            catch (err) {
                console.error(err);
            }
        },

        setProjectPlanned(_project_number) {
            const data = this.projects.filter((e) => {
                return e.project_number === _project_number
            })
            this.projectPlannedData = data
        }
    }
})