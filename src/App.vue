<script setup>
import { nextTick, onMounted, } from 'vue'
import router from '@/router/router.js'
// import { useProjectStore } from '@/store/projectStore.js'
import { useSettingStore } from '@/store/settingStore.js'

// const projectStore = useProjectStore()
const settingStore = useSettingStore()

onMounted(async () => {
  // projectStore.getAllProjects()
  settingStore.getAllManagers()
  await nextTick()

  if (settingStore.activeManagers.length < 1) {
    // COMPLETE LOGIC (IF EXISTING TOKEN --> FETCH AND LOGED IN AS THAT MANAGER, OTHERWISE LOGED IN AS GUEST) 
    // settingStore.setLogedAs ()
    router.push('/settings')
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
