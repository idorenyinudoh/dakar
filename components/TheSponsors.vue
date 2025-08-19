<script setup lang="ts">
const { gsap, createScrollTrigger, SplitText } = useGSAP()

onMounted(() => {
  const paystackText = SplitText.create('.paystack', { type: 'lines' })
  gsap.set(paystackText.lines, { borderRadius: '8px' })
  gsap.set('.sponsors h2', { opacity: 0 })
  gsap.set(paystackText.lines[0], { width: '98%' })
  gsap.set(paystackText.lines[2], { width: '95%' })
  gsap.set(paystackText.lines[3], { width: '70%' })
  gsap.set('.paystack-container', { y: '-120px' })

  createScrollTrigger(() => {
    gsap.to('.sponsors h2', {
      opacity: 1,
      ease: 'power3.out',
      duration: 7,
      scrollTrigger: {
        trigger: '.sponsors',
        start: 'top 45%',
        end: '+=100px',
        scrub: true,
        onUpdate: (self) => {
          gsap.to('.paystack', {
            y: `${80 * self.progress}px`,
          })

          gsap.set(paystackText.lines, {
            backgroundColor: gsap.utils.interpolate(['#FFF', '#000'])(self.progress)
          })

          paystackText.lines.forEach((line, index) => {
            gsap.to(line, {
              marginBottom: index !== 3 ? `${4 * self.progress}px` : 0,
              ease: 'power3.out'
            })
          })
        }
      }
    })
  })
})

</script>

<template>
  <section class="sponsors py-20 flex flex-col justify-center">
    <div class="brand-grid">
      <div class="col-span-6 md:col-span-3 lg:col-span-2 md:p-10 flex justify-center items-center">
        <div class="paystack-container relative">
          <h2 class="text-lg md:text-xl">Sponsors</h2>
          <p class="paystack absolute top-0 left-0 text-lg md:text-xl -z-[1] w-max">
            Sponsors
            <br>
            that you can
            <br>
            be a part
            <br>
            of
          </p>
        </div>
      </div>
      <div class="col-span-6 md:col-span-3 lg:col-span-2 p-12 sm:p-22 md:p-12 lg:p-14 flex justify-center items-center">
        <img class="object-cover invert" src="/assets/images/company-logos/airbnb.svg" alt="Airbnb">
      </div>
      <div class="col-span-6 md:col-span-3 lg:col-span-2 p-12 sm:p-22 md:p-12 lg:p-14 flex justify-center items-center">
        <img class="object-cover grayscale" src="/assets/images/company-logos/google.svg" alt="Google">
      </div>
      <div class="col-span-6 md:col-span-3 lg:col-span-2 p-12 sm:p-22 md:p-12 lg:p-14 flex justify-center items-center">
        <img class="object-cover grayscale" src="/assets/images/company-logos/meta.png" alt="Company Logo 1">
      </div>
      <div class="col-span-6 md:col-span-3 lg:col-span-2 p-12 sm:p-22 md:p-12 lg:p-14 flex justify-center items-center">
        <img class="object-cover grayscale" src="/assets/images/company-logos/au.jpeg" alt="Company Logo 2">
      </div>
      <div class="col-span-6 md:col-span-3 lg:col-span-2 p-12 sm:p-22 md:p-12 lg:p-14 flex justify-center items-center">
        <img class="object-cover grayscale" src="/assets/images/company-logos/ecowas.png" alt="Company Logo 3">
      </div>
      <div class="col-span-6 md:col-span-3 lg:col-span-2 p-12 sm:p-22 md:p-12 lg:p-14 flex justify-center items-center">
        <img class="object-cover grayscale" src="/assets/images/company-logos/unesco.jpeg" alt="Company Logo 4">
      </div>
      <div class="col-span-6 md:col-span-3 lg:col-span-2 p-12 sm:p-22 md:p-12 lg:p-14 flex justify-center items-center">
        <img class="object-cover grayscale" src="/assets/images/company-logos/mastercard.svg" alt="Mastercard">
      </div>
      <div class="col-span-6 md:col-span-3 lg:col-span-2 p-12 sm:p-22 md:p-12 lg:p-14 flex justify-center items-center">
        <img class="object-cover grayscale" src="/assets/images/company-logos/spotify.svg" alt="Spotify">
      </div>
      <div class="col-span-6 md:col-span-3 lg:col-span-2 p-12 sm:p-22 md:p-12 lg:p-14 flex justify-center items-center">
        <img class="object-cover grayscale" src="/assets/images/company-logos/netflix.jpeg" alt="Symbol">
      </div>
      <div class="col-span-6 md:col-span-3 lg:col-span-2 p-12 sm:p-22 md:p-12 lg:p-14 flex justify-center items-center">
        <img class="object-cover grayscale" src="/assets/images/company-logos/world-bank.svg" alt="The World Bank">
      </div>
      <div class="col-span-6 md:col-span-3 lg:col-span-2 p-12 sm:p-22 md:p-12 lg:p-14 flex justify-center items-center">
        <img class="object-cover grayscale" src="/assets/images/company-logos/wwf.svg" alt="WWF UK">
      </div>
    </div>
  </section>
</template>