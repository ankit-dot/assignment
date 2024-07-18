<template>
  <div class="flex flex-col justify-center items-center">
    <p class="text-gray-500">{{ country }}</p>
    <div class="flex items-center ">
      <p class="text-2xl font-bold">{{ count }}</p>
      <svg
        v-if="trend === 'up'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-green-500 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
      <svg
        v-else-if="trend === 'down'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-red-500 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
    <div :class="['w-full mt-2', lineColorClass]">
      <!-- This is a placeholder for the line graph -->
      <svg
        class="w-full h-8"
        viewBox="0 0 100 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          :points="lineGraphPoints"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    country: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    trend: {
      type: String,
      required: true,
    },
    lineColor: {
      type: String,
      required: true,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    borderClass() {
      return this.border ? "border border-blue-500" : "";
    },
    lineColorClass() {
      switch (this.lineColor) {
        case "blue":
          return "text-blue-500";
        case "red":
          return "text-red-500";
        case "green":
          return "text-green-500";
        default:
          return "text-gray-500";
      }
    },
    lineGraphPoints() {
      // Placeholder points for the line graph
      return "0,15 10,10 20,15 30,10 40,15 50,10 60,15 70,10 80,15 90,10 100,15";
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
