<template>
    <header class="bg-[#0E77FF]">
      <div class="mx-auto max-w-screen-xl pt-6 px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <a class="block text-white" href="#">
              <span class="sr-only">Home</span>
               <p class = "text-xl font-normal">Logo</p>
            </a>
          </div>
  
          <div class="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a class="text-white transition hover:text-white/75" href="#"> About </a>
                </li>
  
                <li>
                  <a class="text-white transition hover:text-white/75" href="#"> Services </a>
                </li>
  
                <li>
                  <a class="text-white transition hover:text-white/75" href="#"> History </a>
                </li>
  
                <li>
                  <a class="text-white transition hover:text-white/75" href="#"> Case Studies </a>
                </li>
  
                <li>
                  <a class="text-white transition hover:text-white/75" href="#"> Testimonials </a>
                </li>
  
                <li>
                  <a class="text-white transition hover:text-white/75" href="#"> Contact </a>
                </li>
              </ul>
            </nav>
  
            <div class="flex items-center gap-4">
              <div class="sm:flex sm:gap-4">
                <a
                  class="rounded-md bg-white px-9 py-2 text-base font-medium text-black shadow"
                  href="#"
                >
                  Login
                </a>
  
               
              </div>
  
              <div class="block md:hidden">
                <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  
  </style>
  