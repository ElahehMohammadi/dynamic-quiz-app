<template>
  <div
    v-if="
      [404, 500].includes(innerPageError?.value.statusCode) ||
      [404, 500].includes(outerPageError?.statusCode)
    "
    class="d-flex flex-column align-items-center justify-content-center gap-3 container-xxl content-container-lg content-container-sm page-content"
  >
    <!-- Image for 404 error -->
    <img
      src="assets/images/404-Error.906db92.svg"
      alt="404 error icon"
      v-if="
        [404].includes(innerPageError?.value.statusCode) ||
        [404].includes(outerPageError?.statusCode)
      "
    />

    <!-- Image for 500 error -->
    <img
      src="assets/images/500-Error.7432196.svg"
      alt="500 error icon"
      v-if="
        [500].includes(innerPageError?.value.statusCode) ||
        [500].includes(outerPageError?.statusCode)
      "
    />

    <!-- Dynamic error message based on status code -->
    <h3 class="h3 mt-3">
      {{
        outerPageError?.statusCode === 500
          ? "متاسفیم! خطایی در سرور داخلی رخ داده است."
          : "متاسفیم! گویا صفحه‌ای که دنبالش هستید دیگر وجود ندارد."
      }}
    </h3>

    <!-- Additional instruction based on error type -->
    <span class="title3">
      {{
        outerPageError?.statusCode === 500
          ? "لطفا دوباره صفحه را بارگزاری کنید و اگر مشکل حل نشد به ما اطلاع دهید."
          : "اگر مشکلی وجود دارد می‌توانید به سایت گزارش دهید."
      }}
    </span>

    <!-- Button to navigate back to the main page -->
    <button class="btn btn-accent mt-3" @click="handleError">
      <span class="title3">بازگشت به صفحه اصلى</span>
    </button>
  </div>
</template>

<script setup>
const props = defineProps(["innerPageError", "outerPageError"]);
const emit = defineEmits(["clearError"]);

// Function to handle error and redirect to the home page
const handleError = () => {
  // Notify the parent component to clear the errors
  emit("clearError");
  clearError({ redirect: "/" });
};
</script>
