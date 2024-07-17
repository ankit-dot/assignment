<template>
  <section class="mt-25 bg-[#FAFCFF] lg:pt-[120px] pb-12 lg:pb-[90px]">
    <div class="container">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div class="text-center mx-auto mb-3 lg:mb-5 max-w-[600px]">
            <h2
              class="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4"
            >
              Core Technologies
            </h2>
            <p class="text-base text-body-color mx-4">
              Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq
              uam ex odio, is the turpis accu msan congue euisque blandit dui
              Pelle ntesque habitant.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div
          class="tag-selection lg:mb-20 mb-12 flex justify-center items-center py-4"
        >
          <div
            class="tags mx-auto bg-white w-11/12 sm:w-auto rounded-full shadow-lg flex sm:px-6 px-4 py-4 sm:space-x-4 space-x-2"
          >
            <div
              v-for="tag in tags"
              :key="tag"
              @click="selectedTag = tag"
              :class="[
                'cursor-pointer border-r-2 sm:px-6 px-3  sm:text-lg text-base font-medium ',
                selectedTag === tag ? 'text-blue-500' : 'text-gray-800',
                index > tags.length - 1 ? ' border-black' : '',
              ]"
            >
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
      <div class = "lg:w-4/6 md:w-11/12 w-12/12 mx-auto">
      <div class="  flex flex-wrap justify-center ">
        <div v-for="icon in icons" :key="icon"  :class="[
         'tech-icon mx-4 border border-[#0E77FF] rounded-lg p-4 mb-8',
         index === 1 ? 'bg-[#0E77FF]' : 'bg-white'
       ]">
          <img :src="`/${icon}`" alt="Tech Icon" class="w-11 h-11" />
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TechnologiesComponent",
  data() {
    return {
      tags: ["Design", "Development", "Marketing"],
      selectedTag: "Development",
      icons: [
        "tech_icon_1.svg",
        "tech_icon_2.svg",
        "tech_icon_3.svg",
        "tech_icon_4.svg",
        "tech_icon_5.svg",
        "tech_icon_6.svg",
        "tech_icon_7.svg",
        "tech_icon_8.svg",
        "tech_icon_9.svg",
        "tech_icon_10.svg",
        "tech_icon_11.svg",
        "tech_icon_12.svg",
        "tech_icon_13.svg",
      ],
    };
  },
};
</script>

<style scoped></style>
