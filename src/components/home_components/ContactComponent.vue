<template>
  <section class=" bg-[url('/contact_page_background.svg')] bg-white dark:bg-gray-900">
    <div
      class="flex lg:justify-between justify-center items-center max-w-screen-xl gap-10 px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-10 lg:py-16 lg:flex-row flex-col lg:pt-28"
    >
      <div class="relative lg:w-5/12 sm:w-9/12 flex items-end  lg:mt-0 lg:col-span-5 lg:flex">
        <img src="/contact_page_image.svg" alt="hero image" />
      </div>
      <div class="lg:w-5/12 sm:w-11/12 w-full">
        <div
          class="w-full mx-auto flex-1 mt-8 p-8 order-2 bg-white shadow-xl sm:w-96 md:w-[85%] lg:w-full lg:order-1 lg:rounded-r-none"
        >
          <div class="flex items-center justify-center">
            <div class="mx-auto w-full bg-white">
              <form action="https://formsubmit.co/ankitsolanki61375@gmail.com" method="POST">
                <div class="mb-5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    class="w-full rounded-md border-0 border-b placeholder-black border-gray-500 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div class="mb-5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    class="w-full rounded-md border-0 border-b placeholder-black border-gray-500 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div class="mb-5">
                  <input
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Phone Number"
                    class="w-full rounded-md border-0 border-b placeholder-black border-gray-500 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="mb-5">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    class="w-full rounded-md border-0 border-b placeholder-black border-gray-500 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="mb-5">
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    class="w-full resize-none rounded-md border-0 border-b placeholder-black border-gray-500 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                </div>
                <div>
                  <button
                    class="nav-button w-[180px] flex bg-[#0E77FF] text-white items-center justify-center rounded-full border-2 border-[#0E77FF] px-7 py-2.5 text-lg"
                  >
                    <span class="text-b">Get Started</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      class="ml-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactComponent",
};
</script>

<style scoped></style>
