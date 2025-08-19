<script setup lang="ts">
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText)

const preloaderAnimation = () => {
  window.scrollTo(0, 0)
  document.body.style.position = 'fixed'
  document.body.style.top = '0'
  document.body.style.left = '0'
  document.body.style.width = '100%'

  SplitText.create('.preloader-text', {
    type: 'words',
    mask: 'words',
    wordsClass: 'word++',
    onSplit: (self) => {
      gsap.set('.preloader-text', { opacity: 1 })
      gsap.from(self.words, {
        y: 100,
        autoAlpha: 0,
        duration: 3,
        ease: 'expo.inOut',
        stagger: 0.1,
        onComplete: () => {
          gsap.to(self.masks[5], {
            opacity: 0,
            duration: 1,
            width: '+=10px',
            ease: 'power4.out',
            onComplete: () => {
              self.masks[5].textContent = '2025'
              gsap.to(self.masks[5], {
                opacity: 1,
                duration: 1.5,
                ease: 'power4.out',
                delay: 0.2,
                onComplete: () => {
                  const tl = gsap.timeline({
                    onComplete: () => {
                      document.body.style.position = 'static'
                      document.body.style.top = ''
                      document.body.style.left = ''
                      document.body.style.width = ''
                      gsap.set('.preloader', { display: 'none' })
                    }
                  })

                  tl.to(self.masks, {
                    opacity: 0,
                    duration: 2,
                    stagger: 0.1,
                    ease: 'power4.out'
                  })
                  .to('.preloader', {
                    y: '-100%',
                    duration: 1.5,
                    ease: 'power3.inOut'
                  }, '-=1.5')
                  .to('.body', {
                    marginTop: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power3.inOut'
                  }, '-=1.5')
                  .to('h1', {
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power3.inOut'
                  })
                }
              })
            }
          })
        }
      })
    }
  })
}

onMounted(() => {
  preloaderAnimation()
})
</script>

<template>
  <div>
    <ThePreloader />
    <div class="body mt-[100vh] opacity-0">
      <TheHero />
      <div class="flex justify-center items-center h-[100svh]">dakar</div>
    </div>
  </div>
</template>
