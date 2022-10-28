<template lang="">
  <div class="black-bg" v-if="ismodal">
    <div class="white-bg">
      <h4>{{ oneroom[setdata].title }}</h4>
      <p>{{ oneroom[setdata].content }}</p>
      <button v-on:click="$emit('toggleModal')">닫기</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalA",
  props: {
    oneroom: Array,
    ismodal: Boolean,
    setdata: Number,
  },
};
</script>
<style lang=""></style>
