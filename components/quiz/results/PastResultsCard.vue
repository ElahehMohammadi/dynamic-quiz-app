<template>
  <UICard :with-border="true" class="past-results-card">
    <h5 class="h5 lh-sm">تاریخچه نتایج</h5>

    <!-- Average performance section -->
    <div class="past-results-card__average-performance">
      <div
        class="cup-icon"
        :class="
          averagePerformanceRatio === 'عالی'
            ? 'gradient-background'
            : 'bg-gray-light'
        "
      >
        <nuxt-icon
          name="cup"
          class="icon icon-xxl text-secondary-2"
          :filled="averagePerformanceRatio === 'عالی'"
        />
      </div>
      <div class="performance-message">
        <span class="title1 lh-sm"
          >میانگین عملکرد شما {{ averagePerformanceRatio }} است!</span
        >
        <div>
          <span class="title3 lh-sm">{{ pastResults[0].try }} بار</span>
          <span class="lh-sm"> در این آزمون شرکت کرده‌اید.</span>
        </div>
      </div>
    </div>

    <!-- divider -->
    <hr class="past-results-card__divider w-100" />

    <!-- Past results table -->
    <div class="past-results-card__content">
      <div class="tag-row">
        <UIBasicTag
          class="tag"
          tag-text="عملکرد شما"
          tag-text-color="secondary-2"
        />
        <UIBasicTag
          class="tag"
          tag-text="پاسخ درست"
          tag-icon="tick"
          tag-text-color="secondary-2"
        />
        <UIBasicTag
          class="tag"
          tag-text="پاسخ اشتباه"
          tag-icon="x"
          tag-text-color="secondary-2"
        />
        <UIBasicTag class="tag" tag-text="تاریخ" tag-text-color="secondary-2" />
      </div>

      <!-- Results rows -->
      <quiz-results-past-results-card-table-row
        v-for="(pastResult, index) in pastResults"
        :key="index"
        :quiz-result-data="pastResult"
        :performance-message="performanceMessage(index)"
        :total-question-count="totalQuestionCount"
      />
    </div>
  </UICard>
</template>

<script setup>
const props = defineProps({
  pastResults: {
    type: Array,
    required: true,
  },
  allPerformanceRatios: {
    type: Array,
    required: true,
  },
  totalQuestionCount: {
    type: Number,
    required: true,
  },
});

// Compute average performance for all tryings
const averagePerformanceRatio = computed(() => {
  let ratioSum = 0;
  props.allPerformanceRatios.forEach((ratio) => (ratioSum += ratio));
  const ratio = ratioSum / props.pastResults[0].try; // Average based on number of tryings
  if (ratio >= 80) return "عالی";
  else if (ratio <= 50) return "ضعیف";
  else return "متوسط";
});

// Performance message based on ratio per result
const performanceMessage = (index) => {
  const ratio = props.allPerformanceRatios[index];
  if (ratio >= 80) return "عالی";
  else if (ratio <= 50) return "ضعیف";
  else return "متوسط";
};
</script>

<style
  lang="scss"
  scoped
  src="assets/styles/quiz/results/_past-results-card.scss"
/>
