const app = Vue.createApp({
    data(){
        return{
            enteredValue : '',
            tasks : [],
            taskListIsVisible:true,
        };
    },
    computed: {
        buttonCaptin(){
            return this.taskListIsVisible ? 'Hide' : 'show'
        }
    },
    methods: {
        addTask (){
            this.tasks.push(this.enteredValue);
        },
        removeTask(idx){
            this.tasks.splice(idx,1)
        },
        toggleTaskList() {
            this.taskListIsVisible = !this.taskListIsVisible
        }
    },
    
});

app.mount('#assignment')