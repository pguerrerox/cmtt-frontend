import { defineStore } from 'pinia'

export const useSettingStore = defineStore('settings', {
    state: () => {
        return {
            allManagers: [],
            activeManagers: [],
            logedAs: 'Guest'
        }
    },
    getters: {
        roAllManagers: (state) => state.allManagers,
        // const roActiveManagers = 0
    },
    actions: {
        async getAllManagers() {
            try {
                const response = await fetch('http://localhost:5000/api/managers')
                const data = await response.json()
                return this.allManagers = data
            }
            catch (err) {
                console.error(err);
            }
        },
        toogleActiveManager(managerName) {
            const target = this.allManagers.find((elem) => elem.project_manager === managerName)
            if (target) {
                target.isActive = target.isActive ? 0 : 1
            }
        },
        setActiveManager() {
            return this.activeManagers = this.allManagers.filter(elem => { return elem.isActive })
        },
        setLogedAs(managerName) {
            return this.logedAs = managerName
        },
        async saveToDatabase(user, store_name, store_state) {
            const data = {
                user,
                store_name,
                store_state
            }
            try {
                const request = await fetch('http://localhost:5000/api/save-settings', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                })
                return request.json()
            }
            catch (err) {
                console.error(err);
            }
        }
    }
})