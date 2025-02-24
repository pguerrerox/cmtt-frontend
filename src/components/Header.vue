<script setup>
import { useProjectStore } from '../store/projectStore.js';

const projectStore = useProjectStore();

// const updateProjects = async () => {
//     console.log('Updating Projects: fetching projects from DB...');
//     projectStore.setAllProjects(await window.IPC.requestForInitialData())
// }
</script>


<template>
    <header>
        <h1>commitment manager tracking system</h1>
        <p>Beta v0.01</p>
        <a> LINK TO CHANGELOG - placeholder</a>

        <!-- <button type="button" @click="updateProjects()">refresh projects</button> -->
    </header>
</template>


<style scoped>
header {
    border: solid 2px red;
}

button {
    margin: 10px;
    padding: 5px;
    border-radius: 25%;
    border: 2px solid black;
    background-color: aqua;
}
</style>