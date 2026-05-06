<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <!-- Floating shapes -->
    <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float" />
    <div class="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl animate-float-slow" />
    <div class="absolute top-1/3 right-1/3 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 2s" />

    <!-- Geometric shapes -->
    <div class="absolute top-20 left-10 w-8 h-8 border-2 border-primary-300/30 rounded-lg rotate-45 animate-float" style="animation-delay: 1s" />
    <div class="absolute bottom-40 right-20 w-6 h-6 border-2 border-accent-300/30 rounded-full animate-float-slow" />
    <div class="absolute top-1/2 right-1/4 w-4 h-4 bg-primary-400/20 rounded animate-float" style="animation-delay: 3s" />
    <div class="absolute bottom-1/3 left-1/5 w-5 h-5 bg-accent-400/20 rounded-full animate-float-slow" style="animation-delay: 2s" />
  </div>
</template>
