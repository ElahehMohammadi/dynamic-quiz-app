<template>
  <button
    class="btn btn-secondary-2 order-3 d-none d-md-flex btn--login"
    @click.prevent
  >
    <!-- Text only on large screens -->
    <span class="title4 lh-lg order-2 text-white">ورود | ثبت‌نام</span>
    <!-- Icon -->

    <nuxt-icon name="login" class="icon btn--icon icon-md" filled />
  </button>
  <button
    class="btn order-3 border border-secondary-2 d-inline-flex d-md-none btn--search"
    @click.prevent
  >
    <nuxt-icon name="search-normal" class="icon icon-lg" filled />
  </button>
</template>
<style lang="scss" scoped>
.btn {
  --bs-btn-padding-x: 0;
  --bs-btn-padding-y: 0;

  padding: $phone-icon-padding;

  &--login {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: $login-btn-gap;
    padding: $space-8px $space-10px $space-8px $space-12px;
    border: 0;
  }
}
</style>
