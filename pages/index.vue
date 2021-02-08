<template>
  <div>
    <HomeHead />
    <!-- 2 learn more section  -->
    <div class="flex flex-col">
      <h1
        class="text-corgiblue text-3xl opacity-80 leading-tight font-black mx-auto pt-8"
      >
        LEARN MORE
      </h1>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-12 px-2 md:px-20 lg:px-44 pb-12"
    >
      <div class="text-gray-800 md:col-span-2 lg:col-span-1">
        <h2 class="text-lg bold">Corgwyn Rehabilitation Sanctuary</h2>
        <h3 class="text-5xl font-black pt-8">Our Mission</h3>
        <hr class="mt-6 w-32 border-2 rounded-full border-gray-400" />
        <p class="py-6 text-lg mb-4">
          To assist rescued corgis with rehabilitation and retraining to enable
          them, when possible, to find forever adoptive homes, and provide
          sanctuary for those who need long term care.
        </p>
        <nuxt-link to="/about" class="">
          <button
            class="mb-10 md:mb-4 rounded-full py-4 px-8 bg-corgiblue text-white"
          >
            LEARN MORE
          </button>
        </nuxt-link>
      </div>

      <!-- card 1 -->
      <div class="h-full w-full flex flex-col">
        <nuxt-image
          class="object-cover shadow-lg rounded-sm"
          src="/meet-the-corgis.jpeg"
          alt=""
        />
        <div class="text-lg leading-6 font-medium space-y-1 mt-6">
          <h3>SANCTUARY MEMBERS</h3>
        </div>
        <div class="text-lg flex flex-col">
          <p class="text-gray-600 pb-8 mt-2 flex-grow">
            Meet our current CRS sanctuary members, read their stories and
            history, and sponsor a corgi!
          </p>
          <div class="pl-4 mb-8 bold">
            <nuxt-link to="/our-corgis">MEET THE CORGIS -></nuxt-link>
          </div>
        </div>
      </div>

      <!-- card 2 -->
      <div class="h-full w-full">
        <nuxt-image
          class="object-cover shadow-lg rounded-sm"
          src="/meet-the-corgis2.jpeg"
          alt="Cute Corgis"
        />
        <div class="text-lg leading-6 font-medium space-y-1 mt-6">
          <h3>HELP SUPPORT CRS</h3>
        </div>
        <div class="text-lg flex flex-col">
          <p class="text-gray-600 pb-8 mt-2 flex-grow">
            Help us achieve our dream of a self-sustaining Corgwyn
            Rehabilitation Sanctuary…every donation helps!
          </p>
          <div class="pl-4 mb-8 bold">
            <nuxt-link to="/donate">DONATE NOW -></nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- learn more -->

    <!-- 3 SUPPORT CRS  -->
    <div class="flex flex-col bg-corgiblue text-white pt-12 pb-20">
      <h2 class="mx-auto text-2xl font-light">SUPPORT CRS</h2>
      <h3 class="text-4xl font-bold mx-auto pt-8 pb-2">HOW YOU CAN HELP</h3>
      <hr
        class="mt-6 w-28 mx-auto border-2 rounded-full border-gray-300 opacity-70"
      />
      <div
        class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-center px-4 md:px-10 lg:px-32"
      >
        <div class="flex flex-col items-center h-full w-full py-8">
          <!-- icon -->
          <div class="ring-2 ring-white rounded-full m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-24 h-24 p-2"
              aria-hidden="true"
              data-icon="dollar-sign"
              viewBox="0 0 288 512"
            >
              <defs />
              <path
                fill="currentColor"
                d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
              />
            </svg>
          </div>
          <h2 class="text-lg font-bold">DONATE</h2>
          <p class="text-gray-200 font-light">
            The Corgwyn Rehabilitation Sanctuary runs completely on donations.
            Your donations help cover food, vet bills, and other key expenses
          </p>
          <div class="py-2 font-bold">
            <nuxt-link to="/donate"> DONATE NOW -></nuxt-link>
          </div>
        </div>

        <div class="flex flex-col items-center h-full w-full py-8">
          <div class="ring-2 ring-white rounded-full m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="w-24 h-24 p-4"
              viewBox="0 0 512 512"
            >
              <defs />
              <path
                fill="currentColor"
                d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"
              />
            </svg>
          </div>
          <h2 class="text-lg font-bold">SPONSOR</h2>
          <p class="text-gray-200 font-light">
            Help CRS provide food, veterinary care, and all of the essentials
            for one of CRS' corgis with a monthly or yearly sponsorship
          </p>
          <div class="py-2 font-bold">
            <nuxt-link to="/sponsor"> SPONSOR A CORGI -></nuxt-link>
          </div>
        </div>

        <div
          class="flex flex-col items-center h-full w-full py-8 md:col-span-2 lg:col-span-1"
        >
          <div class="ring-2 ring-white rounded-full m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="w-24 h-24 p-4"
              data-icon="redo"
              data-prefix="fas"
              viewBox="0 0 512 512"
            >
              <defs />
              <path
                fill="currentColor"
                d="M500.33 0h-47.41a12 12 0 00-12 12.57l4 82.76A247.42 247.42 0 00256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 00166.18-63.91 12 12 0 00.48-17.43l-34-34a12 12 0 00-16.38-.55A176 176 0 11402.1 157.8l-101.53-4.87a12 12 0 00-12.57 12v47.41a12 12 0 0012 12h200.33a12 12 0 0012-12V12a12 12 0 00-12-12z"
              />
            </svg>
          </div>
          <h2 class="text-lg font-bold">SUPPORT</h2>
          <p class="text-gray-200 font-light">
            Want to help CRS by contributing to our ongoing, recurring costs?
            Help cover monthly expenses or donate from our Amazon wishlist
          </p>
          <div class="py-2 font-bold">
            <nuxt-link to="/donate"> SUPPORT CRS -></nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- SUPPORT CRS  -->

    <!-- 5 meet the corgis -->
    <!-- carosel of current corgis -->
    <!-- meet the corgis -->
  </div>
</template>
