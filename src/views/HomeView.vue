<template>
  <div>
    Count: {{ game.count  }}
    Islost: {{ lost }}
  </div>
  <h1 v-if="lost">Perdu</h1>
 
</template>
<script setup lang="ts">

import Game from '@/store/GameManager';
import {inject} from 'vue'
const game: Game = inject<Game>('Game')!

const lost = game.isLost
console.log(lost);









</script>
