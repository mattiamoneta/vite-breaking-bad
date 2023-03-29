<template>
    <div class="wrapper" v-if="store.pending">
        <img src="https://ygoprodeck.com/cdn-cgi/image/width=140/https://images.ygoprodeck.com/images/assets/ygoprodeck_header_logo.png?v=1.13"
            alt="Logo" class="d-inline-block mb-5">
        <h3>Attendi...</h3>
    </div>
</template>

<script>

import { store } from '../store.js'

export default {
    name: 'Loader',
    data() {
        return {
            store
        }
    }
}
</script>

<style></style>