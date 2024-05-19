<script setup lang="ts">
import {provide} from "vue"
import Game from "./store/GameManager";

const game = new Game()
provide('Game', game)
</script>

<template>
  <RouterView />
</template>


