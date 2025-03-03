<script setup>
import { useProjectStore } from '../store/projectStore.js';
import { RouterLink } from 'vue-router';

import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';

const projectStore = useProjectStore();

</script>

<template>
    <!-- <Header /> -->
    <!-- <Navigation /> -->
    <h3>Welcome</h3>
    <h1>Projects Tracking for Commitment Managers</h1>
    
    <h3>Login</h3>
    <div>
        <p>These are the Commitment Managers that are marked as active, to update them <strong>go to settings tab.</strong></p>
        <h3>{{ projectStore.activeManager }}</h3>
    </div>
    <br>
    <div v-for="(project, index) in projectStore.roAllProjects" :key="index" class="project-card">
        <RouterLink :to="`/projects/${project.project_number}`">
            <p>Project Number: {{ project.project_number }}</p>
            <p>Project Description: {{ project.project_description }}</p>
            <p>Customer: {{ project.customer_name }}</p>
            <p>Exwork Date: {{ project.ship_date_planned }}</p>
        </RouterLink>
    </div>
</template>

<style scoped>
.project-card {
    background-color: aliceblue;
    margin: 10px 0px;
}
</style>