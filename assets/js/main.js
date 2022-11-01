
const { createApp } = Vue

createApp({
    data() {
        return {
            error: false,
            todoList: [
                {
                    text: 'Andare a cena con amici',
                    done: false
                },
                {
                    text: 'Pulire casa',
                    done: false
                },
                {
                    text: 'Pulire il giardino',
                    done: false
                },
                {
                    text: 'Pulire la macchina',
                    done: false
                },
            ]
        }
    },
    methods: {
        done(i) {
            this.todoList[i].done = !this.todoList[i].done
        },
        test(i) {
            console.log(this.todoList[i].text);
            this.todoList.splice(i, 1)
        },
        addNew() {
            if (this.newTask.length < 5) {
                this.error = true
            } else {
                const obj = { text: this.newTask, done: false }
                this.todoList.unshift(obj)
                this.newTask = ""
            }

        }
    }
}).mount('#app')