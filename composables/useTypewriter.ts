export function useTypewriter(words: string[], speed = 100, deleteSpeed = 60, pauseTime = 2000) {
  const displayText = ref('')
  const wordIndex = ref(0)
  const charIndex = ref(0)
  const isDeleting = ref(false)

  let timeoutId: ReturnType<typeof setTimeout> | null = null

  function type() {
    const currentWord = words[wordIndex.value]

    if (isDeleting.value) {
      charIndex.value--
    } else {
      charIndex.value++
    }

    displayText.value = currentWord.substring(0, charIndex.value)

    let delay = isDeleting.value ? deleteSpeed : speed

    if (!isDeleting.value && charIndex.value === currentWord.length) {
      delay = pauseTime
      isDeleting.value = true
    } else if (isDeleting.value && charIndex.value === 0) {
      isDeleting.value = false
      wordIndex.value = (wordIndex.value + 1) % words.length
    }

    timeoutId = setTimeout(type, delay)
  }

  onMounted(() => type())
  onUnmounted(() => {
    if (timeoutId) clearTimeout(timeoutId)
  })

  return { displayText }
}
