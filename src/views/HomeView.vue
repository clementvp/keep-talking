<template>
  <div>
    Compte a rebours: {{ game.count  }}
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
</script>
