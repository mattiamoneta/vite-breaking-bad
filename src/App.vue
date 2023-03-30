<template>
  <!-- Splash Screen -->
  <Loader />

  <!-- Header + Dropdown Menu Archetypes -->
  <AppHeader title="Yu-Gi-Oh API" />
  <AppDropdown @currentSel="handleApi" @updateRange="handleApi" />

  <main>
    <!-- Cards Stack -->
    <AppMain />
  </main>
</template>

<script>
// Dipendenze
import 'bootstrap';
import axios from 'axios';
import { store } from './store.js';

// Components
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Loader from './components/Loader.vue';
import AppDropdown from './components/AppDropdown.vue'

export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppMain,
    Loader,
    AppDropdown

  },
  methods: {
    //Ottiene le carte tramite API
    handleApi(arch) {
      const maxCards = this.store.range;
      this.store.currentArchetype = arch;
      let url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=${maxCards}&offset=0`;

      if (arch != undefined) {
        url += `&archetype=${arch}`;
      }

      axios.get(url).then(e => {
        this.store.cards = e.data.data;
        this.store.pending = false;
      });
    },

    //Ottiene tutti gli archetypes esistenti, tramite API
    handleArchetypes() {
      axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php").then(e => {
        e.data.data.forEach(item => {
          if (!this.store.archetypes.includes(item.archetype) && item.archetype != undefined) {
            this.store.archetypes.push(item.archetype);
          }
        });

      });
    }
  },
  created() {
    this.handleArchetypes();
    this.handleApi();
  }
}

</script>

<style lang="scss">
@use './styles/global.scss';
</style>