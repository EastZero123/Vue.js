const app = Vue.createApp({
  data() {
    return {
      name: "최동영",
      age: 24,
      photourl: "./photo.jpg",
    };
  },
  methods: {
    Age5years() {
      const Plusage = this.age + 5;
      return Plusage;
    },
    FavoriteNumber() {
      const favoriteNumber = Math.random();
      return favoriteNumber;
    },
  },
});

app.mount("#assignment");
