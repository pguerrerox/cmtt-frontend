import {defineStore} from 'pinia';

export const useAdminStore = defineStore('adminStore', {
    state: () => ({
        loading: false,
        message: ''
    }),
    actions: {
      //createManager - DONE
      //modifyManager
      //deleteManager
    async createManager(managerData) {
      this.loading = true;
      try {
        const response = await fetch('http://localhost:5000/api/admin/createManager', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(managerData),
        });
        const result = await response.json();
        if (!response.message) {
          throw new Error(result.error || 'Server Error');
        } else {
            console.log(result.message)
        }
        return result;
      } catch (err) {
        console.error("Fetch Error:", err.message);
        throw err;
      } finally {
        this.loading = false;
      }
    }
  }
})