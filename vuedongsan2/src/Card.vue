<template lang="">
  <div>
    <img :src="room.image" class="room-img" />
    <h4 @click="$emit('toggleModal', room.id)">
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
    room: Array,
    ismodal: Boolean,
    setdata: Number,
  },
};
</script>
<style lang=""></style>
