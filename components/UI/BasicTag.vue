<template>
  <div :class="`bg-${tagColor}`" class="basic-tag">
    <!-- Display an icon if provided -->
    <nuxt-icon
      v-if="tagIcon"
      :name="tagIcon"
      :class="`text-${tagTextColor}`"
      class="icon icon-lg"
    />

    <!-- Show error message in red text if isError is true -->
    <span class="subtitle1 lh-sm text-danger text-nowrap" v-if="isError">
      {{ tagText }}
    </span>

    <!-- Display regular text with dynamic color if not an error -->
    <span class="title3 lh-sm text" :class="`text-${tagTextColor}`" v-else>
      {{ tagText }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  tagColor: {
    type: String,
    default: "gray-light",
  },
  tagText: {
    type: String,
    required: true,
  },
  tagIcon: {
    type: String,
    default: null, // Icon is optional
  },
  tagTextColor: {
    type: String,
    default: "secondary-2",
  },
  isError: {
    type: Boolean,
    default: false, // Indicates if the tag represents an error
  },
});
</script>

<style lang="scss" scoped>
.basic-tag {
  padding: $space-10px $space-12px $space-10px $space-12px !important;
  border-radius: $radius-10px;
  flex: 1 0;
  min-width: 111px !important;

  display: flex;
  gap: $space-8px;
  align-items: center;
  justify-content: center;
  @media (max-width: 576px) {
    padding: $space-8px $space-8px $space-8px $space-10px !important;
    gap: 6px;
    border-radius: $btn-border-radius;
  }
}

.icon {
  @media (max-width: 576px) {
    @include size($md-icon-size);
  }
}

.text {
  @media (max-width: 576px) {
    @include fontStyle($subtitle1-font-size, $weight: $MEDIUM);
  }
}
</style>
