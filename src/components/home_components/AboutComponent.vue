<template>
  <div class=" flex lg:gap-12 md:gap-6 flex-col-reverse sm:flex-row">
    
    
    <img
      src="/about_background.svg"
      alt="Leafs"
      class="w-full h-48 sm:object-cover object-contain object-center sm:h-screen sm:w-6/12"
    />
    <div class="w-full lg:w-4/12 md:w-6/12 mb-10">
      <div
        class="container mx-auto flex justify-center items-center h-full sm:px-0 px-4 sm:p-10"
      >
        <div class="text">
          <span class="text-[#0E77FF] text-lg font-bold uppercase"
            >About us</span
          >
          <div class="flex flex-col gap-5">
            <h2 class="font-semibold text-3xl sm:text-4xl">
              Great Digital Agency
            </h2>
            <p class="text-xl font-medium">
              Our products are fully custom-made, built with the latest
              technologies and cloud-architectures.
            </p>
            <p class="text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. In convallis porta mauris non aliquam.
            </p>

            <button

              class="nav-button w-[180px] flex text-[#0E77FF]  items-center justify-center rounded-full border-2 border-[#0E77FF] bg-transparent  px-7 py-2.5 text-lg   ring-[#0E77FF] ring-offset-3   active:ring-1"
            >
             <router-link to = "/login" class = "flex items-center justify-center">
              <span class = "text-b">Get Started</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                class="ml-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                ></path>
              </svg>
            </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
};
</script>

<style scoped></style>
