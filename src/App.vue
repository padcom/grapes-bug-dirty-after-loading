<!-- eslint-disable max-len -->
<template>
  <div ref="gjs" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import grapesjs, { Editor } from 'grapesjs'
import { ExampleStorage } from './example-storage'
import { sleep } from './sleep';

const gjs = ref<HTMLElement>()
const dirtyCount = ref(0)

onMounted(async () => {
  const editor = grapesjs.init({
    container: gjs.value,
    plugins: [
      ed => ed.Storage.add('example', new ExampleStorage())
    ],
    storageManager: {
      type: 'example',
      autoload: false,
      autosave: false,
    },
  })

  await sleep(1000)

  editor.on('all', (eventName, ...args) => {
    console.log('onMounted', eventName, editor.getDirtyCount(), ...args)
    dirtyCount.value = editor.getDirtyCount() || 0
  })

  console.log('onMounted - before load', editor.getDirtyCount())
  const result = await editor.load({})
  console.log('onMounted - after load', editor.getDirtyCount(), result)
})
</script>

<style lang="postcss">
@import "grapesjs/dist/css/grapes.min.css";
</style>
