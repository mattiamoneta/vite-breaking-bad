<template>
    <div class="row">
        <h5 class="bg-dark text-white p-3">Found {{ counter }} cards marked as {{ archetype }}</h5>
    </div>
</template>

<script>
export default {
    name: 'AppCounter',
    props: {
        counter: Number,
        archetype: String
    }
}
</script>