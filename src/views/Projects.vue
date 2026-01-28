<script setup>
import { ref, computed, onMounted } from 'vue';
import { useAppStateStore } from '@/stores/stateStore';
import router from '@/router/router';
import { useRoute } from 'vue-router'

const appState = useAppStateStore()
const params = useRoute().params;

// project planned information
// project actual information


const clickHandler = () => {
    router.go(-1)
}

</script>

<template>
    <div class="block">
        <button type="button" @click="clickHandler">go back</button>
        <h1>Looking at Project No. {{ params.pn }}</h1>
        <!-- DESCRIPTION -->
        <!-- CUSTOMER -->
        <!-- EXW. DATE -->
        <!-- PROJECT MANAGER -->
        <!-- KICKOFF - MIH - INSPECTION - PIH - MFG. - RIH - ASSY - TEST   -->
    </div>
</template>

<style scoped>
p {
    background: aliceblue;
    word-break: break-all;
    white-space: normal;
}
</style>
