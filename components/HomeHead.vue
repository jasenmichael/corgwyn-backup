<template>
  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
    <div class="w-full">
      <div class="relative shadow-xl sm:overflow-hidden">
        <div class="absolute inset-0">
          <img
            class="h-full w-full object-cover"
            src="/corgis-home-head.jpeg"
            alt="People working on laptops"
          />
          <div
            class="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-600"
            style="mix-blend-mode: multiply"
          ></div>
        </div>
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1
            class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span class="block text-white">CORGWYN REHABILITATION</span>
            <span class="block text-indigo-200">SANCTUARY </span>
          </h1>
          <p
            class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl"
          >
            A LIFELINE FOR LAST-CHANCE CORGIS
          </p>
          <div
            class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
          >
            <div
              class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"
            >
              <nuxt-link
                to="/donate"
                class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-corgiblue bg-white hover:bg-indigo-50 sm:px-8"
              >
                Donate Now
              </nuxt-link>
              <nuxt-link
                to="/our-corgis"
                class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-corgiblue hover:bg-opacity-70 sm:px-8"
              >
                Meet the Dogs
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
