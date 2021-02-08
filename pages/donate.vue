<template>
  <div>
    <div class="w-full">
      <div class="relative shadow-xl sm:overflow-hidden">
        <div class="absolute inset-0">
          <img
            class="w-full h-full object-cover"
            src="/corgis-home.jpeg"
            alt="People working with corgis"
          />
          <div
            class="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-600"
            style="mix-blend-mode: multiply"
          ></div>
        </div>
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1
            class="text-corgiblue text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Help Keep CRS Thriving!
          </h1>
          <p
            class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl"
          >
            Help Keep CRS Thriving! Corgwyn Rehabilitation Sacntuary is now
            officially a 501(c)(3)! This means all donations are tax deductible.
            We offer several forms of donation, including cash donations, corgi
            sponsorships, and an Amazon wishlist.
          </p>
        </div>
      </div>
    </div>

    <!-- donate section -->
    <div
      class="pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 md:mx-16 lg:mx-28 xl:mx-32"
    >
      <div
        v-for="(source, i) in donateTo"
        :key="i"
        class="h-full w-full flex flex-col pt-8"
        :class="i === 0 && ` md:col-span-2 lg:col-span-1`"
      >
        <h2 class="text-3xl bold font-black text-corgiblue opacity-70">
          {{ source.title }}
        </h2>
        <p class="flex-grow text-gray-600 text-lg font-thin">
          {{ source.msg }}
        </p>
        <div class="mt-3">
          <button>
            <a
              :href="source.url"
              class="text-xl bg-green-400 text-white py-2 px-3 rounded-xl"
              >{{ source.btnTxt }}</a
            >
          </button>
        </div>
      </div>
    </div>

    <div
      class="mx-10 md:mx-32 lg:mx-40 xl:mx-44 lg:flex bg-gray-50 p-10 pb-24 rounded-2xl shadow-lg"
    >
      <!-- get in touch -->
      <div class="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
        <div class="max-w-lg mx-auto">
          <h2
            class="text-2xl font-extrabold tracking-tight text-gray-800 sm:text-3xl"
          >
            Sponsor a Corgi
          </h2>
          <p class="mt-3 text-lg leading-6 text-gray-600">
            Interested in providing a monthly sponsorship for one of our corgi
            residents?.
          </p>
        </div>
      </div>
      <!-- form -->
      <form
        netlify
        name="donate"
        method="POST"
        class="grid grid-cols-1 gap-y-6 w-full lg:px-30 xl:px-44"
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
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      donateTo: [
        {
          title: 'Donate with Venmo',
          url: 'https://venmo.com/LeAnne-Foust',
          msg: 'You can donate to CRS directly through Venmo.',
          btnTxt: 'Donate With Venmo',
        },
        {
          title: 'Amazon Wishlist',
          url: 'http://a.co/9sFiPPX',
          msg:
            'Check out our Amazon Wishlist – things wear out or get used up!',
          btnTxt: 'View Amazon Wishlist',
        },
        {
          title: 'PayPal',
          url: 'https://www.paypal.me/CorgwynRehab',
          msg: 'You can donate to CRS directly through PayPal.',
          btnTxt: 'Donate With PayPal',
        },
      ],
    }
  },
}
</script>
