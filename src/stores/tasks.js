import { defineStore } from "pinia";
import { collection, getDocs, onSnapshot, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../js/firebase";
import { uuid } from "vue-uuid";

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
        async getTasks(){
            //console.log('getTasks est executé');

//             let tasks = [];
//             const querySnapshot = await getDocs(collection(db, "tasks"));
//                 querySnapshot.forEach((doc) => {
//                 let task = {
//                     id: doc.id,
//                     name: doc.data().name,
//                     description: doc.data().description,
//                     completed: doc.data().completed,
//                 }
//                 // console.log(task);
//                 tasks.push(task);
//                 this.tasks = tasks;
//                  });

//----En temps réel:

                onSnapshot(collection( db, 'tasks'), (querySnapshot) => {
                    const tasks = [];
                    querySnapshot.forEach((doc) => {
                                let task = {
                                    id: doc.id,
                                    name: doc.data().name,
                                    description: doc.data().description,
                                    completed: doc.data().completed,
                                }
                                tasks.push(task);

                    });
                        this.tasks = tasks;
                     });
        },

        async addTask(name, description){
            let id = uuid.v4();
            await setDoc(doc(db, "tasks", id), {
            id: id,
            name: name,
            description: description,
            completed: false,
          });
        },


        async deleteTask(id){
            // if(confirm('Confirmez vous la suppression?')
            //     this.tasks = this.tasks.filter(task => task.id != id);
            // }
            if(confirm('Confirmez vous la suppression?')){
                await deleteDoc(doc(db, "tasks", id));
            }
            

        },

        async toggleCompleted(id){
            const taskRef = doc(db, "tasks", id);
            await updateDoc(taskRef, {
                completed: ! this.tasks.find(task => task.id == id).completed,
            });

        }
    }
})