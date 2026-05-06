<template>
  <div class="space-y-6">
    <Card v-for="item in contactItems" :key="item.label">
      <div class="flex items-start gap-4">
        <div class="p-3 rounded-xl bg-primary-50 text-primary-600">
          <Icon :name="item.icon" size="22" />
        </div>
        <div>
          <h4 class="text-sm font-medium text-slate-400 mb-0.5">{{ item.label }}</h4>
          <p class="text-slate-900 font-medium">{{ item.value }}</p>
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
const contactItems = [
  { icon: 'uil:envelope', label: '邮箱', value: 'hello@hupin.dev' },
  { icon: 'uil:map-marker', label: '位置', value: '北京, 中国' },
  { icon: 'uil:clock', label: '可用性', value: '随时联系' },
]
</script>
