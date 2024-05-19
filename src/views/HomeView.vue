<template>
  <div>
    Count: {{ game.count  }}
    Islost: {{ lost }}
  </div>
  
  <div>
    <Wires></Wires>
  </div>
 
</template>
<script setup lang="ts">

import Wires from '@/components/modules/wires/Wires.vue';
import Game from '@/store/GameManager';
import {inject} from 'vue'
const game: Game = inject<Game>('Game')!

const lost = game.isLost
console.log(lost);









</script>
