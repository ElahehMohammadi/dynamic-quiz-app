<template>
  <div v-if="loading" class="loading-indicator">
    <div class="loading-spinner">
      <!-- Bootstrap spinner -->
      <div class="spinner-border text-secondary-2" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);

// Set loading to true when a page starts loading
nuxtApp.hook("page:start", () => {
  loading.value = true;
});

// Set loading to false when the page finishes loading
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<style lang="scss" scoped>
.loading-indicator {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9998;

  .loading-spinner {
    width: 100px;
    height: 100px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: $space-20px;
    border-radius: $radius-16px;
  }
}
</style>
