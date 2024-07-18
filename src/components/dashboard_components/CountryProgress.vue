<template>
    <div class="flex items-center my-4">
      <span><img :src="flagClass" alt="flag" /></span>
      <div class="w-full ml-4">
        <div class="flex justify-between mb-2">
          <span>{{ country }}</span>
          <span>{{ percentage }}%</span>
        </div>
        <div class="relative h-2 bg-gray-200 rounded">
          <div :class="barClass" :style="{ width: percentage + '%' }"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      country: {
        type: String,
        required: true
      },
      flagClass: {
        type: String,
        required: true
      },
      percentage: {
        type: Number,
        required: true
      }
    },
    computed: {
      barClass() {
        return this.percentage > 0
          ? 'absolute h-full bg-blue-500 rounded'
          : 'absolute h-full bg-gray-300 rounded';
      }
    }
  };
  </script>
  
  <style scoped>
  /* You can add additional styles here if needed */
  </style>
  