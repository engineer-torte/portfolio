<template>
  <div v-show="isVisible">
    <UButton
      icon="i-heroicons-arrow-up"
      color="primary"
      variant="solid"
      size="xl"
      class="fixed bottom-6 right-4 sm:right-6 lg:right-8 xl:right-10 2xl:right-12 z-50 rounded-full shadow-md"
      @click="scrollToTop"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(false);

const handleScroll = (): void => {
  isVisible.value = window.scrollY > 0;
};

const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
