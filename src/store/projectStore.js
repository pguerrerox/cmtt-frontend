import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', () => {
    // State
    const allProjects = ref(null)

    // Getters
    const roAllProjects = computed(() => {
        return allProjects.value
    })

    // Actions
    async function getAllProjects() {
        try {
            const response = await fetch('http://localhost:5000/api/projects')
            return this.allProjects = await response.json()
        }
        catch (err) {
            console.error(err);
        }
    }
    function setAllProjects(_projects) {
        return allProjects.value = _projects
    }

    return {
        //State
        allProjects,

        //Getters
        roAllProjects,

        //Actions
        getAllProjects,
        setAllProjects,
    }
})