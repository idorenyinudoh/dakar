<script setup lang="ts">
const { gsap, createScrollTrigger, SplitText } = useGSAP()

onMounted(() => {
  const descText = SplitText.create('.description p', { type: 'words', tag: 'span' })
  gsap.set(descText.words, { opacity: 0.1 })

  createScrollTrigger(() => {
    gsap.to(gsap.utils.toArray(descText.words), {
      opacity: 1,
      ease: 'power3.out',
      stagger: 0.7,
      duration: 7,
      scrollTrigger: {
        trigger: '.description',
        start: 'top 80%',
        end: '+=100%',
        scrub: true
      }
    })
  })
})
</script>

<template>
  <div class="description h-[100svh] flex flex-col gap-y-6 lg:gap-y-8 justify-center items-center px-4 max-sm:*:w-[80%] *:text-xl sm:*:text-2xl md:*:text-3xl lg:*:text-4xl *:leading-7 sm:*:leading-8 md:*:leading-10 lg:*:leading-12 *:font-medium *:tracking-tighter *:text-center" id="manifesto">
    <p>
      Dakar Renaissance 2025 is more than a fair.
    </p>
    <p>
      It is a celebration of culture, faith, and innovation.
    </p>
    <p>
      A gathering of nations to experience Senegal's heritage,
      <br>
      from music, film, and fashion
      <br>
      to sustainable tourism and technology.
    </p>
    <p>
      Here, tradition meets ambition.
    </p>
    <p>
      Here, Africa's future is written in Dakar.
    </p>
  </div>
</template>