import { defineStore } from 'pinia';

export const useProjectStore = defineStore('projectStore',{
    state: () => {
        return {
            allProjects: []
        }
    },
    getters: {
        readOnly(state){
            return state.allProjects
        }
    },
    actions: {
        setAllProjects(projects){
            this.allProjects = projects
        }
    }
})