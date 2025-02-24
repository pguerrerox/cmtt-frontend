<script setup>
import { useSettingStore } from '../store/settingStore.js';

const store = useSettingStore();

const props = defineProps({
    AllManagers: {
        type: Array,
        default: () => []
    }
})

// Handle checkbox changes
function changeHandler(manager) {
    if (!store.activeCommitmentManagers.includes(manager.name)) {
        store.addActiveCommitmentManager(manager.name)
        store.saveToDB()
    } else {
        store.removeActiveCommitmentManager(manager.name)
    }
}
</script>

<template>
    <input type="checkbox" id="toggle0" class="toggle-checkbox">
    <label class="collapsible-toggle" for="toggle0">
        <p class="title" title="click to expand">Active Commitment Managers</p>
        <!-- <p class="subtitle">Click to expand.</p> -->
    </label>
    <div class="content">
        <div class="items" v-for="(manager, index) in AllManagers" :key="index">
            <input class="checkbox" type="checkbox" :id="manager.name" :value="manager.name"
            :checked="store.activeCommitmentManagers.includes(manager.name)" @change="changeHandler(manager)" />
            <label :for="manager.name">{{ manager.name }}</label>
        </div>
    </div>
</template>

<style scoped>
.title {
    font-size: 20px
}

.subtitle {
    font-size: 12px !important
}

.toggle-checkbox {
    display: none;
}

.collapsible-toggle {
    background-color: #0fc781;
    color: #222;
    cursor: pointer;
    display: block;
    padding: 10px;
    width: 100%;
    border: none;
    text-align: center;
    outline: none;
    font-weight: bold;
    font-size: 17px;
}

.active,
.collapsible-toggle:hover {
    background-color: #096d47;
    color: #ddd
}

.content {
    display: none;
    padding: 5px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
}

.toggle-checkbox:checked+.collapsible-toggle+.content {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    justify-content: start;
}

.items {
    padding: 0 30px;
    text-align: left
}

.checkbox {
    margin-right: 10px;
}
</style>