<script setup>
import { useTasksStore } from '../stores/tasks';

import { ref } from 'vue';

const tasksStore = useTasksStore();
</script>

<template>
     <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <span data-feather="home" class="align-text-bottom"></span>
              Projets
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="bi bi-list-task text-secondary
              "></i>
              Total <span class="count">{{ tasksStore.totalTasks }}</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="bi bi-hourglass-split text-warning"></i>
              En cours <span class="count">{{ tasksStore.pendingTasks }}</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="bi bi-check text-success"></i>
              Achevés <span class="count">{{ tasksStore.completedTasks }}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<style>

</style>