const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  watch: {
    value(value) {
      if (value !== 0) {
        setTimeout(function () {
          this.value = 0;
        }, 5000);
      }
    },
  },
  computed: {
    checkvalue() {
      if (this.value < 37) {
        alert("Not there yet");
        return this.value;
      } else if (this.value > 37) {
        alert("Too much!");
        return this.value;
      } else {
        return this.value;
      }
    },
  },
  methods: {
    Add5() {
      return (this.value = this.value + 5);
    },
    Add1() {
      return (this.value = this.value + 1);
    },
  },
});

app.mount("#assignment");
