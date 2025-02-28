<script setup>
import { useProjectStore } from '../store/projectStore.js';
import { RouterLink } from 'vue-router';

const projectStore = useProjectStore();

</script>

<template>
    <h1>HOME</h1>
    <h3>Active Manager: {{ projectStore.activeManager }}</h3>
    <!-- <div v-for="(project, index) in projectStore.readOnly" :key="index" class="project-card">
        <RouterLink :to="`/projects/${project.project_number}`">
            <p>Project Number: {{ project.project_number }}</p>
            <p>Project Description: {{ project.project_description }}</p>
            <p>Customer: {{ project.customer_name }}</p>
            <p>PM: {{ project.project_manager }}</p>
            <p>Exwork Date: {{ project.ship_date_planned }}</p>
        </RouterLink>
    </div> -->
</template>

<style scoped>
.project-card {
    background-color: aliceblue;
    margin: 10px 0px;
}
</style>