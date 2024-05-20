<script setup lang="ts">
import {provide} from "vue"
import Game from "./store/GameManager";

const game = new Game()
provide('Game', game)
</script>

<template>
  <v-layout>
    <v-main>
      <router-view/>
    </v-main>
  </v-layout>
</template>


