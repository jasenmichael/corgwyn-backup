<template>
  <div id="top">

    <div class="flex lg:flex-none bg-gray-100 lg:bg-white">
      <!-- logo -->
      <img
        src="/logo.png"
        alt="Corgwin logo image"
        class="py-6 pl-8 lg:pl-64"
      />

      <!-- hamburger menu -->
      <div
        class="lg:hidden ml-auto mr-8 mt-10 tham tham-e-squeeze tham-w-8"
        :class="menu && 'tham-active'"
        @click="menu = !menu"
      >
        <div class="tham-box">
          <div class="bg-gray-900 tham-inner" />
        </div>
      </div>
    </div>

    <!-- mobile navbar menu -->
    <nav
      class="block lg:hidden z-50 text-sm text-white bg-corgiblue"
      :class="(scrollY >= 205 ? 'navbar' : '') + (menu ? ' block' : ' hidden')"
    >
      <ul
        class="lg:flex lg:space-x-7 items-center justify-start px-2"
        @click="menu = false"
      >
        <li
          v-for="(link, i) in links"
          :key="i"
          class="py-1 hover:bg-white hover:text-gray-900 block px-14 lg:px-12"
        >
          <nuxt-link :to="link.path" class="block">{{ link.title }}</nuxt-link>
          <hr />
        </li>
      </ul>
    </nav>

    <!-- desktop navbar menu -->
    <nav
      class="hidden lg:block z-50 lg:px-64 text-sm text-white bg-corgiblue"
      :class="scrollY >= 205 ? 'navbar' : ''"
    >
      <div
        class="lg:flex lg:space-x-6 items-center justify-start"
        @click="menu = false"
      >
        <nuxt-link
          v-for="(link, i) in links"
          :key="i"
          :to="link.path"
          class="py-3 nav-item"
        >
          {{ link.title }}
        </nuxt-link>
      </div>
    </nav>

    <img
      src="/shadow.png"
      alt="logo shadow"
      class="mx-auto lg:object-contain"
    />

    <!-- transparent layer when menu open -->
    <!-- v-if="menu"
      tabindex="-1" -->
    <button
      class="z-10 fixed w-full h-full inset cursor-default bg-black opacity-0"
      :class="!menu ? 'hidden' : 'block'"
      @click="menu = false"
    ></button>
    <!--  -->

    <!-- scroll to top -->
    <transition
      enter-active-class="transition-all transition-faster ease-out-quad"
      leave-active-class="transition-all transition-fastest ease-in-quad"
      enter-class="opacity-0 scale-70"
      enter-to-class="opacity-100 scale-100"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-70"
    >
      <button
        v-if="scrollY >= 205"
        aria-label="scroll to top"
        class="w-12 h-12 fixed bottom-0 right-0 mb-10 mr-10 text-white bg-black rounded-full cursor-pointer outline-none hover:bg-gray-900 z-50 transition-all duration-1000 ease-in-out"
      >
        <!-- @click="scrollToTop" -->
        <a
          href="#top"
          aria-label="Top Section"
          v-smooth-scroll="{ duration: 600 }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 ml-3 pl-1"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z"
            />
          </svg>
        </a>
      </button>
    </transition>
        <div
        v-if="
          $nuxt.$route.hash.split('=')[0] === '#invite_token' ||
          $nuxt.$route.hash.split('=')[0] === '#confirmation_token' ||
          $nuxt.$route.hash.split('=')[0] === '#email_change_token' ||
          $nuxt.$route.hash.split('=')[0] === '#recovery_token'
          "
      class="text-red-900 z-50 w-screen h-screen inset bg-white opacity-100"
    >{{ gotoAdmin() }}
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      scrollY: 0,
      menu: false,
      links: [
        {
          title: 'HOME',
          path: '/',
        },
        {
          title: 'OUR CORGIS',
          path: '/our-corgis',
        },
        {
          title: 'ABOUT US',
          path: '/about',
        },
        {
          title: 'DONATE',
          path: '/donate',
        },
        {
          title: 'SPONSOR A CORGI',
          path: '/sponsor',
        },
        {
          title: 'CONTACT US',
          path: '/contact',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    },
    gotoAdmin() {
      if (process.client) {
        location.replace(`/admin/${$nuxt.$route.hash}`)
      }
    }
  },
}
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}
.nav-item {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
}

.nuxt-link-exact-active.nav-item,
.nav-item:hover {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 4px solid #fff;
  border-bottom: 4px solid #fff;
}
</style>
