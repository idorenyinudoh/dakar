<script setup lang="ts">
const { gsap } = useGSAP()

const videoEl = useTemplateRef('video')

onMounted(() => {
  if (videoEl.value) {
    videoEl.value.play()
  }

  gsap.to('.parallax-vid video', {
    yPercent: '-=10',
    ease: 'none',
    scrollTrigger: {
      trigger: 'header',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  })
})
</script>

<template>
  <header class="relative h-[150vh]">
    <h1 class="sticky top-3/4 md:top-5/6 z-20 py-[18px] px-4 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-center -tracking-[3px] lg:-tracking-[7px] xl:-tracking-[8px] text-white opacity-0">The Dakar Renaissance</h1>
    <div class="parallax-vid absolute inset-0 overflow-hidden">
      <video ref="video" src="https://res.cloudinary.com/idorenyinudoh/video/upload/v1755562025/dakar/dakar_crjvjy.mp4" class="object-cover w-full h-[110%]" autoplay muted loop playsinline preload="auto" poster="/dakar-poster.png" />
    </div>
  </header>
</template>