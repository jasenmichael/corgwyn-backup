<template>
  <div>
    <div class="md:flex items-center bg-white mb-16">
      <div class="ml-auto mr-4">
        <!-- get in touch -->
        <div
          class="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"
        >
          <div class="max-w-lg mx-auto">
            <h2
              class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
            >
              GET IN TOUCH
            </h2>
            <p class="mt-3 text-lg leading-6 text-gray-600">
              Questions about CRS? Want to sponsor one of our corgis?
            </p>
            <p class="mt-3 text-lg leading-6 text-gray-600">
              Use the form below to get in touch with us!
            </p>
          </div>
        </div>
        <!-- form -->
        <form
          netlify
          name="contact"
          method="POST"
          class="grid grid-cols-1 gap-y-6"
        >
          <div>
            <label for="full_name">Full name</label>
            <input
              type="text"
              name="full_name"
              id="full_name"
              autocomplete="name"
              class="block w-full shadow-sm py-3 px-4 placeholder-gray-600 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              placeholder="Full name"
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              class="block w-full shadow-sm py-3 px-4 placeholder-gray-600 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              placeholder="Email"
            />
          </div>
          <div>
            <label for="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              autocomplete="tel"
              class="block w-full shadow-sm py-3 px-4 placeholder-gray-600 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              placeholder="Phone"
            />
          </div>
          <div>
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="block w-full shadow-sm py-3 px-4 placeholder-gray-600 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-corgiblue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <!-- contact -->
      <div class="mr-auto ml-4">
        <div class="flex items-center">
          <a
            href="https://www.facebook.com/CRSIowa/"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 text-corgiblue"
            >
              <path
                fill="#3183C6"
                d="m512 256c0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z"
              />
            </svg>
          </a>
          <p class="text-lg text-gray-600 pl-2">Follow Us on Facebook</p>
        </div>
        <dl class="mt-8 text-base text-gray-600">
          <div>
            <dd>
              <p>Jesup, IA</p>
            </dd>
          </div>
          <div class="mt-6">
            <dt class="sr-only">Phone number</dt>
            <dd class="flex">
              <!-- Heroicon name: phone -->
              <svg
                class="flex-shrink-0 h-6 w-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span class="ml-3"> +1 (319) 849-8544 </span>
            </dd>
          </div>
          <div class="mt-3">
            <dt class="sr-only">Email</dt>
            <dd class="flex">
              <!-- Heroicon name: mail -->
              <svg
                class="flex-shrink-0 h-6 w-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span class="ml-3"> corgywnrehab@gmail.com </span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
