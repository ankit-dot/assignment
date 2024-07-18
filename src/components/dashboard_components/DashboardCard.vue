<template>
    <a class="transform bg-[#FCFCFC] flex justify-center flex-col items-center hover:scale-105 transition duration-300  md:border-r col-span-12 sm:col-span-6 xl:col-span-3 intro-y"
       :class="bgColor" href="#">
      <div class=" p-5">
        <div class="flex justify-between">
          <span class = "text-[#8990AD] uppercase text-lg"> {{ label }} </span>
          
        </div>
        <div class=" w-full flex-1">
          <div class = "flex items-end gap-2">
            <div class="mt-3 text-3xl font-medium leading-8">${{ count }}</div>
            <p v-if="number !== undefined" :class="numberColorClass">+ {{ number }}</p>
          </div>
        </div>
      </div>
    </a>
  </template>
  
  <script>
  export default {
    props: {
    
        count: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: false
    },
    numberColor: {
      type: String,
      required: false
    }
    },

    computed: {
    numberClass() {
      return this.number !== undefined ? 'text-xl font-bold' : '';
    },
    numberColorClass() {
      return this.numberColor ? this.numberColor : '';
    }
  }
  };
  </script>
  