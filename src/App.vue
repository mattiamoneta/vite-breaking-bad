<template>
  <Loader />

  <AppHeader title="Yu-Gi-Oh API" />

  <main>
    <AppMain />
  </main>
</template>

<script>
import 'bootstrap';
import axios from 'axios';
import { store } from './store.js';

// Components
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Loader from './components/Loader.vue';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppMain,
    Loader

  },
  methods: {
    handleApi() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien')
        .then(e => {
          this.store.cards = e.data.data;
          this.store.pending = false;
        });
    }
  },
  created() {
    this.handleApi();
  }
}

</script>

<style lang="scss">
@use './styles/global.scss';
</style>