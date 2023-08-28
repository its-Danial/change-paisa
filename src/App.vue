<template>
  <div>
    <NavBar />

    <main class="max-w-7xl mx-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/navbar/NavBar.vue";
</script>
