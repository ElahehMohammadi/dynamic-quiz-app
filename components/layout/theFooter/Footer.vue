<template>
  <footer class="w-100 bg-gray-light footer-section">
    <div
      class="row footer-section__container container-xxl content-container-lg content-container-sm mx-auto col"
    >
      <div
        class="row footer-section__content justify-content-sm-start align-items-start"
      >
        <div class="col-lg col-lg-7 col-md-12 description">
          <nuxt-icon name="Logo" class="icon logo" filled />
          <p class="subtitle1">
            ما در سکان‌آکادمی معتقدیم همه‌ی انسان‌ها حق دارند، به آموزش باکیفیت
            و کم‌هزینه دسترسی آسان داشته باشند و همه‌ی افراد می‌توانند با آموزش
            درست، زندگی فردی و اجتماعی خود را بهتر کنند. با توجه به تخصص تیم ما
            در حوزه‌ی IT و نیاز روزافزون بازار کار به متخصصان این حوزه، تولید و
            عرضه‌ی محتوای مهارت‌محور و تخصصی را در حوزه‌ی IT جدی‌تر دنبال کردیم.
            در این راه از ابتدای انتخاب مسیر متناسب با توانایی و امکانات دانشجو
            تا یادگیری، تمرین، کسب مهارت تخصصی و عمومی، و در نهایت معرفی به
            بازار کار همراه او هستیم...
          </p>
        </div>
        <span class="col-lg d-none d-lg-block"></span>
        <layout-the-footer-links
          v-for="linkSection in linkSections"
          :key="linkSection"
          :link-name="linkSection.linkName"
          :links-title="linkSection.linkTitle"
          :links="linkSection.links"
        ></layout-the-footer-links>
      </div>
      <span class="text-center title4 lh-lg px-0">
        کلیه حقوق مادی و معنوی این وب‌سایت متعلق به سکان آکادمی می‌باشد.
      </span>
    </div>
  </footer>
</template>

<script setup>
const fastAccess = [
  "درباره ما",
  "تماس با ما",
  "همکاری با ما",
  "شرایط و قوانین",
];
const services = [
  "دوره‌های آموزشی",
  "وبلاگ",
  "سکان پلاس",
  "رادیوفول‌استک",
  "فن‌واژه",
];
const linkSections = [
  { linkTitle: "خدمات سکان آکادمی", linkName: "services", links: services },
  { linkTitle: "دسترسی سریع", linkName: "fast-access", links: fastAccess },
];
</script>
<style lang="scss" scoped src="assets/styles/layouts/the-footer/_footer.scss" />
