<template>
  <div>
    <h1>Module des Fils</h1>
    <div id="wires-container">
      <div v-for="(color, index) in wires" :key="index" class="wire" :style="{ backgroundColor: color }" @click="cut(index)">
      </div>
    </div>
    <p id="result">{{ result }}</p>
  </div>
</template>

<script setup lang="ts">
import {useWires} from './useWires'
const { wires, result, cut } = useWires()

</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}
.wire {
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #000;
  cursor: pointer; /* Ajout d'un curseur de type pointer pour indiquer que les fils sont cliquables */
}
</style>
