<script setup>
import { useProjectStore } from '../store/projectStore.js';
import { RouterLink } from 'vue-router';

import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';

const projectStore = useProjectStore();

</script>

<template>
    <Header />
    <Navigation />
    <h1>HOME</h1>
    <h3>Active Manager: {{ projectStore.activeManager }}</h3>
    <RouterView/>
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