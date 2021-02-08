<template>
  <div>
    <div
      class="rotate-180 overflow-hidden absolute w-full mx-auto -mt-10"
      style="transform: rotate(180deg)"
    >
      <svg
        style="height: 43px; width: 100%"
        class="block overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path class="" d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
      </svg>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 items-center bg-black text-gray-100 px-10 md:px-16 lg:px-64 xl:px-72 py-24"
    >
      <!-- left -->
      <div class="">
        <div class="pb-4 text-lg">Corgwyn Rehabilitation Sanctuary</div>
        <ul>
          <li class="flex py-2">
            <svg
              class="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="text-gray-600">Jesup, IA</div>
          </li>
          <li class="flex py-2">
            <!-- svg -->
            <svg
              class="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
            <div class="text-gray-600">(319) 849-8544</div>
          </li>
          <li class="flex py-2">
            <!-- svg -->
            <svg
              class="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div class="text-gray-600">corgwynrehab@gmail.com</div>
          </li>
        </ul>
      </div>

      <hr class="my-4 md:hidden" />

      <!-- right -->
      <div>
        <ul>
          <li class="flex py-1">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <nuxt-link to="/" class="text-gray-600"> Home </nuxt-link>
          </li>
          <li class="flex py-1">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <nuxt-link to="/about" class="text-gray-600"> About Us </nuxt-link>
          </li>
          <li class="flex py-1">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <nuxt-link to="/our-corgis" class="text-gray-600"
              >Our Corgis</nuxt-link
            >
          </li>
          <li class="flex py-1">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>

            <nuxt-link to="/donate" class="text-gray-600">Donate</nuxt-link>
          </li>
          <li class="flex py-1">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              /></svg
            ><nuxt-link to="/contact" class="text-gray-600"
              >Contact Us</nuxt-link
            >
          </li>
          <li class="flex py-1">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              /></svg
            ><a href="/sitemap.xml" class="text-gray-600">HTML Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex bg-corgiblue h-10 text-white px-10 items-center">
      <div>Corgwyn Rehabilitation Sanctuary © All Rights are Reserved</div>
      <div class="text-white ml-auto">
        <a
          href="https://www.facebook.com/CRSIowa/"
          rel="noreferrer"
          target="_blank"
          aria-label="link to our facebook page"
        >
          <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 ml-auto text-white"
          >
            <path
              fill="white"
              d="m512 256c0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
