<template>
<div class="flex h-screen " :class="{ 'overflow-hidden': isSideMenuOpen }">
  <DashboardSidebar/>
<div class="flex flex-col flex-1 w-full overflow-y-auto">
      
      <Header/>
      <DashBoardHero/>
  </div> 
</div>   
    
  </template>
  
  <script>

import DashBoardHero from '../components/dashboard_components/DashBoardHero.vue';
import Header from '../components/dashboard_components/Header.vue';
import DashboardSidebar from '../components/dashboard_components/DashboardSidebar.vue';






  
  export default {
    name: "DashBoardPage",
    components: {

      Header,
      DashBoardHero,
      DashboardSidebar
    },
  };
  </script>
  
  <style scoped></style>
  