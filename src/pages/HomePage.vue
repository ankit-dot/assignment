<template>
    <div>
      <Navbar />
      <HeroComponent/>
      <AboutComponent/>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/home_components/Navbar.vue';
  import HeroComponent from '../components/home_components/HeroComponent.vue';
  import AboutComponent from '../components/home_components/AboutComponent.vue';
  
  export default {
    name: 'HomePage',
    components: {
      Navbar,
      HeroComponent,
      AboutComponent,
    }
  }
  </script>
  
  <style scoped>
 
  </style>