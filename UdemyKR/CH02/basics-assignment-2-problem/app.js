const app = Vue.createApp({
  data() {
    return {
      nowvalue: "OUTPUT",
      entervalue: "OUTPUT",
    };
  },
  methods: {
    openalert() {
      alert("Button clicked");
    },
    isChange(e) {
      this.nowvalue = e.target.value;
    },
    isEntered(e) {
      this.entervalue = this.nowvalue;
    },
  },
});

app.mount("#assignment");
