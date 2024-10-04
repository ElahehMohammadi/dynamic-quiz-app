<template>
  <div class="d-flex flex-column gap-4 align-items-center offline-page">
    <span class="title2 mt-3 text-center">
      لطفا اتصال اینترنت خود را بررسی کنید! این موارد را امتحان کنید:
    </span>

    <div class="d-flex gap-4 flex-md-row flex-column">
      <!-- Display the troubleshooting options -->
      <div class="title3" v-for="option in options" :key="option">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup>
// Troubleshooting options for the user to follow
const options = [
  "بارگذاری مجدد صفحه",
  "بررسی کابل‌های شبکه و مودم",
  "اتصال مجدد به وای‌فای",
];
</script>
<style lang="scss">
.offline-page {
  padding: $space-20px;
  margin-top: 20vh;
  margin-bottom: 20vh;
}
</style>
