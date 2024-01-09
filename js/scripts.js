// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da mondare in pagina
createApp({
    data() {
        return {
            todos:[
                {
                    text:"Finire l'esercizio vue-todolist",
                    done: false,
                },
                {
                    text:"Mangiare",
                    done: true,
                }
            ],
            newTask: "",
        };
    },
    methods: {
        deleteTodo(j){
            this.todos.splice(j,1);
        },
        addTask(){
            if(this.newTask.trim().length > 3){
                this.todos.push({text:this.newTask, done: false,})
            }
            this.newTask = "";
        }
    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');