const app = Vue.createApp({
  data() {
    return {
      FirstOutput: "OUTPUT",
      secondOutput: "OUTPUT",
    };
  },
  methods: {
    ShowAlert() {
      alert("Something alert");
    },
    SecondOutputHandler(event) {
      this.secondOutput = event.target.value;
    },
    setFirstOutput(event) {
      this.FirstOutput = event.target.value;
    },
  },
});

app.mount("#assignment");
