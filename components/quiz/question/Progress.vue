<template>
  <div class="progress">
    <!-- Progress bar with dynamic width and background color -->
    <!-- If the user hasn't solved any questions fill the progress bar with 0.5% of the total width -->
    <!--(calculated as (1 / (2 * totalQuestions)) * 100) otherwise use the calculated progress percentage-->
    <div
      class="progress-bar"
      role="progressbar"
      :style="{
        width: `${progressPercent < 1 ? (1 / (2 * totalQuestions)) * 100 : progressPercent}%`,
        background: backgroundColor,
      }"
      :aria-valuenow="questionNumber"
      aria-valuemin="0"
      :aria-valuemax="totalQuestions"
    ></div>
  </div>
</template>

<script setup>
// Define component props
const props = defineProps({
  questionNumber: {
    type: Number,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
});

// Calculate the progress percentage
const progressPercent = computed(
  () => (props.questionNumber / props.totalQuestions) * 100,
);

// Compute dynamic background color with gradient based on progress
const backgroundColor = computed(() => {
  const vacancyPercent = 100 - progressPercent.value;

  const colorStops = [
    { color: "#fcbf17", stop: 0 }, // Yellow
    { color: "#fca018", stop: 23.67 }, // Orange
    { color: "#f34158", stop: 49.46 }, // Red
    { color: "#5636de", stop: 74.86 }, // Blue
    { color: "#24099a", stop: 100 }, // Dark Blue
  ];

  // Filter stops that are still ahead in the progress
  const remainingStops = colorStops
    .map((stop) => ({
      color: stop.color,
      remaining: stop.stop - vacancyPercent,
    }))
    .filter((stop) => stop.remaining >= 0);

  // Create gradient based on remaining stops
  const gradientStops =
    remainingStops.length === 1
      ? null
      : remainingStops
          .map((stop) => `${stop.color} ${stop.remaining}%`)
          .join(", ");

  // Return gradient if available, else fallback to final color
  return gradientStops ? `linear-gradient(90deg, ${gradientStops})` : "#24099a";
});
</script>

<style lang="scss" scoped>
.progress {
  width: 100px;
}

.progress-bar {
  border-radius: 4px;
}
</style>
