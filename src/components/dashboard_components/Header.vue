<template>
  <header class="z-40 py-12 bg-[#FCFCFC]">
    <div class="flex items-center justify-between h-8 px-6 mx-auto">
      <!-- Mobile hamburger -->
      <button
        class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
        @click="toggleSideMenu"
        aria-label="Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>

      <!-- Search Input -->
      <div class="sm:flex hidden justify-center mt-2 mr-4">
        <div
          class="relative flex flex-col w-full flex-wrap items-stretch gap-4 mb-3"
        >
          <span class="text-4xl font-semibold">Dashboard</span>
          <span class="text-base text-[#8990AD] font-normal">
            Welcome back, Andrew</span
          >
        </div>
      </div>

      <ul class="flex items-center flex-shrink-0 space-x-6">
        <!-- Notifications menu -->
       

        <!-- Profile menu -->
        <li class="relative">
          <button class="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-[#0F77FA]">+ Add Unit</button>
         
        </li>

        <li class="relative">
          <div class="relative">
            <a class="flex items-center gap-4" href="#">
              <span class=" h-10 w-10">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s" alt="User" class = "h-full w-full rounded-full bg-contain" />
              </span>
              <span class="hidden text-right lg:block">
                <span
                  class="block text-sm font-medium text-[#8990AD] dark:text-white"
                  >Andrew Johnstons</span
                >
              </span>
            </a>

          
            
          </div>
         
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNotificationsMenuOpen: false,
      isProfileMenuOpen: false,
    };
  },
  methods: {
    toggleSideMenu() {
      this.$emit("toggleSideMenu");
    },
    toggleNotificationsMenu() {
      this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen;
    },
    closeNotificationsMenu() {
      this.isNotificationsMenuOpen = false;
    },
    toggleProfileMenu() {
      this.isProfileMenuOpen = !this.isProfileMenuOpen;
    },
    closeProfileMenu() {
      this.isProfileMenuOpen = false;
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
