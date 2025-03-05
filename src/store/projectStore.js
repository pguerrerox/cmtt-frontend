import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', () => {
    // State
    const allProjects = ref(null)
    const projectManagers = ref(null)
    const activeManager = ref(null)

    // Getters
    const roAllProjects = computed(() => { return allProjects.value })
    const roProjectManagers = computed(() => {
        const arr = []
        if (!projectManagers.value) return null
        else {
            projectManagers.value.forEach(e => {
                arr.push(e.project_manager)
            })
        }
        return arr
    })

    // Actions
    async function getAllProjects(){      
        try {
            const response = await fetch('http://localhost:5000/api/projects')
            return this.allProjects = await response.json()
        }
        catch (err){
            console.error(err);
        }
    }
    function setAllProjects(_projects) {
        return allProjects.value = _projects
    }
    function setProjectManagers(_projectManagers) {
        return projectManagers.value = _projectManagers
    }
    function setActiveManager(_activeManager) {
        return activeManager.value = _activeManager
    }

    return {
        //State
        allProjects,
        projectManagers,
        activeManager,
        
        //Getters
        roAllProjects,
        roProjectManagers,

        //Actions
        getAllProjects,
        setAllProjects,
        setProjectManagers,
        setActiveManager
    }
})