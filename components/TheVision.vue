<script setup lang="ts">
const { gsap, createScrollTrigger } = useGSAP()

onMounted(() => {
  createScrollTrigger(() => {
    gsap.utils.toArray<HTMLElement>('article.relative img').forEach((image) => {
      gsap.to(image, {
        yPercent: '-=10',
        ease: 'none',
        scrollTrigger: {
          trigger: image,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    })
  })
})
</script>

<template>
  <div>
    <h2 class="pl-4 pb-4">Our Vision in Five Acts</h2>
    <article class="relative h-[130vh] pt-10 pb-20">
      <div class="sticky top-20 brand-grid items-center text-white">
        <h3 class="row-start-1 col-start-1 col-span-11 md:col-span-6 lg:col-span-7 text-4xl md:text-5xl lg:text-6xl">Act I <br> Celebrate Diversity</h3>
        <p class="row-start-2 md:row-start-1 col-span-9 md:col-span-4 lg:col-span-2 col-start-1 md:col-start-9 lg:col-start-10">An ode to Senegal's cultural and religious heritage, opening the stage for a global audience.</p>
      </div>
      <div class="absolute inset-0 w-full h-full overflow-hidden -z-[1]">
        <img src="~/assets/images/senegal-textile.jpg" alt="mosaic covered column showcase with floral designs" class="absolute inset-0 w-full h-[112%] object-cover brightness-90">
      </div>
    </article>
    <article class="relative h-[130vh] pt-10 pb-20">
      <div class="sticky top-20 brand-grid items-center text-white">
        <h3 class="row-start-1 col-start-1 col-span-11 md:col-span-6 lg:col-span-7 text-4xl md:text-5xl lg:text-6xl">Act II <br> Promote Sustainability</h3>
        <p class="row-start-2 md:row-start-1 col-span-9 md:col-span-3 lg:col-span-2 col-start-1 md:col-start-8 lg:col-start-9">A performance of responsibility, where eco-tourism and environmental care take the spotlight.</p>
      </div>
      <div class="absolute inset-0 w-full h-full overflow-hidden -z-[1]">
        <img src="~/assets/images/kebemer-sand.jpg" alt="green tree on sand in kébémer, senegal" class="absolute inset-0 w-full h-[112%] object-cover brightness-90">
      </div>
    </article>
    <article class="relative h-[130vh] pt-10 pb-20">
      <div class="sticky top-20 brand-grid items-center text-white">
        <h3 class="row-start-1 col-start-1 col-span-11 md:col-span-6 lg:col-span-7 text-4xl md:text-5xl lg:text-6xl">Act III <br> Strengthen Experience</h3>
        <p class="row-start-2 md:row-start-1 col-span-9 md:col-span-3 lg:col-span-2 col-start-1 md:col-start-9 lg:col-start-10">The rhythm of hospitality, supported by world-class infrastructure and authentic warmth.</p>
      </div>
      <div class="absolute inset-0 w-full h-full overflow-hidden -z-[1]">
        <img src="~/assets/images/tall-building.jpg" alt="a tall building with a sky in the background" class="absolute inset-0 w-full h-[112%] object-cover brightness-90">
      </div>
    </article>
    <article class="relative h-[130vh] pt-10 pb-20">
      <div class="sticky top-20 brand-grid items-center text-white">
        <h3 class="row-start-1 col-start-1 col-span-11 md:col-span-6 lg:col-span-7 text-4xl md:text-5xl lg:text-6xl">Act IV <br> Global Collaboration</h3>
        <p class="row-start-2 md:row-start-1 col-span-9 md:col-span-3 lg:col-span-2 col-start-1 md:col-start-10 lg:col-start-9">A chorus of voices from around the world, building Dakar’s place as Africa’s cultural capital.</p>
      </div>
      <div class="absolute inset-0 w-full h-full overflow-hidden -z-[1]">
        <img src="~/assets/images/people-holding-stem.jpg" alt="a group of people holding hands on top of a tree" class="absolute inset-0 w-full h-[112%] object-cover brightness-90">
      </div>
    </article>
    <article class="relative h-[130vh] pt-10 pb-20">
      <div class="sticky top-20 brand-grid items-center text-white">
        <h3 class="row-start-1 col-start-1 col-span-11 md:col-span-6 lg:col-span-7 text-4xl md:text-5xl lg:text-6xl">Act V <br> Beyond Beaches</h3>
        <p class="row-start-2 md:row-start-1 col-span-9 md:col-span-3 lg:col-span-2 col-start-1 md:col-start-8 lg:col-start-10">A finale that expands the story of Senegal — from fashion to film, music to heritage.</p>
      </div>
      <div class="absolute inset-0 w-full h-full overflow-hidden -z-[1]">
        <img src="~/assets/images/goree-architecture.jpg" alt="Gorée-Almadies perforated obelisk, Island of Gorée, Dakar, Senegal" class="absolute inset-0 w-full h-[112%] object-cover object-top brightness-90">
      </div>
    </article>
  </div>
</template>