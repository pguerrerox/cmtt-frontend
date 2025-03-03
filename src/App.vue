<script setup>
import { onMounted } from 'vue'
import { useProjectStore } from '@/store/projectStore.js'

const projectStore = useProjectStore();

onMounted(
  async () => {
    try {
      const response = await fetch('http://localhost:5000/api/projectmanagers')
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
      return projectStore.setProjectManagers(await response.json())
    }
    catch (err) {
      console.error(err)
    }
  }
)

onMounted(
  async () => {
    try {
      const response = await fetch('http://localhost:5000/api/projects')
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
      return projectStore.setAllProjects(await response.json())
    }
    catch (err) {
      console.error(err)
    }
  }
)


</script>

<template>
  <RouterView />
</template>

<style scoped>
.project-block {
  padding: 10px;
  background-color: #f0f0f0;
  margin: 5px;
  border-radius: 5px;
  font-size: 1.2rem;
}

.project-block:hover {
  background-color: #e0e0e0;
  cursor: pointer;
}
</style>
