<script setup>
import { onMounted } from 'vue';
import { useProjectStore } from '@/store/projectStore';
import Login from '@/components/Login.vue';

const projectStore = useProjectStore()

onMounted(
    async () => {
        try {
            const response = await fetch('http://localhost:5000/api/projects/projectmanagers')
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
            return projectStore.setProjectManagers(await response.json())
        }
        catch (err) {
            console.error(`Error fetching Project Managers: ${err}`)
        }
    }
)

</script>
<template>
    <h1>Welcome</h1>
    <Login />
</template>

<style></style>