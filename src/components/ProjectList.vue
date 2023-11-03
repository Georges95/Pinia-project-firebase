<script setup>
import { useTasksStore } from '../stores/tasks';

const tasksStore = useTasksStore();
</script>

<template>

   <div class="card"
   v-for="task in tasksStore.tasks"
   :key="task.id">
      <div class="card-body" :class="{done: task.completed}">
        <div class="form-check form-switch">
          <label :for="task.id"></label>
          <input 
          v-model="task.completed"
          :id="task.id"
          class="form-check-input" 
          type="checkbox">
        </div>
        <h4>{{ task.name }}</h4>
        <p>{{ task.description }}</p>

        <span @click="tasksStore.deleteTask(task.id)" class="edit">
          <i class="bi bi-trash text-danger"></i>
          </span>
      </div>
    </div>

</template>

<style scoped>
  .done{
    text-decoration: line-through;
    background: #f7f7f7;
  }
</style>