import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText';

export const isPreloaderComplete = ref(false)

export const useGSAP = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText)

  const createScrollTrigger = (callback: () => void) => {
    if (isPreloaderComplete.value) {
      nextTick(() => {
        callback()
        ScrollTrigger.refresh()
      })
    } else {
      const stopWatcher = watch(isPreloaderComplete, (completed) => {
        if (completed) {
          nextTick(() => {
            callback()
            ScrollTrigger.refresh()
          })
          stopWatcher()
        }
      })
    }
  }

  onMounted(() => {
    if (process.client) {
      nextTick(() => {
        ScrollTrigger.refresh()
      })
    }
  })

  onBeforeUnmount(() => {
    if (process.client) {
      ScrollTrigger.killAll()
    }
  })

  return {gsap, ScrollTrigger, SplitText, createScrollTrigger}
}