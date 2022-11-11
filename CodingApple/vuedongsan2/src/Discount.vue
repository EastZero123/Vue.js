<template>
  <div class="discount">
    <h4>지금 결제하면 {{ discountValue }}% 할인</h4>
  </div>
</template>
<script>
export default {
  name: "DiscountA",
  data() {
    return {};
  },
  props: {
    discountValue: Number,
  },
};
</script>
<style></style>
