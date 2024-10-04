<template>
  <UICard :with-border="true">
    <div class="overview-card">
      <div class="card__content">
        <div class="card__content__header">
          <h4 class="lh-sm fw-bolder h4">{{ quizData.title }}</h4>
          <span class="lh-lg subtitle1" v-html="quizData.description"></span>
        </div>
        <div class="card__content__action-btn">
          <div class="tags">
            <div
              class="quiz-overview__tag"
              v-for="(tag, index) in tags"
              :key="index"
            >
              <span class="subtitle1 lh-sm">{{ tag }}</span>
            </div>
          </div>
          <div>
            <button
              class="btn btn-accent start-btn"
              :class="isLoading ? 'btn-gray-medium' : 'btn-accent'"
              :style="{ cursor: isLoading ? 'default' : 'pointer' }"
              @click.prevent="startQuiz"
              :disabled="isLoading"
            >
              <span
                v-if="isLoading"
                class="spinner-border spinner-border-sm mx-4 my-1 text-white"
                role="status"
                ><span class="visually-hidden">Loading...</span></span
              >
              <span v-else class="start-btn__content">
                <span class="title3 lh-sm">شروع آزمون</span>
                <nuxt-icon
                  name="arrow-left"
                  class="icon icon-lg text-secondary-2"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="d-none d-md-flex align-items-center">
        <img src="assets/images/Thesis-rafiki.png" alt="card image" />
      </div>
    </div>
  </UICard>
</template>

<script setup>
const router = useRouter();
const props = defineProps({
  quizData: {
    type: Object,
    required: true,
  },
});

// Tag information based on quiz data
const tags = [
  `${props.quizData.questions_count} سوال تستی`,
  "بدون محدودیت زمانی",
  "قابل تکرار",
];

const isLoading = ref(false);

// Start the quiz and handle the logic
const startQuiz = async () => {
  try {
    isLoading.value = true;
    const participationData = await postParticipation(props.quizData.id);
    isLoading.value = false;

    router.push({
      name: "question-number",
      params: { number: participationData.question.id },
    });
  } catch (error) {
    isLoading.value = false;
    console.error("Error starting the quiz:", error);
  }
};
</script>

<style lang="scss" scoped src="assets/styles/quiz/preview/_overview.scss" />
