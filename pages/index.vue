<template>
  <section class="quiz-preview-section">
    <div
      class="quiz-preview container-xxl content-container-lg content-container-sm page-content"
    >
      <quiz-preview-overview-card :quiz-data="quizData" />
      <quiz-preview-notice-card />
    </div>
  </section>
</template>

<script setup>
defineProps({
  quizData: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.quiz-preview {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
