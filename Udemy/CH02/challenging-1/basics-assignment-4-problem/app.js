const app = Vue.createApp({
  data() {
    return {
      Inputclass: "",
      Togglevisible: true,
      InputBackgroundColor: "",
    };
  },
  computed: {
    userclass() {
      return {
        user1: this.Inputclass === "user1",
        user2: this.Inputclass === "user2",
        visible: this.Togglevisible,
        hidden: !this.Togglevisible,
      };
    },
  },
  methods: {
    ToggleHandler() {
      this.Togglevisible = !this.Togglevisible;
    },
  },
});

app.mount("#assignment");
