<template>
  <v-container>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="3"
      >
      <v-card v-if="!game.isLost.value">
          <v-card-title>Countdown: {{ game.count }} s</v-card-title>
          <v-card-text>
            Faults: {{ game.penaltyCount }} / {{ game.penaltyThreeshold }}
          </v-card-text>
        </v-card>
        <v-card v-else>
          <v-card-title>GAME OVER</v-card-title>
          <v-card-text>
           <v-btn>Restart</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import Game from '@/store/GameManager';
import {inject} from 'vue'
const game: Game = inject<Game>('Game')!
</script>