<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Header -->
    <layout-the-header />

    <!-- Main content from slot -->
    <div class="flex-grow-1">
      <slot />
    </div>

    <!-- Footer -->
    <layout-the-footer />
  </div>
</template>
<script setup></script>
