<script setup lang="ts">
defineProps({
  fab: {
    required: false,
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['clicked'])

function buttonClick() {
  emit('clicked')
}
</script>

<template>
  <div
    :class="{
      fabClass: fab,
    }"
    class="button"
    @click="buttonClick"
  >
    <slot />
  </div>
</template>

<style scoped lang="css">
.button {
  border: none;
  background-color: #4caf50; /* fris groen */
  border-radius: 12px;
  color: white;
  cursor: pointer;
  padding: 0.8rem 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.fabClass {
  background-color: #ff3b30; /* fel rood */
}

.fabClass:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}
</style>
