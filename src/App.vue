<template>
  <AppHeader title="Yu-Gi-Oh API" />
</template>

<script>
import 'bootstrap';
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader
  }
}

</script>

<style lang="scss">
@use './styles/global.scss';
</style>