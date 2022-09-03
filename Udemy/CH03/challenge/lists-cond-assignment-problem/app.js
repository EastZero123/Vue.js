const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      taskList: [],
    };
  },
  methods: {
    addTask() {
      this.taskList.push(this.enteredTask);
    },
  },
});

app.mount("#assignment");
