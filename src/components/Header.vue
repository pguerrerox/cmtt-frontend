<script setup>
import router from '@/router/router';
const logoutHandler = () => {
    router.push('/')
}
</script>

<template>
    <header>
        <div>
            <h1>Commitment Manager's Project Tracking Tool</h1>
        </div>
        <p>version: alpha 0.1</p>
        <a> LINK TO CHANGELOG - placeholder</a>
        <button type="button" @click="logoutHandler">Logout</button>
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