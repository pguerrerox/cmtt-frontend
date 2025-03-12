<script setup>
import { ref, computed } from 'vue';
import router from '@/router/router';
import { useAppStateStore } from '@/store/stateStore';

import Header from '@/components/Header.vue'

const appState = useAppStateStore()
const loggedAs = appState.loggedAs

const searchByProjectNumber = ref('')
const searchByManager = ref('')
const searchByCustomer = ref('')
const searchByDescription = ref('')

const filteredProjects = computed(() => {
    return appState.roProjects.filter((project) => {
        return (
            (!searchByProjectNumber.value || project.project_number.includes(searchByProjectNumber.value)) &&
            (!searchByManager.value || project.project_manager.toLowerCase().includes(searchByManager.value.toLowerCase())) &&
            (!searchByCustomer.value || project.customer_name.toLowerCase().includes(searchByCustomer.value.toLowerCase())) &&
            (!searchByDescription.value || project.project_description.toLowerCase().includes(searchByDescription.value.toLowerCase()))
        )
    })
})

/**
 * 
 * @param {number} project_number - 6 digit number prefixed with zeros. 
 */
const clickHandler = (project_number)=> {
    router.push(`/project/${project_number}`)
}
</script>
<template>
    <Header />
    <h1>Welcome {{ loggedAs.name }}</h1>
    <div class="filter">
        <div>
            <label>Filter By: </label>
            <input id="number" v-model="searchByProjectNumber" placeholder="Project Number..." />
            <input v-show="loggedAs.name === 'GUEST'" id="manager" v-model="searchByManager"
                placeholder="Project Manager Name" />
            <input id="customer" v-model="searchByCustomer" placeholder="Customer Name" />
            <input id="description" v-model="searchByDescription" placeholder="Description" />
        </div>
    </div>

    <div class="project-card" v-for="(e, index) in filteredProjects" :key="index">
        <p>Project Number: {{ e.project_number }}</p>
        <p>Project Description: {{ e.project_description }}</p>
        <p>Project Manager: {{ e.project_manager }}</p>
        <p>Customer: {{ e.customer_name }}</p>
        <p>Exwork Date: {{ e.ship_date_planned }}</p>
        <button @click="clickHandler(e.project_number)" type="button"> See More Information</button>
    </div>
</template>

<style>
.project-card {
    background-color: aliceblue;
    margin: 10px 0px;
}

.project-card a {
    text-decoration: none;
}
</style>