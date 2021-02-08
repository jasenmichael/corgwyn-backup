<template>
  <div class="text-center pb-64 lg:text-left">
    <!-- header element -->
    <div class="container mx-auto lg:w-2/3 lg:pt-12 lg:pb-18">
      <h1 class="text-4xl pb-8">SPONSOR A CORGI</h1>
      <p class="text-xl text-left p-8 lg:p-0">
        We always need help! We could not do what we do for the corgwyn without
        the generousness of all our supporters. Read more about our different
        programs and where we could most use your can help.
      </p>
    </div>
    <!-- two column on large -->
    <div class="my_color pt-16">
      <div class="container mx-auto lg:grid lg:w-2/3 grid-cols-3">
        <div
          class="text-left pl-8 pr-8 pb-6 pt-10 align_self lg:col-span-2 lg:pb-18 lg:pl-0"
        >
          <h2 class="text-4xl pb-8">Sanctuary Sweethearts</h2>
          <p class="pb-8 text-xl">
            These corgwyn have come in to the rehab program. Patience, time and
            vetting will result in these babies being able to find a loving
            forever home.
          </p>
          <button class="pl-6 pr-6 pt-3 pb-3 bg-black text-white rounded-full">
            Donate Now
          </button>
        </div>

        <div
          class="hidden text-left pl-8 pr-8 pb-6 pt-10 md:hidden w-96 col-span-1 lg:hidden xl:block"
        >
          <div class="w-full sm:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div
                class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
              >
                <!-- Heroicon name: search -->
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                class="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-600 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>

        <div class="text-left pl-8 pr-8 pb-6 align_self lg:col-span-2 lg:pl-0">
          <h2 class="text-4xl pb-8">Sanctuary Lifers</h2>
          <p class="pb-8 text-xl">
            These are the corgwyn who will remain in the sanctuary for the rest
            of their lives. We like to think they are just misunderstood, but
            they are the the babies who prefer life here on the inside. The
            ongoing medical care, food and supplies are handled by the Rehab
            until the end of time. Assistance with these corgwyn is always
            welcome and greatly appreciated.
          </p>
          <button class="pl-6 pr-6 pt-3 pb-3 bg-black text-white rounded-full">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.align_self {
  align-self: center;
}

.my_color {
  background: #efeef1;
}
</style>
