<template>
  <header class="w-100 header">
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-md header__container container-xxl content-container-lg col-12"
    >
      <!-- Navbar Container -->
      <div class="nav-container">
        <!-- Logo -->
        <a class="navbar-brand order-1 d-inline-flex" href="#">
          <nuxt-icon name="Logo" class="icon logo" filled />
        </a>
        <!--the Navigation bar-->
        <layout-the-header-navbar></layout-the-header-navbar>
        <!-- Login btn -->
        <layout-the-header-action-btn></layout-the-header-action-btn>
      </div>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
.header {
  //the margin top prevents loading indicator to be full screened
  @media (min-width: 768px) {
    border-top: $top-margin-lg solid transparent !important;
  }

  &__container {
    padding-top: $space-20px;
    padding-bottom: $space-20px;
    
    @media (max-width: 575.98px) {
      padding: $space-20px !important;
    }
  }

  .navbar {
    transform: none;
  }

  .nav-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
  }
}
</style>
