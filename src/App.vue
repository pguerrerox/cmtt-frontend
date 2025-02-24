<script setup>
import { ref, onMounted } from 'vue'
import { useProjectStore } from './store/projectStore.js';
import { useSettingStore } from './store/settingStore.js';
// import { getAllProjects } from '../../backend/database/drivers/projectQueries.js';

import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue';

const projectStore = useProjectStore();
const settingStore = useSettingStore();

onMounted(
  // console.log('dimelo')
  // projectStore.setAllProjects(getAllProjects.all())
)

// onMounted(
//   // async function to fetch all project managers.
//   async () => {
//     console.log('App.vue mounted - requesting All Project Managers...');
//     settingStore.setAllManagers(await window.IPC.requestAllManagers())
//     console.log('Request completed - requesting All Project Managers');
//   }
// )

</script>

<template>
  <div>
    <Header />
    <Navigation />
  </div>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
/* Scoped styles for this component */
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