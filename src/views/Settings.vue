<script setup>
import { useSettingStore } from '../store/settingStore.js';
import Active_Managers from '../components/Active_Managers.vue'

const settingStore = useSettingStore()

</script>

<template>
  <Active_Managers :AllManagers="settingStore.allManagers" />
</template>

<style scoped>
</style>