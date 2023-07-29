
const app = Vue.createApp({
    data() {
        return {
            name : 'Hankyul',
            age : 34,
            imgUrl : 'https://item.kakaocdn.net/do/d527e50eef755e7cade82bc8669b637a9f5287469802eca457586a25a096fd31'
        };
    },
    methods: {
        calculateAge(){
            return this.age + 5;
        },
        randomNumber(){
            return Math.random();
        }
    },
});

app.mount('#assignment')