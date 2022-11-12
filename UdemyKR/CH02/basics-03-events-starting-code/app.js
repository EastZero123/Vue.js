const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    submitForm(e) {
      alert("SUbmit");
    },
    setName(event) {
      this.name = event.target.value;
    },
    add() {
      this.counter++;
    },
    minus() {
      this.counter--;
    },
  },
});

app.mount("#events");
