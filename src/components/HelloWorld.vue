<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { testRepo } from '../repository/test'

defineProps<{ msg: string }>()

const count = ref(0)

const isLoading = ref(true)
const data = ref(null)

onMounted(async () => {
  const repo = testRepo()
  const responseData = await repo.postTest('1')

  data.value = responseData.id
  isLoading.value = false
})
</script>

<template>
  <div v-if="isLoading">
    <p>loading...</p>
  </div>

  <div v-else>
    <p>data:{{ data }}</p>
  </div>

  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
