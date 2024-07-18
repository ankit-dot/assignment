<template>
  <div>
    <!-- Sidebar -->
    <aside class="z-20 relative flex-shrink-0 hidden w-60 pl-2 overflow-y-auto bg-white md:block h-screen">
      <div>
        <div class="">
          
          
          <div class = "flex flex-col justify-between">
            <ul class="flex flex-col  items-center justify-center mt-6 leading-10">
             <li class = " p-5 w-[50%] flex items-center justify-center flex-col rounded-sm  bg-white shadow-lg">
                <img src="/metrics.svg" alt="">
                <p class = "text-[#495172]">Dashboard</p>

             </li>

             <li class = "p-5 w-[50%] flex items-center justify-center flex-col">
                <img src="/analytics.svg" alt="">
                <p class = "text-[#495172]">Analytics</p>
             </li>

             <li class = "p-5 w-[50%] flex items-center justify-center flex-col">
                <img src="/currency-exchange-2.svg" alt="">
                <p class = "text-[#495172]">Trading</p>
             </li>

             <li class = "p-5 w-[50%] flex items-center justify-center flex-col">
                <img src="/sound-wave.svg" alt="">
                <p class = "text-[#495172]">Notifications</p>
             </li>
              
            </ul>

            <img src="/logout.svg" alt="" class = "h-[40px] w-[40px] absolute bottom-1 right-[43%] mx-auto">
          </div>
        </div>
      </div>
    </aside>

    </div>
</template>

<script>
export default {
  data() {
    return {
      isSideMenuOpen: false,
      itemOpen: false
    };
  },
  methods: {
    toggleItem() {
      this.itemOpen = !this.itemOpen;
    },
    closeSideMenu() {
      this.isSideMenuOpen = false;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
