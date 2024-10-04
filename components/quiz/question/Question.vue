<template>
  <div class="question-card__body">
    <div class="title4 lh-lg question-card__question">
      <span class="text-secondary-2">{{ questionNumber }}- </span
      ><span v-html="questionData.query" class="text-secondary-2"></span
      ><span v-if="questionData.multiple_choice" class="text-gray-medium-dark">
        (چند گزینه‌ای)
      </span>
    </div>

    <div class="question-card__options">
      <div
        v-for="(option, index) in questionData.options"
        :key="index"
        class="form-check"
      >
        <input
          class="form-check-input icon-lg"
          :type="questionData.multiple_choice ? 'checkbox' : 'radio'"
          :id="`option${option.id}`"
          :value="option.id"
          v-model="checkedValues"
          :name="!questionData.multiple_choice ? 'option' : undefined"
          :disabled="disableCheckBoxes"
          @change="emitCheckedValues"
        />
        <label
          class="form-check-label subtitle1 lh-lg"
          :for="`option${option.id}`"
          v-html="option.option"
        >
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  questionNumber: {
    type: Number,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
  questionData: {
    type: Object,
    required: true,
  },
  disableCheckBoxes: {
    type: Boolean,
    required: true,
  },
  resetCheckedValues: {
    type: Boolean,
    required: true,
  },
});

const checkedValues = ref([]); // Store the selected values
const emit = defineEmits(["update:checkedValues"]);

// Emit the updated checked values to the parent component([number].vue page)
const emitCheckedValues = () => {
  if (props.questionData.multiple_choice) {
    emit("update:checkedValues", checkedValues.value); // Send array for multiple choices
  } else {
    emit("update:checkedValues", [checkedValues.value]); // Send single value as array for single choice
  }
};

// Watch for resetCheckedValues prop changes to clear checkedValues
watch(
  () => props.resetCheckedValues,
  (newVal) => {
    if (newVal) checkedValues.value = []; // Reset checked values if the prop is true
  },
);
</script>

<style lang="scss" scoped src="assets/styles/quiz/question/_question.scss" />
