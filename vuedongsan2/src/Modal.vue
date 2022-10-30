<template lang="">
  <div class="black-bg" v-if="ismodal">
    <div class="white-bg">
      <h4>{{ oneroom[setdata].title }}</h4>
      <p>{{ oneroom[setdata].content }}</p>
      <input v-model.number="month" />
      <input type="range" min="1" max="12" />
      <p>{{ month }}개월 선택함 : {{ oneroom[setdata].price * month }}</p>
      <button v-on:click="$emit('toggleModal')">닫기</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalA",
  data() {
    return {
      month: 1,
    };
  },

  updated() {
    if (this.month == 2) {
      alert("2입력함");
    }
  },
  watch: {
    month(a) {
      if (a >= 13) {
        alert("13이상 입력하셨습니다");
      }
    },
  },
  props: {
    oneroom: Array,
    ismodal: Boolean,
    setdata: Number,
  },
};
</script>
<style lang=""></style>
