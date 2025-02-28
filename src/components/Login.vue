<script setup>
import { ref, onMounted, computed } from 'vue'
import { useProjectStore } from '@/store/projectStore'
import router from '@/router/router.js'

const projectStore = useProjectStore()
const projectManagers = computed(() => projectStore.roProjectManagers)
const selectedManager = ref(null)

function handleSubmit() {
    projectStore.setActiveManager(selectedManager)
    if (selectedManager.value) {
        router.push('/')
    }
}
</script>

<template>
    <h1>Please Login</h1>
    <h4>Select your name from the list below</h4>

    <form @submit.prevent="handleSubmit">
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