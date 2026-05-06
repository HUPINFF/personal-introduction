<template>
  <div class="max-w-2xl mx-auto">
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">姓名</label>
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all duration-200 bg-white text-slate-900 hover:-translate-y-0.5"
            placeholder="你的名字"
          >
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">邮箱</label>
          <input
            v-model="form.email"
            type="email"
            required
            class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all duration-200 bg-white text-slate-900 hover:-translate-y-0.5"
            placeholder="your@email.com"
          >
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">主题</label>
        <input
          v-model="form.subject"
          type="text"
          required
          class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all duration-200 bg-white text-slate-900 hover:-translate-y-0.5"
          placeholder="想聊点什么？"
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">消息</label>
        <textarea
          v-model="form.message"
          rows="5"
          required
          class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-white text-slate-900 resize-none"
          placeholder="写下你想说的..."
        />
      </div>

      <button
        type="submit"
        :disabled="submitting"
        class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-primary-500 to-accent-500 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 disabled:opacity-60"
      >
        <Icon v-if="submitting" name="uil:spinner" size="18" class="animate-spin" />
        <Icon v-else name="uil:telegram-alt" size="18" />
        {{ submitting ? '发送中...' : '发送消息' }}
      </button>

      <!-- Success message -->
      <Transition name="fade">
        <div v-if="submitted" class="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm flex items-center gap-2">
          <Icon name="uil:check-circle" size="18" />
          消息发送成功！我会尽快回复你。
        </div>
      </Transition>
    </form>
  </div>
</template>

<script setup lang="ts">
const form = reactive({ name: '', email: '', subject: '', message: '' })
const submitting = ref(false)
const submitted = ref(false)

async function handleSubmit() {
  submitting.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  submitting.value = false
  submitted.value = true
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
