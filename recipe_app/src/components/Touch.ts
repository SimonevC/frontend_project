import type { Action } from '@/views/DiscoverTab.vue'
import { onMounted, onUnmounted, ref } from 'vue'

export function usePointer(callback: (action: Action) => void) {
  const xStart = ref(0)
  const yStart = ref(0)

  function update(event: PointerEvent) {
    xStart.value = event.pageX
    yStart.value = event.pageY
    console.log({ xStart, yStart })
  }

  function updatePointer(event: PointerEvent) {
    const xEnd = event.pageX - xStart.value
    const yEnd = event.pageY - yStart.value

    if (Math.abs(xEnd) > Math.abs(yEnd)) {
      if (xEnd > 30) {
        callback('right')
      } else if (xEnd < -30) {
        callback('left')
      }
    }
  }

  onMounted(() => {
    window.addEventListener('pointerdown', update)
    window.addEventListener('pointerup', updatePointer)
  })

  onUnmounted(() => {
    window.removeEventListener('pointerdown', update)
    window.removeEventListener('pointerup', updatePointer)
  })
}
