<template>
  <div class="menu">
    <a v-for="(A, i) in menu" :key="i">{{ A }}</a>
  </div>

  <div v-for="(a, i) in products" :key="i">
    <img src="" />
    <h4>{{ a }}</h4>
    <p>{{ products[i] }}</p>
    <button @click="() => increase(i)">허위매물신고</button>
    <span>신고수 : {{ ban[i] }}</span>
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
export default {
  name: "App",
  data() {
    return {
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
