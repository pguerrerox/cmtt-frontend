import { defineStore } from 'pinia';

const electronIPC = window.electron;

export const useSettingStore = defineStore('settingStore', {    
    state: () => {
        return {
            allManagers: [],
            activeCommitmentManagers: [],
        }
    },
    getters: {},
    actions: {
        setAllManagers(managers) {
            this.allManagers = managers
        },
        addActiveCommitmentManager(manager) {
            if(!this.activeCommitmentManagers.includes(manager)){
                this.activeCommitmentManagers.push(manager)
            }
        },
        removeActiveCommitmentManager(manager){
            const index = this.activeCommitmentManagers.indexOf(manager);
            if (index !== -1) {
                this.activeCommitmentManagers.splice(index, 1);
            }
        },
        async saveToDB(){
            const stateString = JSON.stringify(this.$state);
            await electronIPC.saveStoreState('save-store-state', 'settings', stateString);
        },
        loadFromDB(){
            electronIPC.loadStoreState('settings')
        }


    }
})