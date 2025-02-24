<script setup>
const links = [
    { link: '/', label: 'Home' },
    { link: '/molds', label: 'Molds' },
    { link: '/machines', label: 'Machines' },
    { link: '/settings', label: 'Settings' },
]
</script>

<template>
    <nav class="navigation">
        <RouterLink v-for="(e, index) in links" :key="index" :to="e.link" class="links">{{ e.label }}</RouterLink>
    </nav>
</template>

<style scoped>
.navigation{
    border: solid 2px black;
    margin: 10px 0;
}
.links{
    padding: 0px 10px;
}
</style>