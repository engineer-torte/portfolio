<template>
  <div class="bg-indigo-50 min-h-screen">
    <UApp>
      <UContainer>
        <!-- <header>ヘッダー</header> -->
        <NuxtPage />
        <ScrollToTop />
        <footer class="text-center text-sm text-gray-500 mt-12">
          © 2025 <span class="font-semibold text-emerald-600">{{ profile.name }}</span>. MIT License.
        </footer>
      </UContainer>
    </UApp>
  </div>
</template>

<script setup lang="ts">
import profile from '@/assets/data/profile.json';
</script>
