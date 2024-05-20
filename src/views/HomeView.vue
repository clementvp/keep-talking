<template>
  <div>
    Compte a rebours: {{ game.count  }}
  </div>
  
  <div v-for="(component, index) in game.modules " :key="index">
    <component :is="component" />
  </div>
 
</template>
<script setup lang="ts">
import Game from '@/store/GameManager';
import {inject} from 'vue'
const game: Game = inject<Game>('Game')!
</script>
