var app = new VTTCue({
  el: "#app",
  data: {
    message: "Hello Vue.js",
    newmessage: "This is New message",
    uid: "10",
    flag: true,
  },
  methods: {
    chickBtn() {
      console.log("hi");
    },
  },
});
