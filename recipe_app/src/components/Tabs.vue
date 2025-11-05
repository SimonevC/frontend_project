<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const slots = defineSlots()
const tabNames = Object.keys(slots)

const router = useRouter()
const route = useRoute()

function setCurrentTab(newTabName: string) {
  router.push({ path: '/' + newTabName })
}
</script>

<template>
  <div>
    <header class="header">
      <h1>Flightly</h1>
      <nav>
        <div class="icons">
          <div
            :class="{ active: tabName == route.name }"
            v-for="tabName in tabNames"
            :key="tabName"
            @click="() => setCurrentTab(tabName)"
          >
            {{ tabName }}
          </div>
        </div>
      </nav>
    </header>
    <div class="padding">
      <RouterView />
    </div>
  </div>
</template>

<style lang="css" scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    to bottom,
    rgb(255, 139, 184),
    rgb(255, 175, 206),
    rgb(255, 196, 219)
  );
  height: 5em;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 1px 6px #ddd;
  margin-bottom: 1rem;
  align-items: center;
  padding-inline: 2rem;
}

.padding {
  padding: 2rem;
}

nav {
  display: flex;
  flex-direction: row;
  max-width: 1200px;
}

header .icons {
  display: flex;
  margin: 1rem;
  cursor: pointer;
}
header .icons > * {
  padding: 0 6px;
}

.tab {
  text-transform: capitalize;
}

.active {
  text-decoration: underline;
  font-weight: bold;
}

h1 {
  display: flex;
}
</style>
