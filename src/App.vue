<script setup>
import { ref, onMounted } from 'vue'
import router from '@/router/router.js'
import { useProjectStore } from '@/store/projectStore.js'

const projectStore = useProjectStore();

onMounted(
  () => {
    if (!projectStore.activeManager) {
      router.push('/welcome')
    } else {
      router.push('/')
    }
  })
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
