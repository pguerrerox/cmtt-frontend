<script setup>
import { useRoute } from 'vue-router'
import { useProjectStore } from '../store/projectStore.js';

const params = useRoute().params;
const projectStore = useProjectStore()

const projectInfo = (projectStore.readOnly).find(i => {
    return Number(i.project_number) === Number(params.pn)
})
</script>

<template>
    <div class="block">
        <h1>KLK</h1>
        <h2> {{ projectInfo.project_number }} </h2>
        <p>{{ JSON.stringify(projectInfo) }}</p>
    </div>
</template>

<style scoped>
p {
    background: aliceblue;
    word-break: break-all;
    white-space: normal;
}
</style>
