<template>
    <div>
      <Navbar />
      <HeroComponent/>
      <AboutComponent/>
      <ServicesComponent/>
      <TechnologiesComponent/>
      <ContactComponent/>
      <FooterComponent/>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/home_components/Navbar.vue';
  import HeroComponent from '../components/home_components/HeroComponent.vue';
  import AboutComponent from '../components/home_components/AboutComponent.vue';
import ServicesComponent from '../components/home_components/ServicesComponent.vue';
import TechnologiesComponent from '../components/home_components/TechnologiesComponent.vue';
import ContactComponent from '../components/home_components/ContactComponent.vue';
import FooterComponent from '../components/home_components/FooterComponent.vue';
  
  export default {
    name: 'HomePage',
    components: {
      Navbar,
      HeroComponent,
      AboutComponent,
      ServicesComponent,
      TechnologiesComponent,
      ContactComponent,
      FooterComponent
    }
  }
  </script>
  
  <style scoped>
 
  </style>