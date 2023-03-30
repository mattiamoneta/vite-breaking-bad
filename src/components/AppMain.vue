<template>
    <div class="container-fluid bg-brown p-4">
        <div class="container bg-white">
            <AppCounter :counter="store.cards.length" :archetype="store.currentArchetype" />
            <div class="row">
                <AppCard v-for="(card, index) in store.cards" :image="card.card_images[0].image_url" :name="card.name"
                    :type="card.archetype" />
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

import { store } from '../store.js';
import AppCard from './AppCard.vue';
import AppCounter from './AppCounter.vue';


export default {
    name: 'AppMain',
    components: {
        AppCard,
        AppCounter
    },
    data() {
        return {
            store
        }
    }
}

</script>

<style></style>