<script setup>
import { onMounted } from 'vue';
import { useAppStateStore } from '@/store/stateStore';
import router from '@/router/router';
import { useRoute } from 'vue-router'

const appState = useAppStateStore()
const params = useRoute().params;

onMounted(()=>{
    appState.setProjectPlanned(params.pn)
})
// project planned information
// project actual information


const clickHandler = ()=> {
    router.go(-1)
}

</script>

<template>
    <div class="block">
        <button type="button" @click="clickHandler">go back</button>
        <h1>Hello from Project No. {{params.pn}}</h1>
    </div>
</template>

<style scoped>
p {
    background: aliceblue;
    word-break: break-all;
    white-space: normal;
}
</style>
