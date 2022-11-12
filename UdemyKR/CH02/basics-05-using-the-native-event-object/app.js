const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
    };
  },
  watch: {
    name(value, oldvalue) {
      if (value === "") {
        this.fullname = "";
      }
      this.fullname = oldvalue + " " + "동영";
    },
  },
  computed: {
    // fullname() {
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Schwarzmuller";
    // },
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
