<template>
 
  <main class="">
    <div class="grid mb-4 pb-10 px-8 rounded-3xl bg-[#FCFCFC]">
     
      <div class="grid grid-cols-12 gap-6">
        
        <div class="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
            
          <div class="col-span-12 mt-8">
            
            <div class="flex items-center h-10 intro-y">
                
              <h2 class="mr-5 text-lg font-medium truncate">Dashboard</h2>
            </div>
            <div class="grid grid-cols-12 gap-6 mt-5">
              <DashboardCard count="5900.00" label="Balance" />
              <DashboardCard
                count="950.00"
                label="Profit"
                :number="56"
                numberColor="text-green-500"
              />
              <DashboardCard
                count="450.00"
                label="Losses"
                :number="56"
                numberColor="text-red-500"
              />
              <DashboardCard count="4.510" label="CURRENCIES" />
            </div>
          </div>
          <div class="col-span-12 mt-5">
            <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
              <div class="bg-white p-4 shadow-lg">
                <div class="mt-4">
                  <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto">
                      <div class="py-2 align-middle inline-block min-w-full">
                        <div
                          class="overflow-hidden border-gray-200 sm:rounded-lg bg-white"
                        >
                          <div
                            class="grid lg:grid-cols-6 md:grid-cols-3 gap-4mt-5"
                          >
                            <CountryStatsCard
                              country="Italy"
                              :count="475"
                              trend="up"
                              lineColor="blue"
                              border
                            />
                            <CountryStatsCard
                              country="United States"
                              :count="431"
                              trend="up"
                              lineColor="blue"
                            />
                            <CountryStatsCard
                              country="Canada"
                              :count="174"
                              trend="down"
                              lineColor="red"
                            />
                            <CountryStatsCard
                              country="Spain"
                              :count="475"
                              trend="up"
                              lineColor="blue"
                            />
                            <CountryStatsCard
                              country="Japan"
                              :count="134"
                              trend="up"
                              lineColor="green"
                            />
                            <CountryStatsCard
                              country="South Africa"
                              :count="471"
                              trend="down"
                              lineColor="red"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12 mt-5">
            <div class="grid gap-2 grid-cols-1 lg:grid-cols-2">
              <div class="p-4" id="chartline">
                <div
                  class="col-span-12 rounded-sm px-5.5 py-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5"
                >
                  <div
                    class="mb-7 flex flex-wrap items-center justify-between gap-2 px-2"
                  >
                    <div>
                      <h4
                        class="text-title-sm2 text-3xl font-medium text-[#11193C] dark:text-white"
                      >
                        Team Members
                      </h4>
                    </div>
                    <div class="relative z-20 inline-block rounded"></div>
                  </div>

                  <div class="flex flex-col gap-3">
                    <!-- stock item start -->
                    <div
                      class="flex items-center justify-between bg-white shadow-lg rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4"
                    >
                      <div class="flex items-center gap-3">
                        <div class="h-10 w-10 rounded-full">
                          <img src="/tech_icon_3.svg" alt="brand" />
                        </div>

                        <div>
                          <h5
                            class="text-sm font-bold leading-6 text-black dark:text-white"
                          >
                            Apple Inc
                          </h5>
                        </div>
                      </div>

                      <div class="text-right">
                        <p
                          class="mb-1 font-medium text-base text-[#0F77FA] bg-[#E7F1FE] py-1 px-3 rounded-full dark:text-white"
                        >
                          Top Trader
                        </p>
                      </div>
                    </div>
                    <!-- stock item end -->

                    <!-- stock item start -->
                    <div
                      class="flex items-center justify-between bg-white shadow-lg rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4"
                    >
                      <div class="flex items-center gap-3">
                        <div class="h-10 w-10 rounded-full">
                          <img src="/tech_icon_2.svg" alt="brand" />
                        </div>

                        <div>
                          <h5
                            class="text-sm font-bold leading-6 text-black dark:text-white"
                          >
                            Google
                          </h5>
                        </div>
                      </div>

                      <div class="text-right">
                        <p
                          class="mb-1 font-medium text-base text-[#0F77FA] bg-[#E7F1FE] py-1 px-3 rounded-full dark:text-white"
                        >
                          Manager
                        </p>
                      </div>
                    </div>
                    <!-- stock item end -->

                    <!-- stock item start -->
                    <div
                      class="flex items-center justify-between bg-white shadow-lg rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4"
                    >
                      <div class="flex items-center gap-3">
                        <div class="h-10 w-10 rounded-full">
                          <img src="/tech_icon_3.svg" alt="brand" />
                        </div>

                        <div>
                          <h5
                            class="text-sm font-bold leading-6 text-black dark:text-white"
                          >
                            Tesla
                          </h5>
                        </div>
                      </div>

                      <div class="text-right">
                        <p
                          class="mb-1 font-medium text-base text-[#0F77FA] bg-[#E7F1FE] py-1 px-3 rounded-full dark:text-white"
                        >
                          Top Trader
                        </p>
                      </div>
                    </div>
                    <!-- stock item end -->

                    <!-- stock item start -->
                    <div
                      class="flex items-center justify-between bg-white shadow-lg rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4"
                    >
                      <div class="flex items-center gap-3">
                        <div class="h-10 w-10 rounded-full">
                          <img src="/tech_icon_4.svg" alt="brand" />
                        </div>

                        <div>
                          <h5
                            class="text-sm font-bold leading-6 text-black dark:text-white"
                          >
                            Twitter X
                          </h5>
                        </div>
                      </div>

                      <div class="text-right">
                        <p
                          class="mb-1 font-medium text-base text-[#0F77FA] bg-[#E7F1FE] py-1 px-3 rounded-full dark:text-white"
                        >
                          Manager
                        </p>
                      </div>
                    </div>
                    <!-- stock item end -->
                  </div>
                </div>
              </div>
              <div class="p-4" id="chartpie">
                <div
                    class="mb-7 flex flex-wrap items-center justify-between gap-2 px-2"
                  >
                    <div>
                      <h4
                        class="text-title-sm2 text-3xl font-medium text-[#11193C] dark:text-white"
                      >
                      Comparison
                      </h4>
                    </div>
                    <div class="relative z-20 inline-block rounded"></div>
                  </div>
                <div class="p-6 bg-white shadow-lg">
                  <CountryProgress
                    country="United States"
                    flagClass="/usa.svg"
                    :percentage="93"
                  />
                  <CountryProgress
                    country="Italy"
                    flagClass="/italy.svg"
                    :percentage="73"
                  />
                  <CountryProgress
                    country="Spain"
                    flagClass="/spain.svg"
                    :percentage="13"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<script>
import DashboardCard from "./DashboardCard.vue";
import CountryStatsCard from "./CountryStatsCard.vue";
import CountryProgress from "./CountryProgress.vue";
import DashboardSidebar from "./DashboardSidebar.vue";



export default {
  components: {
    DashboardCard,
    CountryStatsCard,
    CountryProgress,
    DashboardSidebar
  },
  data() {
    return {
      tableData: [
        {
          name: "Apple MacBook Pro 13",
          category: "PC & Laptop",
          stock: 77,
          status: "Active",
        },
      ],
    };
  },
};
</script>
