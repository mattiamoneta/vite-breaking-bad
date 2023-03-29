<template>
    <div class="container-fluid bg-brown p-4">
        <div class="container bg-white">
            <div class="row">
                <h5 class="bg-dark text-white p-3">Found {{ store.cards.length }} Elements</h5>
            </div>
            <div class="row">
                <AppCard v-for="(card, index) in store.cards" :image="card.card_images[0].image_url" :name="card.name"
                    :type="card.type" />
            </div>
        </div>
    </div>
</template>

<script>

import { store } from '../store.js';
import AppCard from './AppCard.vue';

export default {
    name: 'AppMain',
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    }
}

</script>

<style></style>