<template>
  <div :class="statusClass" class="question-card__answer-status">
    <span class="Indicator"></span>

    <!-- Show a tick icon if the answer is correct, otherwise show an 'x' icon -->
    <nuxt-icon
      v-if="correct"
      name="tick"
      class="icon icon-lg text-success"
      :class="{ 'd-md-flex d-none': showNumbers }"
    />
    <nuxt-icon
      v-else
      name="x"
      class="icon icon-lg"
      :class="{ 'd-md-flex d-none': showNumbers }"
      filled
    />

    <!-- Display the status message, either showing the count of answers or a simple message -->
    <span class="lh-sm text-secondary-2 text-nowrap status-message">
      {{ message }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  correct: {
    type: Boolean,
    required: true,
  },
  showNumbers: {
    type: Boolean,
    default: false,
  },
  answersCount: {
    type: Number,
    default: 0,
  },
});

// Compute the message based on whether to show numbers and the correctness of the answer
const message = computed(() => {
  if (props.showNumbers)
    return props.correct
      ? `${props.answersCount} پاسخ درست`
      : `${props.answersCount} پاسخ اشتباه`;
  return props.correct ? "پاسخ درست" : "پاسخ اشتباه";
});

// Compute the CSS class based on the answer is correctness
const statusClass = computed(() =>
  props.correct
    ? "question-card__answer-status--correct"
    : "question-card__answer-status--wrong",
);
</script>

<style lang="scss" scoped>
.question-card__answer-status {
  display: flex;
  align-items: center;
  gap: $space-8px;
  padding: $space-8px $space-12px;
  @media (max-width: 768px) {
    padding: $space-8px $space-10px;
  }
  position: relative;
  border-radius: $radius-10px;
  border: 2px solid $gray-light;

  .icon {
    @media (max-width: 768px) {
      @include size($md-icon-size); // 18px
    }
  }

  .Indicator {
    content: "";
    width: 6px;
    height: 1.5rem;
    border-radius: 4px 0 0 4px;
    position: absolute;
    top: 50%;
    right: -1.6px;
    transform: translateY(-50%);
    z-index: 2;
    @media (max-width: 768px) {
      height: 1.25rem;
    }
  }

  &--wrong {
    .Indicator {
      background-color: $danger;
    }
  }

  &--correct {
    .Indicator {
      background-color: $success;
    }
  }

  .status-message {
    @media (max-width: 768px) {
      @include fontStyle($subtitle1-font-size, $weight: $MEDIUM);
    }
  }
}
</style>
