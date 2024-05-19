<template>
  <div>
    <h1>Module des Fils</h1>
    <div id="wires-container">
      <div v-for="(color, index) in wires" :key="index" class="wire" :style="{ backgroundColor: color }" @click="cut(index)">
      </div>
    </div>
    <p>{{ moduleIsComplete }}</p>
  </div>
</template>

<script setup lang="ts">
import Game from '@/store/GameManager';
import {useWires} from './useWires'
const { wires, moduleIsComplete, cut, penalty } = useWires()
import {inject, watch} from 'vue'
const game: Game = inject<Game>('Game')!

watch(penalty, (newValue, _oldValue) => {
  if (newValue) {
    game.addPenalty();
  }
});

watch(moduleIsComplete, (newValue, _oldValue) => {
  if (newValue) {
    game.validateModule();
  }
});

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
