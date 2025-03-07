<script setup>
import { onMounted } from 'vue'
import { useAppStateStore } from '@/store/stateStore.js'

const appState = useAppStateStore()

onMounted(async () => {
  await appState.getManagers()
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
