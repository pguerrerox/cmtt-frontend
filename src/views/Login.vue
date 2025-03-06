<script setup>
import { computed } from 'vue'
import { useAppStateStore } from '@/store/stateStore';
import router from '@/router/router.js'

const appState = useAppStateStore()
const managers = computed(() => appState.roManagers)

const clickHandler = (manager) => {
    console.log(`Logged in as ${manager.name}`);
    appState.setLoggedAs(manager)
    router.push('/guest')
}
</script>

<template>
    <div>
        <h1>Commitment Manager's Project Tracking Tool</h1>
    </div>

    <div>
        <h3>Login</h3>
        <p>Select your name from the list</p>
        <p>Select a manager:</p>
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