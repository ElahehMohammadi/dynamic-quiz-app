<template>
  <li
    class="nav-item d-flex gap-2 flex-row align-items-center"
    :class="{
      'd-block d-md-none d-flex': iconName === 'home',
      'is-open ': currentPage === iconName,
    }"
  >
    <nuxt-icon :name="iconName" class="icon icon-lg d-flex d-md-none" filled />
    <p
      class="lh-lg my-0"
      :class="
        currentPage === iconName ? 'title4 text-secondary-1' : 'subtitle1'
      "
    >
      {{ itemName }}
    </p>
    <span
      class="open-state"
      :class="{ 'd-block d-md-inline': currentPage === iconName }"
    ></span>
  </li>
</template>

<script setup>
//////////// SECTION //get the cmp props
const props = defineProps({
  itemName: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: true,
  },
});

//get the current open page to highlight the current page item
const currentPage = "academy";
</script>

<style lang="scss" scoped>
//Nav items
.nav-item {
  padding: $space-8px $space-10px $space-8px $space-12px;
  position: relative;
  cursor: pointer;
}

//open theHeader item (open state)
.open-state {
  content: "";
  display: none;
  position: absolute;
  width: $open-state-percent-width;
  height: $open-state-height;
  border-radius: 1px;
  background-color: $secondary-1;
  margin: 0 auto;
  transform: translateX(-50%);
  left: 50%;
  bottom: -50%;
}

@media (max-width: 767.98px) {
  .nav-item {
    border-radius: $btn-border-radius;

    &.is-open {
      background-color: $gray-light;

      .open-state {
        display: none !important;
      }
    }
  }
}
</style>
