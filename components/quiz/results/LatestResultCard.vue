<template>
  <UICard :with-border="true" class="result-card">
    <div class="card__content">
      <!-- Header section with performance message -->
      <div class="card__content__header">
        <h4 class="lh-sm fw-bolder h4">{{ title }}</h4>
        <div class="card__content__header__performance">
          <div class="performance__message">
            <nuxt-icon :name="icon" class="icon icon-xl" filled />
            <span class="title1 lh-sm d-none d-md-inline">
              عملکرد شما {{ performanceMessage }} بود!</span
            >
            <span class="title2 lh-sm d-inline d-md-none">
              عملکرد شما {{ performanceMessage }} بود!</span
            >
          </div>

          <!-- Conditional message based on performance -->
          <span v-if="performanceMessage === 'عالی'" class="subtitle1 lh-sm">
            جزو 10% شرکت‌کننده با عملکرد عالی هستید.
          </span>
          <span v-else class="subtitle1 lh-sm">
            با تلاش بیشتر، می‌توانید نتیجه بهتری کسب کنید.
          </span>
        </div>
      </div>

      <!-- Footer section with tags -->
      <div class="card__content__footer">
        <div class="d-flex gap-3 flex-shrink-1">
          <UIAnswerStatusTag
            :correct="true"
            :show-numbers="true"
            :answers-count="latestQuizResult.correct"
          />
          <UIAnswerStatusTag
            :correct="false"
            :show-numbers="true"
            :answers-count="latestQuizResult.wrong"
          />
        </div>

        <!-- Retry button -->
        <div>
          <button
            class="btn card__content__try-again-btn"
            :class="
              performanceMessage === 'عالی'
                ? 'border border-secondary-2'
                : 'btn-accent'
            "
            @click.prevent="goToHomePage"
          >
            <nuxt-icon name="rotate-right" class="icon-lg" filled />
            <span class="title3 lh-sm text-secondary-2">تلاش مجدد</span>
          </button>
        </div>
      </div>
    </div>
    <!-- Card image (hidden on small screens) -->
    <img
      src="assets/images/Thesis-rafiki.png"
      alt="card image"
      class="card__img d-none d-md-block"
    />
  </UICard>
</template>

<script setup>
const props = defineProps({
  latestQuizResult: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  performanceRatio: {
    type: Number,
    required: true,
  },
});

// Compute performance message based on the performance ratio
const performanceMessage = computed(() => {
  if (props.performanceRatio >= 80)
    return "عالی"; // Excellent performance
  else if (props.performanceRatio <= 50)
    return "ضعیف"; // Poor performance
  else return "متوسط"; // Average performance
});

// Compute icon based on performance message
const icon = computed(() => {
  if (performanceMessage.value === "عالی") return "emoji-happy";
  else if (performanceMessage.value === "متوسط") return "emoji-poker";
  else return "emoji-sad";
});

// Navigate back to the home page
const router = useRouter();
const goToHomePage = () => {
  router.push("/");
};
</script>

<style
  lang="scss"
  scoped
  src="assets/styles/quiz/results/_latest-result-card.scss"
/>
