const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname:'',
    };
  },
  watch: {
    counter(value){
      if(value > 50) {
        setTimeout
        this.counter = 0;
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + '' + this.lastName;
    //   }
    // },

    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + '' + 'value';
    //   }
    // },
  },
  // 랜더링이 한 번만 됨
  computed:{
    // fullname(){
    //   console.log('Running again...');
    //   if(this.name === ''){
    //     return '';
    //   }
    //   return this.name + ' ' + 'Selina';
    // }
  },
  methods: {
    outputFullname(){
      console.log('Running again...');
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Selina';
    },
    setName(event) {
      this.name = event.target.value ;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name='';
    }
  }
});

app.mount('#events');
