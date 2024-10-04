<template>
  <div class="error-body-content">
    <nuxt-layout>
      <NuxtErrorBoundary>
        <UIErrorHandler :outer-page-error="error" />
      </NuxtErrorBoundary>
    </nuxt-layout>
  </div>
</template>
<script setup>
// Accept the error object
const props = defineProps(["error"]);
</script>
