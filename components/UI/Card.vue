<template>
  <!-- Add border if withBorder is true -->
  <div
    class="default-card col-lg-10 mx-lg-auto"
    :class="withBorder ? 'card_with_border' : ''"
  >
    <!-- Slot for dynamic content -->
    <slot />
  </div>
</template>
<script setup>
defineProps({
  withBorder: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped>
.default-card {
  border-radius: 1.25rem;
  padding: 2rem;
  @media (max-width: 768px) {
    padding: $space-28px;
  }
}

.card_with_border {
  border: 2px solid $gray-light;
}
</style>
