<template lang="">
  <div v-for="(room, i) in oneroom" :key="i">
    <img :src="room.image" class="room-img" />
    <h4
      :style="style1"
      v-on:click="
        ismodal = true;
        setdata = i;
      "
    >
      {{ room.title }}
    </h4>
    <p>{{ room.price }}</p>
    <!-- <button @click="increase(i)">허위매물신고</button> -->
    <!-- <span>신고수 : {{ report[i] }}</span> -->
  </div>
</template>
<script>
export default {
  name: "CardA",
  props: {
    oneroom: Array,
    ismoda: Boolean,
    setdata: Number,
  },
};
</script>
<style lang=""></style>
