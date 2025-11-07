import type { Action } from '@/views/DiscoverTab.vue'
import { onMounted, onUnmounted } from 'vue'

export function useKeyboard(callback: (action: Action) => void) {
  onMounted(() => window.addEventListener('keydown', pressKey))
  onUnmounted(() => window.removeEventListener('keydown', pressKey))

  function pressKey(evt: KeyboardEvent) {
    switch (evt.key) {
      case 'ArrowRight':
        callback('right')
        break
      case 'ArrowLeft':
        callback('left')
        break
    }
  }
}
