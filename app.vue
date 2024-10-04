<template>
  <div class="body-content">
    <!-- Loading Indicator -->
    <UILoadingIndicator />

    <!-- Layout and Error Boundary -->
    <nuxt-layout :quiz-title="quizInfo.title">
      <NuxtErrorBoundary>
        <template #error="{ error, clearError }">
          <UIErrorHandler :inner-page-error="error" @clearError="clearError" />
        </template>

        <!-- Content when online -->
        <template v-if="isOnline">
          <layout-the-breadcrumb
            :current-page-info="quizInfo"
            :sub-page="route.path.split('/').pop()"
          />
          <nuxt-page :quiz-data="quizInfo" />
        </template>

        <!-- Offline Page -->
        <template v-else>
          <UIOfflinePage />
        </template>
      </NuxtErrorBoundary>
    </nuxt-layout>
  </div>
</template>

<script setup>
import { useOnline } from "@vueuse/core";

// Fetch the quiz information
const { data: quizInfo } = await getQuizInfo();
// Determine if the user is online
const isOnline = useOnline();
// Get the current route
const route = useRoute();
</script>
