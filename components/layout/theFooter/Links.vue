<template>
  <div class="col-lg-2 col-sm-4 col-5 links">
    <span class="title3 lh-lg">{{ linksTitle }}</span>
    <div class="links-container">
      <!-- links -->
      <span v-for="item in links" :key="item" class="subtitle1">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  linksTitle: {
    type: String,
    required: true,
  },
  linkName: {
    type: String,
    required: true,
  },
  links: {
    type: Array,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.links {
  display: flex;
  justify-self: center;
  flex-direction: column;
  align-items: flex-start;
  gap: $space-20px;
  @media (max-width: 575.98px) {
    flex-grow: 1;
  }

  .links-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: $space-12px;
    flex-shrink: 1;
  }
}
</style>
