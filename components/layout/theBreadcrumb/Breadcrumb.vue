<template>
  <section class="breadcrumb-section">
    <div
      class="breadcrumb-section__container container-xxl content-container-lg content-container-sm col-12"
    >
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb align-items-center">
          <li class="breadcrumb-item lh-lg subtitle1">
            <a href="#">خانه</a>
          </li>
          <nuxt-icon name="arrow-left" class="icon icon-sm" filled />
          <li class="breadcrumb-item lh-lg subtitle1">
            <a href="#">دوره‌های آموزشی</a>
          </li>
          <nuxt-icon name="arrow-left" class="icon icon-sm" filled />
          <li v-if="currentPageInfo" class="breadcrumb-item lh-lg subtitle1">
            <a href="#">{{ currentPageInfo.second_parent.title }}</a>
          </li>
          <nuxt-icon name="arrow-left" class="icon icon-sm" filled />
          <li
            v-if="currentPageInfo"
            class="breadcrumb-item lh-lg active title4"
          >
            <span>{{ currentPageInfo.title }}</span>
          </li>
          <nuxt-icon
            name="arrow-left"
            v-if="subPage !== ''"
            class="icon icon-sm"
            filled
          />
          <li v-if="subPage !== ''" class="breadcrumb-item lh-lg active title4">
            <span v-if="subPage === 'results'">نتیجه</span>
            <span v-else>{{ `سوال ${useQuestionPriority().value}` }}</span>
          </li>
        </ol>
      </nav>
    </div>
  </section>
</template>

<script setup>
defineProps({
  currentPageInfo: {
    type: Object,
    default: "",
  },
  subPage: {
    type: String,
    default: "",
  },
});
</script>
<style lang="scss" scoped>
.breadcrumb-section__container {
  @media (max-width: 767.98px) {
    gap: $space-20px;
    padding-top: $space-20px;
  }
  padding-top: $space-40px;

  .breadcrumb {
    gap: $space-8px;
  }
}

.breadcrumb-item {
  a {
    color: $secondary-2 !important;
    text-decoration: none;
  }

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
