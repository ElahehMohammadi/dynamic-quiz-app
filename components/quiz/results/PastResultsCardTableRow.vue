<template>
  <div class="tag-row">
    <!-- Performance message tag -->
    <UIBasicTag
      class="tag"
      :tag-text="performanceMessage"
      :tag-icon="icon"
      :tag-color="`${color}-lighter`"
      :tag-text-color="color"
    />
    <!-- Correct answers tag -->
    <UIBasicTag class="tag" :tag-text="String(quizResultData.correct)" />
    <!-- Incorrect and unanswered questions tag -->
    <UIBasicTag
      class="tag"
      :tag-text="
        String(
          quizResultData.wrong +
            (totalQuestionCount -
              quizResultData.correct -
              quizResultData.wrong),
        )
      "
    />
    <!-- Date tag -->
    <UIBasicTag class="tag" :tag-text="persianDate" />
  </div>
</template>

<script setup>
import moment from "jalali-moment";

// Define props for receiving data and performance messages
const props = defineProps({
  quizResultData: { type: Object, required: true },
  performanceMessage: { type: String, required: true },
  totalQuestionCount: { type: Number, required: true },
});

// Determine the icon based on performance message
const icon = computed(() => {
  if (props.performanceMessage === "عالی") return "emoji-happy";
  else if (props.performanceMessage === "متوسط") return "emoji-poker";
  else return "emoji-sad";
});

// Determine the color based on performance message
const color = computed(() => {
  if (props.performanceMessage === "عالی")
    return "success"; // Green
  else if (props.performanceMessage === "متوسط")
    return "warning"; // Yellow
  else return "danger"; // Red
});

// Convert date to persian format using jalali-moment
const persianDate = computed(() => {
  return moment(props.quizResultData.started_at, "YYYY-MM-DD")
    .locale("fa")
    .format("YYYY/MM/DD"); // Format date to Persian
});
</script>

<style lang="scss" scoped>
.tag-row {
  display: flex;
  gap: $space-12px;
}
</style>
