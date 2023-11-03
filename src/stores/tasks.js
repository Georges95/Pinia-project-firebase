import { defineStore } from "pinia";

export const useTasksStore = defineStore('tasks',{

    state() {
        return {
            tasks: [],
        }
    },
    getters: {
        completedTasks(state){
            return state.tasks.filter(task => task.completed).length;
        },
        pendingTasks(state){
            return this.tasks.length - this.completedTasks;
            // return state.tasks.filter(task => task.completed == false).lenght;
        },
        totalTasks(state){
            return state.tasks.length;
        }
    },
    actions: {
        deleteTask(id){
            if(confirm('Confirmez vous la suppression?')){
                this.tasks = this.tasks.filter(task => task.id != id);
            }
        }
    }
})