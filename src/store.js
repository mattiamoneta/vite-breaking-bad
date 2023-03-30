import { reactive } from 'vue';

export const store = reactive({
    cards: [],
    archetypes: [],
    currentArchetype: "",
    pending: true,
    range: 15
});