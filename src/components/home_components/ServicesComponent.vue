<template>

<div class = "bg-[#FAFCFF] mt-6">
<div class = "lg:bg-[#0E77FF] opacity-80 absolute right-0 h-full w-[20%] z-10"></div>
  <div class=" flex lg:flex-row flex-col  items-center mx-auto sm:h-screen max-w-screen-xl">
    
    <div class="lg:w-5/12 sm:w-10/12 services text-left p-8 mx-auto">
      <div class="heading flex items-center justify-start mb-4">
        <img src="/our_services_start.svg" alt="icon start">
        <h2 class="text-[#0E77FF] font-bold text-lg ">OUR SERVICES</h2>
      </div>
      <h1 class="text-4xl font-bold mb-6">
        Transforming your ideas into Reality
      </h1>
      <div class="services-grid flex flex-wrap justify-start gap-4 mt-8">
        <div
          class="service-item sm:text-lg bg-[#16B2FF17] text-[#0E77FF] px-6 py-4 rounded-2xl font-semibold"
          v-for="service in services"
          :key="service"
        >
          {{ service }}
        </div>
      </div>
    </div>
    <div class="lg:w-5/12 sm:w-10/12 p-5 ">
      <div
        class="w-full mx-auto flex-1 mt-8 p-8 order-2 bg-white shadow-xl  sm:w-96 md:w-[85%] lg:w-full lg:order-1 lg:rounded-r-none"
      >
        <div class=" pb-4 flex items-center border-gray-300">
          <img
            src="/card-icon-services.svg"
            alt=""
            class="rounded-3xl w-20 h-20"
          />
          <div class="ml-5">
            <span class="block text-4xl font-semibold">UI/UX Designing</span>
          </div>
        </div>
        <p class="text-base py-6">
          Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex
          odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque
          habitant.
        </p>
        <ul class="mb-7 mt-4 text-black">
          <li class="flex items-center text-base mb-4">
            <img src="/right_icon_services.svg" />
            <span class="ml-3"
              >Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.</span
            >
          </li>
          <li class="flex items-center text-base mb-4">
            <img src="/right_icon_services.svg" />
            <span class="ml-3"
              >Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.</span
            >
          </li>
          <li class="flex items-center text-base mb-4">
            <img src="/right_icon_services.svg" />
            <span class="ml-3"
              >Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.</span
            >
          </li>
          <li class="flex items-center text-base">
            <img src="/right_icon_services.svg" />
            <span class="ml-3">Lorem ipsum dolor sit amet, conse ctetur</span>
          </li>
        </ul>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "ServicesComponent",
  data() {
    return {
      services: [
        "Web Development",
        "Mobile Development",
        "UI/UX Designing",
        "Branding",
        "Cloud Technology",
      ],
    };
  },
};
</script>

<style scoped>

.services_container{
    
}
.service-item:nth-child(3) {
  @apply bg-blue-500 text-white;
}
</style>
