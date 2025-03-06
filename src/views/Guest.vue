<script setup>
import { onMounted } from 'vue';
import router from '@/router/router';
import { useAppStateStore } from '@/store/stateStore';
import { RouterLink } from 'vue-router';

import Header from '@/components/Header.vue'

const appState = useAppStateStore()

onMounted(async () => {
    appState.getProjects()
})

const loggedAs = appState.roLoggedAs
const projects = appState.roProjects

const clickHandler = () => {
    router.push('/')
}
</script>
<template>
    <Header />
    <h1>Welcome {{ loggedAs.name }}</h1>
    <a @click="clickHandler">Logout</a>

    <div>
        <div v-for="(e, index) in projects" :key="index">
            {{ e.project_number }}
        </div>
    </div>
</template>

<style></style>