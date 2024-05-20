<script setup lang="ts">
import {provide} from "vue"
import Game from "./store/GameManager";

const game = new Game()
provide('Game', game)
</script>

<template>
  <v-container class="fill-height">
    <v-layout class="fill-height">
      <v-main class="fill-height">
        <router-view/>
      </v-main>
    </v-layout>
  </v-container>
</template>
<style>
html, body {
  height:100%;
}
#app {
  height: inherit;
  width: inherit;
}
</style>

