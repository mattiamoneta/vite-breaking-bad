<template>
    <div class="container-fluid bg-light">
        <div class="container py-4 ">
            <div class="row">
                <div class="col-3">
                    <label for="drop" class="d-block mb-3">Archetype</label>
                    <select name="drop" v-model="currentVal" @change="$emit('currentSel', currentVal)" class="ms-auto">
                        <option v-for="(item) in store.archetypes" :value="item">{{ item }}</option>
                    </select>
                </div>
                <div class="col">
                    <label for="bar" class="d-block mb-3">Max Cards: {{ store.range }}</label>
                    <input name="bar" type="range" v-model="store.range" @change="$emit('updateRange')" min="1" max="100"
                        step="5">
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import { store } from '../store.js';

export default {
    name: 'AppDropdown',
    data() {
        return {
            store,
            currentVal: ''
        }
    }
}
</script>