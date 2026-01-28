<!-- components/ManagerForm.vue -->
<script setup>
import { ref } from 'vue';
import { useAdminStore } from '@/stores/adminStore';

const adminStore = useAdminStore();

const form = ref({
    name: '',
    fullname: '',
    email: '',
    role: '',
    isActive: 0,
    isAdmin: 0
});

let formErr = ref('')
const submitForm = async () => {
    formErr.value = ''
    try {
        await adminStore.createManager(form.value);
        console.log(adminStore.message);
        // Reset form
        form.value = { name: '', fullname: '', email: '', role: '', isActive: 0, isAdmin: 0 };
    } catch (err) {
        formErr.value = 'Error: Try Again'
        console.error(`Error: ${err.message}`);
    }
};
</script>

<template>
    <h1>Hello Admin</h1>
    <div class="form-container">
        <h3>Create New Manager</h3>
        <form @submit.prevent="submitForm">
            <div class="input-group">
                <input v-model="form.name" type="text" placeholder="Husky Username" required />
                <input v-model="form.fullname" type="text" placeholder="Full Name" required />
                <input v-model="form.email" type="email" placeholder="example@husky.ca" required />
            </div>

            <div class="settings">
                <select v-model="form.role">
                   <option value="" disabled>Select a role</option>
                   <option value="manager">Manager</option>
                   <option value="team-leader">Team Leader</option>
               </select>
                <label>
                    <input type="checkbox" v-model="form.isActive" :true-value="1" :false-value="0" />
                    Is this Project Manager Active?
                </label>
                <label>
                    <input type="checkbox" v-model="form.isAdmin" :true-value="1" :false-value="0" />
                    Is this Project Manager an Admin?
                </label>
            </div>

            <p v-show="formErr" class="error-msg">{{ formErr }}</p>

            <button :disabled="adminStore.loading">
                {{ adminStore.loading ? 'Processing...' : 'Save Manager' }}
            </button>
        </form>



    </div>
</template>

<style scoped>
/* Container and Heading */
.form-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  font-family: 'Inter', sans-serif;
}

h3 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #2d3748;
  font-weight: 600;
  text-align: center;
}

/* Input Fields & Selects */
.input-group, .settings {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

input[type="text"],
input[type="email"],
select {
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  outline: none;
}

input:focus, select:focus {
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
}

/* Checkboxes and Labels */
label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #4a5568;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.25rem 0;
}

input[type="checkbox"] {
  width: 1.1rem;
  height: 1.1rem;
  accent-color: #4299e1; /* Modern blue accent */
}

/* Submit Button */
button {
  width: 100%;
  padding: 0.85rem;
  background-color: #4299e1;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

button:hover:not(:disabled) {
  background-color: #3182ce;
}

button:disabled {
  background-color: #cbd5e0;
  cursor: not-allowed;
}

/* Layout Helper */
h1 {
  text-align: center;
  color: #1a202c;
  margin-top: 2rem;
}

.error-msg {
    width: 100%;
    color: #dc3545; /* Red color for errors */
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    padding: 10px;
    margin: 5px 0;
    text-align: center;
    font-size: 0.9rem;
    border-radius: 4px;
}
</style>

