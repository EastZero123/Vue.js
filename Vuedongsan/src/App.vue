<template>
  <div class="black-bg" v-if="openmodal == true">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="openmodal = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(A, i) in menu" :key="i">{{ A }}</a>
  </div>

  <div v-for="(a, i) in rooms" :key="i">
    <img :src="rooms[i].image" class="room-img" />
    <h4 @click="openmodal = true">{{ rooms[i].content }}</h4>
    <p>{{ rooms[i].price }}</p>
  </div>
  <!-- <div>
    <h4>{{ products[0] }}</h4>
    <p>{{ price[0] }}</p>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>{{ price[1] }}</p>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>{{ price[2] }}</p>
  </div> -->
</template>

<script>
import data from "./data/post.js";

export default {
  name: "App",
  data() {
    return {
      rooms: data,
      openmodal: false,
      ban: [0, 0, 0],
      menu: ["Home", "Shop", "About"],
      price: ["50만원", "100만원", "200만원"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  methods: {
    increase(i) {
      this.ban[i] += 1;
    },
  },
  components: {},
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
