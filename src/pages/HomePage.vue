<template>
    <div>
      <Navbar />
      <HeroComponent/>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/home_components/Navbar.vue';
  import HeroComponent from '../components/home_components/HeroComponent.vue';
  
  export default {
    name: 'HomePage',
    components: {
      Navbar,
      HeroComponent
    }
  }
  </script>
  
  <style scoped>
 
  </style>