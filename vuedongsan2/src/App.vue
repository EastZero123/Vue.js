<template>
  <Modal
    @toggleModal="ismodal = !ismodal"
    :oneroom="oneroom"
    :ismodal="ismodal"
    :setdata="setdata"
  />
  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>
  <Discount />
  <!-- <div v-else> -->

  <div>
    <Card
      @toggleModal="
        ismodal = !ismodal;
        setdata = $event;
      "
      :room="oneroom[i]"
      v-for="(room, i) in oneroom"
      :key="room"
    />
  </div>

  <!-- </div> -->

  <!-- <div>
    <h4 :style="style1">{{ products[0] }}</h4>
    <p>{{ price1 }} 만원</p>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>70 만원</p>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>70 만원</p>
  </div> -->
</template>

<script>
import oneroom from "./assets/oneroom";
import DiscountA from "./Discount.vue";
import ModalA from "./Modal.vue";
import CardA from "./Card.vue";

export default {
  name: "App",
  data() {
    return {
      object: { name: "Choie", age: 20 },
      setdata: 0,
      oneroom: oneroom,
      ismodal: false,
      price1: 60,
      price2: 70,
      style1: "color : blue",
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      menus: ["Home", "Shop", "About"],
      report: [0, 0, 0],
    };
  },
  components: {
    Discount: DiscountA,
    Modal: ModalA,
    Card: CardA,
  },
  methods: {
    increase(i) {
      this.report[i]++;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
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
