<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 40 }"
    :visible="{ opacity: 1, y: 0 }"
    :hover="{ y: -4, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.15)' }"
    class="relative bg-white rounded-2xl shadow-sm shadow-slate-200/50 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-primary-200/40 card-left-bar bg-noise overflow-hidden"
  >
    <slot />
  </div>
</template>
