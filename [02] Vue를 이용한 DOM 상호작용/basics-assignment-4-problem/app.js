const app = Vue.createApp({
    data() {
      return {
        inputClass: "",
        toggleParagraph: true,
        inputBackgroundColor: "",
      };
    },
    computed: {
      pasraClasses() {
        console.log(this.toggleParagraph);
        return {
          user1: this.inputClass === "user1",
          user2: this.inputClass === "user2",
          visible: this.toggleParagraph,
          hidden: !this.toggleParagraph,
        };
      },
    },
    methods: {
      toggle() {
        this.toggleParagraph = !this.toggleParagraph;
      },
    },
  });
  
  app.mount("#assignment");