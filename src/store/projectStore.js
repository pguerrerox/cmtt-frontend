import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', () => {
    // State
    const projectManagers = ref(null)
    const activeManager = ref(null)
    // const allProjects = ref(null)

    // Getters
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
    // const roProjects = computed(() => { return allProjects.value })

    // Actions
    function setProjectManagers(_projectManagers) {
        return projectManagers.value = _projectManagers
    }
    function setActiveManager(_activeManager) {
        return activeManager.value = _activeManager
    }
    // function setAllProjects(_projects) {
    //     return allProjects.value = _projects
    // }

    return {
        //State
        projectManagers,
        activeManager,
        // allProjects,
        
        //Getters
        roProjectManagers,
        // roProjects,

        //Actions
        setProjectManagers,
        setActiveManager
        // setAllProjects,
    }
})