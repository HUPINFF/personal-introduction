<template>
  <span class="inline-block">
    <span v-for="(char, i) in displayText" :key="i">{{ char }}</span>
    <span
      class="inline-block w-0.5 h-[1em] bg-primary-500 ml-0.5 -mb-0.5 animate-pulse"
      :class="{ 'opacity-0': !showCursor }"
    />
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  words?: string[]
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
}>(), {
  words: () => ['Web Developer', 'UI Designer', 'Problem Solver'],
  speed: 100,
  deleteSpeed: 60,
  pauseTime: 2000,
})

const displayText = ref('')
const showCursor = ref(true)
const wordIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)

let timeoutId: ReturnType<typeof setTimeout> | null = null

function typeEffect() {
  const currentWord = props.words[wordIndex.value]

  if (isDeleting.value) {
    charIndex.value--
    displayText.value = currentWord.substring(0, charIndex.value)
  } else {
    charIndex.value++
    displayText.value = currentWord.substring(0, charIndex.value)
  }

  let delay = isDeleting.value ? props.deleteSpeed : props.speed

  if (!isDeleting.value && charIndex.value === currentWord.length) {
    delay = props.pauseTime
    isDeleting.value = true
  } else if (isDeleting.value && charIndex.value === 0) {
    isDeleting.value = false
    wordIndex.value = (wordIndex.value + 1) % props.words.length
  }

  timeoutId = setTimeout(typeEffect, delay)
}

onMounted(() => {
  typeEffect()
})

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
})
</script>
