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
            message:"funziona",
        };
    },
    methods: {

    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');