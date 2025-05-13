<template>
  <div>
    <UPopover
      mode="hover"
      :open-delay="200"
      :close-delay="100"
      arrow
    >
      <UBadge
        :icon="icon"
        size="lg"
        color="neutral"
        :variant="variant"
      >
        {{ name }}
      </UBadge>
      <template #content>
        <div class="p-4 text-sm text-gray-700 max-w-xs">
          {{ description }}
        </div>
      </template>
    </UPopover>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name: String,
  icon: String,
  variant: String,
  description: String,
});
</script>
