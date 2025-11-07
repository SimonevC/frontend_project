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
      <h1>Recipes</h1>
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
  align-items: center;
  padding: 0 2rem;
  height: 5rem;
  background: linear-gradient(135deg, rgb(255, 139, 184), rgb(255, 175, 206), rgb(255, 196, 219));
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e0e0e0;
  border-radius: 0 0 12px 12px; /* ronde onderkant */
  position: sticky;
  top: 0;
  z-index: 100;
}

.header h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  margin: 0;
}

nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.tab {
  text-transform: capitalize;
  font-weight: 500;
  color: #fff;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.tab:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.active {
  background-color: rgba(255, 255, 255, 0.35);
  text-decoration: none;
  font-weight: 700;
}

header .icons {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  color: black;
}

header .icons > * {
  padding: 0.4rem;
  transition: all 0.2s ease;
}

header .icons > *:hover {
  transform: scale(1.1);
  color: #fff;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
  nav {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0.5rem;
  }
  header .icons {
    margin-top: 0.5rem;
  }
}
</style>
