<template>
  <div
    class="container-xxl content-container-lg content-container-sm page-content"
    v-if="!hasError"
  >
    <UICard :withBorder="true" class="question-card">
      <div class="question-card__content">
        <div class="question-card__question-header">
          <h4 class="h4 lh-sm fw-bolder">{{ quizData.title }}</h4>
          <div class="question-card__progress">
            <span class="subtitle1 lh-sm"
              >{{ progressCount }}/{{ quizData.questions_count }}</span
            >
            <quiz-question-progress
              :total-questions="quizData.questions_count"
              :question-number="progressCount"
            ></quiz-question-progress>
          </div>
          <hr class="question-card__divider w-100 d-block d-sm-none" />
        </div>
        <quiz-question
          :question-number="questionData.priority"
          :total-questions="quizData.questions_count"
          :question-data="questionData"
          :reset-checked-values="checkedValues.length === 0"
          :disable-check-boxes="
            Boolean(validationResult?.correct && isAnswerSubmitted)
          "
          v-model:checkedValues="checkedValues"
        />
      </div>
      <div class="question-card__footer">
        <button
          class="question-card__submit-button btn d-flex justify-content-center"
          :class="
            checkedValues.length && !isLoading
              ? 'btn-secondary-2'
              : 'btn-gray-medium'
          "
          :style="{
            cursor: !checkedValues.length || isLoading ? 'default' : 'pointer',
          }"
          @click.prevent="buttonAction()"
        >
          <span
            v-if="isLoading"
            class="spinner-border spinner-border-sm mx-4 my-1 text-white"
            role="status"
            ><span class="visually-hidden">Loading...</span></span
          >
          <span
            v-else
            class="title3 lh-sm"
            :class="
              checkedValues.length ? 'text-white' : 'text-gray-light-medium'
            "
          >
            {{ buttonText }}
          </span>
        </button>

        <div v-if="isAnswerSubmitted && !isLoading && !errorMessage">
          <UIAnswerStatusTag :correct="validationResult?.correct" />
        </div>

        <div v-if="errorMessage && isAnswerSubmitted">
          <UIBasicTag
            :tagText="errorMessage"
            :is-error="true"
            tag-color="danger-lighter"
          />
        </div>
      </div>
    </UICard>
  </div>
</template>

<script setup>
const props = defineProps({
  quizData: {
    type: Object,
    required: true,
  },
});
//////////////// SECTION: Quiz State Management
const progressCount = ref(null);
const isLoading = ref(false);
const validationResult = ref(Object);
const hasError = ref(true);

//////////////// SECTION: Validate Question Number on Component Mount
const route = useRoute();
const routeNumber = Number(route.params.number);
onBeforeMount(() => {
  if (
    routeNumber < props.quizData.first_question.id ||
    routeNumber >
      props.quizData.questions_count + props.quizData.first_question.id - 1
  ) {
    throw createError({
      statusCode: 404,
      message: "Question number should be valid",
    });
  } else hasError.value = false;
});

//////////////// SECTION: Fetch Question Data
const url = `https://api.sokanacademy.com/api/quizzes/${props.quizData.id}/questions/${routeNumber}`;
const questionPriority = useQuestionPriority(); // To update the breadcrumb
const questionData = ref(null);
try {
  const { data } = await getQuestion(url);
  questionData.value = data.value;
  progressCount.value = questionData.value.priority - 1;
  questionPriority.value = questionData.value.priority;
} catch (error) {
  hasError.value = true; // Handle error accordingly
  console.error("Failed to fetch question data:", error);
}

//////////////// SECTION: Verify Selected Answers
const isAnswerSubmitted = ref(false); // To hide the answer status tag(or the error tag) if user chooses an option
const checkedValues = ref([]);
const errorMessage = ref(null);
// Validate User Answer
const validateAnswer = async () => {
  try {
    errorMessage.value = null;
    const option = checkedValues.value;
    isLoading.value = true;
    validationResult.value = await postAnswer(url, option);
    isLoading.value = false;
  } catch (error) {
    // Handle error and extract relevant message to be shown
    if (error.data) {
      isLoading.value = false;
      errorMessage.value = error.data.message;
    }
  }
};
// Verify selected answers
const verifyAnswers = async () => {
  if (checkedValues.value.length === 0) return; // Exit if no values are selected
  isAnswerSubmitted.value = true;

  await validateAnswer(); // Call validation method

  if (validationResult.value.correct) {
    progressCount.value++; // Increment progress count if the answer is correct
  } else {
    checkedValues.value = []; // Reset selected values if the answer is incorrect
  }
};
// Watch for changes in checkedValues and reset answer submission state to hide the answer status tag
watch(checkedValues, (newValue) => {
  if (isAnswerSubmitted.value && newValue.length > 0) {
    isAnswerSubmitted.value = false;
  }
});

//////////////// SECTION: Navigation Actions
const router = useRouter();
// Navigate to the next question
const goToNextQuestion = () => {
  router.push({ path: `/question/${validationResult.value.next.id}` });
};

// Navigate to results page
const goToResultsPage = () => {
  router.push({ path: "/results" });
};

//////////////// SECTION: Button Computation
// Computed button text based on current state
const buttonText = computed(() => {
  if (isLoading.value) return;
  return validationResult.value.correct
    ? validationResult.value.finished
      ? "پایان آزمون"
      : "سوال بعدی"
    : "بررسی پاسخ";
});
// Determine action on button click
const buttonAction = () => {
  if (validationResult.value.correct) {
    validationResult.value.finished ? goToResultsPage() : goToNextQuestion();
  } else {
    verifyAnswers();
  }
};
</script>

<style lang="scss" scoped src="assets/styles/pages/_question-page.scss" />
