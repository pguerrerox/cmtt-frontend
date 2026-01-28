<script setup>
import { computed } from 'vue'
import { useAppStateStore } from '@/stores/stateStore';
import router from '@/router/router.js'

const appState = useAppStateStore()
const managers = computed(() => appState.managers)

/**
 * 
 * @param {Object} manager - the selected manager object.
 * @var {string} manager.name - the name of the manager (UPPERCASE). 
 */
const clickHandler = async (manager) => {
    appState.setLoggedAs(manager)
    if(manager.name === "GUEST"){
        await appState.getProjects()
    } else {
        await appState.getProjectsByManager(manager.name)
    }
    router.push('/home')
}

const asAdminLink = () => {router.push('/admin-panel')}
</script>

<template>
    <div>
        <h1>Projects Monitoring Tool</h1>
    </div>

    <div>
        <button @click="asAdminLink">Admin Panel</button>
        <h3>Login</h3>
        <p>Select your name from the list</p>
        <div class="manager-options">
            <button v-for="(manager, index) in managers" :key="index" type="button" class="manager-item"
                @click="clickHandler(manager)">
                {{ manager.name }}
            </button>
        </div>
    </div>
</template>

<style>
.manager-options {
    display: flex;
    flex-direction: column-reverse;
    align-items: center
}

.manager-item {
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 5px 0px;
    padding: 15px;
    border: 1px solid #ccc;
    background: white;
    cursor: pointer;
    text-align: left;
}

.manager-item:hover {
    background-color: #007bff;
    color: white;
}
</style>