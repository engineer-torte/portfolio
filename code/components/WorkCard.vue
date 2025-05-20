<template>
  <div class="border rounded-2xl p-4 shadow hover:shadow-lg transition">
    <h3 class="text-xl font-medium mb-2">
      {{ item.title }}
    </h3>
    <p class="text-sm text-gray-600">
      {{ item.description }}
    </p>
    <UModal :title="item.title">
      <UButton
        label="▶ 詳細を見る"
        class="mt-2"
      />
      <template #body>
        <div class="space-y-4 p-4">
          <div v-if="item.image">
            <img
              :src="item.image"
              :alt="item.title"
              class="rounded-xl w-full object-cover max-h-64"
            >
          </div>
          <ul class="list-disc list-inside space-y-1">
            <li
              v-for="(detail, i) in item.details"
              :key="i"
              class="text-gray-700"
            >
              {{ detail }}
            </li>
          </ul>
        </div>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
interface WorkItem {
  title: string
  description: string
  image?: string
  details: string[]
}

defineProps<{ item: WorkItem }>();
</script>
