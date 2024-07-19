<template>
  <div class="flex lg:gap-12 md:gap-6 flex-col-reverse sm:flex-row">
    <img
      src="/about_background.svg"
      alt="Leafs"
      class="w-full h-80 sm:object-cover object-cover object-center sm:h-screen sm:w-6/12"
    />
    <div class="w-full lg:w-4/12 md:w-6/12 mb-10">
      <div
        class="container mx-auto flex justify-center items-center h-full sm:px-0 px-4 sm:p-10"
      >
        <div
          class="relative flex text-gray-800 antialiased flex-col justify-center overflow-hidden py-6 sm:py-12"
        >
          <div class="relative py-3 sm:w-96 mx-auto text-center">
            <span class="text-2xl font-semibold">Login to Access Dashboard</span>
            <div class="mt-4 bg-white shadow-md rounded-lg text-left">
              <div class="h-2 rounded-t-md"></div>

              <form @submit.prevent="handleSubmit" class="px-8 py-6">
                <label class="block font-semibold">Email </label>
                <input
                  type="email"
                  v-model="email"
                  class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-[#0E77FF] focus:ring-1 rounded-md"
                />
                <div v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</div>

                <label class="block mt-3 font-semibold">Password</label>
                <input
                  type="password"
                  v-model="password"
                  class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-[#0E77FF] focus:ring-1 rounded-md"
                />
                <div v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</div>

                <div class="flex justify-center items-center">
                  <button
                    type="submit"
                    class="mt-4 border border-[#0E77FF] rounded-full text-[#0E77FF] py-2 px-8"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      errors: {}
    };
  },
  methods: {
    handleSubmit() {
      this.errors = this.validateForm();
      if (Object.keys(this.errors).length === 0) {
        this.$router.push("/dashboard");
      }
    },
    validateForm() {
      const errors = {};
      if (!this.email) {
        errors.email = "Email is required.";
      } else if (!this.validEmail(this.email)) {
        errors.email = "Valid email is required.";
      }
      if (!this.password) {
        errors.password = "Password is required.";
      }
      return errors;
    },
    validEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  }
};
</script>

<style scoped></style>
