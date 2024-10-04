<template>
  <div
    class="page-content container-xxl content-container-lg content-container-sm results-section"
    v-if="quizInfo"
  >
    <!-- Display latest quiz result -->
    <quiz-results-latest-result-card
      :latest-quiz-result="quizInfo.examinees[0]"
      :title="quizInfo.title"
      :performance-ratio="performanceRatioArray[0]"
    />
    <!-- Display past quiz results -->
    <quiz-results-past-results-card
      :past-results="quizInfo.examinees.slice(0, 10)"
      :all-performance-ratios="performanceRatioArray"
      :total-question-count="quizInfo.questions_count"
    />
  </div>
</template>

<script setup>
// Fetch quiz info data
const { data: quizInfo } = await getQuizInfo();

// Compute performance ratio for each examinee (percentage of correct answers)
const performanceRatioArray = computed(() =>
  quizInfo.value.examinees.map(
    (result) => (result.correct / quizInfo.value.questions_count) * 100,
  ),
);
</script>

<style lang="scss" scoped>
.results-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
