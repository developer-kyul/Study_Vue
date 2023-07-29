

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName:'',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(){
      alert('submitted!')
    },
    setName(event, lastName){
      //이벤트 객체를 전달
      this.name = event.target.value + '' + lastName;
    },
    add(num){
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    },
  }
});

app.mount('#events');
