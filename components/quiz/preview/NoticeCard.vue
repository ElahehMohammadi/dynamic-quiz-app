<template>
  <UICard class="bg-gray-lighter">
    <div class="notice-card">
      <h5 class="lh-lg fw-bolder h5">نکات قبل از شرکت در آزمون</h5>
      <div class="notices">
        <div class="notice" v-for="(notice, index) in notices" :key="index">
          <nuxt-icon
            name="Bullet-Rectangle"
            class="order-1 icon icon-xs"
            filled
          />
          <span class="subtitle1 lh-lg order-2">{{ notice }}</span>
        </div>
      </div>
    </div>
  </UICard>
</template>

<script setup>
const notices = [
  "شما باید به تمامی سوال‌ها پاسخ دهید.",
  "این آزمون محدودیت زمانی ندارد و هرچقدر که نیاز دارید، زمان خواهید داشت.",
  "درصورتی که سوالی را اشتباه پاسخ دهید، راهنمایی در اختیار شما قرار می‌گیرد تا بتوانید مورد درسی را مرور کنید و مجددا پاسخ صحیح را انتخاب نمایید.",
];
</script>
<style lang="scss" scoped>
.notice-card {
  display: flex;
  gap: $space-20px;
  flex-direction: column;

  .notices {
    display: flex;
    flex-direction: column;

    gap: $space-16px;

    .notice {
      display: flex;
      align-items: center;
      gap: $space-16px;
    }
  }
}
</style>
