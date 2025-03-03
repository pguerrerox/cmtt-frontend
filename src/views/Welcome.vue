<script setup>
import { onMounted } from 'vue';
import { useProjectStore } from '@/store/projectStore';
import Login from '@/components/Login.vue';

const projectStore = useProjectStore()

onMounted(
    
)

</script>
<template>
    <h1>Welcome</h1>
    <Login />
</template>

<style></style>