<template>
    <div>
      <Navbar />
      <HeroComponent/>
      <AboutComponent/>
      <ServicesComponent/>
      <TechnologiesComponent/>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/home_components/Navbar.vue';
  import HeroComponent from '../components/home_components/HeroComponent.vue';
  import AboutComponent from '../components/home_components/AboutComponent.vue';
import ServicesComponent from '../components/home_components/ServicesComponent.vue';
import TechnologiesComponent from '../components/home_components/TechnologiesComponent.vue';
  
  export default {
    name: 'HomePage',
    components: {
      Navbar,
      HeroComponent,
      AboutComponent,
      ServicesComponent,
      TechnologiesComponent
    }
  }
  </script>
  
  <style scoped>
 
  </style>