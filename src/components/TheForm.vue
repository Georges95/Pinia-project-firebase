<script setup>
import FormButton from './FormButton.vue';

import { uuid } from 'vue-uuid';

import { useTasksStore } from '../stores/tasks';

import { ref, reactive } from 'vue';

const tasksStore = useTasksStore();

const id = ref('')
const name = ref('')
const description = ref('')
const completed = ref('')

const errors = reactive({
  name: false,
  description: false,
})

const handleSubmit = () => {

  if(name.value.trim() === ''){
    errors.name = 'Veuillez entrer un nom';
  }else{
    errors.name = false;
  }

  if(description.value.trim() === '' || description.value.length < 10){
    errors.description = 'Veuillez entrer une description d\'au moins 10 caractères';
  }
  else{
    errors.description = false;
  }

  if(errors.name || errors.description){
    return false;
  }

  tasksStore.tasks.push({
    // id: tasksStore.tasks.length + 1,
    id: uuid.v4(),
    name: name.value,
    description: description.value,
    completed: false,
  }) 

  name.value = '';
  description.value = '';
}

</script>

<template>
     <form @submit.prevent="tasksStore.addTask(name, description)">
        
        <div class="mb-3">
          <label for="name" class="form-label">Nom</label>
          <div v-if="errors.name" class="text-danger">{{ errors.name }}</div>
          <input
          v-model="name"
           type="text" 
           name="name" 
           class="form-control" 
           id="name" 
           placeholder="Nom du projet">
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <div v-if="errors.description" class="text-danger">{{ errors.description }}</div>
          <textarea 
          v-model="description"
          name="description" 
          class="form-control" 
          id="description" 
          rows="3" 
          placeholder="Description du projet"></textarea>
        </div>

        <FormButton buttonText="Envoyer"/>

      </form>
</template>

<style>

</style>