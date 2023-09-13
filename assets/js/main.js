/* 
Rifare l’esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
-text, una stringa che indica il testo del todo
-done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1 
Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus: 1
oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/
const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: '',

            tasks: [
                { text: 'Fare Spesa', done: true },
                { text: 'Vedere Star Wars', done: false }, //non si vede mai abbastanza
                { text: 'Pulire casa', done: true },
            ],

            taskCheck: false

        }
    },

    methods: {
        addTask() {

            //al click controllo se l'input (non) è una stringa
            if (this.newTask != "") {

                const newTodo = {
                    text: this.newTask,
                    done: false
                };
                this.tasks.push(newTodo);

                //svuoto l'input
                this.newTask = "";

                //SETTO LA VARIABILE DI CONTROLLO DELLA LUNGHEZZA DEL TASK SU FALSE PER CANCELLARE UN EVENTUALE MESSAGGIO DI ERRORE IN PAGINA
                this.taskCheck = false;
                console.log(this.tasks);

            } else {
                //se newTask è una stringa vuota, setto su true taskCheck (mostrando il mess di errore)
                this.taskCheck = true;
            }

        },

        removeTask(i) {
            //rimuove alla posizione i 1 elemento
            this.tasks.splice(i, 1);
            console.log(this.tasks);
        },

        toggleDone(i) {
            this.tasks[i].done = !this.tasks[i].done;
        }
    }
}).mount('#app')