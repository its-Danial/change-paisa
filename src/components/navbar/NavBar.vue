<template>
  <div class="text-white min-w-md max-w-7xl py-3 px-7 sm:p-3 mx-auto">
    <div class="flex items-center justify-between">
      <router-link to="/"><img class="w-48 mr-5" src="/logo/logo-no-background.svg" alt="company logo" /></router-link>
      <div class="hidden sm:flex flex-1 justify-between items-center">
        <nav class="flex gap-2 font-medium">
          <router-link class="nav-btn" to="/">{{ $store.state.appLangText.navConvertLabel }}</router-link>
          <router-link class="nav-btn" to="/currency-charts">{{
            $store.state.appLangText.navCurrencyChatLabel
          }}</router-link>
        </nav>

        <div>
          <button
            :class="`hover:text-sky-400 ${$store.state.appLang === 'en' && 'text-sky-400'}`"
            v-on:click="$store.commit('toggleEnglishLang')"
          >
            English</button
          ><span class="text-xl"> | </span
          ><button
            :class="`hover:text-sky-400 ${$store.state.appLang === 'ur' && 'text-sky-400'}`"
            v-on:click="$store.commit('toggleUrduLang')"
          >
            اردو
          </button>
        </div>
      </div>
      <!-- Hamburger button for mobile -->
      <button
        v-if="!showNavDrawer"
        @click="toggleNavDrawer"
        class="group rounded-full p-1 block sm:hidden hover:bg-slate-50 hover:bg-opacity-20 transition-all ease-in duration-1000"
      >
        <HamBurger class="group-hover:stroke-sky-400" />
      </button>
    </div>
    <!-- Backdrop -->
    <div :class="`${showNavDrawer ? 'md:hidden fixed left-0 top-0 h-screen w-full bg-black/30' : ''}`">
      <!-- Nav Side Drawer for mobile -->
      <!-- <div v-show="showNavDrawer" class="fixed top-0 right-0 w-1/2 h-full bg-slate-800 ease-in duration-500"> -->
      <div
        :class="`bg-slate-900 ${
          showNavDrawer
            ? 'fixed right-0 top-0 h-screen w-1/2 md:w-[45%] duration-200'
            : 'fixed right-[-100%] top-0  ease-in duration-200'
        }`"
      >
        <div class="flex justify-end items-center py-3 px-7">
          <button
            @click="toggleNavDrawer"
            class="group rounded-full p-1 block sm:hidden hover:bg-slate-50 hover:bg-opacity-20"
          >
            <CancelCircle class="group-hover:stroke-sky-400" />
          </button>
        </div>

        <div class="mt-4 h-full w-full flex justify-center">
          <nav class="font-medium flex flex-col gap-3 text-center">
            <router-link to="/"
              ><button
                @click="toggleNavDrawer"
                class="h-full w-full py-2 px-5 rounded-md hover:bg-slate-50 hover:bg-opacity-20 hover:text-sky-400"
              >
                {{ $store.state.appLangText.navConvertLabel }}
              </button></router-link
            >
            <router-link to="/currency-charts"
              ><button
                @click="toggleNavDrawer"
                class="h-full w-full py-2 px-5 rounded-md hover:bg-slate-50 hover:bg-opacity-20 hover:text-sky-400"
              >
                {{ $store.state.appLangText.navCurrencyChatLabel }}
              </button></router-link
            >
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HamBurger from "@/components/icons/HamBurger.vue";
import CancelCircle from "@/components/icons/CancelCircle.vue";

export default {
  name: "NavBar",
  components: {
    HamBurger,
    CancelCircle,
  },
  data() {
    return { showNavDrawer: false };
  },
  methods: {
    toggleNavDrawer() {
      this.showNavDrawer = !this.showNavDrawer;
    },
  },
};
</script>

<style scoped>
@tailwind components;
/* @tailwind utilities; */

@layer components {
  .nav-btn {
    @apply py-2 px-5 rounded-md hover:bg-slate-50 hover:bg-opacity-20 hover:text-sky-400;
  }
}
</style>
