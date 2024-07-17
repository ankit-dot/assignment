<template>
    <div>
      <Navbar />
      <HeroComponent/>
      <AboutComponent/>
      <ServicesComponent/>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/home_components/Navbar.vue';
  import HeroComponent from '../components/home_components/HeroComponent.vue';
  import AboutComponent from '../components/home_components/AboutComponent.vue';
import ServicesComponent from '../components/home_components/ServicesComponent.vue';
  
  export default {
    name: 'HomePage',
    components: {
      Navbar,
      HeroComponent,
      AboutComponent,
      ServicesComponent
    }
  }
  </script>
  
  <style scoped>
 
  </style>