<script setup>
import { ref, onMounted, computed } from 'vue'
import { useProjectStore } from '@/store/projectStore'
import router from '@/router/router.js'

const projectStore = useProjectStore()
const projectManagers = computed(() => projectStore.roProjectManagers)
const selectedManager = ref(null)


async function handleLogin() {
    console.log(selectedManager.value);
    
    try {
        const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({managerName: selectedManager.value})
        })

        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()
        console.log(`${selectedManager} loged in succesfully - ${data}`)
       
        projectStore.setActiveManager(selectedManager)
        if (selectedManager.value) {
            router.push('/')
        }
    }
    catch (err) {
        console.error(err)
    }
}
</script>

<template>
    <h1>Please Login</h1>
    <h4>Select your name from the list below</h4>

    <form @submit.prevent="handleLogin">
        <label for="project_managers">Project Managers: </label>
        <select id="project_managers" name="project_managers" v-model="selectedManager">
            <option v-for="(manager, index) in projectManagers" :key="index" :value="manager">
                {{ manager }}
            </option>
        </select>
        <button type="submit">Submit</button>
    </form>
</template>

<style></style>