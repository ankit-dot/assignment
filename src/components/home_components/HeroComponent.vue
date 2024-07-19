<template>
  <section class="mb-16 lg:bg-[url('/hero_background.svg')] bg-cover bg-center bg-[#0E77FF] font-poppins xl:h-screen py-12 dark:bg-gray-900">
    <div
      class="grid max-w-screen-xl  px-6 pt-10 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-xl mb-4 text-3xl font-semibold leading-none tracking-tight md:text-5xl text-white"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting.
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-[#9ABFFF] lg:mb-8 md:text-lg md:mt-8 lg:text-xl dark:text-gray-400"
        >
          Our products are fully custom-made, built with the latest technologies
          and cloud-architectures.
        </p>
        <div class="space-y-4 md:mt-8 items-center sm:flex sm:space-y-0 sm:space-x-4">
          <router-link
    to="/login"
    class="inline-block rounded-full px-8 py-2.5 bg-white text-lg font-semibold leading-7 text-gray-900 dark:text-gray-100"
  >
    Get Started
    <span aria-hidden="true" class="text-black font-bold">→</span>
  </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroComponent",
};
</script>

<style scoped></style>
